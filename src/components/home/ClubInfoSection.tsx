import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';
import { Shield, Target, Heart } from 'lucide-react';
import { getAssetPath } from '../../utils/assets';

export default function ClubInfoSection() {
  const { values } = CLUB_DATA;

  const icons = [Shield, Target, Heart];

  return (
    <section className="bg-navy-dark py-16 md:py-32 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Notre Identité</span>
              </div>
              <h2 className="text-4xl md:text-7xl text-white font-display font-black uppercase tracking-tighter leading-[0.85]">
                Bienvenue <br /> <span className="text-accent drop-shadow-sm">dans la Meute</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-lg">
                Plus qu'un club de sport, le Futsal Drancy est une famille. Nous cultivons l'excellence sportive tout en forgeant les citoyens de demain à travers les valeurs du respect et du dépassement de soi.
              </p>
            </div>

            <div className="grid gap-8">
              {values.map((value, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:bg-accent transition-colors">
                      <Icon className="text-accent group-hover:text-navy-dark transition-colors" size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-white text-xl uppercase italic">{value.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={getAssetPath('images/club-values.png')} 
                alt="Futsal Drancy - Valeurs et Engagement" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-navy-dark/20 mix-blend-overlay"></div>
            </div>
            
            {/* Logo Watermark */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 -z-10">
              <img src={getAssetPath('logo/futsal-logo.png')} alt="" className="w-full h-full object-contain" />
            </div>
            {/* Accent Border */}
            <div className="absolute inset-0 border-2 border-accent translate-x-6 translate-y-6 -z-10 rounded-[2rem]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
