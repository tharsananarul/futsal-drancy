import { motion } from 'motion/react';
import { getAssetPath } from '../utils/assets';
import { FileText, ArrowRight, CheckCircle2, UserPlus, HeartHandshake } from 'lucide-react';

export default function Registration() {
  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 mx-auto max-w-2xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="w-8 h-[1px] bg-accent/40" />
            <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">Saison 2026-2027</span>
            <div className="w-8 h-[1px] bg-accent/40" />
          </div>
          <h1 className="text-fluid-h1 text-white font-display font-black uppercase tracking-tight">
            INSCRIPTION & <span className="text-accent">TARIFS.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body max-w-md mx-auto font-medium">
            Rejoignez le Futsal Drancy. Suivez le guide ci-dessous pour valider votre licence.
          </p>
        </motion.div>

        {/* Timeline Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { step: '1', title: 'Télécharger', desc: 'Récupérez la fiche d\'inscription FFF et le questionnaire de santé.', highlight: false },
            { step: '2', title: 'Remplir', desc: 'Complétez les documents et joignez votre certificat médical.', highlight: false },
            { step: '3', title: 'Déposer', desc: 'Déposez votre dossier complet avec le règlement lors des permanences au Gymnase Joliot-Curie.', highlight: true }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`glass-card p-6 md:p-7 rounded-3xl flex flex-col items-center text-center relative overflow-hidden border border-white/10 ${
                item.highlight ? 'border-accent/40 bg-accent/[0.04]' : ''
              }`}
            >
              {item.highlight && <div className="absolute top-0 inset-x-0 h-1 bg-accent" />}
              <span className="w-11 h-11 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-lg md:text-xl font-display font-black text-accent">{item.step}</span>
              </span>
              <h3 className="text-lg md:text-xl text-white font-display font-bold uppercase mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Download Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between mb-16 max-w-4xl mx-auto bg-accent/5 border border-accent/25 gap-4"
        >
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl text-white font-display font-black uppercase tracking-wide">
              Dossier d'Inscription Officiel
            </h3>
            <p className="text-gray-400 text-xs font-medium">Format PDF imprimable (Licence FFF & Fiche Club)</p>
          </div>
          <a 
            href={getAssetPath('dossier-inscription.pdf')}
            download="dossier-inscription-futsal-drancy.pdf"
            className="btn-accent space-x-2 shrink-0 cursor-pointer w-full md:w-auto"
          >
            <FileText size={16} />
            <span>Télécharger le dossier</span>
          </a>
        </motion.div>

        {/* Tariffs Section */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          <div className="text-center space-y-2">
            <h2 className="text-fluid-h2 text-white font-display font-black uppercase">
              Tarifs des <span className="text-accent">Licences</span>
            </h2>
            <p className="text-gray-400 text-xs font-medium">Cotisation annuelle comprenant le pack équipement officiel</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-7 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/5">
                <div>
                  <h4 className="text-lg md:text-xl text-white font-display font-bold uppercase">École de Futsal</h4>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-black">U7 à U13</span>
                </div>
                <span className="text-2xl md:text-3xl font-display font-black text-white">160€</span>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-center text-gray-300 text-xs font-medium"><CheckCircle2 size={14} className="text-accent mr-2.5 shrink-0" /> Pack équipement complet inclus</li>
                <li className="flex items-center text-gray-300 text-xs font-medium"><CheckCircle2 size={14} className="text-accent mr-2.5 shrink-0" /> 2 entraînements hebdomadaires</li>
                <li className="flex items-center text-gray-300 text-xs font-medium"><CheckCircle2 size={14} className="text-accent mr-2.5 shrink-0" /> Plateau & compétition le week-end</li>
              </ul>
            </div>

            <div className="glass-card p-6 md:p-7 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/5">
                <div>
                  <h4 className="text-lg md:text-xl text-white font-display font-bold uppercase">Pré-Formation & Compétition</h4>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-black">U14 à Séniors</span>
                </div>
                <span className="text-2xl md:text-3xl font-display font-black text-white">180€</span>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-center text-gray-300 text-xs font-medium"><CheckCircle2 size={14} className="text-accent mr-2.5 shrink-0" /> Pack équipement compétition complet</li>
                <li className="flex items-center text-gray-300 text-xs font-medium"><CheckCircle2 size={14} className="text-accent mr-2.5 shrink-0" /> Encadrement par coachs diplômés FFF</li>
                <li className="flex items-center text-gray-300 text-xs font-medium"><CheckCircle2 size={14} className="text-accent mr-2.5 shrink-0" /> Suivi administratif et médical</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recruitment / Volunteer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 md:p-10 glass-card rounded-3xl border border-accent/20 bg-accent/5 relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-accent font-black tracking-widest uppercase text-[10px]">REJOINDRE L'ENCADREMENT</span>
              <h2 className="text-xl md:text-3xl text-white font-display font-black uppercase tracking-tight">
                VOUS SOUHAITEZ <span className="text-accent">S'INVESTIR DANS LE CLUB ?</span>
              </h2>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium">
                Le Futsal Drancy recherche activement des **bénévoles**, **dirigeants** et **éducateurs** passionnés pour accompagner l'essor de nos équipes et la vie associative.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 flex items-start space-x-3">
                <UserPlus size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-sm font-bold uppercase mb-1">Devenir Coach / Éducateur</h3>
                  <p className="text-gray-400 text-xs">Transmettez votre passion du jeu et encadrez les jeunes catégories.</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 flex items-start space-x-3">
                <HeartHandshake size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-sm font-bold uppercase mb-1">Être Bénévolat / Dirigeant</h3>
                  <p className="text-gray-400 text-xs">Participez à la logistique, la buvette et l'accueil lors des matchs.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center md:text-left">
              <a href="mailto:550738@lpiff.fr" className="btn-accent inline-flex items-center space-x-2">
                <span>Nous contacter pour postuler</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
