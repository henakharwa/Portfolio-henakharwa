// ---------------------------------------------------------------------------
// Edit this file to turn the template into YOUR portfolio.
// Every page reads from here — you shouldn't need to touch component files
// just to change text, links, or add a project/role/award.
// ---------------------------------------------------------------------------

import {
  Activity,
  CandlestickChart,
  Code2,
  FileSearch,
  GraduationCap,
  Hand,
  Mic,
  MessageSquare,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import youtubeAdsComplianceCover from '../assets/projects/youtube-ads-compliance.webp'
import hospitalistCompanionCover from '../assets/projects/hospitalist-companion.webp'
import aiConnectCover from '../assets/projects/ai-connect.webp'
import financialDocumentChatbotCover from '../assets/projects/financial-document-chatbot.webp'
import newsMisinformationDetectionCover from '../assets/projects/news-misinformation-detection.webp'
import preprightCover from '../assets/projects/prepright.webp'
import stockMarketPredictionCover from '../assets/projects/stock-market-prediction.webp'
import sourceCodeClassificationCover from '../assets/projects/source-code-classification.webp'
import signLanguageRecognitionCover from '../assets/projects/sign-language-recognition.webp'
import rutgersHealthHackathonImage from '../assets/awards/rutgers-health-hackathon.webp'
import sgtaHackTheClockImage from '../assets/awards/sgta-hack-the-clock.webp'
import signLanguagePaperImage from '../assets/awards/sign-language-paper.webp'
import netflixImage from '../assets/projects/netflix.webp'
import virtualAssistantCover from '../assets/projects/virtual-assistant.webp'
import medicalDiseaseDetectionCover from '../assets/projects/medical-disease-detection.webp'

export const profile = {
  name: 'Hena Kharwa',
  handle: 'hena_kharwa', // shown in the nav logo, e.g. "hena_kharwa_"
  role: 'AI Engineer',
  tagline: 'I build fast, thoughtful products end to end.',
  heroLine1: 'Building Systems with',
  heroLine2: 'Artificial Intelligence',
  summary:
    "I'm an AI Engineer specialized in building agentic AI systems with LLMs, RAG, and orchestration frameworks like " +
    'LangChain and LangGraph. I bring a strong background in scalable ML systems and MLOps, with hands-on experience ' +
    'deploying production workloads on AWS and Azure.',
  location: 'New York, United States',
  email: 'henakharwa@gmail.com',
  resumeUrl: '/resume.pdf', // drop a resume.pdf into the public/ folder
  availableForHire: true,
}

export type SocialLink = {
  label: string
  href: string
  icon: 'mail' | 'github' | 'linkedin' | 'calendar' | 'x'
}

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/henakharwa', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hena-kharwa', icon: 'linkedin' },
  { label: 'Schedule a call', href: 'https://calendly.com/henakharwa', icon: 'calendar' },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C++', 'Swift', 'SQL', 'Node.js', 'React', 'JavaScript', 'TypeScript', 'Shell Scripting'],
  },
  {
    category: 'ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'JAX', 'TensorRT', 'TensorRT-LLM', 'VLLM', 'LORA', 'FSDP'],
  },
  {
    category: 'Agentic AI & LLM Orchestration',
    items: ['LangChain', 'LangGraph', 'LangSmith', 'Crew AI', 'AutoGen', 'RAG', 'Knowledge Graph', 'MCP'],
  },
  {
    category: 'Deployment & Infrastructure',
    items: ['FastAPI', 'Flask', 'Docker', 'Kubernetes', 'Vector DBs', 'PostgreSQL', 'Firebase', 'Github Actions', 'Git', 'CI/CD'],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'GCP', 'Azure AI Foundry', 'Neo4j', 'Redis'],
  },
  {
    category: 'Foundation Models',
    items: ['Claude', 'Open AI', 'LLaMA', 'HuggingFace', 'BERT'],
  },
]

export type TimelineEntry = {
  id: string
  kind: 'work' | 'education' | 'research' | 'leadership'
  status: 'ACTIVE' | 'PAST'
  period: string
  title: string
  org: string
  location?: string
  description: string
}

