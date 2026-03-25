import { ProjectsData } from "../data/ProjectsData";
import "../styling/projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>
      <ul className="projects-list">
        {ProjectsData.map((project, key) => (
          <li key={key} className="project-item">
            <div className="project-info">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            {project.url && (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View →
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
