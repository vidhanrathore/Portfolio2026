import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Clock } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colorMap = {
  purple: 'from-purple-500/15 to-violet-500/10 border-purple-500/20 text-purple-300',
  cyan: 'from-cyan-500/15 to-sky-500/10 border-cyan-500/20 text-cyan-300',
  emerald: 'from-emerald-500/15 to-teal-500/10 border-emerald-500/20 text-emerald-300',
  violet: 'from-violet-500/15 to-purple-500/10 border-violet-500/20 text-violet-300',
  sky: 'from-sky-500/15 to-cyan-500/10 border-sky-500/20 text-sky-300',
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent-cyanLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // certifications()
            </p>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle max-w-xl">
              Continuous learning from top institutions in AI, cloud, and software engineering.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => {
              const colors = colorMap[cert.color] || colorMap.purple;
              const isOngoing = cert.status === 'ongoing';

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`glass-card p-6 flex flex-col gap-4 bg-gradient-to-br border ${colors} transition-all duration-300`}
                >
                  {/* Icon + Status */}
                  <div className="flex items-start justify-between">
                    <div className="text-3xl">{cert.icon}</div>
                    {isOngoing ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        <Clock size={10} />
                        Ongoing
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                        <CheckCircle size={10} />
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-text-primary font-semibold text-sm leading-snug mb-1.5">
                      {cert.title}
                    </h3>
                    <p className="text-text-muted text-xs">{cert.issuer}</p>
                  </div>

                  {/* Year */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1.5 text-text-muted text-xs">
                      <Award size={11} />
                      Certificate
                    </span>
                    <span className="text-text-secondary text-xs font-medium">{cert.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
