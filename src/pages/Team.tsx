import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLUB_DATA } from '../data/clubData';
import { Users, UserCircle, Shield, Award } from 'lucide-react';
import HoverCard from '../components/ui/HoverCard';
import { getAssetPath } from '../utils/assets';

export default function Team() {
  const { season, teams } = CLUB_DATA;
  const [activeSection, setActiveSection] = useState<'garcons' | 'filles' | 'organigramme'>('garcons');

  const staffMembers = [
    {
      name: 'Rodolphe Bleubar',
      role: 'Président',
      category: 'Direction',
      email: '550738@lpiff.fr',
      desc: 'Directeur général de la meute, garant de la vision, de l\'éthique et des valeurs du Futsal Drancy.',
      image: getAssetPath('images/1.png')
    },
    {
      name: 'Paulo Pereira Lima',
      role: 'Vice-Président',
      category: 'Direction',
      email: '550738@lpiff.fr',
      desc: 'Responsable de la logistique globale, du sponsoring et du développement partenarial.',
      image: getAssetPath('images/2.png')
    },
    {
      name: 'Nabila Tir',
      role: 'Secrétaire Général / Réf. Arbitre / Réf. PEF',
      category: 'Administration & PEF',
      email: '550738@lpiff.fr',
      desc: 'Gestion administrative, coordination du Programme Éducatif Fédéral (PEF) et pôle arbitrage.',
      image: getAssetPath('images/3.png')
    },
    {
      name: 'Annie Guyot',
      role: 'Trésorier',
      category: 'Finances',
      email: '550738@lpiff.fr',
      desc: 'Gestion financière, trésorerie et conformité du budget de l\'association.',
      image: getAssetPath('images/4.png')
    },
    {
      name: 'Stéphane Smague',
      role: 'Réf. Projet & Technique',
      category: 'Encadrement Sportif',
      email: '550738@lpiff.fr',
      desc: 'Supervision de la politique sportive, plan de formation et projet technique futsal.',
      image: getAssetPath('images/5.png')
    },
    {
      name: 'Kahina Belkorchia',
      role: 'Réf. Féminin & Com',
      category: 'Pôle Féminin & Médias',
      email: '550738@lpiff.fr',
      desc: 'Développement du pôle féminin, communication digitale et relations événementielles.',
      image: getAssetPath('images/6.png')
    },
    {
      name: 'Olivier Flury',
      role: 'Pôle Équipement',
      category: 'Logistique',
      email: '550738@lpiff.fr',
      desc: 'Responsable du parc d\'équipements, des maillots et du matériel de compétition.',
      image: getAssetPath('images/7.png')
    },
    {
      name: 'Nelly Bleubar',
      role: 'Pôle Buvette',
      category: 'Vie du Club',
      email: '550738@lpiff.fr',
      desc: 'Organisation de la buvette, réceptions des matchs à domicile et convivialité.',
      image: getAssetPath('images/8.png')
    },
    {
      name: 'Saer Wade',
      role: 'Dirigeant Séniors',
      category: 'Séniors Masculins',
      email: 'saer936@gmail.com',
      desc: 'Encadrement et direction opérationnelle de l\'équipe première Séniors R2.',
      image: getAssetPath('images/9.png')
    }
  ];

  return (
    <div className="pt-28 lg:pt-36 pb-24 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Decorative background shadows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-14 mx-auto max-w-3xl">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 h-[1px] bg-accent/40"></div>
            <span className="text-accent font-black tracking-[0.3em] uppercase text-fluid-badge">Saison {season}</span>
            <div className="w-12 h-[1px] bg-accent/40"></div>
          </div>
          <h1 className="text-fluid-h1 text-white leading-[0.9] font-display font-black uppercase tracking-wide">
            ÉQUIPES & <span className="text-accent">ORGANIGRAMME.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body mx-auto uppercase tracking-[0.15em] font-medium max-w-xl">
            Consultez nos effectifs masculins, féminins et l'organigramme officiel de notre staff.
          </p>
        </div>

        {/* Section Selector (3 Bento Hero Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {[
            { id: 'garcons', label: 'Section Masculine', icon: Users, image: CLUB_DATA.teams.garcons[0].image, desc: 'Nos équipes masculines, des jeunes aux séniors (R2).' },
            { id: 'filles', label: 'Section Féminine', icon: UserCircle, image: CLUB_DATA.teams.filles[0].image, desc: 'Notre pôle féminin en plein essor.' },
            { id: 'organigramme', label: 'Organigramme & Staff', icon: Shield, image: getAssetPath('images/1.png'), desc: 'L\'équipe dirigeante et encadrante du club.' }
          ].map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as 'garcons' | 'filles' | 'organigramme')}
                className={`relative overflow-hidden rounded-3xl aspect-[16/9] group transition-all duration-500 pointer-events-auto text-left cursor-pointer ${
                  isActive 
                    ? 'ring-2 ring-accent scale-[1.02] shadow-[0_20px_50px_rgba(245,185,9,0.18)]' 
                    : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.01]'
                }`}
              >
                {/* Background image zoom */}
                <img 
                  src={section.image} 
                  alt={section.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75" 
                />
                
                {/* Gradients */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-transparent' 
                    : 'bg-navy-dark/80 group-hover:bg-gradient-to-t group-hover:from-navy-dark/90 group-hover:via-navy-dark/50'
                }`}></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-accent text-navy-dark shadow-lg shadow-accent/25' : 'bg-white/10 border border-white/15 text-white'
                    }`}>
                      <section.icon size={20} />
                    </div>
                    {isActive && (
                      <span className="bg-accent/25 border border-accent/40 text-accent text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg">
                        Actif
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl text-white font-display font-black uppercase tracking-wide leading-tight mb-1">
                      {section.label}
                    </h3>
                    <p className="text-white/70 text-[10px] md:text-xs leading-relaxed max-w-xs font-sans line-clamp-2">
                      {section.desc}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center space-x-6 mb-8">
              <h2 className="text-2xl md:text-3xl text-white font-display font-black uppercase tracking-wide">
                {activeSection === 'organigramme' ? (
                  <>ORGANIGRAMME <span className="text-accent">DÉTAILLÉ</span></>
                ) : (
                  <>EFFECTIF <span className="text-accent">{activeSection === 'garcons' ? 'MASCULIN' : 'FÉMININ'}</span></>
                )}
              </h2>
              <div className="flex-grow h-[1px] bg-white/10"></div>
            </div>

            {/* Golden Accent Highlight Card */}
            <div className="mb-8 bg-accent text-navy-dark rounded-3xl p-5 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <span className="bg-navy-dark text-accent text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Pôle Compétition FFF
                </span>
                <h3 className="text-xl md:text-2xl font-display font-black uppercase leading-tight">
                  {activeSection === 'organigramme' ? "Direction & Encadrement Spécialisé" : "Séniors R2 & Formation d'Élite"}
                </h3>
                <p className="text-navy-dark/80 text-xs font-bold">
                  {activeSection === 'organigramme' 
                    ? "Garant de l'éthique, de la formation sportive et du rayonnement du club." 
                    : "Nos équipes défendent les couleurs de Drancy au sommet du futsal francilien."}
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-navy-dark text-accent flex items-center justify-center shrink-0 shadow-lg">
                <Award size={24} />
              </div>
            </div>

            {activeSection === 'organigramme' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffMembers.map((member, idx) => (
                  <HoverCard
                    key={idx}
                    title={member.name}
                    subtitle={member.role}
                    badge={member.category}
                    email={member.email}
                    image={member.image}
                    aspectRatio="aspect-video"
                    description={member.desc}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teams[activeSection].map((team, idx) => (
                  <HoverCard
                    key={idx}
                    title={team.name}
                    subtitle={`Futsal Drancy • ${season}`}
                    badge={activeSection === 'garcons' ? 'Masculin' : 'Féminin'}
                    image={team.image}
                    aspectRatio="aspect-video"
                    description={`Équipe ${team.name} engagée en compétition officielle FFF sous les couleurs de Drancy.`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Categories Table Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl md:text-4xl text-white font-display font-black uppercase tracking-wide">
              Guide des <span className="text-accent">Catégories</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-bold">
              Trouvez votre équipe selon votre année de naissance (Saison {season})
            </p>
          </div>

          <div className="glass-card rounded-[2rem] overflow-x-auto border border-white/10 p-6 md:p-8 space-y-2.5">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-3 border-b border-white/10 pb-4 px-6 mb-2">
              <span className="text-white/40 text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] text-center">Année de Naissance</span>
              <span className="text-white/40 text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] text-center">Catégorie (Masculin / Féminin)</span>
              <span className="text-white/40 text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] text-center">Tranche d'Âge</span>
            </div>

            {/* Rows */}
            {[
              { year: '2020', cat: 'U6 - U6F', age: 'Dès 5 ans', isYoung: true },
              { year: '2019', cat: 'U7 - U7F', age: '6 ans', isYoung: true },
              { year: '2018', cat: 'U8 - U8F', age: '7 ans', isYoung: true },
              { year: '2017', cat: 'U9 - U9F', age: '8 ans', isYoung: true },
              { year: '2016', cat: 'U10 - U10F', age: '9 ans', isYoung: true },
              { year: '2015', cat: 'U11 - U11F', age: '10 ans', isYoung: true },
              { year: '2014', cat: 'U12 - U12F', age: '11 ans', isYoung: true },
              { year: '2013', cat: 'U13 - U13F', age: '12 ans', isYoung: true },
              { year: '2012', cat: 'U14 - U14F', age: '13 ans' },
              { year: '2011', cat: 'U15 - U15F', age: '14 ans' },
              { year: '2010', cat: 'U16 - U16F', age: '15 ans' },
              { year: '2009', cat: 'U17 - U17F', age: '16 ans' },
              { year: '2008', cat: 'U18 - U18F', age: '17 ans' },
              { year: '2007', cat: 'U19 - U19F', age: '18 ans' },
              { year: '1991 à 2006', cat: 'Séniors - Séniors F', age: '19 à 34 ans', isSenior: true },
            ].map((row, i) => (
              <div 
                key={i} 
                className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 md:border-transparent p-4 md:p-3.5 rounded-2xl md:rounded-xl transition-all duration-300 items-center group cursor-default"
              >
                {/* Year */}
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-white/40 text-[9px] font-black uppercase tracking-wider">Année</span>
                  <span className="text-accent font-display font-black text-sm lg:text-base tracking-wide group-hover:scale-105 transition-transform">
                    {row.year}
                  </span>
                </div>

                {/* Category tag box */}
                <div className="flex justify-between md:justify-center items-center md:border-x md:border-white/5 px-2">
                  <span className="md:hidden text-white/40 text-[9px] font-black uppercase tracking-wider">Catégorie</span>
                  <span className={`font-bold text-xs lg:text-sm uppercase px-4 py-1.5 rounded-xl ${
                    row.isYoung 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                      : row.isSenior 
                      ? 'bg-accent/10 text-accent border border-accent/20' 
                      : 'bg-white/5 text-white/80 border border-white/10'
                  }`}>
                    {row.cat}
                  </span>
                </div>

                {/* Age */}
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-white/40 text-[9px] font-black uppercase tracking-wider">Âge</span>
                  <span className="text-gray-300 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                    {row.age}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
