import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import MainContent from "./components/sections/MainContent";
import ProjectsPage from "./components/layout/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
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

          {/* Ruta base */}
          <Route path="/proyectos" element={<ProjectsPage />} />

          {/* Ruta dinámica */}
          <Route path="/proyectos/:slug" element={<ProjectsPage />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;