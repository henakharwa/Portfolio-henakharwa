import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Hospitalist Companion App',
    description:
      'An intelligent clinical assistant that integrates patient data, medical knowledge, and voice-enabled conversational AI using a secure RAG pipeline (GPT-5 + AWS Bedrock) and FHIR-compliant backend—delivering real-time, evidence-based insights to accelerate physician decision-making and improve clinical efficiency.',
    tech: ['Python', 'LLMs', 'SwiftUI', 'RAG', 'Vector Search', 'Conversational AI'],
    achievement: 'Won 1st place in Rutgers Health Hackathon 2025',
  },
  {
    title: 'AI - Based Stock Market Prediction System',
    description:
      'A unified investment platform that combines historical price data, real-time news and social-media sentiment powered by LSTM forecasts and NLP analysis—to deliver actionable, data-driven insights for smarter trading decisions.',
    tech: ['React', 'Node.js', 'Python', 'LLMs', 'Deep Learning', 'Pytorch'],
    github: 'https://github.com/henakharwa/AI-Powered-Stock-Recommendation-and-Sentiment-Analysis-Dashboard',
  },
  {
    title: 'AI Connect',
    description:
      'AI-powered alumni engagement system that helps institutions intelligently profile alumni, automate mentorship matching, personalize communication, and track outreach success through real-time dashboards.',
    tech: ['React', 'Node.js', 'Python', 'Quart', 'Azure AI Foundry', 'Autogen', 'HTML/CSS'],
    github: 'https://github.com/shubhamsatbhaiya/quackathon',
    live: '',
    image: ''
  },
  {
    title: 'PrepRight',
    description:
      'AI-powered interview preparation app that uses leverages LLMs to deliver personalized feedback and improve candidate readiness through intelligent assessment and automation.',
    tech: ['Python', 'Flask', 'React', 'Node.js', 'GitHub Copilot', 'OpenAI API', 'NLP', 'Prompt Engineering', 'AWS', 'LLMs'],
    github: 'https://github.com/henakharwa/PrepRight',
    live: '',
    image: ''
  },
  {
    title: 'Source Code Classification',
    description:
      'A deep learning-based system that accurately classifies programming languages and algorithms from raw code using LRCN and token embeddings, enabling intelligent code analysis and automation.',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Google Colaboratory'],
    github: 'https://github.com/henakharwa/Source-Code-Classification',
    live: '',
    image: ''
  },
  {
    title: 'Isolated Sign Language Recognition',
    description:
      'AI-powered system that translates sign gestures into text and speech with 92% accuracy, enhancing accessibility for the deaf community through deep learning and computer vision.',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Pytorch', 'OpenCV', 'Tensorflow', 'Computer Vision', 'Github'],
    github: 'https://github.com/henakharwa/Isolates-Sign-Language',
    live: 'https://ieeexplore.ieee.org/document/10577129',
    image: ''
  },
  {
    title: 'Hybrid Recommender System',
    description:
      'A collaborative and content-based recommendation system using deep learning, improving personalization and boosting user engagement and conversions on e-commerce platforms',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Pytorch', 'CuBLAS', 'Apache Kafka', 'ETL Pipelines', 'Git'],
    github: 'https://github.com/henakharwa/HybridRecommenderSystem',
    live: '',
    image: ''
  },
  {
    title: 'Virtual Personal Assistant',
    description:
      'A Python-based AI tool that interacts with users through voice commands to deliver real-time updates, control media, browse the web, and automate daily tasks for a seamless user experience.',
    tech: ['Python', 'Web Development', 'HTML/CSS', 'Web APIs'],
    github: 'https://github.com/henakharwa/Personal-Virtual-Assistant',
    live: '',
    image: ''
  },
  {
    title: 'Integrated Medical Disease Detection System',
    description:
      'A GPU-accelerated medical disease detection platform that delivers real-time, high-accuracy disease predictions using deep learning, Kafka pipelines, and containerized APIs deployed via Django, Flask, and Azure.',
    tech: ['Python', 'Deep Learning', 'Django', 'Flask', 'FastAPI', 'Docker', 'Kafka', 'Azure', 'GPU Optimization'],
    github: 'https://github.com/henakharwa/IMD',
    live: '',
    image: ''
  },
  {
    title: 'Alzheimer Disease Detection',
    description:
      'A deep learning-based medical system that analyzes brain scans to accurately identify and classify stages of Alzheimer’s, aiding in early diagnosis and improved clinical decision-making.',
    tech: ['Python', 'Deep Learning', 'Machine Learning', 'ETL Pipelines', 'Pytorch', 'SHAP', 'LIME', 'OpenCV'],
    github: 'https://github.com/henakharwa/Alzheimer-Disease-Detection-',
    live: '',
    image: ''
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1 className="section-heading">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
            )}

            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            {/* ✅ Achievement block */}
            {project.achievement && (
              <div className="project-achievement">
                🏆 <span>{project.achievement}</span>
              </div>
            )}

            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
