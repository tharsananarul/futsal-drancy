import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Filter, ChevronRight, Award, Trophy, ExternalLink } from 'lucide-react';
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
    <div className="pt-28 lg:pt-36 pb-20 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 mx-auto max-w-2xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="w-10 h-[1px] bg-accent/40"></div>
            <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">Compétition {CLUB_DATA.season}</span>
            <div className="w-10 h-[1px] bg-accent/40"></div>
          </div>
          <h1 className="text-fluid-h1 text-white font-display font-black uppercase tracking-tight">
            AGENDA & <span className="text-accent">RÉSULTATS.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body max-w-md mx-auto font-medium">
            Consultez les scores, le classement officiel FFF et le calendrier complet des équipes.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 p-1 rounded-full border border-white/10 flex space-x-1">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-accent text-navy-dark shadow-md shadow-accent/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Calendrier & Matchs
            </button>
            <button
              onClick={() => setActiveTab('ranking')}
              className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'ranking'
                  ? 'bg-accent text-navy-dark shadow-md shadow-accent/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy size={13} />
              <span>Classement FFF</span>
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
              className="space-y-12"
            >
              {/* Results Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recentResults.slice(0, 4).map((res, i) => (
                  <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center text-center border border-white/10">
                    <span className="text-[9px] text-accent font-black uppercase tracking-wider mb-1">{res.team}</span>
                    <div className="text-white font-display font-bold text-sm uppercase leading-tight">{res.opponent}</div>
                    <div className="text-accent font-display font-black text-lg my-1">{res.score}</div>
                    <span className={`text-[9px] font-black uppercase tracking-wider ${res.status === 'Victoire' ? 'text-green-400' : 'text-yellow-400'}`}>{res.status}</span>
                  </div>
                ))}
              </div>

              {/* Calendar by Categories */}
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 gap-4">
                  <h2 className="text-xl md:text-3xl text-white font-display font-black uppercase tracking-wide">
                    Calendrier par <span className="text-accent">Catégories</span>
                  </h2>
                  
                  {/* Filters Row */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-wider mr-1 flex items-center gap-1">
                      <Filter size={11} />
                      Filtrer :
                    </span>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          activeFilter === cat 
                            ? 'bg-accent text-navy-dark shadow' 
                            : 'bg-white/5 border border-white/10 text-white/80 hover:border-white/30'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-10">
                  <AnimatePresence mode="popLayout">
                    {filteredCalendar.map((cat, idx) => (
                      <motion.div
                        key={cat.category}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="bg-accent text-navy-dark px-4 py-1.5 rounded-xl font-black uppercase tracking-wider text-xs">
                            <span>{cat.category}</span>
                          </div>
                          <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {cat.matches.map((match, mIdx) => (
                            <div 
                              key={mIdx}
                              className="glass-card card-hover p-5 rounded-3xl border border-white/10 relative overflow-hidden group"
                            >
                              <div className="flex flex-col space-y-4 relative z-10">
                                <div className="flex justify-between items-start">
                                  <div className="flex flex-col">
                                    <span className="text-accent font-black text-xs uppercase tracking-tight">{match.date}</span>
                                    <span className="text-gray-400 text-[10px] font-medium">{match.time}</span>
                                  </div>
                                  <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-[8px] font-black text-white uppercase tracking-wider">{match.type}</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                  <div className="text-base md:text-lg font-display font-black text-white uppercase">DRANCY</div>
                                  <div className="text-accent/40 font-black text-xs">VS</div>
                                  <div className="text-base md:text-lg font-display font-black text-white/60 uppercase">{match.opponent}</div>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                  <div className="flex items-center space-x-1.5 text-gray-400">
                                    <MapPin size={11} />
                                    <span className="text-[9px] font-semibold uppercase tracking-wider">{match.location}</span>
                                  </div>
                                  <ChevronRight size={16} className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
              className="space-y-6"
            >
              {/* Ranking Header */}
              <div className="glass-card rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 border border-white/10">
                <div className="space-y-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-[9px] uppercase tracking-wider">
                    <Award size={11} />
                    Officiel FFF
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-black uppercase text-white tracking-wide">
                    Classement Seniors D2 - Poule Unique
                  </h2>
                  <p className="text-gray-400 text-xs font-medium">
                    Saison 2026/2027 • District de Seine-Saint-Denis (93)
                  </p>
                </div>

                <a 
                  href="https://epreuves.fff.fr/competition/club/550738-drancy-futsal/information" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline space-x-2 text-xs py-2 px-4 shrink-0"
                >
                  <span>Fiche FFF Officielle</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Ranking Table */}
              <div className="glass-card rounded-3xl overflow-x-auto border border-white/10 shadow-2xl">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[9px] font-black uppercase tracking-wider bg-white/[0.01]">
                      <th className="py-3 px-4 text-center w-10">Pos</th>
                      <th className="py-3 px-4">Équipe</th>
                      <th className="py-3 px-4 text-center font-bold text-accent">Pts</th>
                      <th className="py-3 px-2.5 text-center">J.</th>
                      <th className="py-3 px-2.5 text-center">G.</th>
                      <th className="py-3 px-2.5 text-center">N.</th>
                      <th className="py-3 px-2.5 text-center">P.</th>
                      <th className="py-3 px-2.5 text-center hidden md:table-cell">F.</th>
                      <th className="py-3 px-2.5 text-center hidden md:table-cell">P/Bo.</th>
                      <th className="py-3 px-2.5 text-center hidden md:table-cell">Bp.</th>
                      <th className="py-3 px-2.5 text-center hidden md:table-cell">Bc.</th>
                      <th className="py-3 px-4 text-center font-bold">Diff.</th>
                      <th className="py-3 px-4 text-center w-20">Série</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {RANKING_DATA.map((row) => {
                      const isDrancy = row.name.includes("DRANCY");
                      const isOwnTeam = row.isOwn;
                      
                      return (
                        <tr 
                          key={row.name}
                          className={`transition-colors duration-300 ${
                            isOwnTeam 
                              ? 'bg-accent/10 border-l-2 border-accent' 
                              : isDrancy 
                                ? 'bg-white/[0.03]' 
                                : 'hover:bg-white/[0.02]'
                          }`}
                        >
                          <td className="py-3 px-4 text-center">
                            <span className={`text-sm font-display font-black ${
                              row.rank <= 3 
                                ? 'text-accent' 
                                : row.rank >= 8 
                                  ? 'text-red-400' 
                                  : 'text-white'
                            }`}>
                              {row.rank}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-display font-bold uppercase text-white text-xs md:text-sm">
                            <div className="flex items-center space-x-2.5">
                              <ClubLogo name={row.name} className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
                              <span className={isOwnTeam ? 'text-accent' : ''}>{row.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center font-display font-black text-sm md:text-base text-accent">
                            {row.pts}
                          </td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/70 font-semibold">{row.j}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/70 font-semibold">{row.g}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/70 font-semibold">{row.n}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/70 font-semibold">{row.p}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/40 hidden md:table-cell">{row.f}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/40 hidden md:table-cell">{row.pbo}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/40 hidden md:table-cell">{row.bp}</td>
                          <td className="py-3 px-2.5 text-center text-xs text-white/40 hidden md:table-cell">{row.bc}</td>
                          <td className={`py-3 px-4 text-center font-display font-black text-xs md:text-sm ${
                            row.diff > 0 ? 'text-green-400' : row.diff < 0 ? 'text-red-400' : 'text-white/60'
                          }`}>
                            {row.diff > 0 ? `+${row.diff}` : row.diff}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className="flex justify-center items-center">
                              {row.trend === "win" ? (
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-green-500/20"></span>
                              ) : row.trend === "loss" ? (
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-red-500/20"></span>
                              ) : row.trend === "neutral" ? (
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-500 ring-2 ring-gray-500/20"></span>
                              ) : (
                                <span className="text-[10px] text-white/20 font-bold">—</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
