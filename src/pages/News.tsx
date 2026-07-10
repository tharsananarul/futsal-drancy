import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, MessageCircle, Share2, Instagram, ArrowUpRight, Loader2 } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';

interface SocialPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  mediaType: string;
}

// Pour automatiser l'affichage de vos posts Instagram réels gratuitement dans nos cartes :
// 1. Créez un compte sur https://behold.so (Gratuit pour toujours, 1200 requêtes/mois)
// 2. Associez votre compte Instagram et copiez l'URL d'API fournie
// 3. Collez-la dans la constante BEHOLD_URL ci-dessous ou configurez VITE_BEHOLD_URL dans votre .env
const BEHOLD_URL = import.meta.env.VITE_BEHOLD_URL || ""; 

export default function NewsPage() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(false);
  const localNews = CLUB_DATA.news;

  useEffect(() => {
    if (!BEHOLD_URL || BEHOLD_URL.includes("YOUR_USER_ID")) {
      return;
    }

    setLoading(true);
    fetch(BEHOLD_URL)
      .then(res => {
        if (!res.ok) throw new Error("API Limit or Error");
        return res.json();
      })
      .then((data: SocialPost[]) => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
      })
      .catch(err => {
        console.warn("Failed to fetch live feed, falling back to local news", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatDate = (isoString: string) => {
    try {
      return new Date(isoString).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).toUpperCase();
    } catch (e) {
      return isoString;
    }
  };

  const getPostTitle = (caption?: string) => {
    if (!caption) return "Publication Futsal Drancy";
    const lines = caption.split('\n');
    const firstLine = lines[0].trim();
    return firstLine.length > 50 ? `${firstLine.substring(0, 50)}...` : firstLine;
  };

  const getPostExcerpt = (caption?: string) => {
    if (!caption) return "";
    const lines = caption.split('\n');
    if (lines.length > 1) {
      return lines.slice(1).join(' ').trim();
    }
    return caption;
  };

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
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Actualités & Réseaux</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.8] font-display font-black uppercase tracking-tighter">
            ACTUALITÉS & <br/> <span className="text-accent">MÉDIAS.</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto uppercase tracking-[0.2em] font-bold">
            Retrouvez nos derniers résultats et la vie du club en direct d'Instagram.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-accent animate-spin" size={40} />
            <p className="text-white/40 uppercase text-xs tracking-widest font-black">Chargement des actualités...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              /* Live Instagram Feed Mode */
              posts.map((item, idx) => (
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
                        <span className="text-gray-500 text-[8px] font-bold uppercase">Instagram Feed</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={12} />
                      <span className="text-[9px] font-bold uppercase">{formatDate(item.timestamp)}</span>
                    </div>
                  </div>

                  {/* Card Image */}
                  <div className="relative aspect-square overflow-hidden bg-black/25 border-b border-white/5">
                    <img 
                      src={item.mediaUrl} 
                      alt="Instagram Post" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white p-2 rounded-full">
                      <Instagram size={14} className="text-accent" />
                    </div>
                  </div>
                  
                  {/* Actions / Interactions mockup */}
                  <div className="p-4 flex items-center space-x-6 border-b border-white/5">
                    <Heart size={18} className="text-white/40 hover:text-red-500 cursor-pointer transition-colors" />
                    <MessageCircle size={18} className="text-white/40 hover:text-accent cursor-pointer transition-colors" />
                    <Share2 size={18} className="text-white/40 hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>

                  {/* Caption Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl text-white font-display font-black uppercase leading-tight group-hover:text-accent transition-colors line-clamp-2">
                        {getPostTitle(item.caption)}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {getPostExcerpt(item.caption)}
                      </p>
                    </div>
                    <div className="pt-4">
                      <a 
                        href={item.permalink} 
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
              ))
            ) : (
              /* Local News Fallback (or if Behold URL is empty) */
              localNews.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/5 overflow-hidden flex flex-col group hover:border-accent/30 transition-all rounded-[2rem]"
                >
                  {/* Header */}
                  <div className="p-5 flex items-center justify-between border-b border-white/5">
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
                      <button className="flex items-center space-x-2 text-accent font-black text-[10px] uppercase tracking-[0.3em] group/btn">
                        <span className="border-b border-accent/20 pb-1 group-hover/btn:border-accent transition-all">Lire l'article</span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}



