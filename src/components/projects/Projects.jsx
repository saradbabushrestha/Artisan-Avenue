import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (category, index) => {
    setItem({ name: category });
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={() => handleClick(navItem.name, index)}
            className={`${
              active === index ? "active-project" : ""
            } project__item`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="project__container container grid">
        {projects.map((project) => (
          <ProjectItems item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
