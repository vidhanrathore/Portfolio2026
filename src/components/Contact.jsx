import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rathorevidhan2001@gmail.com',
    href: 'mailto:rathorevidhan2001@gmail.com',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    hoverBorder: 'hover:border-purple-400/40',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vidhan-rathore',
    href: 'https://www.linkedin.com/in/vidhan-rathore/',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    hoverBorder: 'hover:border-cyan-400/40',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/vidhanrathore',
    href: 'https://github.com/vidhanrathore/',
    color: 'text-text-secondary',
    bg: 'bg-white/5',
    border: 'border-white/10',
    hoverBorder: 'hover:border-white/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-6232371031',
    href: 'tel:+916232371031',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-400/40',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens mail client with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Hi Vidhan,\n\n${formState.message}\n\nBest,\n${formState.name}\n${formState.email}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-600/10 via-cyan-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <p className="text-accent-purpleLight text-sm font-mono font-medium mb-2 tracking-wider uppercase">
              // contact_me()
            </p>
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Open to new opportunities, collaborations, and interesting AI projects.
              Let's build something impactful together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Methods */}
            <motion.div variants={stagger} className="space-y-4">
              <motion.div variants={fadeUp}>
                <div className="glass-card p-6 mb-5">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare size={18} className="text-accent-purpleLight" />
                    <h3 className="text-text-primary font-semibold">Let's Connect</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I'm always open to discussing AI engineering roles, GenAI consulting,
                    or interesting open-source collaboration. Based in{' '}
                    <span className="text-text-primary font-medium">Hyderabad, India</span> — available
                    for remote and on-site opportunities.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-text-muted text-xs">
                    <MapPin size={12} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map(({ icon: Icon, label, value, href, color, bg, border, hoverBorder }) => (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`glass-card p-5 flex items-center gap-4 border ${border} ${hoverBorder} transition-all duration-200`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-text-muted text-xs">{label}</div>
                      <div className="text-text-secondary text-xs font-medium truncate mt-0.5">
                        {value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={fadeUp}>
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-5"
              >
                <h3 className="text-text-primary font-semibold mb-1">Send a Message</h3>
                <p className="text-text-muted text-xs mb-2">Opens your email client with pre-filled content.</p>

                <div className="space-y-1">
                  <label className="text-text-muted text-xs font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-500/40 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-text-muted text-xs font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-500/40 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-text-muted text-xs font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-500/40 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>✓ Opening Email Client...</>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
