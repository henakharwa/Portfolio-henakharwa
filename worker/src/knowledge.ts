// Plain-text knowledge base for the "ASK_HENA_AI" chat widget. Kept in sync by
// hand with src/data/portfolio.ts in the main site — if you update your
// skills, projects, experience, or awards there, update the matching facts
// here too so the assistant's answers stay accurate.

export const KNOWLEDGE_BASE = `
PROFILE
Name: Hena Kharwa
Role: AI Engineer
Location: New York, United States
Email: henakharwa@gmail.com
Summary: AI Engineer specialized in building agentic AI systems with LLMs, RAG, and orchestration
frameworks like LangChain and LangGraph. Strong background in scalable ML systems and MLOps, with
hands-on experience deploying production workloads on AWS and Azure.

LINKS
GitHub: https://github.com/henakharwa
LinkedIn: https://linkedin.com/in/hena-kharwa
Schedule a call: https://calendly.com/henakharwa

TECHNICAL SKILLS
Languages: Python, Java, C++, Swift, SQL, Node.js, React, JavaScript, TypeScript, Shell Scripting
ML Frameworks: PyTorch, TensorFlow, Scikit-learn, Keras, JAX, TensorRT, TensorRT-LLM, VLLM, LORA, FSDP
Agentic AI & LLM Orchestration: LangChain, LangGraph, LangSmith, Crew AI, AutoGen, RAG, Knowledge Graph, MCP
Deployment & Infrastructure: FastAPI, Flask, Docker, Kubernetes, Vector DBs, PostgreSQL, Firebase, Github Actions, Git, CI/CD
Cloud: AWS, GCP, Azure AI Foundry, Neo4j, Redis
Foundation Models: Claude, Open AI, LLaMA, HuggingFace, BERT

WORK EXPERIENCE (most recent first)
1. Research Assistant — Stevens Institute of Technology, Hoboken, NJ (Apr 2025 — May 2026)
   Designed a RAG-based anomaly detector for compliance documents, reaching 96% precision versus an 81%
   BERT baseline. Cut hallucinations to 10% via LoRA fine-tuning on Llama-3 8B, and built a serverless
   AWS pipeline processing 500K+ docs/month.

2. Generative AI Engineer — Enlighten Infosystems, Vadodara, India (Nov 2025 — May 2026)
   Developed modular GenAI pipelines with LangChain and LangGraph, cutting multi-step LLM latency by
   35%. Fine-tuned GPT/LLaMA models with PEFT/LoRA for a 28% accuracy boost, and built production RAG
   systems with FAISS/Pinecone for 30% better retrieval.

3. AI/ML Engineer — Dhyey Technologies (TechXi), Vadodara, India (Dec 2023 — Jul 2024)
   Led GPU optimization of deep learning models, cutting training time from 12 to 8.4 hours and
   boosting accuracy from 58% to 81%. Fine-tuned BERT/GPT-2 for summarization, improving MRR by 25%
   and cutting inference latency 35%.

4. AI/ML Developer — AtliQ Technologies, Vadodara, India (Sep 2022 — Nov 2023)
   Owned an end-to-end hybrid recommender system in PyTorch/CUDA for a 200K+ item catalog, cutting
   misclassification by 25%. Replaced rule-based recommendations with BERT/Word2Vec embeddings,
   lifting CTR 20% and conversion 5% in A/B testing.

5. Python and ML Intern — Enlighten Infosystems, Vadodara, India (May 2022 — Aug 2022)
   Built a PyTorch expert system for decision classification (+10% accuracy), a ResNet-18 + OpenCV
   visual inspection pipeline (+15% accuracy), Streamlit dashboards for 15 stakeholders (90%
   satisfaction), and a BERT-based auto-summarizer for compliance reports.

EDUCATION
- Master of Science in Applied Artificial Intelligence — Stevens Institute of Technology, Hoboken, NJ
  (Sep 2024 — May 2026). GPA: 4.0/4.0.
- Bachelor of Technology in Computer Engineering — Charotar University of Science and Technology
  (Oct 2020 — May 2024). GPA: 3.87/4.0. Graduated 2nd rank in the program.

PROJECTS
1. YouTube Ads Compliance Analyzer — AI system that analyzes YouTube ad transcripts with LLMs to
   automatically detect policy violations and generate compliance reports. Tech: Python, Azure
   OpenAI, LLMs, NLP, Prompt Engineering. Repo: https://github.com/henakharwa/Youtube-Ads-Compliance

2. Hospitalist Companion App — iOS app for hospitalists with GPT-4 document analysis, hands-free
   voice interaction, AWS-backed HIPAA storage, and role-based staff access. Tech: SwiftUI, Spezi
   Framework, GPT-4, AWS S3, Firebase, AssemblyAI. Repo:
   https://github.com/henakharwa/Hospitalist-Companion-App
   (This project also won 1st Place at the Rutgers Health Hackathon, Oct 2025.)

3. AI Connect — Multi-agent AI platform for alumni engagement; specialized agents handle profiling,
   personalized outreach, mentorship matching, and funding campaigns. Tech: Python, Flask, React,
   Multi-Agent Systems. Repo: https://github.com/henakharwa/AI-Connect

4. Financial Document Chatbot — Document Q&A system comparing vector-based RAG with vectorless,
   PageIndex-style retrieval for querying large financial documents via Gemini. Tech: Python, Google
   Gemini API, RAG, Streamlit, PDF Processing. Repo:
   https://github.com/henakharwa/Financial-Document-Chatbot

5. News Misinformation Detection — Neurosymbolic AI system combining GPT-5 with symbolic logic and
   temporal knowledge graphs to detect contradictions and misinformation in news content. Tech:
   Python, GPT-5, PyTorch Geometric, Knowledge Graphs, NetworkX. Repo:
   https://github.com/henakharwa/News-Misinformation-Detection
   (This project also won 2nd Place at SGTA Hack the Clock, Stevens Institute of Technology, Nov 2025.)

6. PrepRight — Interview-prep platform that analyzes resumes and job descriptions to surface
   personalized skill-gap insights and interview guidance. Tech: React, TypeScript, Flask, Python,
   BERT, FAISS, HuggingFace. Repo: https://github.com/henakharwa/PrepRight

7. AI-Based Stock Market Prediction System — ML dashboard combining news and social sentiment
   analysis with a CNN-BiLSTM forecasting model to generate stock recommendations. Tech: Python,
   PyTorch, CNN-BiLSTM, Streamlit, Pandas, scikit-learn. Repo:
   https://github.com/henakharwa/AI-Powered-Stock-Recommendation-and-Sentiment-Analysis-Dashboard

8. Source Code Classification — Research project classifying source code by programming language and
   algorithm type using an LRCN deep learning model. Tech: Python, LRCN, Deep Learning, Jupyter. Repo:
   https://github.com/henakharwa/Source-Code-Classification

9. Isolated Sign Language Recognition — Deep learning pipeline recognizing isolated sign-language
   gestures from video, benchmarking AlexNet, InceptionV3, MobileNetV2, and ResNet. Tech: Python,
   Computer Vision. Repo: https://github.com/henakharwa/Isolates-Sign-Language. Published as an IEEE
   Access paper (see Publications below).

10. Hybrid Recommender System — Hybrid recommendation engine combining CNN-LSTM deep learning with
    XGBoost gradient boosting to generate personalized recommendations. Tech: Python, CNN, LSTM,
    XGBoost, Jupyter. Repo: https://github.com/henakharwa/HybridRecommenderSystem

11. Virtual Personal Assistant — Python-based voice assistant, Jarvis-style, automating tasks like web
    browsing, alarms, translation, and dictionary lookups via speech. Tech: Python, Speech
    Recognition, Text-to-Speech, Web Automation. Repo:
    https://github.com/henakharwa/Personal-Virtual-Assistant

12. Integrated Medical Disease Detection System — ML system with five trained models detecting
    diabetes, heart disease, Parkinson's, maternal health risk, and fetal health status. Tech: Python,
    Scikit-learn, TensorFlow/Keras, Model Serialization. Repo: https://github.com/henakharwa/IMD

PUBLICATIONS
- "Hybrid InceptionNet Based Enhanced Architecture for Isolated Sign Language Recognition" — IEEE
  Access, January 2024. Enhanced InceptionV4 with optimized backpropagation and ensemble CNN learning
  to recognize isolated sign-language gestures, achieving 98.46% accuracy on benchmark datasets.
  Link: https://ieeexplore.ieee.org/document/10577129

AWARDS & HACKATHONS
- Rutgers Health Hackathon — 1st Place, Rutgers Health / RWJBarnabas Health, October 2025. AI-powered
  iOS app using SwiftUI, GPT-5 + AWS Bedrock RAG, vector search, voice interaction, and secure
  FHIR-compatible access for physicians (the Hospitalist Companion App project).
- SGTA Hack the Clock — 2nd Place, Stevens Institute of Technology, November 2025. Built a
  neurosymbolic AI system combining GPT-5 with symbolic logic and temporal knowledge graphs to detect
  misinformation and contradictions in news content (the News Misinformation Detection project).
- Bachelor of Computer Engineering — 2nd Rank, Charusat University, 2024. 2nd rank in the Computer
  Engineering program with a 3.87 GPA.
`.trim()
