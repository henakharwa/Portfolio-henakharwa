import React from 'react';
import './Home.css';
import profileImg from '../Assets/profile.jpeg';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-wrapper">
        
        {/* Left: Profile Image */}
        <div className="home-image">
          <img src={profileImg} alt="Hena Kharwa" />
        </div>

        {/* Right: Text */}
        <div className="home-content">
          <h1>
            Hi, I'm <span className="highlight animated-text">Hena Kharwa</span>
          </h1>
          <p>
            Passionate about building intelligent, scalable AI solutions that power real-world impact.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
