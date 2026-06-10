\documentclass[9.5pt, letterpaper]{article}

% Packages:
\usepackage[
    ignoreheadfoot,
    top=0.9 cm,
    bottom=0.9 cm,
    left=1.3 cm,
    right=1.3 cm,
    footskip=0.5 cm,
]{geometry}
\usepackage{titlesec}
\usepackage{tabularx}
\usepackage{array}
\usepackage[dvipsnames]{xcolor}
\definecolor{primaryColor}{RGB}{0, 0, 0}
\usepackage{enumitem}
\usepackage{fontawesome5}
\usepackage{amsmath}
\usepackage[
    pdftitle={Vidhan Rathore - AI Engineer},
    pdfauthor={Vidhan Rathore},
    pdfcreator={LaTeX with RenderCV},
    colorlinks=true,
    urlcolor=primaryColor
]{hyperref}
\usepackage[pscoord]{eso-pic}
\usepackage{calc}
\usepackage{bookmark}
\usepackage{lastpage}
\usepackage{changepage}
\usepackage{paracol}
\usepackage{ifthen}
\usepackage{needspace}
\usepackage{iftex}

\ifPDFTeX
    \input{glyphtounicode}
    \pdfgentounicode=1
    \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage{lmodern}
\fi

\usepackage{charter}

\raggedright
\AtBeginEnvironment{adjustwidth}{\partopsep0pt}
\pagestyle{empty}
\setcounter{secnumdepth}{0}
\setlength{\parindent}{0pt}
\setlength{\topskip}{0pt}
\setlength{\columnsep}{0.15cm}
\pagenumbering{gobble}

\titleformat{\section}{\needspace{4\baselineskip}\bfseries\large}{}{0pt}{}[\vspace{1pt}\titlerule]

\titlespacing{\section}{
    -1pt
}{
    0.12 cm
}{
    0.08 cm
}

\renewcommand\labelitemi{$\vcenter{\hbox{\small$\bullet$}}$}
\newenvironment{highlights}{
    \begin{itemize}[
        topsep=0.04 cm,
        parsep=0.04 cm,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=0 cm + 10pt
    ]
}{
    \end{itemize}
}

\newenvironment{highlightsforbulletentries}{
    \begin{itemize}[
        topsep=0.04 cm,
        parsep=0.04 cm,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=10pt
    ]
}{
    \end{itemize}
}

\newenvironment{onecolentry}{
    \begin{adjustwidth}{
        0 cm + 0.00001 cm
    }{
        0 cm + 0.00001 cm
    }
}{
    \end{adjustwidth}
}

\newenvironment{twocolentry}[2][]{
    \onecolentry
    \def\secondColumn{#2}
    \setcolumnwidth{\fill, 4.5 cm}
    \begin{paracol}{2}
}{
    \switchcolumn  \secondColumn
    \end{paracol}
    \endonecolentry
}

\newenvironment{header}{
    \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.2}
}{
    \par\kern\topsep
}

\newcommand{\placelastupdatedtext}{%
  \AddToShipoutPictureFG*{%
    \put(
        \LenToUnit{\paperwidth-2 cm-0 cm+0.05cm},
        \LenToUnit{\paperheight-1.0 cm}
    ){\vtop{{\null}\makebox[0pt][c]{
        \small\color{gray}\textit{Last updated in June 2026}\hspace{\widthof{Last updated in June 2026}}
    }}}%
  }%
}%

\let\hrefWithoutArrow\href

