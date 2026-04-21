import { motion } from 'motion/react';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

const ALL_NEWS = [
  {
    id: 1,
    category: 'Club',
    title: 'Le Futsal Drancy recherche des Bénévoles et des Coachs',
    date: '21 AVRIL 2026',
    author: 'Direction du Club',
    image: getAssetPath('images/4.png'),
    excerpt: 'Nous recherchons des personnes passionnées pour encadrer nos équipes et participer à la vie du club. Rejoignez l\'aventure !'
  },
  {
    id: 2,
    category: 'Match',
    title: 'Drancy triomphe face à Toulouse dans un match épique',
    date: '18 AVRIL 2026',
    author: 'Equipe Communication',
    image: getAssetPath('images/5.png'),
    excerpt: 'Dans un match riche en émotions au Palais des Sports, nos joueurs ont su faire la différence en seconde période...'
  },
  {
    id: 3,
    category: 'Club',
    title: 'Ouverture des inscriptions pour l\'académie des jeunes',
    date: '15 AVRIL 2026',
    author: 'Direction Sportive',
    image: getAssetPath('images/6.png'),
    excerpt: 'Les inscriptions pour la saison 2025-2026 sont officiellement ouvertes pour toutes les catégories d\'âge...'
  },
  {
    id: 4,
    category: 'Transfert',
    title: 'Nouveau renfort brésilien pour l\'équipe première',
    date: '10 AVRIL 2026',
    author: 'Staff Technique',
    image: getAssetPath('images/7.png'),
    excerpt: 'Le club est fier d\'annoncer l\'arrivée de Junior Silva, ailier de talent en provenance de São Paulo...'
  },
  {
    id: 5,
    category: 'Événement',
    title: 'Gala annuel du Futsal Drancy : Une soirée inoubliable',
    date: '05 AVRIL 2026',
    author: 'Equipe Communication',
    image: getAssetPath('images/8.png'),
    excerpt: 'Retour sur la soirée de gala qui a réuni joueurs, partenaires et supporters pour célébrer nos 20 ans...'
  }
];

export default function NewsPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ALL_NEWS.map((item, idx) => (
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
