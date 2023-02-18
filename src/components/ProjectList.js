import React from "react";
import About from "./About";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const newProjects = projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newProjects}</div>
    </div>
  );
}

export default ProjectList;
