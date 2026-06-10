import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ImageIcon } from 'lucide-react';
import { galleryItems } from '../data/portfolioData';

const categories = ['All', ...Array.from(new Set(galleryItems.map((g) => g.category)))];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Placeholder tile shown when no src is provided
function PlaceholderTile({ caption, category }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 select-none">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
        <ImageIcon size={26} className="text-text-muted" />
      </div>
      <div className="text-center px-3">
        <p className="text-text-secondary text-sm font-medium">{caption}</p>
        <p className="text-text-muted text-xs mt-0.5">{category}</p>
      </div>
      <span className="text-xs text-text-muted italic opacity-60">photo coming soon</span>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary/60" />

      {/* Subtle background orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-accent-cyanLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // gallery()
            </p>
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle max-w-xl">
              Photos, memories and moments from my journey.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-accent-purple/20 border-accent-purple/40 text-accent-purpleLight'
                    : 'bg-white/5 border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card overflow-hidden cursor-pointer group relative aspect-square hover:-translate-y-1 transition-all duration-300"
                  onClick={() => item.src && setLightbox(item)}
                >
                  {item.src ? (
                    <>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <p className="text-white text-sm font-semibold">{item.caption}</p>
                          <p className="text-white/60 text-xs">{item.category}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <PlaceholderTile caption={item.caption} category={item.category} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Upload hint */}
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <p className="text-text-muted text-sm">
              📸 Add your photos to{' '}
              <code className="text-accent-cyanLight font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                portfolio/public/gallery/
              </code>{' '}
              and update the <code className="text-accent-purpleLight font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">galleryItems</code> src paths in{' '}
              <code className="text-accent-purpleLight font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">portfolioData.js</code>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full object-contain max-h-[80vh]" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                <p className="text-white font-semibold">{lightbox.caption}</p>
                <p className="text-white/60 text-sm">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
