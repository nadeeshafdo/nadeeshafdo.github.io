import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortBy, setSortBy] = useState<string>('created');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/nadeeshafdo/repos?per_page=100');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const sortProjects = (sortBy: string) => {
    let sortedProjects = [...projects];
    switch (sortBy) {
      case 'stars':
        sortedProjects.sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;
      case 'name':
        sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'updated':
        sortedProjects.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        break;
      default:
        sortedProjects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
    }
    setProjects(sortedProjects);
  };

  return (
    <section id="projects">
      <div className="sort-container">
        <label htmlFor="sort-options" className="sort-label">Sort By:</label>
        <select
          id="sort-options"
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            sortProjects(e.target.value);
          }}
        >
          <option value="created">Date Created</option>
          <option value="updated">Last Updated</option>
          <option value="name">Name</option>
          <option value="stars">Stars</option>
        </select>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-header">
              <i className="fas fa-folder-open project-icon"></i>
              <div className="project-links">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                <a
                  href={project.html_url}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description || 'No description available'}</p>
            <div className="project-tech">
              {project.topics.map((topic) => (
                <span key={topic} className="tech-tag">{topic}</span>
              ))}
            </div>
            {project.language && (
              <div className="project-language">
                <span className="language-dot"></span>
                <span>{project.language}</span>
              </div>
            )}
            <p className="project-created-date">
              Created on: {new Date(project.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;