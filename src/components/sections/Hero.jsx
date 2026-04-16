import "../../css/hero.css";
import profileImg from "../../assets/images/foto.jpg";
import cvFile from "../../assets/CV-MarianaLimon2025.pdf";
import { Download, Eye, Github, Linkedin } from "lucide-react";

export default function Hero() {
return ( <section className="hero"> <div className="hero-card">

    {/* IMAGEN */}
    <div className="hero-image">
      <img src={profileImg} alt="Mariana Limón" />
    </div>

    {/* TEXTO */}
    <div className="hero-content">
      <h1 className="hero-title">
        Mi nombre es <span>Mariana Limón</span>, soy Front End Developer 
        especializada en maquetación pixel-perfect, WordPress y React. 
        Desarrollo sitios a medida, e-commerce y landings optimizadas, 
        combinando desarrollo web y marketing digital para crear experiencias 
        rápidas, funcionales y visualmente cuidadas.
      </h1>
    </div>

    {/* ACCIONES */}
    <div className="hero-actions">

      <div className="hero-tags">
        <a href={cvFile} download className="tag active">
          <Download size={16} />
          Descargar CV
        </a>

        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="tag"
        >
          <Eye size={16} />
          Ver CV
        </a>
      </div>

      <div className="hero-socials">
        <a href="#" className="social-btn"><Github size={25} /></a>
        <a href="#" className="social-btn"><Linkedin size={25} /></a>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="hero-divider"></div>

  </div>
</section>

);
}
