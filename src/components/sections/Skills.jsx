import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/skills-section.css";

export default function Skills() {
  return (
    <SectionCard>

      <SectionTitle>Skills</SectionTitle>

      {/* Frontend */}
      <div className="skills-group">
        <h4>Lenguajes & Frontend</h4>
        <div className="skills-tags">
          <span>HTML5</span>
          <span>CSS3 / SASS</span>
          <span>JavaScript (ES6+)</span>
          <span>React.js</span>
          <span>Bootstrap</span>
        </div>
      </div>

      {/* Backend */}
      <div className="skills-group">
        <h4>Backend</h4>
        <div className="skills-tags">
          <span>Node.js</span>
          <span>Express</span>
          <span>PHP</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
        </div>
      </div>

      {/* Herramientas */}
      <div className="skills-group">
        <h4>Herramientas & Control de Versiones</h4>
        <div className="skills-tags">
          <span>Git</span>
          <span>GitHub</span>
          <span>VPS / Hosting</span>
          <span>Performance Web</span>
        </div>
      </div>

      {/* CMS */}
      <div className="skills-group">
        <h4>CMS & Web</h4>
        <div className="skills-tags">
          <span>WordPress</span>
          <span>WooCommerce</span>
          <span>Responsive Design</span>
          <span>Maquetación Pixel-Perfect</span>
        </div>
      </div>

      {/* Diseño */}
      <div className="skills-group">
        <h4>Diseño & Producción</h4>
        <div className="skills-tags">
          <span>Adobe Photoshop</span>
          <span>Adobe Illustrator</span>
          <span>Email Templates</span>
          <span>Optimización SEO Técnico</span>
        </div>
      </div>

    </SectionCard>
  );
}