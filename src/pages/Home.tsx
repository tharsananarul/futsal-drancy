import Hero from '../components/home/Hero';
import ResultsSection from '../components/home/ResultsSection';
import UpcomingMatchesSection from '../components/home/UpcomingMatchesSection';
import CalendarSection from '../components/home/CalendarSection';
import LatestNews from '../components/home/LatestNews';
import RecruitmentSection from '../components/home/RecruitmentSection';
import ClubInfoSection from '../components/home/ClubInfoSection';
import PartnersSection from '../components/home/PartnersSection';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col bg-navy-dark">
      {/* 1. HERO + PRÉSENTATION RAPIDE */}
      <Hero />
      
      {/* 2. RÉSULTATS RÉCENTS (SECTION PRIORITAIRE) */}
      <ResultsSection />
      
      {/* 3. PROCHAINS MATCHS */}
      <UpcomingMatchesSection />
      
      {/* 4. CALENDRIER COMPLET */}
      <CalendarSection />
      
      {/* 5. ACTUALITÉS */}
      <LatestNews />
      
      {/* 6. RECRUTEMENT */}
      <RecruitmentSection />
      
      {/* 7. PRÉSENTATION DU CLUB (SECONDAIRE) */}
      <ClubInfoSection />
      
      {/* 8. PARTENAIRES */}
      <PartnersSection />
    </div>
  );
}