\begin{document}
    \newcommand{\AND}{\unskip
        \cleaders\copy\ANDbox\hskip\wd\ANDbox
        \ignorespaces
    }
    \newsavebox\ANDbox
    \sbox\ANDbox{$|$}

    \begin{header}

        \fontsize{20 pt}{20 pt}\selectfont \textbf{VIDHAN RATHORE}

        \vspace{2 pt}

        \fontsize{12 pt}{12 pt}\selectfont
        AI Engineer $|$ GenAI Engineer $|$ Python Developer

        \vspace{1 pt}

        \normalsize
        Hyderabad, India \hspace{5 pt} | \hspace{5 pt}
        \href{mailto:rathorevidhan2001@gmail.com}{rathorevidhan2001@gmail.com} \hspace{5 pt} | \hspace{5 pt}
        \href{tel:+916232371031}{+91-6232371031} \hspace{5 pt} | \hspace{5 pt}
        \href{https://www.linkedin.com/in/vidhan-rathore/}{LinkedIn} \hspace{5 pt} | \hspace{5 pt}
        \href{https://github.com/vidhanrathore/}{GitHub}

    \end{header}
    \vspace{2 pt}


    \section{Professional Summary}

    \begin{onecolentry}
        AI Engineer with 3+ years of experience building production-grade \textbf{Generative AI} systems, \textbf{RAG pipelines}, and \textbf{LLM-powered} applications. Expert in \textbf{Prompt Engineering}, \textbf{LangChain}, \textbf{LangGraph}, \textbf{AI Agents}, \textbf{Vector Databases}, and \textbf{FastAPI} backends. Delivered end-to-end GenAI features — semantic search, agentic workflows, multimodal AI — for large-scale enterprise clients. Hands-on with \textbf{OpenAI}, \textbf{Groq}, \textbf{Hugging Face}, \textbf{Llama 3}, and \textbf{Gemini} APIs.
    \end{onecolentry}
    \vspace{0.08 cm}


    \section{Technical Skills}

    \begin{onecolentry}
        \begin{highlightsforbulletentries}
            \item \textbf{AI \& GenAI}: Generative AI, LLMs (Llama 3, Mistral, Gemini, GPT-4), RAG Architecture, Prompt Engineering, AI Agents (ReAct, Tool Calling), Agentic Workflows, Embeddings, Vector Databases, Semantic Search, Multimodal AI, Structured Outputs.
            \item \textbf{Frameworks \& Tools}: LangChain, LangGraph, LlamaIndex, FastAPI, Flask, ChromaDB, FAISS, Hugging Face, OpenAI API, Groq API, Gemini API, Streamlit, LangSmith.
            \item \textbf{Languages \& Cloud}: Python, PHP, JavaScript, SQL \hspace{4pt}|\hspace{4pt} AWS (S3, EC2), GCP, Docker, Git, CI/CD.
            \item \textbf{Databases}: PostgreSQL, MySQL, MongoDB, Redis, ChromaDB, FAISS.
        \end{highlightsforbulletentries}
    \end{onecolentry}
    \vspace{0.05 cm}


    \section{Experience}

    \textbf{ValueLabs $|$ Software Engineer — AI/GenAI Engineering} \hfill \textit{Jan 2023 -- Present}

    \textit{Client: WebMD} \hfill \textit{Hyderabad, India}
    \begin{highlights}
        \item \textbf{RAG Pipeline} – Designed and deployed a production \textbf{RAG} system using \textbf{LangChain} and \textbf{ChromaDB}, enabling \textbf{Semantic Search} over large-scale health content with sub-2s retrieval latency.
        \item \textbf{LLM-Powered Features} – Built AI solutions with \textbf{OpenAI API} and \textbf{Groq API} using advanced \textbf{Prompt Engineering} (chain-of-thought, few-shot, RAG-augmented) for bio generation, review summarization, and false review detection.
        \item \textbf{Embeddings \& Vector Search} – Engineered \textbf{Embedding} pipelines using \textbf{Hugging Face} models for high-quality vector representations enabling semantic similarity and document retrieval.
        \item \textbf{AI Agents \& Agentic Workflows} – Built \textbf{LangGraph}-based multi-step \textbf{AI Agent} workflows (ReAct pattern, Tool Calling) for automated content classification and a VS Code AI code-review plugin, boosting developer productivity by \textbf{30\%}.
        \item \textbf{FastAPI Microservices} – Developed robust \textbf{FastAPI} backends for GenAI feature endpoints, ensuring scalability under high load. Monitored agent performance and traces via \textbf{LangSmith}.
        \item \textbf{POC Leadership} – Led multiple simultaneous GenAI POCs; awarded \textbf{Star of the Month} for delivering high-impact AI solutions to WebMD.
    \end{highlights}
    \vspace{0.05 cm}


    \section{Personal Projects}

    \textbf{LinkedIn Post Generator for Content Creators} \hfill \textit{LangChain, OpenAI API, ChromaDB, Groq API, Prompt Engineering, Python} \\
    \begin{highlights}
        \item Built an \textbf{LLM-powered} content generation tool using \textbf{LangChain} and \textbf{OpenAI API} with advanced \textbf{Prompt Engineering} techniques — few-shot prompting, chain-of-thought reasoning, tone/style control, and \textbf{Structured Outputs} — generating professional LinkedIn posts across 5+ content categories.
        \item Integrated \textbf{Semantic Search} via \textbf{ChromaDB} to retrieve and match a creator's previous post style, enabling personalized tone-consistent generation; reduced content creation time from \textasciitilde 30 minutes to under \textbf{3 minutes}.
    \end{highlights}

    \textbf{Multimodal AI Image Search Engine} \hfill \textit{CLIP, Hugging Face, ChromaDB, FAISS, FastAPI, Streamlit} \\
    \begin{highlights}
        \item Engineered a \textbf{Multimodal AI} semantic search system using OpenAI \textbf{CLIP} to generate joint image-text \textbf{Embeddings}; indexed \textasciitilde 20 GB dataset in \textbf{ChromaDB} and \textbf{FAISS} with top-5 retrieval under 1 second.
        \item Built \textbf{FastAPI} backend with natural language query interface and smart metadata filters (location, time) for intuitive cross-modal image retrieval.
    \end{highlights}
    \vspace{0.05 cm}


    \section{Education}

    \begin{onecolentry}
        \textbf{B.Tech in Electronics \& Communication Engineering} \hfill \textit{2019 -- 2023} \\
        Samrat Ashok Technological Institute \hfill CGPA: \textbf{8.78 / 10}
    \end{onecolentry}
    \vspace{0.05 cm}


    \section{Certifications}

    \begin{onecolentry}
        \begin{highlightsforbulletentries}
            \item \textbf{ChatGPT Prompt Engineering for Developers} — DeepLearning.AI \hfill \textit{2024}
            \item \textbf{Introduction to Generative AI} — Google Cloud (Coursera) \hfill \textit{2024}
            \item \textbf{Python: AI, Machine Learning \& Data Science} — CodeBasics \hfill \textit{2023}
            \item \textbf{Google Cloud Computing Foundations Certificate} (Ongoing)
        \end{highlightsforbulletentries}
    \end{onecolentry}

\end{document}
