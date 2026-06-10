import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const TypewriterText = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, words]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse text-accent-cyan">|</span>
    </span>
  );
};

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
  />
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #12052a 50%, #031226 100%)' }}
    >
      {/* Floating Orbs */}
      <FloatingOrb className="w-96 h-96 bg-purple-600/20 -top-20 -left-20" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-cyan-600/15 top-1/3 right-0" delay={2} />
      <FloatingOrb className="w-64 h-64 bg-violet-500/15 bottom-20 left-1/4" delay={4} />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30 bg-purple-500/10 text-accent-purpleLight">
              <Sparkles size={14} className="text-accent-cyan" />
              Available for opportunities
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="text-text-primary">Hi, I'm </span>
            <br />
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-semibold h-10">
            <TypewriterText words={personalInfo.roles} />
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-text-secondary text-base md:text-lg leading-relaxed"
          >
            Building production-grade{' '}
            <span className="text-accent-purpleLight font-medium">Generative AI</span> systems,{' '}
            <span className="text-accent-cyanLight font-medium">RAG pipelines</span>, and{' '}
            <span className="text-accent-purpleLight font-medium">LLM-powered</span> applications.
            3+ years delivering end-to-end AI features for enterprise clients.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 mt-2">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '500K+', label: 'Users Impacted' },
              { value: '30%', label: 'Productivity Boost' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-2">
            <button
              onClick={() => handleScroll('#projects')}
              className="btn-primary flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={16} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={16} />
              Get in Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 text-text-secondary hover:text-text-primary hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 text-text-secondary hover:text-text-primary hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl border border-white/10 bg-white/5 text-text-secondary hover:text-text-primary hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 rounded-xl border border-white/10 bg-white/5 text-text-secondary hover:text-text-primary hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
              title="Phone"
            >
              <Phone size={20} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            variants={itemVariants}
            onClick={() => handleScroll('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-8 flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
