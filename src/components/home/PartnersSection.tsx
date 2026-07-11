import { CLUB_DATA } from '../../data/clubData';

export default function PartnersSection() {
  const { partners } = CLUB_DATA;

  // Duplicate partners array to ensure continuous seamless loop
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-navy-dark py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-500 font-bold tracking-[0.3em] uppercase text-[9px]">Ils nous soutiennent</span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          
          {/* Marquee Wrapper with side fade shadows */}
          <div className="w-full relative overflow-hidden py-4">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-dark via-navy-dark/70 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-dark via-navy-dark/70 to-transparent z-10 pointer-events-none"></div>

            <div className="flex items-center space-x-16 md:space-x-24 animate-marquee w-max hover:[animation-play-state:paused]">
              {marqueePartners.map((partner, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                    partner.isMain ? 'scale-105' : 'scale-90 hover:scale-100'
                  }`}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

