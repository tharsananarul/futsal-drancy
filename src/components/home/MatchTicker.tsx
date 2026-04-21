import { motion } from 'motion/react';

const MATCHES = [
  { team1: 'ST PIERRE', team2: 'DRANCY', score1: 2, score2: 5, date: 'TERMINE' },
  { team1: 'DRANCY', team2: 'TOULOUSE', score1: 3, score2: 1, date: 'TERMINE' },
  { team1: 'LILLE', team2: 'DRANCY', score1: 4, score2: 4, date: 'TERMINE' },
  { team1: 'DRANCY', team2: 'STRASBOURG', score1: 'VS', score2: '', date: '26 AVRIL' },
  { team1: 'NANTES', team2: 'DRANCY', score1: 'VS', score2: '', date: '03 MAI' },
  { team1: 'DRANCY', team2: 'MARSEILLE', score1: 'VS', score2: '', date: '10 MAI' },
];

export default function MatchTicker() {
  return (
    <div className="bg-navy-dark overflow-hidden whitespace-nowrap py-3 relative border-b border-white/5">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...MATCHES, ...MATCHES].map((match, i) => (
          <div key={i} className="inline-flex items-center px-8 border-r border-white/5 group cursor-default">
            <span className="text-[10px] font-bold text-accent mr-4 tracking-tighter italic uppercase">{match.date}</span>
            <div className="flex items-center space-x-3">
              <span className={`font-display font-black text-xs uppercase ${match.team1 === 'DRANCY' ? 'text-white' : 'text-white/50'}`}>
                {match.team1}
              </span>
              <div className="bg-white/10 px-2 py-0.5 rounded-sm flex items-center space-x-1 border border-white/5">
                <span className="font-display font-black text-xs text-accent italic">{match.score1}</span>
                {typeof match.score1 === 'number' && <span className="text-white/20">-</span>}
                <span className="font-display font-black text-xs text-accent italic">{match.score2}</span>
              </div>
              <span className={`font-display font-black text-xs uppercase ${match.team2 === 'DRANCY' ? 'text-white' : 'text-white/50'}`}>
                {match.team2}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
