import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectListElement = projects.map(project => {
    return (
      // console.log(project)
      <ProjectItem 
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}/>
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectListElement}
      </div>
    </div>
  );
}

export default ProjectList;
// projects is an array of objects
// projects are props
// props are project items
// each project item displays inside project list element tag 
// each with its own key
