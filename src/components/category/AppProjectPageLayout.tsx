import { type AppProject } from '../../data/appCategory';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppProjectPageLayoutProps {
  project: AppProject;
}

export function AppProjectPageLayout({ project }: AppProjectPageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[100] bg-theme-base flex items-center justify-center p-4">
      <button
        className="absolute right-6 top-6 z-[110] rounded-full bg-black/10 dark:bg-white/10 p-2 text-theme-text transition-colors hover:bg-black/20 dark:hover:bg-white/20"
        onClick={() => navigate(-1)}
      >
        <X size={24} />
      </button>
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        src={project.screenImage}
        alt={project.name}
        className="max-h-[95vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
      />
    </div>
  );
}