// Ordered most-recent first.
export const timeline: TimelineEntry[] = [
  {
    id: 'exp-1',
    kind: 'research',
    status: 'PAST',
    period: 'Apr 2025 — May 2026',
    title: 'Research Assistant',
    org: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    description:
      'Working on trustworthy RAG systems: from anomaly detection in compliance documents to hallucination mitigation and large-scale serverless deployment, this research strengthens how enterprises can rely on AI-generated compliance insights, reaching 96% precision against an 81% BERT baseline. These efforts explore strategies like LoRA fine-tuning on Llama-3 8B and a serverless AWS pipeline processing 500K+ documents a month to cut hallucinations to 10% and push detection reliability forward',
  },
  {
    id: 'exp-2',
    kind: 'work',
    status: 'PAST',
    period: 'Nov 2025 — May 2026',
    title: 'Generative AI Engineer',
    org: 'Enlighten Infosystems',
    location: 'Vadodara, India',
    description:
      'Working on production GenAI infrastructure: from modular multi-step pipelines to fine-tuned language models and high-recall retrieval, this role builds the systems that let LLM applications run fast and reliably at scale. These efforts explore strategies like LangChain/LangGraph orchestration, PEFT/LoRA fine-tuning on GPT and LLaMA, and FAISS/Pinecone-backed RAG to cut latency by 35%, lift accuracy by 28%, and improve retrieval by 30%',
  },
  {
    id: 'edu-masters',
    kind: 'education',
    status: 'PAST',
    period: 'Sep 2024 — May 2026',
    title: 'Master of Science in Applied Artificial Intelligence',
    org: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    description: 'GPA: 4.0/4.0',
  },
  {
    id: 'exp-3',
    kind: 'work',
    status: 'PAST',
    period: 'Dec 2023 — Jul 2024',
    title: 'AI/ML Engineer',
    org: 'Dhyey Technologies (TechXi)',
    location: 'Vadodara, India',
    description:
      'Working on deep learning performance: from GPU-level training optimization to fine-tuned summarization models, focused on making models both faster to train and sharper in production, cutting training time from 12 to 8.4 hours while lifting accuracy from 58% to 81%. These efforts explore strategies like BERT/GPT-2 fine-tuning to improve MRR by 25% and cut inference latency by 35%',
  },
  {
    id: 'edu-bachelors',
    kind: 'education',
    status: 'PAST',
    period: 'Oct 2020 — May 2024',
    title: 'Bachelor of Technology in Computer Engineering',
    org: 'Charotar University of Science and Technology',
    description: 'GPA: 3.87/4.0',
  },
  {
    id: 'exp-4',
    kind: 'work',
    status: 'PAST',
    period: 'Sep 2022 — Nov 2023',
    title: 'AI/ML Developer',
    org: 'AtliQ Technologies',
    location: 'Vadodara, India',
    description:
      'Working on recommendation systems at scale: from end-to-end model ownership to embedding-based personalization, replaced rule-based logic with learned representations across a 200K+ item catalog. These efforts explore strategies like PyTorch/CUDA hybrid recommenders and BERT/Word2Vec embeddings to cut misclassification by 25% and lift CTR by 20% and conversion by 5% in A/B testing',
  },
  {
    id: 'exp-5',
    kind: 'work',
    status: 'PAST',
    period: 'May 2022 — Aug 2022',
    title: 'Python and ML Intern',
    org: 'Enlighten Infosystems',
    location: 'Vadodara, India',
    description:
      'Working across applied ML prototypes: from decision classification to visual inspection and compliance summarization, built production-adjacent tools spanning computer vision, NLP, and stakeholder-facing dashboards. These efforts explore strategies like PyTorch expert systems, ResNet-18 + OpenCV pipelines, and BERT-based summarization to lift accuracy up to 15% and reach 90% satisfaction across 15 dashboard stakeholders',
  },
]

