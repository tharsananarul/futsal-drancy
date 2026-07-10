import { getAssetPath } from '../utils/assets';
import recentResults from './resultats.json';
import planningData from './planning.json';

export const CLUB_DATA = {
  name: "Futsal Drancy",
  season: "2025-2026",
  motto: "Passion, Formation, Performance",
  presentation: "Référence du futsal en Seine-Saint-Denis, le Futsal Drancy mise sur la formation d'excellence des jeunes, un engagement communautaire fort et un esprit collectif inébranlable.",
  
  // Les derniers résultats
  recentResults: recentResults,

  // Prochains matchs
  upcomingMatches: planningData.upcomingMatches,

  // Calendrier complet par catégories
  calendar: planningData.calendar,

  // Valeurs du club
  values: [
    {
      title: "Engagement",
      description: "Un investissement total sur et en dehors du terrain pour porter haut les couleurs de Drancy."
    },
    {
      title: "Esprit d'Équipe",
      description: "La force du collectif prime sur l'individuel. Ensemble, nous sommes plus forts."
    },
    {
      title: "Citoyenneté",
      description: "Le sport comme outil d'éducation et d'inclusion sociale pour nos jeunes."
    }
  ],

  // Partenaires
  partners: [
    { name: 'Brasserie des 4 Routes', logo: getAssetPath('images/logo bdr4.png'), isMain: true },
    { name: 'Ville de Drancy', logo: getAssetPath('images/logo-drancy.svg.png'), isMain: true },
    { name: 'FFF', logo: getAssetPath('images/logo fff.png'), isMain: true },
  ],

  // Coordonnées
  contact: {
    address: "85 Rue Auguste Blanqui, 93700 Drancy",
    phone: "01 48 96 50 00",
    email: "550738@lpiff.fr",
    socials: {
      instagram: "https://instagram.com/futsaldrancy",
      facebook: "https://facebook.com/futsaldrancy",
      tiktok: "https://tiktok.com/@futsaldrancy",
      youtube: "https://youtube.com/@futsaldrancy"
    }
  },

  // Les actualités
  news: [
    {
      id: 0,
      title: '1ère Édition CAN Féminine Futsal',
      date: '31 Juillet 2025',
      category: 'Événement',
      image: getAssetPath('images/post can féminine.png'),
      excerpt: 'Une semaine de compétition, de passion et de mise en lumière du futsal au féminin ! Rejoignez-nous au Gymnase Joliot Curie.'
    },
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

  // Les Équipes
  teams: {
    garcons: [
      { name: 'U6', image: getAssetPath('images/1.png') },
      { name: 'U7', image: getAssetPath('images/2.png') },
      { name: 'U8', image: getAssetPath('images/3.png') },
      { name: 'U9', image: getAssetPath('images/4.png') },
      { name: 'U10', image: getAssetPath('images/5.png') },
      { name: 'U11', image: getAssetPath('images/6.png') },
      { name: 'U12', image: getAssetPath('images/7.png') },
      { name: 'U13', image: getAssetPath('images/8.png') },
      { name: 'U14', image: getAssetPath('images/9.png') },
      { name: 'U15', image: getAssetPath('images/10.png') },
      { name: 'U16', image: getAssetPath('images/1.png') },
      { name: 'U17', image: getAssetPath('images/2.png') },
      { name: 'U18', image: getAssetPath('images/3.png') },
      { name: 'Séniors A', image: getAssetPath('images/4.png') },
      { name: 'Séniors B', image: getAssetPath('images/5.png') },
    ],
    filles: [
      { name: 'U6F', image: getAssetPath('images/6.png') },
      { name: 'U7F', image: getAssetPath('images/7.png') },
      { name: 'U8F', image: getAssetPath('images/8.png') },
      { name: 'U9F', image: getAssetPath('images/9.png') },
      { name: 'U10F', image: getAssetPath('images/10.png') },
      { name: 'U11F', image: getAssetPath('images/1.png') },
      { name: 'U12F', image: getAssetPath('images/2.png') },
      { name: 'U13F', image: getAssetPath('images/3.png') },
      { name: 'U14F', image: getAssetPath('images/4.png') },
      { name: 'U15F', image: getAssetPath('images/5.png') },
      { name: 'U16F', image: getAssetPath('images/6.png') },
      { name: 'U17F', image: getAssetPath('images/7.png') },
      { name: 'U18F', image: getAssetPath('images/8.png') },
      { name: 'Séniors F', image: getAssetPath('images/9.png') },
    ]
  }
};
