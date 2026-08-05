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
    <div className="pt-28 lg:pt-36 pb-20 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 mx-auto max-w-2xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="w-10 h-[1px] bg-accent/40"></div>
            <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">Fil d'actualité</span>
            <div className="w-10 h-[1px] bg-accent/40"></div>
          </div>
          <h1 className="text-fluid-h1 text-white font-display font-black uppercase tracking-tight">
            ACTUALITÉS & <span className="text-accent">MÉDIAS.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body max-w-md mx-auto font-medium">
            Retrouvez la vie du club en images et les publications officielles de nos réseaux.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-5 md:gap-6">
          {actualites.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="glass-card card-hover overflow-hidden flex flex-col justify-between rounded-3xl border border-white/10 group"
            >
              <div className="space-y-3">
                {/* Image aspect-square object-cover */}
                <div className="relative aspect-square overflow-hidden bg-black/20">
                  <img 
                    src={getAssetPath(item.image)} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-full border border-white/15">
                    <Instagram size={12} className="text-accent" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 px-4 md:px-5">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center space-x-1.5">
                      <Calendar size={11} className="text-accent/70" />
                      <span>{item.date}</span>
                    </span>
                    <span className="text-accent/80 font-black">#instagram</span>
                  </div>

                  <h3 className="text-base text-white font-display font-black uppercase leading-tight group-hover:text-accent transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 font-medium">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 md:p-5 pt-0 mt-3 flex items-center justify-between">
                <a 
                  href={item.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-accent font-black text-[10px] uppercase tracking-widest group/btn"
                >
                  <span>Voir le post</span>
                  <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                
                <div className="flex items-center text-gray-400">
                  <Heart size={14} className="hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
