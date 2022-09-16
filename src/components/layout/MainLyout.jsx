import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const MainLyout = ({ children }) => {
  const [sideBarToggle, setSideBarToggle] = useState(true);

  const {
    Auth: { Authenticate },
  } = useSelector((state) => state);

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar
          sideBarToggle={sideBarToggle}
          setSideBarToggle={setSideBarToggle}
        />

        <div className="layout-page">
          <Header
            sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle}
          />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <Outlet />
            </div>
            <div className="content-backdrop fade" />
          </div>
        </div>
      </div>

      <div className="layout-overlay layout-menu-toggle" />

      <div
        className="drag-target"
        style={{
          touchAction: "pan-y",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        }}
      />
    </div>
  );
};

export default MainLyout;
