import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

import { getCompantId } from "../../../utils/index";
import { key } from "../../../config";
import LinkItem from "./LinkItem";
import SubLinkItem from "./SubLinkItem";
import { useSelector } from "react-redux";

const Sidebar = ({ sideBarToggle, setSideBarToggle }) => {
  const { currentUser, permissions } = useSelector((state) => state.Auth);

  return (
    <aside
      id="layout-menu"
      className={`${
        sideBarToggle ? " layout-menu " : " "
      } menu-vertical menu bg-menu-theme`}
      data-bg-class="bg-menu-theme"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="app-brand demo" style={{ height: 64 }}>
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img
              style={{ filter: "invert(35%)" }}
              height={"35px"}
              src="\assets\img\processintel.png"
              alt="Logo"
            />
          </span>
          {/* <span className="app-brand-text demo menu-text fw-bold ms-2">
            Frest
          </span> */}
        </Link>
        <Link
          to="#"
          className="layout-menu-toggle menu-link text-large ms-auto"
        >
          {/* <i className="bx menu-toggle-icon " /> */}
          {!sideBarToggle && (
            <i
              className="bx bx-x d-block "
              onClick={() => setSideBarToggle(true)}
            />
          )}
        </Link>
      </div>
      <div className="menu-divider mt-0" />
      <div className="menu-inner-shadow" />

      <ul className="menu-inner py-1 ps ps--active-y">
        {!currentUser?.company ? (
          <>
            {/* sass links starts here */}
            {key.sideBar.sassMenuLink.map(({ link, label, icon, permission }) =>
              permissions.includes(permission) ? (
                <NavLink
                  to={link}
                  className="menu-item"
                  activeClassName="active"
                >
                  <LinkItem link={link} label={label} icon={icon} />
                </NavLink>
              ) : null
            )}
            {/* sass links ends here */}
          </>
        ) : null}

        <div className="menu-header small text-uppercase my-0">
          <span className="menu-header-text">Apps &amp; Pages</span>
        </div>
        {getCompantId() ? (
          <>
            {key.sideBar.companyMenuLink.map(
              ({ link, label, icon, subMenu, permission }) =>
                permissions.includes(permission) ? (
                  <NavLink
                    to={link}
                    className="menu-item"
                    activeClassName="active"
                  >
                    {subMenu?.length > 0 ? (
                      <SubLinkItem
                        link={link}
                        label={label}
                        icon={icon}
                        subMenu={subMenu}
                        permission={permission}
                      />
                    ) : (
                      <LinkItem
                        link={link}
                        label={label}
                        icon={icon}
                        permission={permission}
                      />
                    )}
                  </NavLink>
                ) : null
            )}
          </>
        ) : null}
      </ul>

      {/* <ul className="menu-inner py-1 ps ps--active-y"> */}

      {/* </ul> */}
    </aside>
  );
};

export default Sidebar;
