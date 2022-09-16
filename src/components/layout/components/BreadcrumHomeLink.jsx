import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const BreadcrumHomeLink = ({ path }) => {
  return (
    <div className={` home-arrow  text-white text-end col-2 ms-n7 ps-1`}>
      <Link to={path}>
        <AiFillHome color="#0D488B" size={"1.7rem"} className="pt-1 me-10" />
      </Link>
    </div>
  );
};

export default BreadcrumHomeLink;
