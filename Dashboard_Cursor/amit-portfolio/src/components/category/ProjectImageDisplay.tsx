import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectImageDisplayProps {
  imageSrc?: string;
  title: string;
}

export function ProjectImageDisplay({ imageSrc, title }: ProjectImageDisplayProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!imageSrc) return null;

  return (
    <>
      <div className="mx-auto mt-16 max-w-5xl px-4 md:px-8 pb-20">
        <motion.div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-theme-border bg-theme-surface/50 shadow-2xl"
          whileHover={{ y: -5 }}
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10 dark:group-hover:bg-black/40">
            <span className="translate-y-4 transform rounded-full bg-white/90 px-6 py-3 font-medium text-black opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">
              View Full Image
            </span>
          </div>
          <img src={imageSrc} alt={title} className="h-auto w-full object-cover" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={imageSrc}
              alt={title}
              className="relative z-[105] max-h-[95vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
