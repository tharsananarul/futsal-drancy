import { motion } from 'motion/react';

const STATS = [
  { label: 'Fondé en', value: '2003' },
  { label: 'Titres', value: '12' },
  { label: 'Membres', value: '250+' },
  { label: 'Division', value: 'D1' },
];

export default function StatsOverview() {
  return (
    <section className="bg-navy-dark py-24 relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`text-center px-8 ${idx !== STATS.length - 1 ? 'lg:border-r border-white/10' : ''}`}
            >
              <span className="block text-white font-display text-6xl md:text-8xl font-black mb-2 italic tracking-tighter">{stat.value}</span>
              <span className="block text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
