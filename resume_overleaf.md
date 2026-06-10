\documentclass[10pt, letterpaper]{article}

% Packages:
\usepackage[
    ignoreheadfoot, % set margins without considering header and footer
    top=2 cm, % seperation between body and page edge from the top
    bottom=2 cm, % seperation between body and page edge from the bottom
    left=2 cm, % seperation between body and page edge from the left
    right=2 cm, % seperation between body and page edge from the right
    footskip=1.0 cm, % seperation between body and footer
    % showframe % for debugging 
]{geometry} % for adjusting page geometry
\usepackage{titlesec} % for customizing section titles
\usepackage{tabularx} % for making tables with fixed width columns
\usepackage{array} % tabularx requires this
\usepackage[dvipsnames]{xcolor} % for coloring text
\definecolor{primaryColor}{RGB}{0, 0, 0} % define primary color
\usepackage{enumitem} % for customizing lists
\usepackage{fontawesome5} % for using icons
\usepackage{amsmath} % for math
\usepackage[
    pdftitle={Vidhan Rathore's CV},
    pdfauthor={Vidhan Rathore},
    pdfcreator={LaTeX with RenderCV},
    colorlinks=true,
    urlcolor=primaryColor
]{hyperref} % for links, metadata and bookmarks
\usepackage[pscoord]{eso-pic} % for floating text on the page
\usepackage{calc} % for calculating lengths
\usepackage{bookmark} % for bookmarks
\usepackage{lastpage} % for getting the total number of pages
\usepackage{changepage} % for one column entries (adjustwidth environment)
\usepackage{paracol} % for two and three column entries
\usepackage{ifthen} % for conditional statements
\usepackage{needspace} % for avoiding page brake right after the section title
\usepackage{iftex} % check if engine is pdflatex, xetex or luatex

% Ensure that generate pdf is machine readable/ATS parsable:
\ifPDFTeX
    \input{glyphtounicode}
    \pdfgentounicode=1
    \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage{lmodern}
\fi

\usepackage{charter}

% Some settings:
\raggedright
\AtBeginEnvironment{adjustwidth}{\partopsep0pt} % remove space before adjustwidth environment
\pagestyle{empty} % no header or footer
\setcounter{secnumdepth}{0} % no section numbering
\setlength{\parindent}{0pt} % no indentation
\setlength{\topskip}{0pt} % no top skip
\setlength{\columnsep}{0.15cm} % set column seperation
\pagenumbering{gobble} % no page numbering

\titleformat{\section}{\needspace{4\baselineskip}\bfseries\large}{}{0pt}{}[\vspace{1pt}\titlerule]

\titlespacing{\section}{
    % left space:
    -1pt
}{
    % top space:
    0.3 cm
}{
    % bottom space:
    0.2 cm
} % section title spacing

\renewcommand\labelitemi{$\vcenter{\hbox{\small$\bullet$}}$} % custom bullet points
\newenvironment{highlights}{
    \begin{itemize}[
        topsep=0.10 cm,
        parsep=0.10 cm,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=0 cm + 10pt
    ]
}{
    \end{itemize}
} % new environment for highlights


\newenvironment{highlightsforbulletentries}{
    \begin{itemize}[
        topsep=0.10 cm,
        parsep=0.10 cm,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=10pt
    ]
}{
    \end{itemize}
} % new environment for highlights for bullet entries

\newenvironment{onecolentry}{
    \begin{adjustwidth}{
        0 cm + 0.00001 cm
    }{
        0 cm + 0.00001 cm
    }
}{
    \end{adjustwidth}
} % new environment for one column entries

\newenvironment{twocolentry}[2][]{
    \onecolentry
    \def\secondColumn{#2}
    \setcolumnwidth{\fill, 4.5 cm}
    \begin{paracol}{2}
}{
    \switchcolumn  \secondColumn
    \end{paracol}
    \endonecolentry
} % new environment for two column entries

\newenvironment{threecolentry}[3][]{
    \onecolentry
    \def\thirdColumn{#3}
    \setcolumnwidth{, \fill, 4.5 cm}
    \begin{paracol}{3}
    {\raggedright #2} \switchcolumn
}{
    \switchcolumn \thirdColumn
    \end{paracol}
    \endonecolentry
} % new environment for three column entries

\newenvironment{header}{
    \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.5}
}{
    \par\kern\topsep
} % new environment for the header

\newcommand{\placelastupdatedtext}{% \placetextbox{<horizontal pos>}{<vertical pos>}{<stuff>}
  \AddToShipoutPictureFG*{% Add <stuff> to current page foreground
    \put(
        \LenToUnit{\paperwidth-2 cm-0 cm+0.05cm},
        \LenToUnit{\paperheight-1.0 cm}
    ){\vtop{{\null}\makebox[0pt][c]{
        \small\color{gray}\textit{Last updated in June 2026}\hspace{\widthof{Last updated in June 2026}}
    }}}%
  }%
}%

% save the original href command in a new command:
\let\hrefWithoutArrow\href

% new command for external links:


\begin{document}
    \newcommand{\AND}{\unskip
        \cleaders\copy\ANDbox\hskip\wd\ANDbox
        \ignorespaces
    }
    \newsavebox\ANDbox
    \sbox\ANDbox{$|$}

    \begin{header}
    
        \fontsize{ 24 pt}{24 pt}\selectfont \textbf{ VIDHAN RATHORE }
    
        \vspace{4 pt}
    
        \fontsize{15 pt}{15 pt}\selectfont
        AI Engineer $|$
        GenAI Engineer $|$
        Python Developer
    
        \vspace{2 pt}
    
        \normalsize
        Hyderabad, India \hspace{5 pt} | \hspace{5 pt}
        \href{mailto:rathorevidhan2001@gmail.com}{ rathorevidhan2001@gmail.com } \hspace{5 pt} | \hspace{5 pt}
        \href{tel:+916232371031}{+91-6232371031} \hspace{5 pt} | \hspace{5 pt}
        \href{https://www.linkedin.com/in/vidhan-rathore/}{LinkedIn} \hspace{5 pt} | \hspace{5 pt}
        \href{https://github.com/vidhanrathore/}{GitHub}
    
    \end{header}
    \vspace{5 pt - 0.3 cm}


    \section{Professional Summary}

         \begin{onecolentry}
          AI Engineer with 3+ years of experience building production-grade \textbf{Generative AI} systems, \textbf{RAG pipelines}, and \textbf{LLM-powered} applications. Proven expertise in \textbf{Prompt Engineering}, \textbf{Vector Databases} (ChromaDB), \textbf{LangChain}, \textbf{LangGraph}, and \textbf{FastAPI} backends. Delivered end-to-end GenAI features — including semantic search, AI-powered summarization, and agentic workflows — for enterprise clients. Passionate about leveraging cutting-edge \textbf{Embeddings}, \textbf{Semantic Search}, and \textbf{Multimodal AI} to solve real-world problems at scale.
        \end{onecolentry}
        \vspace{0.2 cm}

    \section{Technical Skills}

    \begin{onecolentry}
        \begin{highlightsforbulletentries}
            \item \textbf{AI \& GenAI}: Generative AI, LLMs, RAG Architecture, Prompt Engineering, Embeddings, Vector Databases, Semantic Search, Multimodal AI, Agentic Workflows.
            \item \textbf{Frameworks \& Tools}: LangChain, LangGraph, FastAPI, Flask, ChromaDB, Hugging Face, Groq API, OpenAI API, Streamlit.
            \item \textbf{Programming Languages}: Python, PHP, JavaScript, SQL.
            \item \textbf{Cloud \& DevOps}: AWS (S3, EC2), GCP, Docker, Git, CI/CD.
            \item \textbf{Databases}: PostgreSQL, MySQL, MongoDB, Redis, ChromaDB.
            \item \textbf{Data Structures \& Algorithms}: Strong problem-solving skills; solved 350+ problems across LeetCode \& GeeksforGeeks.
        \end{highlightsforbulletentries}
    \end{onecolentry}



\section{Experience}

\textbf{ValueLabs $|$ Software Engineer} \hfill \textit{Jan 2023 -- Present}
\vspace{0.2 cm}

\textit{Client: WebMD (GenAI Engineering)} \hfill \textit{2023 -- 2025}
\begin{highlights}
    \item \textbf{RAG Pipeline Architecture} – Designed and deployed a production \textbf{RAG} pipeline using \textbf{LangChain} and \textbf{ChromaDB}, enabling \textbf{Semantic Search} over large-scale health content with sub-2s retrieval latency.
    \item \textbf{LLM-Powered Features} – Built AI-driven solutions leveraging \textbf{OpenAI API} and \textbf{Groq API} with advanced \textbf{Prompt Engineering} techniques (chain-of-thought, few-shot, retrieval-augmented), including personalized bio generation, review summarization, and false review detection.
    \item \textbf{Embeddings \& Vector Search} – Engineered text \textbf{Embedding} pipelines using \textbf{Hugging Face} models to generate high-quality vector representations for semantic similarity and document retrieval.
    \item \textbf{Agentic Workflows} – Implemented \textbf{LangGraph}-based multi-step agentic workflows for automated content classification, tagging, and AI-powered developer tooling (VS Code plugin for code review, boosting productivity by \textbf{30\%}).
    \item \textbf{FastAPI Microservices} – Developed and maintained robust \textbf{FastAPI} and Flask backends for \textbf{Generative AI} feature endpoints, ensuring scalability and performance under high load.
    \item \textbf{POC Leadership} – Led multiple simultaneous Proof of Concepts, transforming complex client requirements into working AI prototypes. Awarded \textbf{Star of the Month} for delivering high-impact GenAI solutions.
\end{highlights}
\vspace{0.2 cm}

\textit{Client: Achievers (Backend Engineering)} \hfill \textit{2025 -- Present}
\begin{highlights}
    \item \textbf{API Migration \& Modernization} – Migrated core system APIs from \textbf{V2 to V5} in PHP/Laravel, enhancing performance, security, and maintainability with zero downtime.
    \item \textbf{Mobile Push Notifications} – Implemented real-time mobile push notification functionality for order status updates, improving user engagement across enterprise clients.
    \item \textbf{Feature Development} – Developed and optimized the Award \& Approval Center and introduced a \textbf{Leaderboard} proof-of-concept — a net-new capability for the platform serving \textbf{500K+ users}.
    \item \textbf{Performance Optimization} – Optimized SQL query performance and Redis caching strategies, reducing average API response time by \textbf{40\%}.
\end{highlights}




\section{Education}
\vspace{0.10cm}

\begin{tabbing}
\hspace{3cm} \= \hspace{7cm} \= \hspace{4cm} \= \kill
\textbf{Qualification} \> \textbf{Institution} \> \textbf{Details} \> \textbf{Year} \\[0.25cm]

B.Tech in ECE \> Samrat Ashok Technological Institute \> CGPA: 8.78/10 \> 2019--2023 \\[0.15cm]

Intermediate \> The Oxford H.S. School, Sehore \> Scored 90\% \> 2018--2019 \\[0.15cm]

Matriculation \> The Oxford H.S. School, Sehore \> Scored 84.5\% \> 2016--2017
\end{tabbing}



\section{Personal Projects}

\textbf{Multimodal AI Image Search Engine} \hfill \textit{CLIP, Hugging Face, ChromaDB, FastAPI, Streamlit} \\
\begin{itemize}
    \item Engineered a \textbf{Multimodal AI} semantic search system using OpenAI \textbf{CLIP} model to generate joint image-text \textbf{Embeddings} for cross-modal retrieval over a \textasciitilde 20 GB personal dataset.
    \item Built a \textbf{Vector Database} pipeline with \textbf{ChromaDB} to index and retrieve images based on natural language queries, delivering top-5 matches in under one second.
    \item Added smart metadata filters (location, time) and developed a \textbf{FastAPI} backend with \textbf{Streamlit} frontend for intuitive search UX.
\end{itemize}

\textbf{Local News Summarizer} \hfill \textit{Python, LangChain, Groq API, News APIs} \\
\begin{itemize}
    \item Built a \textbf{LangChain}-powered tool that fetches real-time local news, applies \textbf{LLM}-driven summarization, and tags sentiment with \textbf{Groq API}.
    \item Achieved over \textbf{90\%} accuracy in sentiment tagging and reduced reading time by delivering concise, structured news digests.
\end{itemize}

\textbf{LinkedIn Post Generator for Content Creators} \hfill \textit{Python, ChromaDB, Groq API, LangChain} \\
\begin{itemize}
    \item Created an AI tool using \textbf{Generative AI} to generate LinkedIn posts with captions, hashtags, and tone suggestions tailored to each creator's style.
    \item Integrated \textbf{Semantic Search} via \textbf{ChromaDB} to match tone and style of previous content, reducing content creation time from \textasciitilde 30 minutes to under \textbf{3 minutes}.
\end{itemize}



\section{Certifications}

\begin{onecolentry}
            \begin{highlights}
                \item \textbf{ChatGPT Prompt Engineering for Developers} — DeepLearning.AI
                \item \textbf{Introduction to Generative AI} — Google Cloud (Coursera)
                \item \textbf{Google Cloud Computing Foundations Certificate} (Ongoing)
                \item \textbf{Python: AI, Machine Learning \& Data Science} — CodeBasics
                \item \textbf{Full Stack With Python} — Fynd Academy
            \end{highlights}
        \end{onecolentry}


\section{Extracurricular Activities}

\begin{onecolentry}
            \begin{highlights}
                \item Mentored around \textbf{50+ students} during my college.
                \item Conducted training and seminars for school students during COVID-19 pandemic.
                \item Passionate about strategy games such as chess and carrom, and an avid reader.
    
            \end{highlights}
        \end{onecolentry}

\end{document}
