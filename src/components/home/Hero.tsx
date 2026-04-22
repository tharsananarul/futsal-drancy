import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function Hero() {
  const { name, motto, presentation, season } = CLUB_DATA;
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2671&auto=format&fit=crop" 
          alt="Futsal Court" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-navy-dark/80 via-transparent to-navy-dark"></div>
      </div>

      <div className="section-container relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">
              Saison {season}
            </span>
            <div className="w-8 h-[1px] bg-accent"></div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[10rem] text-white leading-[0.8] font-display font-black uppercase tracking-tighter mb-4">
            {name.split(' ')[0]} <br />
            <span className="text-accent">{name.split(' ')[1]}</span>
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white/90 font-black uppercase tracking-widest border-y border-white/10 py-4">
              {motto}
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-lg mx-auto">
              {presentation}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Watermark */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none select-none">
        <img src={getAssetPath('logo/futsal-logo.png')} alt="" className="w-64 h-64 grayscale" />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/30"
      >
        <span className="uppercase text-[9px] tracking-[0.5em] mb-4 font-bold">Découvrir</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

