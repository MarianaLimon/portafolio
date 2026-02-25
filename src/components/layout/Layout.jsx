import Header from "./Header";
import Hero from "../sections/Hero";
import MainContent from "../sections/MainContent";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <MainContent />
      <footer>Footer</footer>
    </div>
  );
}