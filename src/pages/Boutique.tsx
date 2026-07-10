import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, X, Plus, Minus, Trash2, CheckCircle2, Loader2 } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';

interface CartItem {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  size?: string;
  quantity: number;
}

const FORMSPREE_SHOP_ID = import.meta.env.VITE_FORMSPREE_SHOP_ID || "xzbgrrpl";

export default function Boutique() {
  const products = CLUB_DATA.products;
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [sizeErrors, setSizeErrors] = useState<Record<number, boolean>>({});
  const [showCheckout, setShowCheckout] = useState(false);
  
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const savedCart = localStorage.getItem('futsal_drancy_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('futsal_drancy_cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
    setSizeErrors(prev => ({ ...prev, [productId]: false }));
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const requiresSize = product.category === 'Tenues' || product.category === 'Lifestyle';
    const selectedSize = selectedSizes[product.id];

    if (requiresSize && !selectedSize) {
      setSizeErrors(prev => ({ ...prev, [product.id]: true }));
      return;
    }

    const existingItemIdx = cart.findIndex(item => 
      item.id === product.id && (!requiresSize || item.size === selectedSize)
    );

    let updatedCart = [...cart];
    if (existingItemIdx > -1) {
      updatedCart[existingItemIdx].quantity += 1;
    } else {
      updatedCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
        size: requiresSize ? selectedSize : undefined,
        quantity: 1
      });
    }

    saveCart(updatedCart);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, size: string | undefined, delta: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.size === size) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[];

    saveCart(updatedCart);
  };

  const removeItem = (id: number, size: string | undefined) => {
    const updatedCart = cart.filter(item => !(item.id === id && item.size === size));
    saveCart(updatedCart);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const priceNum = parseInt(item.price.replace('€', ''), 10);
      return total + (priceNum * item.quantity);
    }, 0);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!checkoutForm.firstName.trim()) errors.firstName = 'Le prénom est requis';
    if (!checkoutForm.lastName.trim()) errors.lastName = 'Le nom est requis';
    if (!checkoutForm.email.trim()) {
      errors.email = "L'adresse e-mail est requise";
    } else if (!/\S+@\S+\.\S+/.test(checkoutForm.email)) {
      errors.email = "L'adresse e-mail n'est pas valide";
    }
    if (!checkoutForm.phone.trim()) {
      errors.phone = 'Le numéro de téléphone est requis';
    } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(checkoutForm.phone.trim())) {
      errors.phone = 'Numéro de téléphone invalide';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const orderItemsText = cart.map(item => 
      `- ${item.quantity}x ${item.name}${item.size ? ` (Taille: ${item.size})` : ''} - ${item.price}`
    ).join('\n');

    const emailBody = `Commande Futsal Drancy - Click & Collect\n\n` +
      `Client :\n` +
      `- Nom : ${checkoutForm.lastName} ${checkoutForm.firstName}\n` +
      `- E-mail : ${checkoutForm.email}\n` +
      `- Téléphone : ${checkoutForm.phone}\n\n` +
      `Articles réservés :\n${orderItemsText}\n\n` +
      `Prix total de la commande : ${getCartTotal()}€\n\n` +
      `Note : Cette commande sera récupérée et payée directement au gymnase.`;

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_SHOP_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${checkoutForm.firstName} ${checkoutForm.lastName}`,
          email: checkoutForm.email,
          phone: checkoutForm.phone,
          message: emailBody
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        saveCart([]);
        setCheckoutForm({ firstName: '', lastName: '', email: '', phone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16 mx-auto max-w-3xl"
        >
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px]">Official Store</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white leading-[0.9] font-display font-black uppercase tracking-tighter">
            PORTEZ NOS <br/> <span className="text-accent">COULEURS.</span>
          </h1>
        </motion.div>

        {cart.length > 0 && (
          <motion.button 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 bg-accent text-navy-dark p-5 rounded-full shadow-2xl z-40 flex items-center justify-center group"
          >
            <ShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-white text-navy-dark font-black text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg border border-accent">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </motion.button>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, idx) => {
            const requiresSize = product.category === 'Tenues' || product.category === 'Lifestyle';
            const selectedSize = selectedSizes[product.id];
            const hasSizeError = sizeErrors[product.id];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-white/5 border border-white/5">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    {product.badge && (
                      <div className="absolute top-2 left-2 bg-accent text-navy-dark px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-full">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 px-1">
                    <div className="flex justify-between items-start gap-1">
                      <span className="text-accent font-black text-[8px] uppercase tracking-widest">{product.category}</span>
                      <span className="text-white font-display font-black text-xs md:text-base">{product.price}</span>
                    </div>
                    <h3 className="text-xs md:text-lg text-white font-display font-black uppercase leading-tight truncate">{product.name}</h3>
                  </div>
                </div>

                <div className="mt-4 px-1 space-y-3">
                  {requiresSize && (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] uppercase font-black text-white/40 tracking-wider">Taille obligatoire</span>
                        {selectedSize && <span className="text-[10px] uppercase font-black text-accent">{selectedSize}</span>}
                      </div>
                      <div className="flex gap-1.5">
                        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(product.id, size)}
                            className={`flex-grow py-1 rounded text-[9px] font-black transition-all border ${
                              selectedSize === size 
                                ? 'bg-accent border-accent text-navy-dark' 
                                : 'bg-white/5 border-white/10 text-white hover:border-white/30'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      {hasSizeError && (
                        <p className="text-red-500 text-[8px] uppercase font-black tracking-wider">Veuillez sélectionner une taille</p>
                      )}
                    </div>
                  )}

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-white/5 border border-white/10 hover:bg-accent hover:text-navy-dark hover:border-accent text-white font-black py-3 rounded-xl uppercase text-[9px] tracking-widest transition-all"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[2rem] bg-accent/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <h2 className="text-3xl text-white font-display font-black uppercase tracking-tight">Click & Collect au club</h2>
            <p className="text-white/40 uppercase text-xs tracking-widest font-medium">Réservez vos articles ci-dessus et venez les récupérer au gymnase lors des entraînements.</p>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="btn-accent px-12 py-5 flex items-center space-x-3 group whitespace-nowrap"
          >
            <span>Voir mon panier</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!showCheckout) setIsCartOpen(false);
              }}
              className="fixed inset-0 bg-black/80 z-[99998] backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-navy-dark border-l border-white/10 z-[99999] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="text-accent" size={20} />
                  <h3 className="text-lg text-white font-display font-black uppercase tracking-wider">Mon Panier</h3>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    setShowCheckout(false);
                  }}
                  className="text-white/60 hover:text-white p-2"
                >
                  <X size={20} />
                </button>
              </div>

              {!showCheckout ? (
                <>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                          <ShoppingBag size={28} />
                        </div>
                        <div>
                          <p className="text-white font-black uppercase text-sm">Votre panier est vide</p>
                          <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Ajoutez des articles de la boutique</p>
                        </div>
                      </div>
                    ) : (
                      cart.map((item, idx) => (
                        <div key={`${item.id}-${item.size}`} className="flex space-x-4 border-b border-white/5 pb-4">
                          <div className="w-20 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/5 shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-white font-display font-black text-sm uppercase leading-tight">{item.name}</h4>
                                <span className="text-[10px] text-accent font-black uppercase tracking-wider">
                                  {item.category} {item.size && `| Taille : ${item.size}`}
                                </span>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id, item.size)}
                                className="text-white/30 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 rounded-lg px-2 py-1">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.size, -1)}
                                  className="text-white/60 hover:text-white"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="text-white font-black text-xs px-2">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.size, 1)}
                                  className="text-white/60 hover:text-white"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                              <span className="text-white font-display font-black text-sm">{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="p-6 border-t border-white/5 bg-white/[0.02] space-y-4">
                      <div className="flex justify-between items-center text-white">
                        <span className="text-xs uppercase font-black tracking-widest text-white/40">Total de la commande</span>
                        <span className="text-2xl font-display font-black text-accent">{getCartTotal()}€</span>
                      </div>
                      <button 
                        onClick={() => setShowCheckout(true)}
                        className="btn-accent w-full py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2"
                      >
                        <span>Passer à la réservation</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex-grow overflow-y-auto p-6 space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-white font-display font-black uppercase text-sm">Informations de réservation</h4>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Vos coordonnées pour préparer votre pack.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-wider text-white/40">Prénom</label>
                        <input 
                          type="text" 
                          value={checkoutForm.firstName}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, firstName: e.target.value })}
                          className={`w-full bg-white/5 border ${formErrors.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-white text-sm`}
                        />
                        {formErrors.firstName && <p className="text-red-500 text-[8px] uppercase font-black tracking-wider">{formErrors.firstName}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-wider text-white/40">Nom</label>
                        <input 
                          type="text" 
                          value={checkoutForm.lastName}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, lastName: e.target.value })}
                          className={`w-full bg-white/5 border ${formErrors.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-white text-sm`}
                        />
                        {formErrors.lastName && <p className="text-red-500 text-[8px] uppercase font-black tracking-wider">{formErrors.lastName}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-wider text-white/40">Téléphone</label>
                        <input 
                          type="text" 
                          placeholder="Ex: 0612345678"
                          value={checkoutForm.phone}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                          className={`w-full bg-white/5 border ${formErrors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-white text-sm`}
                        />
                        {formErrors.phone && <p className="text-red-500 text-[8px] uppercase font-black tracking-wider">{formErrors.phone}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-wider text-white/40">E-mail</label>
                        <input 
                          type="email" 
                          value={checkoutForm.email}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                          className={`w-full bg-white/5 border ${formErrors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-white text-sm`}
                        />
                        {formErrors.email && <p className="text-red-500 text-[8px] uppercase font-black tracking-wider">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                      <h5 className="text-[10px] text-accent uppercase font-black tracking-widest">Résumé de réservation</h5>
                      <div className="max-h-32 overflow-y-auto space-y-1 text-xs text-white/60">
                        {cart.map(item => (
                          <div key={`${item.id}-${item.size}`} className="flex justify-between">
                            <span>{item.quantity}x {item.name} {item.size && `(${item.size})`}</span>
                            <span className="font-black">{item.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-white/5 pt-2 flex justify-between text-white font-black text-sm">
                        <span>Total à régler</span>
                        <span className="text-accent">{getCartTotal()}€</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t border-white/5 bg-white/[0.02] space-y-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-accent w-full py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Validation...</span>
                        </>
                      ) : (
                        <>
                          <span>Valider la réservation</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="w-full text-white/40 hover:text-white uppercase font-black text-[9px] tracking-widest py-2"
                    >
                      Retour au panier
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-dark/95 backdrop-blur-md z-[999999] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-navy-dark border border-accent/20 p-10 md:p-12 rounded-[2.5rem] max-w-lg w-full text-center space-y-6 shadow-2xl relative"
            >
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl text-white font-display font-black uppercase tracking-tight">Réservation Enregistrée !</h3>
                
                <div className="bg-accent/5 border border-accent/10 p-6 rounded-2xl text-left space-y-3">
                  <h4 className="text-accent font-black uppercase text-xs tracking-wider">⚠️ CLICK & COLLECT IMPORTANT :</h4>
                  <p className="text-white text-xs md:text-sm font-bold leading-relaxed">
                    Aucune livraison n'est effectuée à domicile.
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                    Le paiement et le retrait de votre commande se feront directement au gymnase lors des créneaux d'entraînement du club.
                  </p>
                </div>
                
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed">
                  Un email récapitulatif a été envoyé au club. Nous préparerons votre pack sous peu.
                </p>
              </div>
              <button 
                onClick={() => {
                  setSubmitStatus('idle');
                  setIsCartOpen(false);
                  setShowCheckout(false);
                }}
                className="btn-accent w-full py-4 uppercase text-xs tracking-widest font-black"
              >
                Compris, Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
