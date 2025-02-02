import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

interface GitHubUser {
  public_repos: number;
  created_at: string;
}

const Hero: React.FC = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
  const [projectsCompleted, setProjectsCompleted] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data from GitHub API
        const response = await fetch('https://api.github.com/users/nadeeshafdo');
        const userData: GitHubUser = await response.json();

        // Calculate years of experience
        const accountCreationDate = new Date(userData.created_at);
        const currentDate = new Date();
        const years = currentDate.getFullYear() - accountCreationDate.getFullYear();
        setYearsOfExperience(years);

        // Set number of projects completed
        setProjectsCompleted(userData.public_repos);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="typing-text">Nadeesha Fernando</span></h1>
          <p className="hero-subtitle">I'm a passionate web developer and tech enthusiast.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <img src="https://avatars.githubusercontent.com/u/73843266?v=4" alt="Profile" className="profile-img" />
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">
                  {loading ? '...' : `${yearsOfExperience}+`}
                </span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {loading ? '...' : `${projectsCompleted}+`}
                </span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;