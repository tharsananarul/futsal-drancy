import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { getAssetPath } from '../../utils/assets';

export default function FeaturedEvent() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image / Poster */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img 
                src={getAssetPath('images/can-feminine.jpg')} 
                alt="CAN Féminine Futsal" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-accent text-navy-dark px-8 py-8 rounded-full font-display font-black text-center shadow-xl rotate-12">
              <span className="block text-sm uppercase">Août</span>
              <span className="block text-3xl">2025</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Événement Historique</span>
              <h2 className="text-4xl md:text-7xl text-navy-dark font-display font-black uppercase tracking-tighter leading-[0.85]">
                La 1ère édition de la <span className="text-accent">CAN Féminine</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              Une semaine de compétition, de passion et de mise en lumière du futsal au féminin ! 
              Le club a eu l'honneur d'organiser cet événement majeur, rassemblant des joueuses venues de tous horizons pour représenter leur pays avec fierté.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Calendar className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="text-navy-dark font-black uppercase text-xs mb-1">Dates</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Du 25 au 31 Août 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <MapPin className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="text-navy-dark font-black uppercase text-xs mb-1">Lieu</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Gymnase Joliot Curie</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Users className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="text-navy-dark font-black uppercase text-xs mb-1">Format</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">5 joueuses par équipe</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Users className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="text-navy-dark font-black uppercase text-xs mb-1">Ambiance</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">18h à 22h30 chaque soir</p>
                </div>
              </div>
            </div>

            <button className="btn-accent w-full md:w-auto">
              <span>Voir les photos de l'événement</span>
              <ArrowRight size={18} className="ml-3" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
}
