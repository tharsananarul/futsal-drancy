import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Trophy, FileText, Download, UsersRound, UserCheck, Calendar, ArrowRight, UserCircle, Briefcase, Award } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';
import { getAssetPath } from '../utils/assets';

export default function Club() {
  const [activeTab, setActiveTab] = useState<'histoire' | 'bureau' | 'staff' | 'inscription'>('histoire');

  // Board of Directors
  const board = {
    president: { name: 'Rodolphe Bleubar', role: 'Président', initial: 'RB', desc: 'Directeur général de la meute, garant des valeurs et de la vision du club.' },
    vicePresidents: [
      { name: 'Gregory Chavaroc', role: 'Vice-Président', initial: 'GC', desc: 'Coordination générale et partenariats publics.' },
      { name: 'Paulo Pereira Lima', role: 'Vice-Président', initial: 'PPL', desc: 'Responsable logistique et sponsoring.' },
      { name: 'Olivier Flury', role: 'Vice-Président', initial: 'OF', desc: 'Développement sportif et liaison FFF.' }
    ],
    members: [
      { name: 'Nabila Tir', role: 'Secrétaire Général', initial: 'NT' },
      { name: 'Annie Guyot', role: 'Trésorier', initial: 'AG' },
      { name: 'Kahina Belkorchia', role: 'Resp. Pôle Communication', initial: 'KB' },
      { name: 'Tharsanan Arul', role: 'Community Manager', initial: 'TA' },
      { name: 'Stéphane Smague', role: 'Responsable Technique Futsal', initial: 'SS' },
      { name: 'Olivier Flury', role: 'Responsable Pôle Équipement', initial: 'OF' },
      { name: 'Nelly Bleubar', role: 'Responsable Buvette et Collations', initial: 'NB' },
      { name: 'Saer Wade', role: 'Dirigeant Équipe Seniors', initial: 'SW' }
    ]
  };

  // Technical Staff
  const technicalStaff = [
    { category: 'Référent Partenaire', role: 'Référent Red Star', name: 'Eden (Edouard)', color: 'from-green-500/20 to-emerald-500/5 border-green-500/20 text-green-400' },
    { category: 'Séniors Féminines', role: 'Éducateur Référent', name: 'Stéphane', color: 'from-pink-500/20 to-rose-500/5 border-pink-500/20 text-pink-400' },
    { category: 'Séniors Masculines (R2 - S1, S2, S3)', role: 'Éducateur Référent', name: 'Saer', color: 'from-accent/20 to-yellow-500/5 border-accent/20 text-accent' },
    { 
      category: 'Catégories U16 - U18', 
      role: 'Éducateur Référent', 
      name: 'Edouard', 
      staff: ['Nabila', 'Edouard', 'Yvan'],
      color: 'from-blue-500/20 to-indigo-500/5 border-blue-500/20 text-blue-400' 
    },
    { category: 'Catégories U11 - U15', role: 'Éducatrice Référente', name: 'Nabila', color: 'from-purple-500/20 to-violet-500/5 border-purple-500/20 text-purple-400' },
    { category: 'École de Foot (U7 à U10)', role: 'Éducateur Référent', name: 'Mohamed', color: 'from-amber-500/20 to-orange-500/5 border-amber-500/20 text-amber-400' },
    { category: 'Baby Foot (U5 - U6)', role: 'Responsable Éducateur', name: 'Twinity', color: 'from-orange-500/20 to-red-500/5 border-orange-500/20 text-orange-400' },
  ];

  // Timeline events
  const timeline = [
    { year: '2003', title: 'Fondation du Club', description: "Création du Futsal Drancy avec l'ambition d'apporter une structure sportive et éducative dédiée aux jeunes de la commune." },
    { year: '2012', title: 'Création de la Section Féminine', description: 'Ouverture de la première section féminine pour encourager la pratique du futsal féminin dans le département.' },
    { year: '2018', title: 'Développement de l\'École de Foot', description: 'Structuration des catégories jeunes de U7 à U15, labellisée par la fédération pour la qualité de son encadrement.' },
    { year: '2024', title: 'Partenariat avec le Red Star', description: "Mise en place d'une synergie sportive historique avec le Red Star FC pour faciliter la passerelle foot à 11 / futsal." },
    { year: '2025', title: 'Saison Historique R2', description: 'Engagement renforcé de nos séniors masculines et féminines au niveau régional avec des objectifs de montée.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16 mx-auto max-w-3xl"
        >
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[9px]">L'institution</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white leading-[0.9] font-display font-black uppercase tracking-wide">
            LE CLUB & <br/> <span className="text-accent">ORGANISATION.</span>
          </h1>
          <p className="text-gray-500 text-[10px] md:text-xs mx-auto uppercase tracking-[0.15em] font-bold">
            Découvrez notre histoire, nos valeurs et l'organigramme administratif & technique.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-2xl mx-auto border-b border-white/5 pb-8">
          {[
            { id: 'histoire', label: 'Histoire & Valeurs', icon: Shield },
            { id: 'bureau', label: 'Bureau Directeur', icon: UsersRound },
            { id: 'staff', label: 'Staff Technique', icon: UserCheck },
            { id: 'inscription', label: 'Inscriptions', icon: FileText }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeTab === tab.id 
                  ? 'bg-accent border-accent text-navy-dark shadow-lg shadow-accent/15 scale-102' 
                  : 'bg-white/5 border-white/5 text-white/50 hover:border-white/10 hover:text-white'
              }`}
            >
              <tab.icon size={12} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* HISTOIRE & VALEURS */}
            {activeTab === 'histoire' && (
              <div className="space-y-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-accent font-bold tracking-widest text-[9px] uppercase">Depuis 2003</span>
                      <h2 className="text-3xl md:text-4xl text-white font-display font-black uppercase tracking-wide">Notre Identité</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Fondé en 2003, le Futsal Drancy est né de la volonté de ses créateurs de proposer une alternative sportive dynamique et fédératrice en Seine-Saint-Denis. L'idée de départ était de démocratiser le futsal, d'offrir aux jeunes de la commune un encadrement structuré et de véhiculer des valeurs citoyennes à travers le sport.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Au fil des années, le club est devenu une véritable institution locale, reconnue tant pour ses performances en compétition que pour son rôle social. En 2012, le club a franchi un nouveau cap avec la création officielle de sa section féminine, ouvrant de nouvelles opportunités de pratique pour toutes.
                    </p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
                    <h3 className="text-xl text-white font-display font-bold uppercase tracking-wide">Nos Valeurs Clés</h3>
                    <div className="grid gap-6">
                      {CLUB_DATA.values.map((val, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-sm">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="text-white font-bold uppercase text-xs mb-1 tracking-wide">{val.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{val.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-12 max-w-4xl mx-auto">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl text-white font-display font-bold uppercase tracking-wide">Grandes Dates</h2>
                    <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Le parcours de la meute à travers le temps.</p>
                  </div>
                  
                  {/* Premium Timeline Layout */}
                  <div className="relative border-l-2 border-white/5 pl-8 md:pl-12 space-y-12 py-4">
                    {timeline.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="relative group"
                      >
                        {/* Live pulsating bullet */}
                        <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#020d1c] border-2 border-accent flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300"></div>
                          {idx === timeline.length - 1 && (
                            <span className="absolute inset-0 rounded-full border border-accent/60 animate-ping"></span>
                          )}
                        </div>
                        
                        <div className="glass-card card-hover rounded-3xl p-6 md:p-8 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <span className="text-accent font-display font-bold text-3xl lg:text-4xl tracking-wider">{item.year}</span>
                          <h4 className="text-white font-display font-bold uppercase text-lg lg:text-xl mt-1 mb-2 tracking-wide flex items-center gap-2">
                            {item.title}
                            <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                          </h4>
                          <p className="text-gray-400 text-sm lg:text-base leading-relaxed">{item.description}</p>
                        </div>

                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* BUREAU DIRECTEUR */}
            {activeTab === 'bureau' && (
              <div className="space-y-16 max-w-5xl mx-auto">
                <div className="text-center space-y-2 mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-display font-bold uppercase tracking-wide">Le Bureau Directeur</h2>
                  <p className="text-white/40 text-[10px] md:text-xs lg:text-sm uppercase tracking-widest font-bold">La structure administrative et décisionnelle de l'association.</p>
                </div>

                {/* Interactive Organigramme Layout */}
                <div className="space-y-8">
                  {/* Level 1: President */}
                  <div className="flex flex-col items-center">
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-full max-w-[260px] md:max-w-md"
                    >
                      <div className="glass-card rounded-2xl md:rounded-[2rem] border-accent/20 p-4 md:p-10 text-center relative overflow-hidden group hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(245,185,9,0.15)] transition-all duration-500">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div className="mx-auto w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-accent to-yellow-500 p-0.5 flex items-center justify-center mb-3 md:mb-5 shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full rounded-full bg-navy-dark flex items-center justify-center text-accent font-display font-bold text-base md:text-2xl">
                            {board.president.initial}
                          </div>
                        </div>

                        <span className="text-[8px] md:text-xs uppercase tracking-widest text-accent flex items-center justify-center gap-1 md:gap-1.5 font-bold">
                          <Award size={10} className="md:size-3.5" />
                          {board.president.role}
                        </span>
                        <h3 className="text-base md:text-3xl font-display font-bold uppercase text-white mt-1 md:mt-2 mb-1.5 md:mb-3 leading-none tracking-wide">{board.president.name}</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm lg:text-base max-w-xs mx-auto leading-relaxed">{board.president.desc}</p>
                      </div>
                    </motion.div>
                    
                    {/* Visual Connection Line */}
                    <div className="w-[1.5px] h-8 bg-gradient-to-b from-accent/30 to-white/5"></div>
                  </div>

                  {/* Level 2: Vice Presidents Grid (3 columns on mobile) */}
                  <div className="space-y-6 md:space-y-8 flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-2 md:gap-6 w-full">
                      {board.vicePresidents.map((vp, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="glass-card card-hover rounded-xl md:rounded-3xl p-3 md:p-8 text-center group relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-16 h-16 bg-accent/3 rounded-full blur-xl pointer-events-none"></div>
                          
                          <div className="mx-auto w-8 h-8 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                            <span className="text-white/60 group-hover:text-accent font-display font-bold text-xs md:text-lg transition-colors">{vp.initial}</span>
                          </div>

                          <span className="text-accent font-black text-[7px] md:text-[10px] lg:text-xs uppercase tracking-[0.1em] mb-1 block leading-none">{vp.role}</span>
                          <h4 className="text-white font-display font-bold text-[10px] md:text-lg lg:text-xl uppercase leading-tight tracking-wide break-words">{vp.name}</h4>
                          <p className="hidden md:block text-gray-400 text-xs lg:text-sm leading-relaxed mt-2.5 max-w-[220px] mx-auto">{vp.desc}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Visual Connection Line */}
                    <div className="w-[1.5px] h-8 bg-white/5"></div>
                  </div>

                  {/* Level 3: Administrators / Board Members (3 columns on mobile) */}
                  <div className="space-y-4 w-full">
                    <span className="block text-center text-white/30 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4">Membres du Comité Administrateur</span>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 w-full">
                      {board.members.map((member, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="bg-white/[0.01] border border-white/5 hover:border-accent/15 p-3 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.03] transition-all duration-300 group"
                        >
                          <div className="w-7 h-7 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:border-accent/20 transition-all duration-300 font-display font-bold text-[9px] md:text-sm mb-2">
                            {member.initial}
                          </div>
                          <span className="text-white/40 font-bold text-[7px] md:text-[10px] lg:text-xs uppercase tracking-wider block mb-1 group-hover:text-white/50 transition-colors leading-none">{member.role}</span>
                          <h4 className="text-white font-bold text-[9px] md:text-sm lg:text-base uppercase leading-tight tracking-wide group-hover:text-accent transition-colors break-words">{member.name}</h4>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}


            {/* STAFF TECHNIQUE */}
            {activeTab === 'staff' && (
              <div className="space-y-12 max-w-5xl mx-auto">
                <div className="text-center space-y-2 mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-display font-bold uppercase tracking-wide">Staff Technique & Référents</h2>
                  <p className="text-white/40 text-[10px] md:text-xs lg:text-sm uppercase tracking-widest font-bold">L'équipe pédagogique et sportive encadrant nos licenciés.</p>
                </div>

                {/* Staff Cards Bento Layout (2 columns on mobile, 3 on PC) */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

                  {technicalStaff.map((staff, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.5 }}
                      className="glass-card rounded-2xl md:rounded-[2rem] p-4 md:p-8 flex flex-col justify-between hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group relative overflow-hidden"
                    >
                      {/* Top Accent Strip */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${staff.color.includes('green') ? 'from-green-500/50 to-emerald-500/50' : staff.color.includes('pink') ? 'from-pink-500/50 to-rose-500/50' : staff.color.includes('blue') ? 'from-blue-500/50 to-indigo-500/50' : staff.color.includes('purple') ? 'from-purple-500/50 to-violet-500/50' : staff.color.includes('yellow') || staff.color.includes('amber') ? 'from-yellow-500/50 to-amber-500/50' : 'from-accent/50 to-yellow-500/50'}`}></div>

                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] md:text-xs uppercase font-black tracking-widest text-white/30 truncate max-w-[80%]">{staff.category}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                        </div>
                        
                        <div className="space-y-1 md:space-y-2">
                          <h3 className="text-sm md:text-2xl lg:text-3xl font-display font-bold uppercase text-white leading-tight tracking-wide">{staff.name}</h3>
                          <p className="text-[9px] md:text-sm lg:text-base uppercase font-bold tracking-wider text-accent/80 flex items-center gap-1">
                            <Briefcase size={10} className="md:size-3.5" />
                            <span className="truncate">{staff.role}</span>
                          </p>
                        </div>
                      </div>

                      {/* Educators inside categories if present */}
                      {'staff' in staff ? (
                        <div className="mt-3 md:mt-6 pt-3 md:pt-4 border-t border-white/5 space-y-1.5 md:space-y-2.5">
                          <span className="text-[7px] md:text-xs uppercase font-black text-white/30 tracking-wider block">Éducateurs :</span>
                          <div className="flex flex-wrap gap-1">
                            {(staff as any).staff.map((name: string, i: number) => (
                              <span key={i} className="bg-white/5 border border-white/10 text-white font-bold text-[8px] md:text-xs px-2 py-0.5 md:px-3 md:py-1.5 rounded-lg uppercase tracking-wider hover:bg-accent hover:text-navy-dark hover:border-accent transition-all duration-300 cursor-default">
                                {name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-6 md:mt-8 pt-3 md:pt-4 border-t border-white/5 flex items-center justify-between text-[7px] md:text-xs font-black uppercase text-white/15 tracking-[0.2em]">
                          <span>DRANCY</span>
                          <span>STAFF</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}



            {/* INSCRIPTIONS */}
            {activeTab === 'inscription' && (
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl md:text-3xl text-white font-display font-bold uppercase tracking-wide">Rejoindre Futsal Drancy</h2>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Informations pratiques et documents administratifs.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* General details */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
                    <h3 className="text-lg text-white font-display font-bold uppercase tracking-wide">Informations Pratiques</h3>
                    
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-accent font-black uppercase text-[10px] tracking-widest mb-1">Tarif Cotisation</h4>
                        <p className="text-white font-black text-xl leading-none">180€ <span className="text-xs text-white/40 font-medium">/ saison (comprend licence + équipements)</span></p>
                      </div>
                      
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <h4 className="text-accent font-black uppercase text-[10px] tracking-widest mb-1.5">Pièces Justificatives Obligatoires</h4>
                        <ul className="space-y-1.5 text-xs text-gray-400 font-medium list-disc list-inside">
                          <li>1 Photo d'identité récente</li>
                          <li>Copie de la Pièce d'Identité (recto/verso) ou Passeport</li>
                          <li>Certificat médical d'aptitude au futsal en compétition</li>
                          <li>Fiche d'inscription complétée</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Document Box */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-between space-y-8 hover:border-accent/20 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                        <FileText size={24} />
                      </div>
                      <h3 className="text-lg text-white font-display font-bold uppercase tracking-wide">Dossier Complet PDF</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Téléchargez le dossier d'inscription officiel comprenant la fiche de licence FFF, le formulaire médical et le planning des entraînements.
                      </p>
                    </div>

                    <a 
                      href={getAssetPath('dossier-inscription.pdf')}
                      download
                      className="btn-accent py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 rounded-xl"
                    >
                      <Download size={16} />
                      <span>Télécharger le dossier</span>
                    </a>
                  </div>
                </div>

                {/* Shooting Photo Note */}
                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h4 className="text-white font-display font-bold uppercase text-base md:text-lg tracking-wide">Shooting Photo Officiel</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Le shooting photo officiel du club aura lieu début septembre. Tous les joueurs (équipes masculines et féminines) doivent être présents avec les équipements officiels fournis. Les photos de portrait du staff technique et administratif seront également réalisées à cette occasion.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
