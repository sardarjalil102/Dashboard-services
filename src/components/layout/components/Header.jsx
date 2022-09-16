import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineUser } from 'react-icons/ai';
import { BsPower } from "react-icons/bs";
import { getUserData, logoutUser } from "../../../Redux/features/AuthSlice";
import { key } from "../../../config";

const Header = ({ sideBarToggle, setSideBarToggle }) => {
  const navigate = useNavigate();
  const {
    Auth: { Authenticate, currentUser },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const logOut = () => {
    dispatch(logoutUser());
    navigate("/login", { state: { authKey: "log-out" } });
  };

  // navigate('/login')
  return (
    <nav
      className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="container-fluid">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <Link
            className="nav-item nav-link px-0 me-xl-4"
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#layout-menu"
          >
            {sideBarToggle && (
              <i
                className="bx bx-menu bx-sm"
                onClick={() => setSideBarToggle(false)}
              />
            )}
          </Link>
        </div>
        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <Link
                className="nav-link dropdown-toggle hide-arrow"
                to="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="avatar avatar-online">
                  <img
                    src="\assets\img\avatar2.png"
                    alt="avatar"
                    className="rounded-circle"
                  />
                </div>
              </Link>
              <ol className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="#" className="dropdown-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div
                          className={`avatar ${
                            Authenticate
                              ? " avatar-online "
                              : " avatar-offline "
                          }`}
                        >
                          <img
                            src="/assets/img/avatar2.png"
                            alt="avatar"
                            className="rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block lh-1">
                          {/* {currentUser?.username} */}
                        </span>
                        {/* <small>{currentUser?.role[0]}</small> */}
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="bx bx-user me-2" />
                    <span className="align-middle">My Profile</span>
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={logOut}>
                    <BsPower size={"1.2rem"} className="me-2" />
                    <span className="align-middle">Log Out</span>
                  </button>
                </li>
              </ol>
            </li>
            {/*/ User */}
          </ul>
        </div>
        {/* Search Small Screens */}
        <div className="navbar-search-wrapper search-input-wrapper d-none">
          <input
            type="text"
            className="form-control search-input container-fluid border-0"
            placeholder="Search..."
            aria-label="Search..."
          />
          <i className="bx bx-x bx-sm search-toggler cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
