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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Fil d'Actualité</span>
            </div>
            <h2 className="text-4xl md:text-7xl text-white font-display font-black uppercase tracking-tighter">
              Dernières <span className="text-accent">Vibes</span>
            </h2>
          </div>
          <NavLink 
            to="/news" 
            className="group flex items-center space-x-4 bg-white/5 hover:bg-white px-8 py-4 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-navy-dark">Toutes les actus</span>
            <ArrowRight size={16} className="text-accent group-hover:text-navy-dark transition-transform group-hover:translate-x-2" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 overflow-hidden flex flex-col group hover:border-accent/30 transition-all"
            >
              {/* Header style feed */}
              <div className="p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-black text-navy-dark text-[10px]">FD</div>
                  <div className="flex flex-col">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Futsal Drancy</span>
                    <span className="text-gray-500 text-[8px] font-bold uppercase">{item.author}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar size={12} />
                  <span className="text-[9px] font-bold uppercase">{item.date}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                  #{item.category.toLowerCase()}
                </div>
              </div>
              
              {/* Actions like social media */}
              <div className="p-4 flex items-center space-x-6 border-y border-white/5">
                <Heart size={18} className="text-white/40 hover:text-red-500 cursor-pointer transition-colors" />
                <MessageCircle size={18} className="text-white/40 hover:text-accent cursor-pointer transition-colors" />
                <Share2 size={18} className="text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1">
                <h3 className="text-xl text-white font-black uppercase leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <NavLink 
                  to={`/news/${item.id}`}
                  className="inline-block text-accent font-black text-[10px] uppercase tracking-[0.3em] border-b border-accent/20 pb-1 hover:border-accent transition-all"
                >
                  Lire l'article
                </NavLink>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