export type CaseStudy = {
  /** The problem this project set out to solve, 2-4 sentences. */
  problem: string
  /** Ordered list of what was actually built/decided — the "how". */
  approach: string[]
  /** Caption shown under the cover image when it's used as an architecture/flow diagram. */
  architectureCaption: string
  /** Overrides the project's card cover image on the case-study page only — use when the card photo (e.g. a team/event photo) isn't itself the architecture diagram. */
  diagramImage?: string
  /** Short, concrete "what this gets right" bullets — avoid invented numbers. */
  highlights: string[]
  /** Real, verifiable recognition (awards, publications) — omit rather than invent. */
  recognition?: string[]
  /** Forward-looking "what I'd tackle next" — framed as roadmap, not confession. */
  nextSteps: string[]
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  /** Label for the liveUrl link — defaults to "Live Demo". Use e.g. "Published Paper" when liveUrl points elsewhere. */
  liveLabel?: string
  repoUrl?: string
  featured?: boolean
  /** Icon + accent tone used for the project's generated cover art (see ProjectCoverArt). */
  icon: LucideIcon
  tone?: 'indigo' | 'cyan' | 'emerald'
  /** Real cover image (architecture/flow diagram, screenshot, etc.) — overrides the generated icon art when set. */
  image?: string
  /** When set, the project gets a dedicated case-study page at /projects/:id. */
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    id: 'proj-youtube-ads-compliance',
    title: 'YouTube Ads Compliance Analyzer',
    description:
      'AI system that analyzes YouTube ad transcripts with LLMs to automatically detect policy violations and generate compliance reports.',
    tags: ['Python', 'Azure OpenAI', 'LLMs', 'NLP', 'Prompt Engineering'],
    repoUrl: 'https://github.com/henakharwa/Youtube-Ads-Compliance',
    featured: true,
    icon: ShieldCheck,
    tone: 'indigo',
    image: youtubeAdsComplianceCover,
    caseStudy: {
      problem:
        "Advertisers running video campaigns on YouTube have to comply with a long, frequently-updated set of ad policies, but reviewing every ad transcript by hand for questionable claims or restricted language doesn't scale past a handful of campaigns — and a missed violation can mean a rejected or pulled ad.",
      approach: [
        "Pulled ad transcripts and ran them through an Azure OpenAI-backed LLM pipeline, prompt-engineered to reason against YouTube's actual advertising policy categories rather than a generic content filter.",
        'Used NLP pre-processing to segment transcripts into individually-checkable claims and statements before classification, so the model evaluates specific lines instead of the whole transcript at once.',
        "Structured the LLM's output into a compliance report — flagged segments, the policy category triggered, and a plain-language explanation — so a non-technical reviewer can act on it directly.",
      ],
      architectureCaption:
        'Ad transcripts flow into the LLM classification stage, get checked against policy categories, and come out the other side as a structured compliance report.',
      highlights: [
        'Flags specific transcript segments rather than a single pass/fail verdict, so reviewers see exactly what triggered a flag.',
        "Prompt-engineered against YouTube's actual policy taxonomy instead of a generic profanity/toxicity filter.",
      ],
      nextSteps: [
        "Extend detection beyond the transcript to the ad's visuals and audio track, since some violations (misleading imagery, unapproved branding) never show up in speech-to-text.",
        'Add a confidence score per flag so reviewers can triage the highest-risk items first instead of reading every flagged line with equal priority.',
      ],
    },
  },
  {
    id: 'proj-hospitalist-companion',
    title: 'Hospitalist Companion App',
    description:
      'iOS app for hospitalists with GPT-4 document analysis, hands-free voice interaction, AWS-backed HIPAA storage, and role-based staff access.',
    tags: ['SwiftUI', 'Spezi Framework', 'GPT-4', 'AWS S3', 'Firebase', 'AssemblyAI', 'HIPAA-Compliant'],
    repoUrl: 'https://github.com/henakharwa/Hospitalist-Companion-App',
    featured: true,
    icon: Stethoscope,
    tone: 'emerald',
    image: hospitalistCompanionCover,
    caseStudy: {
      problem:
        'Hospitalists move between patients constantly and rarely have a free hand to type — but they still need fast access to patient documentation, and most hospital software assumes a doctor is sitting at a desktop, not walking a ward.',
      approach: [
        "Built a native SwiftUI app on Apple's Spezi framework so it could integrate with iOS health and clinical-workflow patterns instead of being a generic cross-platform wrapper.",
        'Used GPT-4 to parse and summarize clinical documents on request, with AssemblyAI handling hands-free voice input so a physician can ask a question without touching the screen.',
        'Stored patient data in AWS S3 with HIPAA-compliant access controls, and used Firebase for role-based staff access so nurses, residents, and attending physicians each see only what their role should.',
      ],
      architectureCaption:
        "Voice or text queries from the physician are transcribed, routed to GPT-4 for document analysis against the patient's stored records, and returned as a spoken or on-screen answer.",
      highlights: [
        "Hands-free voice interaction end to end, from question to spoken answer, built for hospitalists who can't stop to type.",
        'Role-based access so the same app serves different staff roles without exposing data outside their scope.',
      ],
      recognition: ['1st Place — Rutgers Health Hackathon (Rutgers Health / RWJBarnabas Health), October 2025'],
      nextSteps: [
        "Move retrieval to a proper RAG pipeline over the patient's full chart instead of single-document analysis, so answers can draw on history across visits.",
        'Add an audit trail for every AI-generated summary a clinician acts on, given the compliance stakes of a HIPAA-covered tool.',
      ],
    },
  },
  {
    id: 'proj-ai-connect',
    title: 'AI Connect',
    description:
      'Multi-agent AI platform for alumni engagement — specialized agents handle profiling, personalized outreach, mentorship matching, and funding campaigns.',
    tags: ['Python', 'Flask', 'React', 'Multi-Agent Systems', 'Mentorship Matching', 'Alumni Engagement'],
    repoUrl: 'https://github.com/henakharwa/AI-Connect',
    featured: true,
    icon: GraduationCap,
    tone: 'emerald',
    image: aiConnectCover,
    caseStudy: {
      problem:
        "University alumni networks generate huge amounts of potential value — mentorship, donations, job referrals — but most of it goes untapped because outreach is manual, generic, and doesn't scale past a small events team.",
      approach: [
        'Designed a multi-agent architecture in Python/Flask where each agent owns one job: profiling alumni from available data, drafting personalized outreach, matching mentors to mentees, and running funding campaign messaging.',
        'Built a React front end so university staff can review and approve what each agent proposes rather than letting outreach go out fully automated and unsupervised.',
        'Kept agents specialized and composable so a new engagement type (e.g. event invitations) could be added as a new agent without touching the others.',
      ],
      architectureCaption:
        'Each specialized agent — profiling, outreach, mentorship matching, funding — operates independently and feeds into a shared alumni engagement pipeline.',
      highlights: [
        'Mentorship matching and outreach personalization run as separate agents, so either can be tuned or replaced without breaking the rest of the system.',
        'Human-in-the-loop review built into the React front end rather than fully autonomous outreach.',
      ],
      nextSteps: [
        'Add feedback loops so the matching agent learns from which mentor-mentee pairs actually stayed engaged, not just initial match quality.',
        'Extend the funding agent with campaign performance tracking so staff can see which outreach angles actually convert.',
      ],
    },
  },
  {
    id: 'proj-financial-doc-chatbot',
    title: 'Financial Document Chatbot',
    description:
      'Document Q&A system comparing vector-based RAG with vectorless, PageIndex-style retrieval for querying large financial documents via Gemini.',
    tags: ['Python', 'Google Gemini API', 'RAG', 'Streamlit', 'PDF Processing', 'Semantic Search'],
    repoUrl: 'https://github.com/henakharwa/Financial-Document-Chatbot',
    icon: MessageSquare,
    tone: 'cyan',
    image: financialDocumentChatbotCover,
  },
  {
    id: 'proj-news-misinformation-detection',
    title: 'News Misinformation Detection',
    description:
      'Neurosymbolic AI system combining GPT-5 with symbolic logic and temporal knowledge graphs to detect contradictions and misinformation in news content.',
    tags: ['Python', 'GPT-5', 'PyTorch Geometric', 'Knowledge Graphs', 'NetworkX', 'Neurosymbolic AI'],
    repoUrl: 'https://github.com/henakharwa/News-Misinformation-Detection',
    icon: Newspaper,
    tone: 'emerald',
    image: newsMisinformationDetectionCover,
  },
  {
    id: 'proj-prepright',
    title: 'PrepRight',
    description:
      'Interview-prep platform that analyzes resumes and job descriptions to surface personalized skill-gap insights and interview guidance.',
    tags: ['React', 'TypeScript', 'Flask', 'Python', 'BERT', 'FAISS', 'HuggingFace'],
    repoUrl: 'https://github.com/henakharwa/PrepRight',
    icon: FileSearch,
    tone: 'indigo',
    image: preprightCover,
  },
  {
    id: 'proj-stock-market-prediction',
    title: 'AI-Based Stock Market Prediction System',
    description:
      'ML dashboard combining news and social sentiment analysis with a CNN-BiLSTM forecasting model to generate stock recommendations.',
    tags: ['Python', 'PyTorch', 'CNN-BiLSTM', 'Streamlit', 'Pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/henakharwa/AI-Powered-Stock-Recommendation-and-Sentiment-Analysis-Dashboard',
    icon: CandlestickChart,
    tone: 'cyan',
    image: stockMarketPredictionCover,
  },
  {
    id: 'proj-source-code-classification',
    title: 'Source Code Classification',
    description:
      'Research project classifying source code by programming language and algorithm type using an LRCN deep learning model.',
    tags: ['Python', 'LRCN', 'Deep Learning', 'Jupyter', 'Classification'],
    repoUrl: 'https://github.com/henakharwa/Source-Code-Classification',
    icon: Code2,
    tone: 'indigo',
    image: sourceCodeClassificationCover,
  },
  {
    id: 'proj-sign-language-recognition',
    title: 'Isolated Sign Language Recognition',
    description:
      'Deep learning pipeline recognizing isolated sign-language gestures from video, benchmarking AlexNet, InceptionV3, MobileNetV2, and ResNet.',
    tags: ['Python', 'AlexNet', 'InceptionV3', 'MobileNetV2', 'ResNet', 'Computer Vision'],
    repoUrl: 'https://github.com/henakharwa/Isolates-Sign-Language',
    liveUrl: 'https://ieeexplore.ieee.org/document/10577129',
    liveLabel: 'Published Paper',
    icon: Hand,
    tone: 'cyan',
    image: signLanguageRecognitionCover,
  },
  {
    id: 'proj-hybrid-recommender',
    title: 'Hybrid Recommender System',
    description:
      'Hybrid recommendation engine combining CNN-LSTM deep learning with XGBoost gradient boosting to generate personalized recommendations.',
    tags: ['Python', 'CNN', 'LSTM', 'XGBoost', 'Jupyter'],
    repoUrl: 'https://github.com/henakharwa/HybridRecommenderSystem',
    icon: Sparkles,
    tone: 'indigo',
    image: netflixImage,
  },
  {
    id: 'proj-virtual-assistant',
    title: 'Virtual Personal Assistant',
    description:
      'Python-based voice assistant, Jarvis-style, automating tasks like web browsing, alarms, translation, and dictionary lookups via speech.',
    tags: ['Python', 'Speech Recognition', 'Text-to-Speech', 'Web Automation', 'Automation Scripting'],
    repoUrl: 'https://github.com/henakharwa/Personal-Virtual-Assistant',
    icon: Mic,
    tone: 'cyan',
    image: virtualAssistantCover,
  },
  {
    id: 'proj-medical-disease-detection',
    title: 'Integrated Medical Disease Detection System',
    description:
      "ML system with five trained models detecting diabetes, heart disease, Parkinson's, maternal health risk, and fetal health status.",
    tags: ['Python', 'Scikit-learn', 'TensorFlow/Keras', 'Model Serialization', 'Healthcare ML'],
    repoUrl: 'https://github.com/henakharwa/IMD',
    icon: Activity,
    tone: 'emerald',
    image: medicalDiseaseDetectionCover,
  },
]

