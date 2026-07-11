import { motion } from 'motion/react';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function MatchTicker() {
  const matches = CLUB_DATA.matches;
  return (
    <div className="bg-[#020d1c] overflow-hidden whitespace-nowrap py-3 relative border-b border-white/5">
      {/* Premium glowing fade masks on sides */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#020d1c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#020d1c] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >

        {[...matches, ...matches].map((match, i) => (
          <div key={i} className="inline-flex items-center px-8 border-r border-white/5 group cursor-default">
            <span className="text-[10px] font-bold text-accent mr-4 tracking-tighter uppercase">{match.date}</span>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                {match.team1 === 'DRANCY' && (
                  <img src={getAssetPath('assets/logos/drancy-futsal.png')} alt="FD" className="w-5 h-5 object-contain" />
                )}
                <span className={`font-display font-black text-xs uppercase ${match.team1 === 'DRANCY' ? 'text-white' : 'text-white/50'}`}>
                  {match.team1}
                </span>
              </div>

              <div className="bg-white/10 px-2 py-0.5 rounded-sm flex items-center space-x-1 border border-white/5">
                <span className="font-display font-black text-xs text-accent">{match.score1}</span>
                {typeof match.score1 === 'number' && <span className="text-white/20">-</span>}
                <span className="font-display font-black text-xs text-accent">{match.score2}</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className={`font-display font-black text-xs uppercase ${match.team2 === 'DRANCY' ? 'text-white' : 'text-white/50'}`}>
                  {match.team2}
                </span>
                {match.team2 === 'DRANCY' && (
                  <img src={getAssetPath('assets/logos/drancy-futsal.png')} alt="FD" className="w-5 h-5 object-contain" />
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
