import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLUB_DATA } from '../data/clubData';
import { Users, UserCircle, Calendar, Award } from 'lucide-react';

export default function Team() {
  const { season, teams } = CLUB_DATA;
  const [activeSection, setActiveSection] = useState<'garcons' | 'filles'>('garcons');

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Decorative background shadows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 mx-auto max-w-3xl">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[9px]">Saison {season}</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white leading-[0.9] font-display font-black uppercase tracking-wide">
            LES ÉQUIPES.
          </h1>
          <p className="text-gray-500 text-[10px] md:text-xs mx-auto uppercase tracking-[0.15em] font-bold">
            Consultez les différents effectifs masculins et féminins engagés en compétition.
          </p>
        </div>

        {/* Section Selector (Bento Hero Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {[
            { id: 'garcons', label: 'Section Masculine', icon: Users, image: CLUB_DATA.teams.garcons[0].image, desc: 'Nos équipes masculines, des jeunes aux séniors (R2).' },
            { id: 'filles', label: 'Section Féminine', icon: UserCircle, image: CLUB_DATA.teams.filles[0].image, desc: 'Notre pôle féminin en plein essor, école de foot et séniors.' }
          ].map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as 'garcons' | 'filles')}
                className={`relative overflow-hidden rounded-3xl aspect-[16/8] md:aspect-[16/6] group transition-all duration-700 pointer-events-auto text-left ${
                  isActive 
                    ? 'ring-2 ring-accent scale-[1.02] shadow-[0_20px_50px_rgba(245,185,9,0.15)]' 
                    : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.01]'
                }`}
              >
                {/* Background image zoom */}
                <img 
                  src={section.image} 
                  alt={section.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* Gradients */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  isActive 
                    ? 'bg-linear-to-t from-navy-dark/95 via-navy-dark/50 to-transparent' 
                    : 'bg-navy-dark/90 group-hover:bg-linear-to-t group-hover:from-navy-dark/95 group-hover:via-navy-dark/60'
                }`}></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-accent text-navy-dark shadow-lg shadow-accent/25' : 'bg-white/5 border border-white/10 text-white'
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
                    <h3 className="text-xl md:text-2xl text-white font-display font-bold uppercase tracking-wide leading-none mb-1">
                      {section.label}
                    </h3>
                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed max-w-xs font-sans line-clamp-1 group-hover:text-white/80 transition-colors">
                      {section.desc}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Teams Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center space-x-6 mb-12">
              <h2 className="text-2xl md:text-3xl text-white font-display font-bold uppercase tracking-wide">
                EFFECTIF <span className="text-accent">{activeSection === 'garcons' ? 'MASCULIN' : 'FÉMININ'}</span>
              </h2>
              <div className="flex-grow h-[1px] bg-white/5"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams[activeSection].map((team, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="glass-card card-hover overflow-hidden rounded-[2rem] border border-white/5 hover:border-accent/20 group relative cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={team.image} 
                      alt={team.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 space-y-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-accent font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em]">Futsal Drancy</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      <span className="text-white/40 text-[10px] lg:text-xs font-bold uppercase tracking-widest">{season}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl text-white font-display font-bold uppercase tracking-wide leading-none">{team.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Categories Table Section (Dashboard Grid look) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl text-white font-display font-bold uppercase tracking-wide">
              Guide des <span className="text-accent">Catégories</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold">
              Trouvez votre équipe selon votre acquisition de licence (Saison 2025/2026)
            </p>
          </div>

          <div className="glass-card rounded-[2rem] overflow-hidden border border-white/5 p-6 md:p-8 space-y-2.5">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-3 border-b border-white/5 pb-4 px-6 mb-2">
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
                className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 md:border-transparent p-5 md:p-4 rounded-2xl md:rounded-xl transition-all duration-300 items-center group cursor-default"
              >
                {/* Year */}
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-white/30 text-[9px] md:text-xs font-black uppercase tracking-wider">Année</span>
                  <span className="text-accent font-display font-bold text-sm lg:text-base tracking-wide group-hover:scale-105 transition-transform">
                    {row.year}
                  </span>
                </div>

                {/* Category tag box */}
                <div className="flex justify-between md:justify-center items-center md:border-x md:border-white/5 px-2">
                  <span className="md:hidden text-white/30 text-[9px] md:text-xs font-black uppercase tracking-wider">Catégorie</span>
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
                  <span className="md:hidden text-white/30 text-[9px] md:text-xs font-black uppercase tracking-wider">Âge</span>
                  <span className="text-gray-400 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                    {row.age}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer note */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-white/20">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.25em]">Ouvert aux Garçons et aux Filles</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

