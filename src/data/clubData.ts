import { getAssetPath } from '../utils/assets';

export const CLUB_DATA = {
  season: "2025-2026",
  motto: "Un État d'Esprit, une Attitude",
  
  // Les derniers et prochains matchs
  matches: [
    { team1: 'ST PIERRE', team2: 'DRANCY', score1: 2, score2: 5, date: 'TERMINE', status: 'Victoire' },
    { team1: 'DRANCY', team2: 'TOULOUSE', score1: 3, score2: 1, date: 'TERMINE', status: 'Victoire' },
    { team1: 'LILLE', team2: 'DRANCY', score1: 4, score2: 4, date: 'TERMINE', status: 'Nul' },
    { team1: 'DRANCY', team2: 'STRASBOURG', score1: 'VS', score2: '', date: '26 AVRIL' },
    { team1: 'NANTES', team2: 'DRANCY', score1: 'VS', score2: '', date: '03 MAI' },
    { team1: 'DRANCY', team2: 'MARSEILLE', score1: 'VS', score2: '', date: '10 MAI' },
  ],

  // Le résultat mis en avant sur la page d'accueil
  latestResult: {
    homeTeam: 'DRANCY',
    awayTeam: 'PAC',
    homeScore: 4,
    awayScore: 2,
    venue: 'Palais des Sports',
    resultText: 'Victoire à Domicile'
  },

  // Le prochain match mis en avant
  nextMatch: {
    venue: 'Palais des Sports',
    date: 'Sam. 26 Avril',
    time: '18:00',
    gym: 'Gymnase Joliot Curie',
    info: 'Entrée Gratuite'
  },

  // Les actualités
  news: [
    {
      id: 1,
      category: 'Club',
      title: 'Le Futsal Drancy recherche des Bénévoles et des Coachs',
      date: '21 AVRIL 2026',
      author: 'Direction du Club',
      image: getAssetPath('images/4.png'),
      excerpt: 'Nous recherchons des personnes passionnées pour encadrer nos équipes et participer à la vie du club.'
    },
    {
      id: 2,
      category: 'Match',
      title: 'Drancy triomphe face à Toulouse dans un match épique',
      date: '18 AVRIL 2026',
      author: 'Equipe Communication',
      image: getAssetPath('images/5.png'),
      excerpt: 'Dans un match riche en émotions au Palais des Sports, nos joueurs ont su faire la différence.'
    },
    {
      id: 3,
      category: 'Club',
      title: 'Ouverture des inscriptions pour l\'académie des jeunes',
      date: '15 AVRIL 2026',
      author: 'Direction Sportive',
      image: getAssetPath('images/6.png'),
      excerpt: 'Les inscriptions pour la saison 2025-2026 sont officiellement ouvertes.'
    },
    {
      id: 4,
      category: 'Transfert',
      title: 'Nouveau renfort brésilien pour l\'équipe première',
      date: '10 AVRIL 2026',
      author: 'Staff Technique',
      image: getAssetPath('images/7.png'),
      excerpt: 'Le club est fier d\'annoncer l\'arrivée de Junior Silva.'
    }
  ],

  // Les produits de la boutique
  products: [
    {
      id: 1,
      name: 'Maillot Officiel Domicile 25/26',
      price: '75€',
      category: 'Tenues',
      image: getAssetPath('images/jersey-shop.png'),
      badge: 'Populaire'
    },
    {
      id: 2,
      name: 'Veste de Sortie Elite',
      price: '85€',
      category: 'Lifestyle',
      image: getAssetPath('images/jacket-shop.png'),
      badge: 'Nouveau'
    },
    {
      id: 3,
      name: 'Écharpe Futsal Drancy',
      price: '15€',
      category: 'Accessoires',
      image: getAssetPath('images/scarf-shop.png'),
      badge: null
    },
    {
      id: 4,
      name: 'Sac de Sport Club',
      price: '45€',
      category: 'Équipement',
      image: getAssetPath('images/bag-shop.png'),
      badge: null
    }
  ],

  // L'effectif
  players: [
    { name: 'Ricardo S.', role: 'Pivot / Capitaine', number: '10', image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Hamza B.', role: 'Fixe', number: '4', image: 'https://images.unsplash.com/photo-1431324155629-1a6eda1dc3f7?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Lucas M.', role: 'Ailier', number: '7', image: 'https://images.unsplash.com/photo-1544606114-1e5828453664?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Yannis K.', role: 'Gardien', number: '1', image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Enzo F.', role: 'Ailier', number: '11', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Sofiane R.', role: 'Fixe', number: '5', image: 'https://images.unsplash.com/photo-1517466787929-bc9406155b08?q=80&w=2670&auto=format&fit=crop' },
  ]
};
