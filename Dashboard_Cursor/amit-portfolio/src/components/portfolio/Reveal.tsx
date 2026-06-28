import { useInViewReveal } from '../../hooks/useInViewReveal';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  delay,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  as?: 'div' | 'section' | 'article' | 'a';
}) {
  const { ref, visible } = useInViewReveal<HTMLElement>();
  const delayClass = delay ? ` reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref as never}
      className={`reveal${visible ? ' visible' : ''}${delayClass}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  );
}
