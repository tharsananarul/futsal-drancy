import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MatchTicker from '../home/MatchTicker';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
