import { motion } from 'motion/react';
import { ShoppingBag, Star, Tag } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

const PRODUCTS = [
  {
    id: 1,
    name: 'Maillot Officiel Domicile 25/26',
    price: '75€',
    category: 'Tenues',
    image: getAssetPath('images/9.png'),
    badge: 'Populaire'
  },
  {
    id: 2,
    name: 'Veste de Sortie Elite',
    price: '85€',
    category: 'Lifestyle',
    image: getAssetPath('images/10.png'),
    badge: 'Nouveau'
  },
  {
    id: 3,
    name: 'Écharpe Futsal Drancy',
    price: '15€',
    category: 'Accessoires',
    image: getAssetPath('images/IMG-20250528-WA0002.jpg'),
    badge: null
  },
  {
    id: 4,
    name: 'Sac de Sport Club',
    price: '45€',
    category: 'Équipement',
    image: getAssetPath('images/IMG-20250528-WA0006.jpg'),
    badge: null
  }
];

export default function Boutique() {
  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic">Official Store</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.8] italic font-black uppercase tracking-tighter">
            PORTEZ NOS <br/> <span className="text-accent">COULEURS.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-6 bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-navy-dark px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-x-4 bottom-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-navy-dark font-black py-4 uppercase text-[10px] tracking-widest shadow-2xl">
                    Ajouter au panier
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-accent font-black text-[10px] uppercase tracking-widest">{product.category}</span>
                  <span className="text-white font-display font-black italic">{product.price}</span>
                </div>
                <h3 className="text-lg text-white font-display font-black uppercase italic leading-tight">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[2rem] bg-accent/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <h2 className="text-3xl text-white">Ventes en ligne bientôt disponibles</h2>
            <p className="text-white/40 uppercase text-xs tracking-widest font-medium">Pour le moment, les achats se font directement au gymnase lors des matchs.</p>
          </div>
          <button className="btn-accent px-12 py-5 flex items-center space-x-3 group whitespace-nowrap">
            <span>Infos Permanences</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
