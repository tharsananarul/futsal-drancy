import { motion } from 'motion/react';
import { Instagram, Facebook, ArrowUpRight, Share2, Heart, Award } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';

export default function NewsPage() {
  const { contact } = CLUB_DATA;

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Social Hub</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.8] font-display font-black uppercase tracking-tighter">
            ACTUALITÉS En <br/> <span className="text-accent">DIRECT.</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto uppercase tracking-[0.2em] font-bold">
            Retrouvez tous nos derniers posts Instagram et Facebook mis à jour automatiquement.
          </p>
        </motion.div>

        {/* Social Wall Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Social Network Quick Links & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[2rem] border-white/5 space-y-6"
            >
              <div className="flex items-center space-x-3 text-accent">
                <Award size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">Rejoignez la Meute</span>
              </div>
              <h2 className="text-2xl md:text-3xl text-white font-display font-black uppercase leading-tight">
                Suivez nos exploits au quotidien
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Nos réseaux sociaux sont mis à jour quotidiennement lors des entraînements, des matchs et des événements du club. Abonnez-vous pour ne rien rater !
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-4">
                {/* Instagram Button */}
                <a 
                  href="https://www.instagram.com/futsal_drancy/?hl=fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-pink-500/20 rounded-2xl text-white transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm uppercase">Instagram</h4>
                      <p className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">@futsal_drancy</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Facebook Button */}
                <a 
                  href="https://www.facebook.com/FutsalDrancyOfficiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 rounded-2xl text-white transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm uppercase">Facebook</h4>
                      <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Futsal Drancy Officiel</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Quick Actions Feed Showcase */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent/5 border border-accent/10 p-8 rounded-[2rem] space-y-4"
            >
              <h3 className="text-white font-display font-black uppercase text-lg">💡 Le saviez-vous ?</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Toutes nos annonces de matchs, résultats en direct et événements marquants (comme la **CAN Féminine**) sont relayés instantanément sur nos pages officielles.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Live Facebook timeline feed (7 Cols) */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-[2.5rem] border-white/5 w-full flex flex-col items-center bg-white/[0.02]"
            >
              <div className="flex items-center justify-between w-full mb-6 border-b border-white/5 pb-4">
                <span className="text-white font-display font-black uppercase text-sm md:text-lg tracking-wider">Fil d'actualité en direct</span>
                <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest animate-pulse">Live</span>
              </div>

              {/* Facebook Page Plugin Iframe (100% Free and updates dynamically) */}
              <div className="w-full bg-black/20 rounded-2xl overflow-hidden border border-white/10 flex justify-center min-h-[500px]">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFutsalDrancyOfficiel&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="100%" 
                  height="700" 
                  style={{ border: 'none', overflow: 'hidden', minHeight: '500px', backgroundColor: 'transparent' }} 
                  scrolling="yes" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full rounded-2xl"
                ></iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}


