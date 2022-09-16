import React from "react";
import { Link } from "react-router-dom";
import { ImTree } from "react-icons/im";

const LinkItem = ({ link, label, icon }) => {
  return (
    <Link to={link} className="menu-link">
      {icon.includes("svg") ? (
        <img
          src={icon}
          className="menu-icon tf-icons svg-icon"
          alt="sidebar menu icon"
        />
      ) : label.includes("Build Area") ? (
        <ImTree className="menu-icon tf-icons " />
      ) : (
        <i className={icon} />
      )}
      <div>{label}</div>
    </Link>
  );
};

export default LinkItem;
