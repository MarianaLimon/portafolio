import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/skills-section.css";

export default function Skills() {
  return (
    <section id="skills">
      <SectionCard>

        <SectionTitle>Skills</SectionTitle>

        {/* Frontend */}
        <div className="skills-group">
          <h4>Lenguajes & Frontend</h4>
          <div className="skills-tags">
            <span>HTML5</span>
            <span>CSS3 / SASS</span>
            <span>JavaScript (ES6+)</span>
            <span>PHP</span>
            <span>React.js</span>
            <span>Bootstrap</span>
            <span>Email Templates</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-group">
          <h4>Backend</h4>
          <div className="skills-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
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
            <span>Despliegues</span>
          </div>
        </div>

        {/* CMS */}
        <div className="skills-group">
          <h4>CMS & Web</h4>
          <div className="skills-tags">
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>Elementor</span>
            <span>Plantillas personalizadas</span>
            <span>Maquetación Pixel-Perfect</span>
          </div>
        </div>

        {/* SEO */}
        <div className="skills-group">
          <h4>SEO</h4>
          <div className="skills-tags">
            <span>Posicionamiento Organico</span>
            <span>SEMrush</span>
            <span>GSearch Console</span>
            <span>Analytics</span>
            <span>Tag Manager</span>
            <span>Tableau</span>
          </div>
        </div>

        {/* Diseño */}
        <div className="skills-group">
          <h4>Diseño & Producción</h4>
          <div className="skills-tags">
            <span>Adobe Photoshop</span>
            <span>Adobe Illustrator</span>
            <span>Adobe XD</span>
            <span>Zeplin</span>
            <span>Figma</span>
          </div>
        </div>

      </SectionCard>
    </section>
  );
}