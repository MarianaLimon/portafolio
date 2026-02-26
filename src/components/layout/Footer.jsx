import "../../css/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer-wrapper">

      <div className="footer-glass">

        <div className="footer-links">
          <a
            href="https://github.com/MarianaLimon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mariana-limon-932053134"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="mailto:marianalimong92@gmail.com">
            <FiMail />
            Email
          </a>
        </div>

      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Mariana Limón
      </p>

    </footer>
  );
}