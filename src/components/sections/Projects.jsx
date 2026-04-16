import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/projects-section.css";
import projects from "../../data/projects.json";

/* Carga dinámica imágenes */
const images = import.meta.glob("/src/assets/images/*", {
  eager: true,
});

const getImage = (filename) => {
  const path = `/src/assets/images/${filename}`;
  return images[path]?.default;
};

export default function Projects() {

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const maxIndex = projects.length - 1;

  const next = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  /* AUTOPLAY CORRECTO */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <SectionCard>

      <SectionTitle>Proyectos</SectionTitle>

      <div className="projects-slider">
        <div
          className="projects-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project) => (
            <div className="project-slide" key={project.slug}>

              <div
                className="project-card"
                onClick={() => navigate(`/proyectos/${project.slug}`)}
                style={{ cursor: "pointer" }}
              >

                <div className="project-image">
                  {project.screenshots?.length > 0 && (
                    <img
                      src={getImage(project.screenshots[0])}
                      alt={project.title}
                    />
                  )}
                </div>

                <div className="project-content">
                  <h4>{project.title}</h4>

                  <div className="project-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-bottom">
        <button
          className="view-all-btn"
          onClick={() => navigate("/proyectos")}
        >
          Ver todos
        </button>

        <div className="projects-controls">

          <button onClick={prev}>‹</button>

          <div className="projects-dots">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button onClick={next}>›</button>

        </div>
      </div>

    </SectionCard>
  );
}