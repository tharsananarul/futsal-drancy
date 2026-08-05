import { motion } from 'motion/react';
import { ArrowRight, Heart, MessageCircle, Share2, Calendar } from 'lucide-react';
import { CLUB_DATA } from '../../data/clubData';
import { NavLink } from 'react-router-dom';

export default function LatestNews() {
  const newsItems = CLUB_DATA.news;
  
  return (
    <section className="bg-navy-dark py-16 md:py-20 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">Fil d'Actualité</span>
            </div>
            <h2 className="text-fluid-h2 text-white font-display font-black uppercase tracking-tight">
              Dernières <span className="text-accent">Vibes</span>
            </h2>
          </div>
          <NavLink 
            to="/news" 
            className="btn-outline text-xs px-5 py-2.5 space-x-2 cursor-pointer"
          >
            <span>Toutes les actus</span>
            <ArrowRight size={14} />
          </NavLink>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.slice(0, 3).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card card-hover overflow-hidden flex flex-col group rounded-3xl cursor-pointer border border-white/10"
            >
              {/* Header style feed */}
              <div className="p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-black text-navy-dark text-[10px]">
                    FD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Futsal Drancy</span>
                    <span className="text-gray-400 text-[10px] font-medium">{item.author}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-400 text-[10px]">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Image aspect-square */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border border-white/10">
                  #{item.category.toLowerCase()}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg text-white font-display font-black uppercase leading-tight group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 font-medium">
                    {item.excerpt}
                  </p>
                </div>
                
                <div className="pt-2">
                  <NavLink 
                    to="/news"
                    className="inline-flex items-center gap-1.5 text-accent font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight size={13} />
                  </NavLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
