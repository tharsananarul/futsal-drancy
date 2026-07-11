import { motion } from 'motion/react';
import { ArrowRight, Heart, MessageCircle, Share2, Calendar } from 'lucide-react';
import { CLUB_DATA } from '../../data/clubData';
import { NavLink } from 'react-router-dom';

export default function LatestNews() {
  const newsItems = CLUB_DATA.news;
  
  return (
    <section className="bg-navy-dark py-24 relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <motion.div 
                className="w-12 h-px bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Fil d'Actualité</span>
            </div>
            <h2 className="text-4xl md:text-7xl text-white font-display font-black uppercase tracking-tighter overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              >
                Dernières <span className="text-accent">Vibes</span>
              </motion.span>
            </h2>
          </div>
          <NavLink 
            to="/news" 
            className="group flex items-center space-x-4 bg-white/5 hover:bg-white px-8 py-4 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-navy-dark">Toutes les actus</span>
            <ArrowRight size={16} className="text-accent group-hover:text-navy-dark transition-transform group-hover:translate-x-2" />
          </NavLink>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.35, ease: "easeOut" } }}
              className="glass-card overflow-hidden flex flex-col group rounded-3xl transition-colors duration-500 cursor-pointer border border-white/5 hover:border-accent/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            >
              {/* Header style feed */}
              <div className="p-5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center space-x-3.5">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-black text-navy-dark text-xs"
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    FD
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-black uppercase tracking-widest">Futsal Drancy</span>
                    <span className="text-gray-500 text-[10px] lg:text-xs font-bold uppercase">{item.author}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar size={14} />
                  <span className="text-[10px] lg:text-xs font-bold uppercase">{item.date}</span>
                </div>
              </div>

              {/* Image with parallax scale */}
              <div className="relative aspect-square overflow-hidden">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest">
                  #{item.category.toLowerCase()}
                </div>
              </div>
              
              {/* Actions like social media */}
              <div className="p-5 flex items-center space-x-6 border-y border-white/5">
                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                  <Heart size={20} className="text-white/40 hover:text-red-500 cursor-pointer transition-colors" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                  <MessageCircle size={20} className="text-white/40 hover:text-accent cursor-pointer transition-colors" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                  <Share2 size={20} className="text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4 flex-1">
                <h3 className="text-xl lg:text-2xl text-white font-black uppercase leading-tight group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <NavLink 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-accent font-black text-xs uppercase tracking-[0.3em] border-b border-accent/20 pb-1.5 hover:border-accent hover:gap-4 transition-all duration-300"
                >
                  Lire l'article
                  <ArrowRight size={12} />
                </NavLink>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
