import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* 🔥 Bloquea scroll + agrega clase cuando menú está abierto */
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

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

  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="logo-box">ML</div>
          <span className="brand-name">MARIANA LIMÓN</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/proyectos"
            className={`nav-link projects-link glowing ${
              location.pathname.startsWith("/proyectos")
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </Link>

          <button
            className="nav-link"
            onClick={() => goToSection("skills")}
          >
            Skills
          </button>

          <a
            href="https://wa.me/5215512345678"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={16} strokeWidth={2} />
            WhatsApp
          </a>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Overlay opcional */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}