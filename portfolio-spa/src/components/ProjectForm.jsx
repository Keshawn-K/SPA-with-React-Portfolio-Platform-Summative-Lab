import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      title,
      description,
      image,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
    setImage("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
