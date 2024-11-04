// ProjectItems.jsx
import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card">
      {/* Normal Image */}
      <img className="project__img" src={item.image} alt={item.title} />
      <div className="project__details">
        <h3 className="project__title">{item.title}</h3>
        <p className="project__description">{item.description}</p>
      </div>

      {/* Hover Details */}
      <div className="project__hover-details">
        <img
          className="project__hover-img"
          src={item.hoverImage}
          alt={item.title}
        />
        <p className="project__hover-description">{item.hoverDescription}</p>
      </div>
    </div>
  );
};

export default ProjectItems;
