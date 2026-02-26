import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import projects from "../../data/projects.json";
import "../../css/projects-page.css";

/* Carga dinámica de imágenes */
const images = import.meta.glob("/src/assets/images/*", {
  eager: true,
});

const getImage = (filename) => {
  const path = `/src/assets/images/${filename}`;
  return images[path]?.default;
};

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const [screenIndex, setScreenIndex] = useState(0);

  const project = projects.find((p) => p.slug === activeSlug);

  const nextScreen = () => {
    setScreenIndex(
      (prev) => (prev + 1) % project.screenshots.length
    );
  };

  const prevScreen = () => {
    setScreenIndex(
      (prev) =>
        prev === 0
          ? project.screenshots.length - 1
          : prev - 1
    );
  };

  const changeProject = (slug) => {
    setActiveSlug(slug);
    setScreenIndex(0);
  };

  return (
    <div className="projects-page">
      <SectionTitle>Proyectos</SectionTitle>

      <div className="projects-layout">

        {/* COLUMNA PRINCIPAL */}
        <div className="project-main">

          {/* LAPTOP */}
          <div className="laptop-wrapper">

            <div className="laptop-body">
              <div className="laptop-screen-container">

                {project.screenshots.length > 0 && (
                  <img
                    src={getImage(
                      project.screenshots[screenIndex]
                    )}
                    alt={project.title}
                    className="laptop-screen-image"
                  />
                )}

                <div className="screen-controls">
                  <button onClick={prevScreen}>‹</button>
                  <button onClick={nextScreen}>›</button>
                </div>

              </div>
            </div>

            <div className="laptop-base"></div>

          </div>

          {/* INFO */}
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver sitio
                </a>
              )}
            </div>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="projects-sidebar">
          {projects.map((p) => (
            <div
              key={p.slug}
              className={`sidebar-item ${
                p.slug === activeSlug ? "active" : ""
              }`}
              onClick={() => changeProject(p.slug)}
            >
              {p.title}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}