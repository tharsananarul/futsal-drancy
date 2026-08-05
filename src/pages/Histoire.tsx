import { motion } from 'motion/react';
import { Shield, Sparkles, Award, Trophy, Heart, Users, Target, ArrowRight } from 'lucide-react';

export default function Histoire() {
  const timelineEvents = [
    {
      year: '2003',
      title: 'Fondation & Vision Initiale',
      tag: 'Origines du Club',
      desc: 'Création officielle du Futsal Drancy par une équipe de passionnés locale. L\'idée de départ était d\'offrir un cadre sportif d\'excellence et un vecteur d\'intégration sociale et éducative pour la jeunesse drancéenne.',
      icon: Shield
    },
    {
      year: '2008 - 2011',
      title: 'Ascension en Championnat FFF',
      tag: 'Compétition & Titres',
      desc: 'Enchaînement de saisons mémorables marquées par des montées successives en divisions départementales puis régionales, et plusieurs sacres en Coupe de Seine-Saint-Denis.',
      icon: Trophy
    },
    {
      year: '2012',
      title: 'Création de la Section Féminine',
      tag: 'Pôle Féminin',
      desc: 'Inauguration de la première équipe féminine du club, visant à promouvoir l\'égalité d\'accès et la pratique du futsal pour toutes dans le 93.',
      icon: Heart
    },
    {
      year: '2018',
      title: 'Labellisation École de Futsal',
      tag: 'Formation des Jeunes',
      desc: 'Structuration complète des catégories de U7 à U18, récompensée par le Label Jeunes de la FFF pour la qualité de son encadrement pédagogique.',
      icon: Users
    },
    {
      year: '2024',
      title: 'Partenariat avec le Red Star FC',
      tag: 'Synergie Sportive',
      desc: 'Signature d\'un partenariat stratégique facilitant les ponts entre le futsal et le football à 11 pour l\'épanouissement de nos meilleurs talents.',
      icon: Target
    },
    {
      year: '2026 - 2027',
      title: 'Ambition Régional 2',
      tag: 'Ère Moderne',
      desc: 'Engagement du club au sommet du futsal francilien avec plus de 300 licenciés, une équipe première ambitieuse et une académie modèle.',
      icon: Award
    }
  ];

  const clubValues = [
    {
      word: 'PASSION',
      icon: Heart,
      desc: 'L\'amour inconditionnel du ballon rond, du jeu rapide et du spectacle.'
    },
    {
      word: 'ENGAGEMENT',
      icon: Shield,
      desc: 'Un investissement total sur le terrain et en dehors pour porter le maillot.'
    },
    {
      word: 'CITOYENNETÉ',
      icon: Users,
      desc: 'Le sport comme école de vie, de respect, d\'inclusion et d\'entraide.'
    },
    {
      word: 'PERFORMANCE',
      icon: Target,
      desc: 'La recherche permanente du dépassement de soi et de l\'excellence technique.'
    }
  ];

  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 mx-auto max-w-2xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="w-10 h-[1px] bg-accent/40" />
            <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">
              Heritage & Identité
            </span>
            <div className="w-10 h-[1px] bg-accent/40" />
          </div>
          <h1 className="text-fluid-h1 text-white font-display font-black uppercase tracking-tight">
            HISTOIRE & <span className="text-accent">VALEURS.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body max-w-md mx-auto font-medium">
            Depuis 2003, le Futsal Drancy écrit son histoire avec passion, rigueur et engagement communautaire au cœur de la Seine-Saint-Denis.
          </p>
        </motion.div>

        {/* Golden Highlight Card (Jaune Accent Signature) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-accent text-navy-dark rounded-3xl p-6 md:p-10 max-w-5xl mx-auto shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center space-x-2 bg-navy-dark text-accent px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
              <Sparkles size={12} />
              <span>Esprit de Meute</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black uppercase leading-tight">
              Un Club Ancré dans son Territoire
            </h3>
            <p className="text-navy-dark/80 text-xs md:text-sm font-bold leading-relaxed max-w-2xl">
              Depuis plus de 20 ans, le Futsal Drancy véhicule des valeurs de fraternité, de discipline et de fierté pour toute la communauté drancéenne.
            </p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-navy-dark text-accent flex items-center justify-center shrink-0 shadow-2xl z-10">
            <Trophy size={28} />
          </div>
        </motion.div>

        {/* 4 Mots-clés des Valeurs du Club */}
        <div className="mb-20">
          <div className="text-center mb-8 space-y-1">
            <h2 className="text-fluid-h2 text-white font-display font-black uppercase">
              Nos <span className="text-accent">4 Piliers</span>
            </h2>
            <p className="text-gray-400 text-xs font-medium">
              Les valeurs fondamentales qui guident chaque joueur et encadrant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubValues.map((val, idx) => (
              <motion.div
                key={val.word}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="glass-card card-hover p-5 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                  <val.icon size={22} />
                </div>
                <h3 className="text-accent font-display font-black text-lg md:text-xl uppercase tracking-wide mb-1">
                  {val.word}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed font-medium">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-1">
            <span className="text-accent font-black text-[10px] uppercase tracking-widest">CHRONOLOGIE OFFICIELLE</span>
            <h2 className="text-fluid-h2 text-white font-display font-black uppercase">
              Les Grandes <span className="text-accent">Dates</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-accent/40 pl-6 sm:pl-8 space-y-8 py-2">
            {timelineEvents.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="relative group"
              >
                {/* Node marker bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-navy-dark border-2 border-accent flex items-center justify-center shadow-lg group-hover:border-white transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Timeline Card */}
                <div className="glass-card card-hover rounded-3xl p-5 sm:p-6 relative overflow-hidden border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-accent font-display font-black text-2xl sm:text-3xl tracking-wide">
                      {item.year}
                    </span>
                    <span className="bg-white/10 text-white/80 border border-white/15 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-white font-display font-bold uppercase text-base sm:text-lg mb-1 tracking-wide flex items-center gap-2">
                    {item.title}
                    <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
