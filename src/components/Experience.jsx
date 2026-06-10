import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Star, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const clientColors = {
  WebMD: { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/25', dot: 'bg-purple-400', glow: 'rgba(124,58,237,0.15)' },
  Achievers: { badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25', dot: 'bg-cyan-400', glow: 'rgba(6,182,212,0.15)' },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent-cyanLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // work_experience()
            </p>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle max-w-xl">
              3+ years building enterprise-grade AI systems across diverse domains.
            </p>
          </motion.div>

          {experience.map((job, jobIdx) => (
            <motion.div key={jobIdx} variants={fadeUp} className="relative">
              {/* Company Header */}
              <div className="glass-card p-6 mb-8 flex flex-wrap items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))', border: '1px solid rgba(124,58,237,0.3)' }}>
                  <Briefcase size={22} className="text-accent-purpleLight" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-text-primary font-bold text-xl">{job.company}</h3>
                  <p className="text-text-secondary text-sm mt-0.5">{job.role}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-1.5 text-text-muted">
                    <Calendar size={13} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-text-muted">
                    <MapPin size={13} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-yellow-400 text-xs font-medium bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                    <Star size={11} />
                    Star of the Month
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative ml-4 md:ml-8">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-cyan-500/30 to-transparent" />

                <div className="space-y-10">
                  {job.clients.map((client, cIdx) => {
                    const colors = clientColors[client.name] || clientColors['WebMD'];
                    return (
                      <motion.div
                        key={cIdx}
                        variants={fadeUp}
                        className="relative pl-8 md:pl-12"
                      >
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-4 w-3 h-3 rounded-full ${colors.dot} ring-4 ring-bg-primary -translate-x-1/2`} />

                        {/* Client Card */}
                        <div
                          className="glass-card p-6 transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            boxShadow: `0 4px 24px ${colors.glow}`,
                            borderColor: colors.dot === 'bg-purple-400' ? 'rgba(124,58,237,0.15)' : 'rgba(6,182,212,0.15)',
                          }}
                        >
                          {/* Client Header */}
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <h4 className="text-text-primary font-bold text-lg">
                              Client: {client.name}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
                              {client.type}
                            </span>
                            <span className="ml-auto flex items-center gap-1 text-text-muted text-xs">
                              <Calendar size={11} />
                              {client.period}
                            </span>
                          </div>

                          {/* Highlights */}
                          <ul className="space-y-3">
                            {client.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex gap-3 group">
                                <ChevronRight
                                  size={15}
                                  className={`mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${
                                    cIdx === 0 ? 'text-purple-400' : 'text-cyan-400'
                                  }`}
                                />
                                <span className="text-text-secondary text-sm leading-relaxed">
                                  <span className="text-text-primary font-semibold">{h.title}</span>
                                  {' – '}
                                  {h.detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
