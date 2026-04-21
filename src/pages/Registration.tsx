import { motion } from 'motion/react';
import { getAssetPath } from '../utils/assets';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Registration() {
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic">Saison 2025-2026</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.8] italic font-black uppercase tracking-tighter">
            REJOINDRE LA <br/> <span className="text-accent">FAMILLE.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-10 rounded-2xl flex flex-col items-center text-center">
            <span className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-display font-black text-accent italic">1</span>
            </span>
            <h3 className="text-2xl text-white mb-4">Télécharger</h3>
            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-widest">
              Téléchargez et imprimez le dossier d'inscription officiel comprenant la licence et la fiche médicale.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-10 rounded-2xl flex flex-col items-center text-center">
            <span className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-display font-black text-accent italic">2</span>
            </span>
            <h3 className="text-2xl text-white mb-4">Compléter</h3>
            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-widest">
              Remplissez minutieusement tous les documents et préparez les pièces justificatives demandées (photos, CI).
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-10 rounded-2xl flex flex-col items-center text-center border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-1 bg-accent"></div>
            <span className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-display font-black text-accent italic">3</span>
            </span>
            <h3 className="text-2xl text-white mb-4">Déposer</h3>
            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-widest">
              Déposez votre dossier complet lors de l'une de nos permanences au Gymnase Jaurès.
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-12 rounded-2xl md:flex items-center justify-between mb-20 bg-accent/5 border-l-4 border-l-accent">
          <div className="space-y-4 mb-8 md:mb-0">
            <h3 className="text-3xl text-white">Dossier d'Inscription</h3>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Format PDF - 2.4 Mo</p>
          </div>
          <button className="btn-accent flex items-center space-x-3 w-full md:w-auto justify-center">
            <FileText size={18} />
            <span>Télécharger le dossier</span>
          </button>
        </motion.div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl text-white">Tarifs des Licences</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl text-white mb-1">École de Futsal</h4>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-black italic">U7 à U13</span>
                </div>
                <span className="text-4xl font-display font-black text-white italic">160€</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 text-sm font-medium"><CheckCircle2 size={16} className="text-accent mr-3" /> Pack équipement inclus</li>
                <li className="flex items-center text-gray-400 text-sm font-medium"><CheckCircle2 size={16} className="text-accent mr-3" /> 2 entraînements par semaine</li>
                <li className="flex items-center text-gray-400 text-sm font-medium"><CheckCircle2 size={16} className="text-accent mr-3" /> Compétitions le weekend</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl text-white mb-1">Pré-Formation & Compétition</h4>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-black italic">U14 à Seniors</span>
                </div>
                <span className="text-4xl font-display font-black text-white italic">180€</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 text-sm font-medium"><CheckCircle2 size={16} className="text-accent mr-3" /> Pack équipement complet</li>
                <li className="flex items-center text-gray-400 text-sm font-medium"><CheckCircle2 size={16} className="text-accent mr-3" /> Encadrement diplômé</li>
                <li className="flex items-center text-gray-400 text-sm font-medium"><CheckCircle2 size={16} className="text-accent mr-3" /> Suivi médical</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recruitment Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass-card rounded-[3rem] border-accent/20 bg-accent/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <img src={getAssetPath('logo/futsal-logo.png')} className="w-32 h-32 object-contain" alt="" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic block mb-4">Staff & Encadrement</span>
            <h2 className="text-4xl md:text-5xl text-white font-black uppercase italic leading-none mb-8">
              VOUS VOULEZ <br/> <span className="text-accent">S'INVESTIR ?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Le Futsal Drancy est en constante croissance et nous recherchons activement des **bénévoles** et des **coachs** passionnés pour encadrer nos jeunes et participer au développement du club.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1">
                <h3 className="text-white font-bold mb-2">Devenir Coach</h3>
                <p className="text-white/40 text-sm">Partagez votre expertise technique et formez les talents de demain.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1">
                <h3 className="text-white font-bold mb-2">Être Bénévole</h3>
                <p className="text-white/40 text-sm">Aidez à l'organisation des matchs et à la vie quotidienne du club.</p>
              </div>
            </div>
            <div className="mt-10">
              <a href="mailto:550738@lpiff.fr" className="btn-accent px-10 py-4 inline-block">Nous contacter pour postuler</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
