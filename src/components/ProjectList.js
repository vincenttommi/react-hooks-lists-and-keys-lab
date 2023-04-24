import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{  
      projects.map(proj =>{
        const {id, name, about, technologies } = proj

        return(
        <ProjectItem key={id} name={name} about = {about} technologies={technologies} />);
      })      
      /* render ProjectItem components here */
      }
      </div>
    </div>
  );
}

export default ProjectList;