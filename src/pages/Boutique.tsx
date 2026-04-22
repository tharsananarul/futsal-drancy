import { motion } from 'motion/react';
import { ShoppingBag, Star, Tag, ArrowRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';
import { CLUB_DATA } from '../data/clubData';

export default function Boutique() {
  const products = CLUB_DATA.products;
  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Official Store</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.8] font-display font-black uppercase tracking-tighter">
            PORTEZ NOS <br/> <span className="text-accent">COULEURS.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-accent text-navy-dark px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-full">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-x-2 bottom-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                  <button className="w-full bg-white text-navy-dark font-black py-3 uppercase text-[9px] tracking-widest shadow-2xl">
                    Ajouter
                  </button>
                </div>
              </div>
              
              <div className="space-y-1 px-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <span className="text-accent font-black text-[8px] uppercase tracking-widest">{product.category}</span>
                  <span className="text-white font-display font-black text-xs md:text-base">{product.price}</span>
                </div>
                <h3 className="text-[10px] md:text-lg text-white font-display font-black uppercase leading-tight truncate">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[2rem] bg-accent/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <h2 className="text-3xl text-white">Ventes en ligne bientôt disponibles</h2>
            <p className="text-white/40 uppercase text-xs tracking-widest font-medium">Pour le moment, les achats se font directement au gymnase lors des matchs.</p>
          </div>
          <button className="btn-accent px-12 py-5 flex items-center space-x-3 group whitespace-nowrap">
            <span>Infos Permanences</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
