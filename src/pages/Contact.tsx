import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
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
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic">Get in touch</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.8] italic font-black uppercase tracking-tighter">
            CONTACTEZ <br/> <span className="text-accent">LA MEUTE.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl text-white">Prêt à nous rejoindre ou poser une question ?</h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium uppercase tracking-widest italic">
                Notre équipe administrative vous répond sous 24h à 48h.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display font-black uppercase italic">Siège Social</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest">85 Rue Auguste Blanqui, 93700 Drancy</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display font-black uppercase italic">Téléphone</h4>
                  <p className="text-white/40 text-sm uppercase tracking-widest">01 48 35 94 45</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display font-black uppercase italic">E-mail</h4>
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
            className="glass-card p-10 md:p-12 rounded-[2.5rem] border-white/5"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Prénom</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Nom</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">E-mail</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white resize-none"></textarea>
              </div>

              <button className="btn-accent w-full py-5 flex items-center justify-center space-x-3 group">
                <span>Envoyer le Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
