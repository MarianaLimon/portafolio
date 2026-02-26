import Header from "./Header";
import Hero from "../sections/Hero";
import Footer from "./Footer";
import MainContent from "../sections/MainContent";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}