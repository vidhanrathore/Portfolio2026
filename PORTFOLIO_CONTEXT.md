# Portfolio App — Context & Architecture

> Last updated: June 2026  
> Purpose: Maintain context for future AI-assisted development of this portfolio.

---

## 📁 Project Structure

```
/resume                          ← workspace root
├── .gitignore
├── PORTFOLIO_CONTEXT.md         ← THIS FILE (context for future work)
├── finale_resume.md             ← LaTeX resume source (latest)
├── resume_ai_engineer_v2.md     ← Alt resume with multimodal project
├── resume_overleaf.md           ← Full resume with Achievers client + extras
├── Vidhan_Rathore_resume_0626.pdf
└── portfolio/                   ← React + Vite app
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx              ← Root: assembles all sections
        ├── App.css              ← Minimal (Tailwind handles everything)
        ├── index.css            ← Global styles, fonts, custom utilities
        ├── data/
        │   └── portfolioData.js ← ⭐ ALL content data (edit here first)
        └── components/
            ├── Navbar.jsx       ← Fixed top nav, active section highlight
            ├── Hero.jsx         ← Typewriter animation, floating orbs, CTA
            ├── About.jsx        ← Bio, highlights grid, education, extras
            ├── Experience.jsx   ← Timeline: ValueLabs → WebMD + Achievers
            ├── Projects.jsx     ← Card grid with expand/collapse highlights
            ├── Skills.jsx       ← Categorized badge groups
            ├── Certifications.jsx ← Status cards (completed / ongoing)
            ├── Contact.jsx      ← Contact cards + mailto form
            └── Footer.jsx       ← Links, nav, back-to-top
```

---

## 🎨 Design System

### Colors (defined in `tailwind.config.js`)
| Token | Value | Usage |
|-------|-------|-------|
| `bg-bg-primary` | `#0a0a0f` | Page background |
| `bg-bg-secondary` | `#111118` | Section alternation |
| `bg-bg-card` | `#16161f` | Card backgrounds |
| `accent-purple` | `#7c3aed` | Primary accent |
| `accent-cyan` | `#06b6d4` | Secondary accent |
| `accent-purpleLight` | `#a78bfa` | Text highlights |
| `accent-cyanLight` | `#67e8f9` | Text highlights |
| `text-primary` | `#f8fafc` | Body text |
| `text-secondary` | `#cbd5e1` | Secondary text |
| `text-muted` | `#64748b` | Labels, meta |

### Component Utilities (in `index.css`)
- `.glass-card` — Dark frosted glass card with hover shadow
- `.section-container` — Max-width centred container
- `.section-title` — Gradient heading
- `.section-subtitle` — Muted subtitle
- `.gradient-text` — Purple→Cyan gradient text
- `.btn-primary` — Gradient CTA button
- `.btn-secondary` — Ghost CTA button
- `.tech-badge` — Purple tech tag pill
- `.skill-badge` — Coloured skill badge

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^12.x",     ← All animations
  "lucide-react": "^1.x",       ← Icons
  "react-router-dom": "^6.x"    ← Available (not yet used, single-page scroll nav)
}
```

---

## 👤 Personal Info (from resume)

| Field | Value |
|-------|-------|
| Name | Vidhan Rathore |
| Title | AI Engineer / GenAI Engineer / Python Developer |
| Location | Hyderabad 500081, India |
| Email | rathorevidhan2001@gmail.com |
| Phone | +91-6232371031 |
| LinkedIn | linkedin.com/in/vidhan-rathore |
| GitHub | github.com/vidhanrathore |

---

## 💼 Experience Summary

**ValueLabs** | Jan 2023 – Present | Hyderabad

- **Client: WebMD** (2023–2025) — GenAI Engineering
  - RAG pipeline (LangChain + ChromaDB), sub-2s latency
  - LLM features: bio gen, review summarization, false review detection
  - AI Agents (LangGraph, ReAct, Tool Calling)
  - FastAPI microservices + LangSmith monitoring
  - ⭐ Star of the Month award

- **Client: Achievers** (2025–Present) — Backend Engineering
  - PHP/Laravel API migration V2→V5
  - Mobile push notifications
  - Award & Approval Center + Leaderboard (500K+ users)
  - 40% API response time reduction (Redis + SQL optimization)

---

## 🚀 Projects

| Project | Tech | GitHub |
|---------|------|--------|
| LinkedIn Post Generator | LangChain, OpenAI, ChromaDB, Groq | ✅ public |
| Smart Resume Feedback | LangChain, OpenAI, FastAPI, Streamlit | ✅ public |
| Multimodal AI Image Search | CLIP, Hugging Face, FAISS, ChromaDB | private |
| Local News Summarizer | LangChain, Groq API, News APIs | private |

> **Note:** User will provide more project details for future updates.

---

## 🏅 Certifications

- ChatGPT Prompt Engineering — DeepLearning.AI (2024)
- Introduction to Generative AI — Google Cloud (2024)
- Python: AI, ML & Data Science — CodeBasics (2023)
- Full Stack With Python — Fynd Academy (2023)
- Google Cloud Computing Foundations — Ongoing

---

## 🛠️ How to Run

```bash
cd portfolio
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## 📝 Future Work / TODO

- [ ] Add real project demo links once deployed
- [ ] Add GitHub repo links for Multimodal & News Summarizer projects
- [ ] Add more projects as user provides details
- [ ] Consider dark/light mode toggle
- [ ] Add resume PDF download button in Hero/Navbar
- [ ] Deploy to Vercel / Netlify
- [ ] Add Google Analytics or Umami for analytics
- [ ] Add SEO meta tags in `index.html`
- [ ] Add Open Graph tags for social sharing
- [ ] Consider adding a blog section

---

## ✏️ How to Update Content

1. **All text/data** → edit `portfolio/src/data/portfolioData.js`
2. **Styles/colors** → edit `portfolio/tailwind.config.js` or `portfolio/src/index.css`
3. **Layout/animations** → edit individual component files in `portfolio/src/components/`
4. **Add new section** → create component + import in `portfolio/src/App.jsx`
