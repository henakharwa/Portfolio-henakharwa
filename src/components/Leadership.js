import React from 'react';
import './Leadership.css';

const leadershipExperiences = [
    {
        title: 'Research Assistant at School of Bussiness',
        org: 'Stevens Institute of Technology',
        duration: 'April 2025 – Present',
        highlights: [
          'Developing AI-driven compliance monitoring modules using Python and TensorFlow, extracting policy-relevant features from regulatory texts and integrating them into the AI Compliance system',
          'Conducted rigorous evaluation and validation studies, designing test cases and leveraging statistical analysis to measure model precision and recall.',
        ]
    },
  {
    title: 'Graduate Student Council Member',
    org: 'Stevens Institute of Technology',
    duration: 'Jan 2025 - Present',
    highlights: [
      'Serve as a liaison between graduate students and the administration, addressing concerns and promoting departmental initiatives.',
      'Support event planning, policy discussions, and student outreach to enhance community involvement.',
    ]
  },
  {
    title: 'Project Lead - AI/ML Team',
    org: 'Charusat Learning and Development Club',
    duration: 'Nov 2022 - Jan 2024',
    highlights: [
      'Led AI/ML and Data Science initiatives, mentoring project teams and delivering results in technical research and development.',
      'Organized technical workshops, coding events, and hackathons, promoting peer learning and innovation culture.'
    ]
  }
 
  // Add more experiences here
];

const Leadership = () => {
  return (
    <div className="leadership-section" id="leadership">
      <h1 className="leadership-heading">Leadership & Volunteering</h1>
      <p className="leadership-subheading">
        Empowering communities through collaboration and service.
      </p>

      <div className="leadership-grid">
        {leadershipExperiences.map((exp, idx) => (
          <div key={idx} className="leadership-card">
            <h2>{exp.title}</h2>
            <h3>{exp.org}</h3>
            <p className="leadership-duration">{exp.duration}</p>
            <ul>
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
