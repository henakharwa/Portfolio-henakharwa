import React from "react";
import "./Experience.css";

import charusatLogo from "../Assets/charusat.png";
import dhyeLogo from "../Assets/enlighten.png";
import stevensLogo from "../Assets/stevens.png";
import techxiLogo from "../Assets/techxi.png";

const experiences = [
  {
    duration: "Apr 2025 – Present | Hoboken, NJ, USA",
    logo: stevensLogo,
    role: "Research Assistant",
    company: "STEVENS INSTITUTE OF TECHNOLOGY",
    bullets: [
      "Built an AI-driven detection system using RAG and embeddings to identify anomalous content with 96% accuracy.",
      "Fine-tuned LLMs (Grok AI, Hugging Face) with LoRA tuning and prompt optimization, reducing hallucinations by 27%",
      "Architected scalable AWS ingestion & inference pipelines (EC2, Lambda, S3) for high-throughput ML workloads",
      "Integrated KGs with FAISS/Pinecone + Flask–Docker APIs for enterprise compliance, raising accuracy by 22%"
    ],
  },
  {
    duration: "Jan 2024 – Jun 2024 | Vadodara, Gujarat, India",
    logo: techxiLogo,
    role: "AI / ML Intern",
    company: "DHYEY TECHNOLOGIES - TECHXI",
    bullets: [
      "Designed GPU-optimized deep neural nets in TensorFlow, reduced training time 30% & increased accuracy by 40%",
      "Used transformers (BERT/GPT) for summarization, embeddings, and fine-tuning, improving relevance by 25%",
      "Optimized batch & real-time ML inference systems using FastAPI, and Azure Containers with low-latency performance",
      "Automated ML pipelines with CI/CD (GitHub Actions, Azure ML) and ONNX, reducing deployment time by 30%"
    ],
  },
  {
    duration: "May 2023 – Aug 2023 | Vadodara, Gujarat, India",
    logo: charusatLogo,
    role: "Machine Learning Intern",
    company: "CHARUSAT UNIVERSITY",
    bullets: [
      "Modeled hybrid recommender with TensorFlow/PyTorch + CUDA, reducing misclassification 25% & speeding training",
      "Revamped e-commerce recs with Word2Vec/BERT embeddings, boosting engagement 20% and conversions 5%",
      "Applied BERT/GPT-2/DistilBERT with FAISS for product suggestions and descriptions, improving accuracy 18%",
      "Deployed recs services with Docker/FastAPI/Azure ML for scalable real-time inference, reducing latency 25%"
    ],
  },
  {
    duration: "May 2022 – Jul 2022 | Gujarat, India",
    logo: dhyeLogo,
    role: "Python and ML Intern",
    company: "ENLIGHTEN INFOSYSTEMS",
    bullets: [
      "Established expert system in PyTorch with CUDA, reducing decision time 30% & boosting performance 10%",
      "Applied OpenCV + deep CNNs for image analysis, improving accuracy 15% and reducing processing time 25%",
      "Designed Tkinter/Streamlit GUIs with 90% user satisfaction, integrating real-time ML predictions",
      "Prototyped LLMs (GPT-2/BERT) for summarization/reporting, boosting efficiency 20% & accuracy 15%"
    ],
  },
];

const Experience = () => {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-container">
        <h1 className="exp-heading">Work Experience</h1>
        <p className="exp-subheading">MY JOURNEY SO FAR.</p>

        <div className="exp-list">
          {experiences.map((exp, idx) => (
            <article className="exp-card" key={idx}>
              <div className="exp-card-header">
                <div className="exp-left">
                  <div className="exp-logo-wrap">
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                  <h2 className="exp-company">{exp.company}</h2>
                </div>

                <div className="exp-role">{exp.role}</div>
              </div>

              <div className="exp-divider" />

              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
                {exp.tools ? (
                  <li className="exp-tools">
                    <b>Tools:</b> {exp.tools}
                  </li>
                ) : null}
              </ul>

              <div className="exp-footer">{exp.duration}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
