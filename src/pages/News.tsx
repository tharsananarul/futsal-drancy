import { motion } from 'motion/react';
import { Calendar, Instagram, ArrowUpRight, Heart } from 'lucide-react';
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
          className="text-center space-y-4 mb-16 mx-auto max-w-3xl"
        >
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px]">Fil d'actualité</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white leading-[0.9] font-display font-black uppercase tracking-tighter">
            ACTUALITÉS & <br/> <span className="text-accent">MÉDIAS.</span>
          </h1>
          <p className="text-gray-500 text-[10px] md:text-xs mx-auto uppercase tracking-[0.2em] font-bold">
            Retrouvez la vie du club en images et en direct de nos réseaux.
          </p>
        </motion.div>

        {/* News Grid: 2 columns on mobile, 3 on tablet/desktop, centered */}
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-4 md:gap-6">
          {actualites.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-accent/30 hover:bg-white/[0.04] transition-all rounded-[1.5rem]"
            >
              <div className="space-y-3">
                {/* Card Image: aspect-square and object-cover, edge-to-edge */}
                <div className="relative aspect-square overflow-hidden bg-black/20">
                  <img 
                    src={getAssetPath(item.image)} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-full border border-white/10">
                    <Instagram size={10} className="text-accent" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-1.5 px-3 md:px-4">
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                    <span className="flex items-center space-x-1">
                      <Calendar size={10} className="text-accent/60" />
                      <span>{item.date}</span>
                    </span>
                    <span className="text-accent/80">#instagram</span>
                  </div>

                  <h3 className="text-xs md:text-sm text-white font-display font-black uppercase leading-tight group-hover:text-accent transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 md:p-4 pt-0 mt-4 flex items-center justify-between">
                <a 
                  href={item.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-accent font-black text-[8px] md:text-[9px] uppercase tracking-[0.25em] group/btn"
                >
                  <span>Voir le post</span>
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                
                <div className="flex items-center space-x-2 text-gray-500">
                  <Heart size={12} className="hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}




