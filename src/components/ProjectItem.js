import React from "react";

function ProjectItem({ name, about, technologies }) {
// every item is an object
// props object in the parameter of this function has been destructured


  const techArr = technologies.map(tech => {
    return <span key={tech}>{tech}</span> 
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techArr}
      </div>
    </div>
  );
}

export default ProjectItem;
