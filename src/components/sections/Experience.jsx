import { useState } from "react";
import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/experience-section.css";

export default function Experience() {
  const [index, setIndex] = useState(0);

  const jobs = [
    {
      year: "2019 - Actual",
      company: "Central Media",
      location: "CDMX",
      role: "Front End Developer",
      tasks: [
        "Desarrollo y gestión de sitios web",
        "Creación de templates y plugins",
        "Maquetado de mailing especializado",
        "Optimización SEO",
        "Interpretación de data analytics",
        "Creación de ayudas visuales para e-learning"
      ],
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      year: "2017",
      company: "MDM Marketing",
      location: "CDMX",
      role: "Web Developer",
      tasks: [
        "Desarrollo y gestión de sitios web",
        "Desarrollo y gestión de ecommerce",
        "Administración de VPS",
        "Asignación y adquisición de dominios y hosting",
        "Gestión de cuentas de correo"
      ],
      tech: ["WordPress", "PHP", "Hosting"]
    },
    {
      year: "2016",
      company: "Implántate en la Web",
      location: "CDMX",
      role: "Web Developer",
      tasks: [
        "Levantamiento de requerimientos",
        "Planificación de proyectos",
        "Administración de servidores",
        "Migración de sitios",
        "Gestión de dominios y hosting"
      ],
      tech: ["WordPress", "Servers", "Domains"]
    }
  ];

  const next = () => setIndex((prev) => (prev + 1) % jobs.length);
  const prev = () => setIndex((prev) => (prev - 1 + jobs.length) % jobs.length);

  return (
    <SectionCard>
      <SectionTitle>Experiencia</SectionTitle>

      <div className="experience-slider">
        <div
          className="experience-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {jobs.map((job, i) => (
            <div className="experience-slide" key={i}>
              <div className="experience-top">
                <div>
                  <h3>{job.company}</h3>
                  <p className="role">{job.role}</p>
                </div>
                <span className="meta">
                  {job.location} · {job.year}
                </span>
              </div>

              <ul className="experience-list">
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>

              <div className="divider" />

              <div className="experience-footer">
                <div className="tags">
                  {job.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <div className="controls">
                  <button onClick={prev}>‹</button>
                  <div className="dots">
                    {jobs.map((_, idx) => (
                      <span
                        key={idx}
                        className={idx === index ? "dot active" : "dot"}
                        onClick={() => setIndex(idx)}
                      />
                    ))}
                  </div>
                  <button onClick={next}>›</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}