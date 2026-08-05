import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_CONTACT_ID || "xzbgrrpl";

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
          _replyto: formData.email,
          _subject: `Message Contact Futsal Drancy de ${formData.firstName} ${formData.lastName}`,
          to: "550738@lpiff.fr",
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
    <div className="pt-28 lg:pt-36 pb-20 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 mx-auto max-w-2xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="w-10 h-[1px] bg-accent/40"></div>
            <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">Contact Officiel</span>
            <div className="w-10 h-[1px] bg-accent/40"></div>
          </div>
          <h1 className="text-fluid-h1 text-white font-display font-black uppercase tracking-tight">
            CONTACTEZ <span className="text-accent">LE CLUB.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body max-w-md mx-auto font-medium">
            Notre équipe administrative se tient à votre disposition pour toute information complémentaire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl md:text-3xl text-white font-display font-black uppercase tracking-wide">
                Une question ? Écrivez-nous.
              </h2>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium">
                Notre secrétariat vous répondra dans un délai de 24h à 48h ouvrées.
              </p>
            </div>

            <div className="space-y-5">
              <div className="glass-card p-4 rounded-2xl flex items-center space-x-4 border border-white/10">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold uppercase text-xs">Gymnase & Siège</h4>
                  <p className="text-gray-400 text-xs font-medium">Gymnase Joliot-Curie, 85 Rue Auguste Blanqui, 93700 Drancy</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center space-x-4 border border-white/10">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold uppercase text-xs">Téléphone</h4>
                  <p className="text-gray-400 text-xs font-medium">01 48 35 94 45</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center space-x-4 border border-white/10">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold uppercase text-xs">Adresse E-mail</h4>
                  <p className="text-accent text-xs font-bold">550738@lpiff.fr</p>
                </div>
              </div>

              {/* Golden Callout Box */}
              <div className="bg-accent text-navy-dark rounded-3xl p-5 md:p-6 shadow-xl space-y-1">
                <span className="bg-navy-dark text-accent text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  Accès Direct Gymnase
                </span>
                <h4 className="font-display font-black uppercase text-base leading-tight">Permanences & Réception des Matchs</h4>
                <p className="text-navy-dark/80 text-xs font-bold">
                  Retrouvez notre staff lors des entraînements et matchs au Gymnase Joliot-Curie.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-accent font-black uppercase text-[10px] tracking-widest mb-3">Réseaux Sociaux</h4>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/futsal_drancy/?hl=fr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-navy-dark transition-all"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/FutsalDrancyOfficiel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-navy-dark transition-all"><Facebook size={18} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Prénom</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors`} 
                  />
                  {errors.firstName && <p className="text-red-400 text-[10px] font-bold">{errors.firstName}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Nom</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors`} 
                  />
                  {errors.lastName && <p className="text-red-400 text-[10px] font-bold">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">E-mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors`} 
                />
                {errors.email && <p className="text-red-400 text-[10px] font-bold">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Message</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent resize-none transition-colors`}
                ></textarea>
                {errors.message && <p className="text-red-400 text-[10px] font-bold">{errors.message}</p>}
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl flex items-center space-x-2 text-red-400">
                  <AlertCircle size={16} />
                  <span className="text-xs font-bold">Une erreur est survenue. Veuillez réessayer.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-accent w-full space-x-2 group disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le Message</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            className="fixed inset-0 bg-navy-dark/90 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-navy-dark border border-accent/20 p-8 rounded-3xl max-w-sm w-full text-center space-y-4 shadow-2xl relative"
            >
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto border border-accent/20">
                <CheckCircle2 size={30} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl text-white font-display font-black uppercase tracking-tight">Message Envoyé !</h3>
                <p className="text-gray-400 text-xs font-medium leading-relaxed">
                  Merci pour votre message. Notre secrétariat vous répondra sous 24h à 48h.
                </p>
              </div>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="btn-accent w-full py-2.5 text-xs uppercase font-black"
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
