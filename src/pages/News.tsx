import { motion } from 'motion/react';
import { Calendar, User, ArrowUpRight, Heart, MessageCircle, Share2 } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';

export default function NewsPage() {
  const allNews = CLUB_DATA.news;
  
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
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Le Blog Officiel</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.8] font-display font-black uppercase tracking-tighter">
            ACTUALITÉS & <br/> <span className="text-accent">MÉDIAS.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 overflow-hidden flex flex-col group hover:border-accent/30 transition-all"
            >
              {/* Header */}
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
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                  #{item.category.toLowerCase()}
                </div>
              </div>
              
              {/* Actions */}
              <div className="p-4 flex items-center space-x-6 border-y border-white/5">
                <Heart size={18} className="text-white/40 hover:text-red-500 cursor-pointer transition-colors" />
                <MessageCircle size={18} className="text-white/40 hover:text-accent cursor-pointer transition-colors" />
                <Share2 size={18} className="text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl text-white font-display font-black uppercase leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="pt-4 mt-auto">
                  <button className="flex items-center space-x-2 text-accent font-black text-[10px] uppercase tracking-[0.3em] group/btn">
                    <span className="border-b border-accent/20 pb-1 group-hover/btn:border-accent transition-all">Lire l'article</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

