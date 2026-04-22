import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';

export default function PartnersSection() {
  const { partners } = CLUB_DATA;

  return (
    <section className="bg-navy-dark py-16 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-12">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-500 font-black tracking-[0.4em] uppercase text-[9px]">Ils nous soutiennent</span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 ${partner.isMain ? 'scale-110 opacity-100' : 'scale-90 opacity-70'}`}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-40 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
