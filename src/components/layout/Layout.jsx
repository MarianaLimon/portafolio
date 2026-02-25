import Header from "./Header";
import Hero from "../sections/Hero";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <footer>Footer</footer>
    </div>
  );
}