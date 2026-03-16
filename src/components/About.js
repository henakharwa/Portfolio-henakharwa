import React from 'react';
import './About.css';
import resume from '../Assets/Hena_Kharwa_Resume.pdf';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <h1 className="about-heading">Introduction</h1>


        <p className="about-content">
          <span className="highlight">ML Engineer</span> with <span className="highlight">2+ years </span> 
          of experience building production-grade distributed systems — RAG pipelines, LLM fine-tuning, 
          and large-scale ML infrastructure across healthcare and financial domains. Skilled in full-stack 
          development, NLP, generative AI, and scalable inference deployments on AWS and Azure. My work 
          has focused on developing compliance systems, reliable AI solutions, including recommendation 
          systems and regulatory intelligence platforms.

        </p>

        <p className="about-content">
          I thrive on developing scalable, efficient systems that solve complex challenges, streamlining data-driven applications, or building intelligent software. I am committed to continuous learning and innovation, eager to contribute to transformative projects that shape the future of AI.
        </p>

        <a
          href={resume}
          className="resume-btn"
          download="Hena_Kharwa_Resume.pdf"
        >
          View Resume →
        </a>
      </div>
    </section>
  );
};

export default About;
