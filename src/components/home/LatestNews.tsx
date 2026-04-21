import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const NEWS = [
  {
    id: 1,
    category: 'Match',
    title: 'Drancy triomphe face à Toulouse dans un match épique',
    date: '18 AVRIL 2026',
    author: 'Equipe Communication',
    image: '/futsal-drancy/images/1.png',
  },
  {
    id: 2,
    category: 'Club',
    title: 'Ouverture des inscriptions pour l\'académie des jeunes',
    date: '15 AVRIL 2026',
    author: 'Direction Sportive',
    image: '/futsal-drancy/images/2.png',
  },
  {
    id: 3,
    category: 'Transfert',
    title: 'Nouveau renfort brésilien pour l\'équipe première',
    date: '10 AVRIL 2026',
    author: 'Staff Technique',
    image: '/futsal-drancy/images/3.png',
  }
];

export default function LatestNews() {
  return (
    <section className="bg-navy-dark py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(245,185,9,0.03)_0%,transparent_50%)]"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs italic">Actualités</span>
            <h2 className="text-4xl md:text-6xl text-white">Dernières <br className="hidden md:block" /> Minutes</h2>
          </div>
          <button className="btn-outline group flex items-center space-x-2 border-white/10 text-white/60 hover:text-white">
            <span>Toutes les news</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-4 rounded-2xl group cursor-pointer card-hover"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent px-3 py-1 text-primary font-bold text-[10px] uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{item.author}</span>
                  </span>
                </div>
                
                <h3 className="text-2xl text-white leading-tight hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 uppercase tracking-widest font-medium">
                  Lire la suite de l'article sur les dernières performances extraordinaires de notre équipe de futsal...
                </p>
                
                <button className="text-white font-bold text-xs uppercase tracking-widest flex items-center space-x-2 group/btn">
                  <span className="border-b-2 border-accent pb-1 group-hover/btn:border-white transition-colors">Lire l'article</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
