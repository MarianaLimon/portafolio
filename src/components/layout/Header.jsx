import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  const isProjectsActive = location.pathname === "/proyectos";

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">ML</div>
        <span className="brand-name">MARIANA LIMÓN</span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>

        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/proyectos"
          className={`nav-link projects-link glowing ${
            location.pathname === "/proyectos"
              ? "active"
              : ""
          }`}
        >
          Proyectos
        </Link>

        <Link
          to="/"
          className="nav-link"
          onClick={() => goToSection("skills")}
        >
          Skills
        </Link>

        <button
          className="contact-btn"
          onClick={() => goToSection("contacto")}
        >
          <Mail size={16} strokeWidth={2} />
          Contacto
        </button>

      </nav>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </header>
  );
}