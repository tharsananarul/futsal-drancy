import { motion } from 'motion/react';
import HoverCard from '../components/ui/HoverCard';
import { getAssetPath } from '../utils/assets';

export default function Organigramme() {
  const staffMembers = [
    {
      name: 'Rodolphe Bleubar',
      role: 'Président',
      category: 'Direction',
      email: '550738@lpiff.fr',
      desc: 'Directeur général de la meute, garant de la vision, de l\'éthique et des valeurs du Futsal Drancy.',
      image: getAssetPath('images/1.png')
    },
    {
      name: 'Paulo Pereira Lima',
      role: 'Vice-Président',
      category: 'Direction',
      email: '550738@lpiff.fr',
      desc: 'Responsable de la logistique globale, du sponsoring et du développement partenarial.',
      image: getAssetPath('images/2.png')
    },
    {
      name: 'Nabila Tir',
      role: 'Secrétaire Général / Réf. Arbitre / Réf. PEF',
      category: 'Administration & PEF',
      email: '550738@lpiff.fr',
      desc: 'Gestion administrative, coordination du Programme Éducatif Fédéral (PEF) et pôle arbitrage.',
      image: getAssetPath('images/3.png')
    },
    {
      name: 'Annie Guyot',
      role: 'Trésorier',
      category: 'Finances',
      email: '550738@lpiff.fr',
      desc: 'Gestion financière, trésorerie et conformité du budget de l\'association.',
      image: getAssetPath('images/4.png')
    },
    {
      name: 'Stéphane Smague',
      role: 'Réf. Projet & Technique',
      category: 'Encadrement Sportif',
      email: '550738@lpiff.fr',
      desc: 'Supervision de la politique sportive, plan de formation et projet technique futsal.',
      image: getAssetPath('images/5.png')
    },
    {
      name: 'Kahina Belkorchia',
      role: 'Réf. Féminin & Com',
      category: 'Pôle Féminin & Médias',
      email: '550738@lpiff.fr',
      desc: 'Développement du pôle féminin, communication digitale et relations événementielles.',
      image: getAssetPath('images/6.png')
    },
    {
      name: 'Olivier Flury',
      role: 'Pôle Équipement',
      category: 'Logistique',
      email: '550738@lpiff.fr',
      desc: 'Responsable du parc d\'équipements, des maillots et du matériel de compétition.',
      image: getAssetPath('images/7.png')
    },
    {
      name: 'Nelly Bleubar',
      role: 'Pôle Buvette',
      category: 'Vie du Club',
      email: '550738@lpiff.fr',
      desc: 'Organisation de la buvette, réceptions des matchs à domicile et convivialité.',
      image: getAssetPath('images/8.png')
    },
    {
      name: 'Saer Wade',
      role: 'Dirigeant Séniors',
      category: 'Séniors Masculins',
      email: 'saer936@gmail.com',
      desc: 'Encadrement et direction opérationnelle de l\'équipe première Séniors R2.',
      image: getAssetPath('images/9.png')
    }
  ];

  return (
    <div className="pt-28 lg:pt-36 pb-24 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16 mx-auto max-w-3xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-10 h-[1px] bg-accent/40" />
            <span className="text-accent font-black tracking-[0.3em] uppercase text-fluid-badge">
              Organigramme Officiel
            </span>
            <div className="w-10 h-[1px] bg-accent/40" />
          </div>
          <h1 className="text-fluid-h1 text-white font-display font-black uppercase tracking-tight">
            ORGANIGRAMME & <span className="text-accent">STAFF.</span>
          </h1>
          <p className="text-gray-400 text-fluid-body max-w-xl mx-auto font-medium">
            Découvrez les membres dirigeants et l'équipe pédagogique qui font vivre le Futsal Drancy au quotidien.
          </p>
        </motion.div>

        {/* Hover Cards Grid (Format Paysage strict aspect-video & object-cover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {staffMembers.map((member, idx) => (
            <HoverCard
              key={idx}
              title={member.name}
              subtitle={member.role}
              badge={member.category}
              email={member.email}
              image={member.image}
              aspectRatio="aspect-video"
              description={member.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
