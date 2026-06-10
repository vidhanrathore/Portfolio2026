import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colorMap = {
  purple: {
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40',
    header: 'text-purple-300',
    icon: 'bg-purple-500/15 border-purple-500/20',
    bar: 'from-purple-600 to-violet-500',
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/40',
    header: 'text-cyan-300',
    icon: 'bg-cyan-500/15 border-cyan-500/20',
    bar: 'from-cyan-600 to-sky-500',
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/40',
    header: 'text-violet-300',
    icon: 'bg-violet-500/15 border-violet-500/20',
    bar: 'from-violet-600 to-purple-500',
  },
  sky: {
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-400/40',
    header: 'text-sky-300',
    icon: 'bg-sky-500/15 border-sky-500/20',
    bar: 'from-sky-600 to-cyan-500',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40',
    header: 'text-emerald-300',
    icon: 'bg-emerald-500/15 border-emerald-500/20',
    bar: 'from-emerald-600 to-teal-500',
  },
};

function SkillCategory({ category, delay }) {
  const colors = colorMap[category.color] || colorMap.purple;

  return (
    <motion.div
      variants={fadeUp}
      className="glass-card p-6 flex flex-col gap-4 h-full"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border ${colors.icon}`}>
          {category.icon}
        </div>
        <div>
          <h3 className={`font-semibold text-sm ${colors.header}`}>{category.category}</h3>
          <span className="text-text-muted text-xs">{category.items.length} skills</span>
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px bg-gradient-to-r ${colors.bar} opacity-30`} />

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`skill-badge border cursor-default ${colors.badge}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Top row: AI & GenAI + Frameworks (span full / half)
  // Bottom: Languages + Cloud + Databases

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent-purpleLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // technical_skills()
            </p>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle max-w-xl">
              A full-stack AI toolkit — from LLM research to production deployment.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid gap-5">
            {/* Row 1: AI & Frameworks — wider cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {skills.slice(0, 2).map((cat, i) => (
                <SkillCategory key={cat.category} category={cat} delay={i * 0.1} />
              ))}
            </div>

            {/* Row 2: Languages + Cloud + Databases — 3 cols */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skills.slice(2).map((cat, i) => (
                <SkillCategory key={cat.category} category={cat} delay={(i + 2) * 0.1} />
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <p className="text-text-muted text-sm">
              <span className="text-accent-cyan">350+</span> problems solved on LeetCode & GeeksforGeeks
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
