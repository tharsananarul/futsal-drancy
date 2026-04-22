import { motion } from 'motion/react';
import { ArrowRight, UserPlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function RecruitmentSection() {
  return (
    <section className="bg-accent py-24 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy-dark/5 font-display font-black text-[40vw] leading-none select-none uppercase whitespace-nowrap">
          JOIN US
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-3 bg-navy-dark text-white px-6 py-2 rounded-full">
              <UserPlus size={16} className="text-accent" />
              <span className="text-[10px] font-black uppercase tracking-widest">Inscriptions 2025-2026</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl text-navy-dark font-display font-black uppercase tracking-tighter leading-[0.8]">
              Deviens un <br /> <span className="text-white drop-shadow-2xl">Joueur du Club</span>
            </h2>
            
            <p className="text-navy-dark/70 text-lg md:text-xl font-bold uppercase tracking-wide max-w-2xl mx-auto">
              Nous accueillons toutes les catégories : de l'école de futsal (U7) aux Séniors. Rejoins un projet ambitieux !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <NavLink 
              to="/registration" 
              className="w-full sm:w-auto bg-navy-dark text-white font-black px-12 py-6 hover:bg-black transition-all shadow-2xl flex items-center justify-center space-x-4 group text-xs tracking-[0.2em] uppercase"
            >
              <span>Dossier d'Inscription</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className="w-full sm:w-auto bg-transparent border-2 border-navy-dark text-navy-dark font-black px-12 py-6 hover:bg-navy-dark hover:text-white transition-all flex items-center justify-center space-x-4 text-xs tracking-[0.2em] uppercase"
            >
              <span>Nous Contacter</span>
            </NavLink>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-navy-dark/10">
            {[
              { label: "U7 - U11", sub: "École de Futsal" },
              { label: "U13 - U15", sub: "Pré-Formation" },
              { label: "U18", sub: "Formation" },
              { label: "Séniors", sub: "Élite & Loisir" }
            ].map((cat, i) => (
              <div key={i} className="text-center">
                <p className="text-navy-dark font-black text-xl uppercase leading-none">{cat.label}</p>
                <p className="text-navy-dark/50 text-[9px] font-bold uppercase tracking-widest mt-1">{cat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
