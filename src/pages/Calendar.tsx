import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Filter, ChevronRight, Award, Trophy, ExternalLink, ArrowRight } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';
import { getAssetPath } from '../utils/assets';

import { ClubLogo } from '../components/ui/ClubLogo';


const RANKING_DATA = [
  { rank: 1, name: "JS DRANCY", pts: 32, j: 12, g: 10, n: 2, p: 0, f: 0, pbo: 0, bp: 72, bc: 32, diff: 40, trend: "neutral" },
  { rank: 2, name: "NOISY TOUS UNI", pts: 29, j: 12, g: 9, n: 2, p: 1, f: 0, pbo: 0, bp: 63, bc: 33, diff: 30, trend: "neutral" },
  { rank: 3, name: "SPORT ETHIQUE LIVRY 2", pts: 18, j: 12, g: 6, n: 0, p: 6, f: 0, pbo: 0, bp: 39, bc: 29, diff: 10, trend: "win" },
  { rank: 4, name: "LILAS FC 2", pts: 11, j: 12, g: 3, n: 2, p: 7, f: 0, pbo: 0, bp: 42, bc: 64, diff: -22, trend: "neutral" },
  { rank: 5, name: "SOFA 93 2", pts: 7, j: 10, g: 3, n: 2, p: 5, f: 2, pbo: 3, bp: 39, bc: 46, diff: -7, trend: "neutral" },
  { rank: 6, name: "PIERREFITTE F.C. 2", pts: 6, j: 12, g: 2, n: 2, p: 8, f: 0, pbo: 2, bp: 32, bc: 59, diff: -27, trend: "neutral" },
  { rank: 7, name: "ARTISTES FUTSAL 3", pts: 5, j: 11, g: 1, n: 4, p: 6, f: 1, pbo: 1, bp: 30, bc: 54, diff: -24, trend: "neutral" },
  { rank: 8, name: "MONTREUIL A.C.", pts: 0, j: 0, g: 0, n: 0, p: 0, f: 0, pbo: 0, bp: 0, bc: 0, diff: 0, trend: "none" },
  { rank: 9, name: "DRANCY FUTSAL 2", pts: -3, j: 0, g: 0, n: 0, p: 0, f: 3, pbo: 2, bp: 0, bc: 0, diff: 0, trend: "none", isOwn: true }
];

