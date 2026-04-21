import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import CalendarPage from './pages/Calendar';
import Registration from './pages/Registration';
import Boutique from './pages/Boutique';
import Contact from './pages/Contact';
import NewsPage from './pages/News';
import { motion, AnimatePresence } from 'motion/react';

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <Router basename={basename}>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
