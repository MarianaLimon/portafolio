import "../../css/hero.css";
import profileImg from "../../assets/images/foto.jpg";
import cvFile from "../../assets/CV-MarianaLimon2025.pdf";
import { Download, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        
        <div className="hero-image">
          <img src={profileImg} alt="Mariana Limón" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Mi nombre es <span>Mariana Limón</span>, soy Front End Developer 
            especializada en maquetación pixel-perfect, WordPress y React. 
            Desarrollo sitios a medida, e-commerce y landings optimizadas, 
            combinando desarrollo web y marketing digital para crear experiencias 
            rápidas, funcionales y visualmente cuidadas.
          </h1>

          <div className="hero-tags">

            <a
              href={cvFile}
              download
              className="tag active"
            >
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

          <div className="hero-divider"></div>
        </div>

      </div>
    </section>
  );
}