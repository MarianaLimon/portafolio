import { useState } from "react";
import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/projects-section.css";
import projects from "../../data/projects.json";

export default function Projects() {

  const [index, setIndex] = useState(0);

  const maxIndex = projects.length - 2;

  const next = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <SectionCard>

      <SectionTitle>Proyectos</SectionTitle>

      <div className="projects-slider">
        <div
          className="projects-track"
          style={{ transform: `translateX(-${index * 50}%)` }}
        >
          {projects.map((project, i) => (
            <div className="project-slide" key={i}>
              <div className="project-card">

                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

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
        <button className="view-all-btn">Ver todos</button>

        <div className="projects-controls">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>
      </div>

    </SectionCard>
  );
}