import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import projects from "../../data/projects.json";
import "../../css/projects-page.css";

const images = import.meta.glob("../../assets/images/*", {
  eager: true,
});

const getImage = (filename) => {
  return images[`../../assets/images/${filename}`]?.default;
};

export default function ProjectsPage() {

  const { slug } = useParams();
  const navigate = useNavigate();

  const [activeProject, setActiveProject] = useState(projects[0]);
  const [screenIndex, setScreenIndex] = useState(0);

  /* 🔥 Detecta slug cuando cambia la URL */
  useEffect(() => {
    if (slug) {
      const found = projects.find((p) => p.slug === slug);
      if (found) {
        setActiveProject(found);
        setScreenIndex(0);
      } else {
        navigate("/proyectos"); // fallback si slug no existe
      }
    }
  }, [slug, navigate]);

  const nextScreen = () => {
    setScreenIndex((prev) =>
      prev === activeProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevScreen = () => {
    setScreenIndex((prev) =>
      prev === 0
        ? activeProject.screenshots.length - 1
        : prev - 1
    );
  };

  const changeProject = (project) => {
    setActiveProject(project);
    setScreenIndex(0);
    navigate(`/proyectos/${project.slug}`); // 🔥 actualiza URL
  };

  return (
    <div className="projects-page">
      <SectionTitle>Proyectos</SectionTitle>

      <div className="projects-layout">

        {/* MAIN */}
        <div className="project-main">

          <div className="laptop-wrapper">
            <div className="laptop-body">
              <div className="laptop-screen-container">

                {activeProject.screenshots?.length > 0 && (
                  <img
                    src={getImage(activeProject.screenshots[screenIndex])}
                    alt={activeProject.title}
                    className="laptop-screen-image"
                  />
                )}

                {activeProject.screenshots?.length > 1 && (
                  <div className="screen-controls">
                    <button onClick={prevScreen}>‹</button>
                    <button onClick={nextScreen}>›</button>
                  </div>
                )}

              </div>
            </div>
            <div className="laptop-base"></div>
          </div>

          {/* INFO */}
          <div className="project-info">

            <h2>{activeProject.title}</h2>

            {activeProject.subtitle && (
              <p className="project-subtitle">
                {activeProject.subtitle}
              </p>
            )}

            <p>{activeProject.description}</p>

            <div className="project-meta">
              {activeProject.year && <span>{activeProject.year}</span>}
              {activeProject.role && <span>{activeProject.role}</span>}
              {activeProject.client && <span>{activeProject.client}</span>}
              {activeProject.type && <span>{activeProject.type}</span>}
            </div>

            {activeProject.highlights && (
              <ul className="project-highlights">
                {activeProject.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            <div className="tech-tags">
              {activeProject.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
              {activeProject.demo && (
                <a href={activeProject.demo} target="_blank" rel="noreferrer">
                  Ver sitio
                </a>
              )}
            </div>

          </div>

        </div>

        {/* SIDEBAR */}
        <div className="projects-sidebar">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`sidebar-item ${
                project.id === activeProject.id ? "active" : ""
              }`}
              onClick={() => changeProject(project)}
            >
              <strong>{project.title}</strong>
              {project.year && <span>{project.year}</span>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}