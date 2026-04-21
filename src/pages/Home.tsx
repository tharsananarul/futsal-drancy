import Hero from '../components/home/Hero';
import MatchTicker from '../components/home/MatchTicker';
import LatestNews from '../components/home/LatestNews';
import StatsOverview from '../components/home/StatsOverview';
import { motion } from 'motion/react';
import { getAssetPath } from '../utils/assets';
import { Trophy, Users, Calendar, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col bg-primary">
      <Hero />
      <MatchTicker />
      
      {/* Short Club Intro */}
      <section className="bg-navy-dark py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[40vw] h-[40vw] opacity-[0.02] pointer-events-none">
          <img src={getAssetPath('logo/futsal-logo.png')} alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2671&auto=format&fit=crop" 
                alt="Futsal Action" 
                className="w-full aspect-[4/5] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-2 border-accent/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            </div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-8 -right-8 bg-accent p-8 md:p-12 shadow-2xl z-20"
            >
              <Trophy size={48} className="text-navy-dark" />
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-navy-dark"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic">Notre Identité</span>
              </div>
              <h2 className="text-5xl md:text-7xl text-white leading-tight">L'Excellence <br /> <span className="text-accent italic">au Coeur</span> de Drancy</h2>
            </div>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium uppercase tracking-widest opacity-80">
              Le Futsal Drancy n'est pas seulement un club de sport, c'est une institution ancrée dans son territoire. Nous formons les talents de demain tout en visant l'élite nationale.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10 pt-4">
              <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent transition-colors">
                    <Users className="text-accent group-hover:text-navy-dark transition-colors" size={24} />
                  </div>
                  <h4 className="font-display font-black text-white text-xl uppercase italic">Formation</h4>
                </div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed font-bold border-l border-white/10 pl-4">
                  De l'école de futsal aux séniors, nous cultivons le talent brut.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent transition-colors">
                    <Calendar className="text-accent group-hover:text-navy-dark transition-colors" size={24} />
                  </div>
                  <h4 className="font-display font-black text-white text-xl uppercase italic">Engagement</h4>
                </div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed font-bold border-l border-white/10 pl-4">
                  Compétition, respect et discipline sont les piliers de notre club.
                </p>
              </div>
            </div>
            
            <div className="flex pt-6">
              <button className="btn-accent px-12 py-5 flex items-center space-x-3 group">
                <span>Découvrir le club</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsOverview />
      <LatestNews />
      
      {/* CTA Section */}
      <section className="bg-linear-to-br from-accent to-accent-dark py-24 md:py-32 overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy-dark/5 font-display font-black text-[30vw] select-none uppercase italic leading-none whitespace-nowrap">
            DRANCY
          </div>
        </motion.div>

        <div className="section-container relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl text-navy-dark leading-[0.8] italic font-black uppercase tracking-tighter">
              PRÊT À <br /> <span className="text-white drop-shadow-2xl">REJOINDRE</span> <br /> LA MEUTE ?
            </h2>
            
            <p className="text-navy-dark/70 max-w-lg mx-auto font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Inscrivez-vous dès maintenant pour la saison 2025-2026 et portez fièrement les couleurs du Futsal Drancy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <NavLink to="/registration" className="bg-navy-dark text-white font-black px-12 py-6 rounded-none hover:bg-black transition-all shadow-2xl flex items-center space-x-4 group text-xs tracking-widest uppercase">
                <span>Dossier d'Inscription</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </NavLink>
              
              <NavLink to="/contact" className="text-navy-dark font-black text-xs uppercase tracking-widest border-b-2 border-navy-dark pb-1 hover:text-white hover:border-white transition-all">
                Nous Contacter
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
