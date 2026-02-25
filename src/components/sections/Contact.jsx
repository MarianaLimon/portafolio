import SectionCard from "../ui/SectionCard";
import SectionTitle from "../ui/SectionTitle";
import "../../css/contact-section.css";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <SectionCard>

      <SectionTitle>Contacto</SectionTitle>

      <div className="contact-list">

        <a href="mailto:marianalimong@hotmail.com">
          <FiMail className="contact-icon" />
          marianalimong@hotmail.com
        </a>

        <a href="mailto:marianalimong92@gmail.com">
          <FiMail className="contact-icon" />
          marianalimong92@gmail.com
        </a>

        <a href="tel:+525612647883">
          <FiPhone className="contact-icon" />
          56 1264 7883
        </a>

        <a
          href="https://wa.me/525612647883"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="contact-icon" />
          WhatsApp
        </a>

        <span>
          <FiMapPin className="contact-icon" />
          Coacalco, Edo. México
        </span>

        <a
          href="https://www.linkedin.com/in/mariana-limon-932053134"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>

      </div>

    </SectionCard>
  );
}