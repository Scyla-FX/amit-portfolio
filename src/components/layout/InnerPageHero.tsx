interface InnerPageHeroProps {
  watermark: string;
  title: string;
  as?: 'h1' | 'h2';
  variant?: 'hero' | 'section';
  className?: string;
}

export function InnerPageHero({
  watermark,
  title,
  as = 'h1',
  variant = 'hero',
  className = '',
}: InnerPageHeroProps) {
  const TitleTag = as;
  const variantClass = variant === 'section' ? ' inner-page-hero--section' : '';

  return (
    <div className={`inner-page-hero${variantClass}${className ? ` ${className}` : ''}`}>
      <p className="inner-page-hero__watermark" aria-hidden>
        {watermark}
      </p>
      <TitleTag className="inner-page-hero__title">{title}</TitleTag>
    </div>
  );
}

export function getPageWatermark(title: string, watermark?: string): string {
  return watermark ?? title.toLowerCase();
}
