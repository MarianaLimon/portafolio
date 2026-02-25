import "../../css/main-content.css";

import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

export default function MainContent() {
  return (
    <section className="main-content">
      <div className="main-grid">

        {/* LEFT COLUMN */}
        <div className="main-left">
          <Education />
          <Experience />
          <Projects />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="main-right">
          <Contact />
          <Skills />
        </div>

      </div>
    </section>
  );
}