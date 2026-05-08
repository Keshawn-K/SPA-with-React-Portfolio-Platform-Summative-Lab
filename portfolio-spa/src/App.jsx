import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built with React.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description: "Online shopping platform UI.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([
      ...projects,
      { ...newProject, id: projects.length + 1 },
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />

      <Footer />
    </div>
  );
}

export default App;
