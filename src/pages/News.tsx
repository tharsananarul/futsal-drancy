import { motion } from 'motion/react';
import { Calendar, Instagram, ArrowUpRight, Heart, MessageCircle, Share2 } from 'lucide-react';
import { getAssetPath } from '../utils/assets';
import actualitesData from '../data/actualites.json';

interface Actualite {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  instagramUrl: string;
}

export default function NewsPage() {
  const actualites: Actualite[] = actualitesData;

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Fil d'actualité</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.8] font-display font-black uppercase tracking-tighter">
            ACTUALITÉS & <br/> <span className="text-accent">MÉDIAS.</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto uppercase tracking-[0.2em] font-bold">
            Retrouvez la vie du club et nos derniers résultats directement liés à nos réseaux sociaux.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 overflow-hidden flex flex-col group hover:border-accent/30 transition-all rounded-[2rem]"
            >
              {/* Card Header */}
              <div className="p-5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-black text-navy-dark text-[10px]">FD</div>
                  <div className="flex flex-col">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Futsal Drancy</span>
                    <span className="text-gray-500 text-[8px] font-bold uppercase">Actualités</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar size={12} />
                  <span className="text-[9px] font-bold uppercase">{item.date}</span>
                </div>
              </div>

              {/* Card Image */}
              <div className="relative aspect-video overflow-hidden bg-black/25">
                <img 
                  src={getAssetPath(item.image)} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white p-2 rounded-full">
                  <Instagram size={14} className="text-accent" />
                </div>
              </div>
              
              {/* Actions / Interactions mockup */}
              <div className="p-4 flex items-center space-x-6 border-y border-white/5">
                <Heart size={18} className="text-white/40 hover:text-red-500 cursor-pointer transition-colors" />
                <MessageCircle size={18} className="text-white/40 hover:text-accent cursor-pointer transition-colors" />
                <Share2 size={18} className="text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>

              {/* Caption Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl text-white font-display font-black uppercase leading-tight group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href={item.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent font-black text-[10px] uppercase tracking-[0.3em] group/btn inline-flex"
                  >
                    <span className="border-b border-accent/20 pb-1 group-hover/btn:border-accent transition-all">Voir sur Instagram</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}



