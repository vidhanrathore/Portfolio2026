import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className={`glass-card p-6 flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${project.gradient} border ${project.border}`}
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{project.icon}</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-text-primary font-bold text-base leading-tight">
                {project.title}
              </h3>
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                  <Star size={9} />
                  Featured
                </span>
              )}
            </div>
            {project.subtitle && (
              <p className="text-text-muted text-xs mt-0.5">{project.subtitle}</p>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-text-muted hover:text-text-primary hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
              title="GitHub"
            >
              <GithubIcon size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-text-muted hover:text-text-primary hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
              title="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Highlights toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent-purpleLight transition-colors self-start"
      >
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        {expanded ? 'Less details' : 'Key highlights'}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-1.5 overflow-hidden"
          >
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary text-xs leading-relaxed">
                <span className="text-accent-cyan mt-0.5 flex-shrink-0">▸</span>
                {h}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
        {project.tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/20" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent-purpleLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // personal_projects()
            </p>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle max-w-xl">
              AI-powered tools and systems built from scratch — from concept to deployment.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={fadeUp} className="mb-4">
            <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-6">
              ✦ Featured
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={fadeUp} className="mt-10">
            <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-6">
              ✦ Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-text-muted text-sm mb-4">More projects on GitHub →</p>
            <a
              href="https://github.com/vidhanrathore/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <GithubIcon size={16} />
              View All Repositories
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
