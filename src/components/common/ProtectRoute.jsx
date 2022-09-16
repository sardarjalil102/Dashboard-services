import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCompantId } from "../../utils";
// import { verifyToken } from "../../utils";

const ProtectRoute = ({ children }) => {
  const { status } = useSelector((state) => state.Auth);

  return getCompantId() ? children : <Navigate to="/forb" />;
};

export default ProtectRoute;

// const location = useLocation(); // <-- get current location being accessed
// const { Authenticate, status } = useSelector((state) => state.Auth);
//
// return !Authenticate && status !== "loading" ? (
// <Navigate
// to="/login"
// state={{ from: location }} // <-- pass in route state
// replace
// />
// ) : Authenticate && status !== "loading" && location.pathname === "/login" ? (
// <Navigate to="/" />
// ) : (
// <Outlet />
// );
