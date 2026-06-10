import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/50">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                VR
              </span>
              <span className="font-bold text-text-primary">
                Vidhan <span className="gradient-text">Rathore</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              AI Engineer building production-grade GenAI systems, RAG pipelines, and LLM-powered applications.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-text-muted hover:text-cyan-300 hover:border-cyan-400/40 transition-all duration-200"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-purple-500/20 bg-purple-500/5 text-text-muted hover:text-purple-300 hover:border-purple-400/40 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider text-text-muted">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-text-muted text-sm hover:text-text-primary transition-colors hover:translate-x-1 transform duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-accent-purple/60">▸</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider text-text-muted">
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-text-muted text-xs block mb-1">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-text-secondary text-sm hover:text-accent-purpleLight transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="text-text-muted text-xs block mb-1">Location</span>
                <span className="text-text-secondary text-sm">{personalInfo.location}</span>
              </div>
              <div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-text-muted text-xs flex items-center gap-1.5">
            Built with
            <Heart size={11} className="text-red-400 fill-red-400" />
            using React, Vite & Tailwind CSS
            <span className="text-text-muted/50 mx-1">·</span>
            © {new Date().getFullYear()} Vidhan Rathore
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-text-muted hover:text-text-primary hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
