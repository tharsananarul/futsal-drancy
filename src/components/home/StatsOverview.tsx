import { motion } from 'motion/react';
import { Shield, Trophy, Users, Star } from 'lucide-react';

const STATS = [
  { 
    label: 'Fondation', 
    value: '2003', 
    desc: "Plus de 20 ans d'histoire, de passion et de formation en Seine-Saint-Denis.",
    icon: Shield 
  },
  { 
    label: 'Palmarès', 
    value: '12', 
    desc: 'Coupes et titres de championnats remportés par nos différentes catégories.',
    icon: Trophy 
  },
  { 
    label: 'Membres', 
    value: '250+', 
    desc: 'Licenciés actifs, des U5 aux Vétérans, encadrés par nos éducateurs diplômés.',
    icon: Users 
  },
  { 
    label: 'Niveau', 
    value: 'Régional 2', 
    desc: "Une ambition d'excellence sportive pour ramener le club au plus haut niveau.",
    icon: Star 
  },
];

export default function StatsOverview() {
  return (
    <section className="bg-[#020d1c] py-20 relative overflow-hidden border-y border-white/5">
      {/* Premium glowing background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/5 border-l-2 border-l-accent/40 rounded-3xl p-6 md:p-8 hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                {/* Glowing light up effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-accent/0 via-accent/20 to-accent/0"></div>
                
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-105 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_rgba(245,185,9,0.3)] transition-all duration-500">
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="block text-white font-display text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-none group-hover:[text-shadow:0_0_20px_rgba(245,185,9,0.4)] transition-all duration-500">
                    {stat.value}
                  </span>
                  <span className="block text-accent text-[10px] lg:text-xs font-black uppercase tracking-[0.25em]">
                    {stat.label}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed pt-1">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>

            );
          })}
        </div>
      </div>
    </section>
  );
}
