import { useState } from "react";
import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/experience-section.css";
import jobs from "../../data/experience.json";

export default function Experience() {

  const [index, setIndex] = useState(0);

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
            <div className="experience-slide" key={job.slug}>

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