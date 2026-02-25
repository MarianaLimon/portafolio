import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/education-section.css";

export default function Education() {
  return (
    <SectionCard>
      <SectionTitle>Educación</SectionTitle>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-year">2010</div>
          <div className="timeline-content">
            <h3>Ingeniería en sistemas computacionales</h3>
            <p>Tecnológico de Estudios Superiores de Coacalco</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2021</div>
          <div className="timeline-content">
            <h3>Bootcamp JavaScript</h3>
            <p>KODEMIA</p>
          </div>
        </div>

      </div>
    </SectionCard>
  );
}