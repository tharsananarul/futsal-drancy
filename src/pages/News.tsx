import { motion } from 'motion/react';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';
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
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic">Le Blog Officiel</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.8] italic font-black uppercase tracking-tighter">
            ACTUALITÉS & <br/> <span className="text-accent">MÉDIAS.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allNews.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer border-white/5"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 bg-accent px-4 py-1.5 text-navy-dark font-black text-[10px] uppercase tracking-widest rounded-full">
                    {item.category}
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-6 text-white/30 text-[10px] font-black uppercase tracking-widest">
                      <span className="flex items-center space-x-2">
                        <Calendar size={14} className="text-accent" />
                        <span>{item.date}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <User size={14} className="text-accent" />
                        <span>{item.author}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-3xl text-white font-display font-black uppercase italic leading-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/50 text-sm leading-relaxed font-medium uppercase tracking-[0.05em]">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <button className="flex items-center space-x-3 text-white font-black text-xs uppercase tracking-[0.2em] group/btn">
                    <span className="border-b-2 border-accent/30 pb-1 group-hover/btn:border-accent transition-all">Lire l'Article</span>
                    <ArrowUpRight size={18} className="text-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
