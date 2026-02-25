import { useState } from "react";
import { Mail } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">ML</div>
        <span className="brand-name">MARIANA LIMÓN</span>
      </div>

      {/* Desktop Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#">Proyectos</a>
        <a href="#">Experiencia</a>
        <a href="#">Skills</a>
        <button className="contact-btn">
            <Mail size={16} strokeWidth={2} />
            Contacto
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </header>
  );
}