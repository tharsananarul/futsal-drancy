import { getAssetPath } from '../../utils/assets';

// Map team names to their local SVG logo files (stored in /assets/logos/clubs/)
// Original logos sourced from FFF - CDN access is protected (WAF), so they are stored locally.
const CLUB_LOGO_MAP: Record<string, string> = {
  'DRANCY FUTSAL':    'assets/logos/drancy-futsal.png',
  'DRANCY FUTSAL 2':  'assets/logos/drancy-futsal.png',
  'JS DRANCY':        'assets/logos/clubs/js-drancy.svg',
  'NOISY TOUS UNI':   'assets/logos/clubs/noisy-tous-uni.svg',
  'SPORT ETHIQUE LIVRY': 'assets/logos/clubs/sport-ethique-livry.svg',
  'LILAS FC':         'assets/logos/clubs/lilas-fc.svg',
  'SOFA 93':          'assets/logos/clubs/sofa-93.svg',
  'PIERREFITTE FC':   'assets/logos/clubs/pierrefitte-fc.svg',
  'ARTISTES FUTSAL':  'assets/logos/clubs/artistes-futsal.svg',
  'MONTREUIL AC':     'assets/logos/clubs/montreuil-ac.svg',
};

function resolveLogoPath(name: string): string | null {
  const upper = name.toUpperCase().trim();

  // Direct key match first
  if (CLUB_LOGO_MAP[upper]) return CLUB_LOGO_MAP[upper];

  // Partial keyword match
  if (upper.includes('DRANCY FUTSAL')) return CLUB_LOGO_MAP['DRANCY FUTSAL'];
  if (upper.includes('JS DRANCY') || upper.includes('JA DRANCY')) return CLUB_LOGO_MAP['JS DRANCY'];
  if (upper.includes('NOISY')) return CLUB_LOGO_MAP['NOISY TOUS UNI'];
  if (upper.includes('LIVRY') || upper.includes('SPORT ETHIQUE')) return CLUB_LOGO_MAP['SPORT ETHIQUE LIVRY'];
  if (upper.includes('LILAS')) return CLUB_LOGO_MAP['LILAS FC'];
  if (upper.includes('SOFA')) return CLUB_LOGO_MAP['SOFA 93'];
  if (upper.includes('PIERREFITTE')) return CLUB_LOGO_MAP['PIERREFITTE FC'];
  if (upper.includes('ARTISTES')) return CLUB_LOGO_MAP['ARTISTES FUTSAL'];
  if (upper.includes('MONTREUIL')) return CLUB_LOGO_MAP['MONTREUIL AC'];

  return null;
}

export function ClubLogo({
  name,
  className = 'w-8 h-8',
}: {
  name: string;
  className?: string;
}) {
  const logoPath = resolveLogoPath(name);

  if (logoPath) {
    return (
      <img
        src={getAssetPath(logoPath)}
        alt={name}
        className={`${className} object-contain`}
        loading="lazy"
      />
    );
  }

  // Fallback: styled initials badge
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className={`${className} bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-[9px] font-black text-white/60 uppercase select-none`}
    >
      {initials}
    </div>
  );
}
