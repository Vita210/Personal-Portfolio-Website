import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./Components/navbar";
import './App.css';

import ScrollToTop from "./scrolltotop";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Experience from "./pages/Experience/experience";
import Project from "./pages/Project/project";
import ProjectDetail from "./pages/Project/projectdetail";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;