import { useEffect } from 'react';

export function useReadingProgress(elementId = 'reading-progress') {
  useEffect(() => {
    const bar = document.getElementById(elementId);
    if (!bar) return;

    const update = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [elementId]);
}