export default function CalendarPage() {
  const { calendar, recentResults } = CLUB_DATA;
  const [activeTab, setActiveTab] = useState<'calendar' | 'ranking'>('calendar');
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categories = ['Tous', ...calendar.map(cat => cat.category)];

  const filteredCalendar = activeFilter === 'Tous'
    ? calendar
    : calendar.filter(cat => cat.category === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16 mx-auto max-w-3xl"
        >
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px]">Compétition {CLUB_DATA.season}</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-white leading-[0.9] font-display font-black uppercase tracking-tighter">
            AGENDA & <br/> <span className="text-accent">RÉSULTATS.</span>
          </h1>
          <p className="text-gray-500 text-[10px] md:text-xs mx-auto uppercase tracking-[0.2em] font-bold">
            Consultez les scores, le classement officiel FFF et le calendrier du club.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-full border border-white/10 flex space-x-1">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'calendar'
                  ? 'bg-accent text-navy-dark shadow-md shadow-accent/15'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Calendrier & Matchs
            </button>
            <button
              onClick={() => setActiveTab('ranking')}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeTab === 'ranking'
                  ? 'bg-accent text-navy-dark shadow-md shadow-accent/15'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy size={12} />
              Classement FFF
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'calendar' ? (
            <motion.div
              key="calendar-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-16"
            >
              {/* Results Bar (Quick Glance) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recentResults.slice(0, 4).map((res, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col items-center">
                    <span className="text-[8px] text-accent font-black uppercase tracking-widest mb-2">{res.team}</span>
                    <div className="text-white font-display font-black text-lg uppercase leading-none">{res.opponent}</div>
                    <div className="text-accent font-black text-xl my-1">{res.score}</div>
                    <span className={`text-[8px] font-black uppercase tracking-widest ${res.status === 'Victoire' ? 'text-green-500' : 'text-yellow-500'}`}>{res.status}</span>
                  </div>
                ))}
              </div>

              {/* Calendar by Categories */}
              <div className="space-y-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 gap-6">
                  <h2 className="text-2xl md:text-3xl text-white font-display font-black uppercase">Calendrier par <span className="text-accent">Catégories</span></h2>
                  
                  {/* Filters Row */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mr-2 flex items-center gap-1.5">
                      <Filter size={12} />
                      Filtrer par :
                    </span>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                          activeFilter === cat 
                            ? 'bg-accent text-navy-dark shadow-lg' 
                            : 'bg-white/5 border border-white/10 text-white hover:border-white/30'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-12">
                  <AnimatePresence mode="popLayout">
                    {filteredCalendar.map((cat, idx) => (
                      <motion.div
                        key={cat.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center space-x-6">
                          <div className="bg-accent text-navy-dark px-6 py-2 font-black uppercase tracking-widest skew-x-[-12deg]">
                            <span className="inline-block skew-x-[12deg]">{cat.category}</span>
                          </div>
                          <div className="flex-1 h-px bg-white/5"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {cat.matches.map((match, mIdx) => (
                            <div 
                              key={mIdx}
                              className="glass-card p-6 border border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden"
                            >
                              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <CalendarIcon size={64} className="text-white" />
                              </div>
                              
                              <div className="flex flex-col space-y-6 relative z-10">
                                <div className="flex justify-between items-start">
                                  <div className="flex flex-col">
                                    <span className="text-accent font-black text-xs uppercase tracking-tighter">{match.date}</span>
                                    <span className="text-white/40 text-[10px] font-bold uppercase">{match.time}</span>
                                  </div>
                                  <span className="bg-white/10 px-2 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest">{match.type}</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                  <div className="text-xl font-display font-black text-white uppercase">DRANCY</div>
                                  <div className="text-accent/30 font-black">VS</div>
                                  <div className="text-xl font-display font-black text-white/40 uppercase">{match.opponent}</div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                  <div className="flex items-center space-x-2 text-gray-500">
                                    <MapPin size={12} />
                                    <span className="text-[9px] font-bold uppercase tracking-widest">{match.location}</span>
                                  </div>
                                  <button className="text-accent hover:text-white transition-colors">
                                    <ChevronRight size={18} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="ranking-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Ranking Header Details */}
              <div className="glass-card rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-[9px] uppercase tracking-widest">
                    <Award size={12} />
                    Officiel FFF
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-black uppercase text-white tracking-wide">
                    Classement Seniors D2 - Poule Unique
                  </h2>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-bold">
                    Saison 2025/2026 • District de Seine-Saint-Denis (93)
                  </p>
                </div>

                <a 
                  href="https://epreuves.fff.fr/competition/club/550738-drancy-futsal/information" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <span>Fiche FFF Officielle</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Ranking Table Container */}
              <div className="glass-card rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative">
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest bg-white/[0.01]">
                        <th className="py-4 px-5 text-center w-12">Pos</th>
                        <th className="py-4 px-5">Équipe</th>
                        <th className="py-4 px-5 text-center font-bold text-accent">Pts</th>
                        <th className="py-4 px-3 text-center">J.</th>
                        <th className="py-4 px-3 text-center">G.</th>
                        <th className="py-4 px-3 text-center">N.</th>
                        <th className="py-4 px-3 text-center">P.</th>
                        <th className="py-4 px-3 text-center hidden md:table-cell">F.</th>
                        <th className="py-4 px-3 text-center hidden md:table-cell">P/Bo.</th>
                        <th className="py-4 px-3 text-center hidden md:table-cell">Bp.</th>
                        <th className="py-4 px-3 text-center hidden md:table-cell">Bc.</th>
                        <th className="py-4 px-5 text-center font-bold">Diff.</th>
                        <th className="py-4 px-5 text-center w-24">Série</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {RANKING_DATA.map((row) => {
                        const isDrancy = row.name.includes("DRANCY");
                        const isOwnTeam = row.isOwn;
                        
                        return (
                          <motion.tr 
                            key={row.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`transition-colors duration-300 group hover:bg-white/[0.02] ${
                              isOwnTeam 
                                ? 'bg-accent/5 hover:bg-accent/10 border-l-2 border-accent' 
                                : isDrancy 
                                  ? 'bg-white/[0.02]' 
                                  : ''
                            }`}
                          >
                            {/* Position */}
                            <td className="py-4 px-5 text-center">
                              <span className={`text-base font-display font-black ${
                                row.rank <= 3 
                                  ? 'text-accent' 
                                  : row.rank >= 8 
                                    ? 'text-red-500/50' 
                                    : 'text-white'
                              }`}>
                                {row.rank}
                              </span>
                            </td>

                            {/* Team Name + Logo */}
                            <td className="py-4 px-5 font-display font-bold uppercase tracking-wide text-white text-xs md:text-sm">
                              <div className="flex items-center space-x-3">
                                <ClubLogo name={row.name} className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-105 transition-transform duration-300" />
                                <span className={isOwnTeam ? 'text-accent' : ''}>{row.name}</span>
                              </div>
                            </td>

                            {/* Points */}
                            <td className="py-4 px-5 text-center font-display font-black text-sm md:text-base text-accent">
                              {row.pts}
                            </td>

                            {/* Played, Won, Drawn, Lost */}
                            <td className="py-4 px-3 text-center text-xs text-white/60 font-bold">{row.j}</td>
                            <td className="py-4 px-3 text-center text-xs text-white/60 font-bold">{row.g}</td>
                            <td className="py-4 px-3 text-center text-xs text-white/60 font-bold">{row.n}</td>
                            <td className="py-4 px-3 text-center text-xs text-white/60 font-bold">{row.p}</td>
                            
                            {/* Forfeits and Penalties (PC Only) */}
                            <td className="py-4 px-3 text-center text-xs text-white/40 hidden md:table-cell">{row.f}</td>
                            <td className="py-4 px-3 text-center text-xs text-white/40 hidden md:table-cell">{row.pbo}</td>
                            
                            {/* Goals For and Against (PC Only) */}
                            <td className="py-4 px-3 text-center text-xs text-white/40 hidden md:table-cell">{row.bp}</td>
                            <td className="py-4 px-3 text-center text-xs text-white/40 hidden md:table-cell">{row.bc}</td>

                            {/* Goal Difference */}
                            <td className={`py-4 px-5 text-center font-display font-black text-xs md:text-sm ${
                              row.diff > 0 
                                ? 'text-green-500' 
                                : row.diff < 0 
                                  ? 'text-red-500' 
                                  : 'text-white/60'
                            }`}>
                              {row.diff > 0 ? `+${row.diff}` : row.diff}
                            </td>

                            {/* Form Trend */}
                            <td className="py-4 px-5 text-center">
                              <div className="flex justify-center items-center">
                                {row.trend === "win" ? (
                                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" title="Victoire"></span>
                                ) : row.trend === "loss" ? (
                                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-500/20" title="Défaite"></span>
                                ) : row.trend === "neutral" ? (
                                  <span className="w-2.5 h-2.5 rounded-full bg-gray-500 ring-4 ring-gray-500/20" title="Nul / Pas de changement"></span>
                                ) : (
                                  <span className="text-[10px] text-white/20 font-bold">—</span>
                                )}
                              </div>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Info Disclaimer */}
              <p className="text-center text-[9px] uppercase tracking-widest text-white/20 font-bold">
                * Classement officiel de la ligue sous réserve des procédures en cours ou à venir.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
