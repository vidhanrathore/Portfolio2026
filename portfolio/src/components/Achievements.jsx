import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const colorMap = {
  yellow:  { text: 'text-yellow-400',  bg: 'bg-yellow-400/10',  ring: 'ring-yellow-400/30' },
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-400/10',    ring: 'ring-cyan-400/30' },
  purple:  { text: 'text-purple-400',  bg: 'bg-purple-400/10',  ring: 'ring-purple-400/30' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-400/10', ring: 'ring-emerald-400/30' },
  sky:     { text: 'text-sky-400',     bg: 'bg-sky-400/10',     ring: 'ring-sky-400/30' },
  violet:  { text: 'text-violet-400',  bg: 'bg-violet-400/10',  ring: 'ring-violet-400/30' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent-purpleLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // achievements()
            </p>
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle max-w-xl">
              Milestones, awards, and impact that define my journey.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((item) => {
              const c = colorMap[item.color] ?? colorMap.purple;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className={`glass-card p-6 border ${item.border} bg-gradient-to-br ${item.gradient} hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-2xl ring-1 ${c.ring}`}>
                      {item.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.bg} ${c.text} ring-1 ${c.ring} whitespace-nowrap`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg leading-snug ${c.text}`}>{item.title}</h3>
                    <p className="text-text-muted text-xs font-medium mt-0.5">
                      {item.org} &nbsp;·&nbsp; {item.year}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
