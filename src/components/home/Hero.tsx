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
        <motion.img 
          src={getAssetPath('images/IMG-20250528-WA0017.jpg')} 
          alt="Futsal Drancy - École de Futsal" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-navy-dark/80 via-transparent to-navy-dark"></div>
        {/* Accent ambient glow - bottom */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        {/* Accent ambient glow - top right */}
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>



      <div className="section-container relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          {/* Badge saison */}
          <motion.div 
            className="inline-flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="w-8 h-[1px] bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">
              Saison {season}
            </span>
            <motion.div 
              className="w-8 h-[1px] bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Title — stagger per word */}
          <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[10rem] text-white leading-[0.8] font-display font-black uppercase tracking-tighter mb-4 overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              {name.split(' ')[0]}
            </motion.span>
            <motion.span
              className="block text-accent"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
            >
              {name.split(' ')[1]}
            </motion.span>
          </h1>
          
          <motion.div 
            className="max-w-2xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-white/90 font-black uppercase tracking-widest border-y border-accent/30 py-4 [text-shadow:0_0_30px_rgba(245,185,9,0.2)]">
              {motto}
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-lg mx-auto">
              {presentation}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Watermark - slightly yellow tinted */}
      <motion.div 
        className="absolute bottom-10 right-10 opacity-10 pointer-events-none select-none"
        style={{filter: 'sepia(1) saturate(2) hue-rotate(10deg)'}}
        initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
        animate={{ opacity: 0.1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <img src={getAssetPath('assets/logos/drancy-futsal.png')} alt="" className="w-64 h-64" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
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
