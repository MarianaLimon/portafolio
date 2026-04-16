import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import MainContent from "./components/sections/MainContent";
import ProjectsPage from "./components/layout/ProjectsPage";
import StarsBackground from "./components/ui/StarsBackground";


function App() {
  return (
    <BrowserRouter basename="/marianalimon">
      <StarsBackground />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MainContent />
              </>
            }
          />

          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectsPage />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;