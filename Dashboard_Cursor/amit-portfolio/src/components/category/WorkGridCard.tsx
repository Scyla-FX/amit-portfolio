import { Link } from 'react-router-dom';

interface WorkGridCardProps {
  to: string;
  thumbnail: string;
  name: string;
  tagline: string;
  aspectClass?: string;
  imageClass?: string;
}

export function WorkGridCard({
  to,
  thumbnail,
  name,
  tagline,
  aspectClass = 'aspect-[16/10]',
  imageClass = 'object-cover object-center',
}: WorkGridCardProps) {
  return (
    <Link to={to} className="work-grid-card group block">
      <div className={`${aspectClass} overflow-hidden`}>
        <img
          src={thumbnail}
          alt={`${name} — ${tagline}`}
          className={`work-grid-card__thumb h-full w-full ${imageClass}`}
        />
        <div className="work-grid-card__shine">
          <span>View project →</span>
        </div>
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-sm font-bold text-theme-primary transition-colors group-hover:text-brand md:text-base">
          {name}
        </h3>
        <p className="mt-1 text-xs text-theme-muted md:text-sm">{tagline}</p>
      </div>
    </Link>
  );
}