export type Award = {
  id: string
  category: 'Academic' | 'Professional' | 'Hackathon' | 'Publication'
  title: string
  org: string
  date: string
  description: string
  certificateUrl?: string
  /** Optional link to the project's source code repo. */
  repoUrl?: string
  /** Optional photo from the event — shown as a cover image on the award card. */
  image?: string
}

export const awards: Award[] = [
  {
    id: 'pub-sign-language-recognition',
    category: 'Publication',
    title: 'Hybrid InceptionNet Based Enhanced Architecture for Isolated Sign Language Recognition',
    org: 'IEEE Access',
    date: 'January 2024',
    description:
      'Enhanced InceptionV4 with optimized backpropagation and ensemble CNN learning to recognize isolated sign-language gestures, achieving 98.46% accuracy on benchmark datasets.',
    certificateUrl: 'https://ieeexplore.ieee.org/document/10577129',
    image: signLanguagePaperImage,
  },
  {
    id: 'award-rutgers-health-hackathon',
    category: 'Hackathon',
    title: 'Rutgers Health Hackathon — 1st Place',
    org: 'Rutgers Health / RWJBarnabas Health',
    date: 'October 2025',
    description:
      'AI-powered iOS app using SwiftUI, GPT-5 + AWS Bedrock RAG, vector search, voice interaction, and secure FHIR-compatible access for physicians.',
    repoUrl: 'https://github.com/henakharwa/Hospitalist-Companion-App',
    image: rutgersHealthHackathonImage,
  },
  {
    id: 'award-sgta-hack-the-clock',
    category: 'Hackathon',
    title: 'SGTA Hack the Clock — 2nd Place',
    org: 'Stevens Institute of Technology',
    date: 'November 2025',
    description:
      'Built a neurosymbolic AI system combining GPT-5 with symbolic logic and temporal knowledge graphs to detect misinformation and contradictions in news content.',
    repoUrl: 'https://github.com/henakharwa/News-Misinformation-Detection',
    image: sgtaHackTheClockImage,
  },
  {
    id: 'award-charusat-2nd-rank',
    category: 'Academic',
    title: 'Bachelor of Computer Engineering — 2nd Rank',
    org: 'Charusat University',
    date: '2024',
    description: '2nd rank in the Computer Engineering program with a 3.87 GPA.',
  },
]
