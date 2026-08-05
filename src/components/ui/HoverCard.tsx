import { motion } from 'motion/react';
import { Mail, Briefcase, ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

interface HoverCardProps {
  title: string;
  subtitle: string;
  email?: string;
  image: string;
  badge?: string;
  description?: string;
  aspectRatio?: 'aspect-video' | 'aspect-[3/2]';
  extraContent?: ReactNode;
}

export default function HoverCard({
  title,
  subtitle,
  email,
  image,
  badge,
  description,
  aspectRatio = 'aspect-video',
  extraContent,
}: HoverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-xl hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(245,185,9,0.12)] transition-all duration-500 cursor-pointer"
    >
      {/* Landscape Image Container with strict ratio */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-50"
        />

        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

        {/* Optional Top Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-navy-dark text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {badge}
          </div>
        )}

        {/* Hover Arrow Icon */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight size={16} className="text-accent" />
        </div>

        {/* Information overlay revealed on hover */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {/* Subtitle / Role Tag */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-accent font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase leading-tight tracking-wide group-hover:text-glow transition-all">
            {title}
          </h3>

          {/* Description / Role Details revealed on hover */}
          {description && (
            <p className="text-gray-300 text-xs md:text-sm line-clamp-2 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
              {description}
            </p>
          )}

          {/* Email reveal on hover */}
          {email && (
            <a
              href={`mailto:${email}`}
              onClick={(e) => e.stopPropagation()}
              className="mt-3 inline-flex items-center space-x-2 text-accent/90 hover:text-white text-xs font-bold transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-100"
            >
              <Mail size={14} className="text-accent shrink-0" />
              <span className="truncate">{email}</span>
            </a>
          )}

          {extraContent && (
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {extraContent}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
