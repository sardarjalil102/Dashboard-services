import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";

const SubLinkItem = ({ link, label, icon, subMenu, permission }) => {
  const { permissions } = useSelector((state) => state.Auth);
  return (
    <>
      <Link
        to={`#${link}`}
        data-bs-toggle="collapse"
        className="menu-link align-middle menu-toggle"
      >
        {icon.includes("svg") ? (
          <img
            className="menu-icon tf-icons svg-icon"
            src={icon}
            alt={`${label} icon`}
          />
        ) : (
          <i className={icon} />
        )}

        <span className="d-none d-sm-inline">{label}</span>
      </Link>
      <ul
        className="collapse nav flex-column ms-4"
        id={link}
        data-bs-parent="#menu"
      >
        {subMenu.map((sub) => (
          <li className="menu-item">
            <LinkItem
              link={sub.link}
              label={sub.label}
              icon={sub.icon}
              permission={sub.permission}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubLinkItem;

// <>
//   <LinkItem link={link} label={label} icon={icon} />
//   <ul className="menu-sub">
// {subMenu.map((sub) => (
//   <li className="menu-item">
//     <LinkItem link={sub.link} label={sub.label} icon={sub.icon} />
//   </li>
// ))}
//   </ul>
// </>
