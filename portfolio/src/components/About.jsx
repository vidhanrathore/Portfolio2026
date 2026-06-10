import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, BookOpen, Trophy, Users, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, education, extras } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const highlights = [
  { icon: Trophy, label: 'Star of the Month', sub: 'ValueLabs Award', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { icon: Users, label: '50+ Students', sub: 'Mentored in college', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  { icon: Code2, label: '350+ Problems', sub: 'LeetCode & GFG', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
  { icon: BookOpen, label: 'CGPA 8.78', sub: 'B.Tech ECE', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-bg-secondary/30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent-purpleLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // get_to_know_me()
            </p>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-xl">
              Building intelligent systems that solve real-world problems at scale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Bio */}
            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="glass-card p-6 space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  I'm an <span className="text-accent-purpleLight font-semibold">AI Engineer</span> with{' '}
                  <span className="text-accent-cyanLight font-semibold">3+ years</span> of hands-on experience
                  building production-grade Generative AI systems. Currently at{' '}
                  <span className="text-text-primary font-semibold">ValueLabs</span>, delivering end-to-end
                  AI features for enterprise clients including{' '}
                  <span className="text-accent-purpleLight font-semibold">WebMD</span> and{' '}
                  <span className="text-accent-cyanLight font-semibold">Achievers</span>.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  My core focus is on{' '}
                  <span className="text-text-primary font-medium">RAG pipelines</span>,{' '}
                  <span className="text-text-primary font-medium">LLM-powered applications</span>, and{' '}
                  <span className="text-text-primary font-medium">agentic workflows</span> — turning complex
                  AI research into scalable, maintainable production systems.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Beyond code, I'm passionate about mentoring, strategy games like chess, and staying at the
                  frontier of AI research.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={fadeUp} className="glass-card p-6">
                <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider text-text-muted">
                  Contact & Links
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: MapPin, label: personalInfo.location, href: null, color: 'text-red-400' },
                    { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-purple-400' },
                    { icon: GithubIcon, label: 'github.com/vidhanrathore', href: personalInfo.github, color: 'text-text-secondary' },
                    { icon: LinkedinIcon, label: 'linkedin.com/in/vidhan-rathore', href: personalInfo.linkedin, color: 'text-cyan-400' },
                  ].map(({ icon: Icon, label, href, color }) => (
                    <div key={label} className="flex items-center gap-3 group">
                      <Icon size={15} className={color} />
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary text-sm group-hover:text-text-primary transition-colors hover:underline decoration-accent-purple/40"
                        >
                          {label}
                        </a>
                      ) : (
                        <span className="text-text-secondary text-sm">{label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Highlights + Education */}
            <motion.div variants={stagger} className="space-y-6">
              {/* Highlights Grid */}
              <motion.div variants={fadeUp}>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map(({ icon: Icon, label, sub, color, bg, border }) => (
                    <div
                      key={label}
                      className={`glass-card p-5 flex flex-col gap-3 border ${border} transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                        <Icon size={20} className={color} />
                      </div>
                      <div>
                        <div className={`font-bold text-base ${color}`}>{label}</div>
                        <div className="text-text-muted text-xs mt-0.5">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={fadeUp} className="glass-card p-6">
                <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider text-text-muted">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div
                      key={i}
                      className={`flex gap-4 ${i < education.length - 1 ? 'pb-4 border-b border-white/5' : ''}`}
                    >
                      <div className="text-2xl">{edu.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-text-primary font-medium text-sm">{edu.degree}</div>
                        <div className="text-text-muted text-xs mt-0.5">{edu.institution}</div>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-accent-purpleLight text-xs font-medium">{edu.grade}</span>
                          <span className="text-text-muted text-xs">·</span>
                          <span className="text-text-muted text-xs">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div variants={fadeUp} className="glass-card p-6">
                <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider text-text-muted">
                  Beyond Code
                </h3>
                <ul className="space-y-2">
                  {extras.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-accent-cyan mt-0.5">▸</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
