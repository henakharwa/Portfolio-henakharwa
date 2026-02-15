import React from 'react';
import './About.css';
import resume from '../Assets/Hena_Kharwa_Resume.pdf';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <h1 className="about-heading">Introduction</h1>

        <p className="about-content">
          Hi, I'm Hena Kharwa, a current graduate student pursuing MS in Applied AI at Stevens Institute of Technology 🎓 with a passion for applying machine learning techniques to real-life challenges in Software development industry. As a seasoned <span className="highlight">Artificial Intelligence Enthusiast</span> I specialize in Artificial Intelligence, Machine Learning, Deep Learning and Data Science.
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
