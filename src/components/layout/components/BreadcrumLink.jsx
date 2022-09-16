import React from "react";
import { Link } from "react-router-dom";
import BreadcrumHomeLink from "./BreadcrumHomeLink";

const BreadcrumLink = ({ path, title, activeLink }) => {
  return (
    <>
      {path === "/" ? (
        <BreadcrumHomeLink path={path} />
      ) : (
        <div
          className={`  ${
            activeLink ? " arrow " : "active-arrow"
          }  text-white text-center col-5 ${path === "/" ? "ms-n4" : "ms-n5"} `}
        >
          {!activeLink ? (
            <Link to={path}>
              <p className="pt-1 text-dark text-capitalize">{title}</p>
            </Link>
          ) : (
            <span>
              <p className="pt-1 text-white text-capitalize">{title}</p>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default BreadcrumLink;

// <div className={` arrow text-white text-center col-5 ms-n4`}>
//   <p className="pt-1">{title}</p>
// </div>
