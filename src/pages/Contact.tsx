import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_CONTACT_ID || "xzbgrrpl"; // Remplacer par l'ID Formspree définitif

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est requise";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse e-mail n'est pas valide";
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
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
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px]">Get in touch</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white leading-[0.9] font-display font-black uppercase tracking-tighter">
            CONTACTEZ <br/> <span className="text-accent">LA MEUTE.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl text-white font-black uppercase">Prêt à nous rejoindre ou poser une question ?</h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium uppercase tracking-widest">
                Notre équipe administrative vous répond sous 24h à 48h.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display font-black uppercase">Club</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest">85 Rue Auguste Blanqui, 93700 Drancy</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display font-black uppercase">Téléphone</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest">01 48 35 94 45</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display font-black uppercase">E-mail</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest">550738@lpiff.fr</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-6">Suivez-nous</h4>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/futsal_drancy/?hl=fr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-navy-dark transition-all duration-300"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/FutsalDrancyOfficiel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-navy-dark transition-all duration-300"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-10 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Prénom</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white`} 
                  />
                  {errors.firstName && <p className="text-red-500 text-[10px] uppercase font-black tracking-wider ml-4">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Nom</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white`} 
                  />
                  {errors.lastName && <p className="text-red-500 text-[10px] uppercase font-black tracking-wider ml-4">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">E-mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white`} 
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase font-black tracking-wider ml-4">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea 
                  rows={6} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-[10px] uppercase font-black tracking-wider ml-4">{errors.message}</p>}
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center space-x-3 text-red-400">
                  <AlertCircle size={18} />
                  <span className="text-xs uppercase font-black tracking-wider">Une erreur s'est produite lors de l'envoi. Veuillez réessayer.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-accent w-full py-5 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-dark/90 backdrop-blur-md z-[99999] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-navy-dark border border-accent/20 p-12 rounded-[2.5rem] max-w-md w-full text-center space-y-6 shadow-2xl relative"
            >
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-white font-display font-black uppercase tracking-tight">Message Envoyé !</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest leading-relaxed">
                  Merci pour votre message. Notre équipe administrative vous répondra sous 24h à 48h.
                </p>
              </div>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="btn-accent w-full py-4 uppercase text-xs tracking-widest font-black"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
