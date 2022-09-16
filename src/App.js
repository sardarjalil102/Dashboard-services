import { Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

// local imports
import AppRoutes from "./routes";
import {
  setCurrentRole,
  setgCurrentForm,
} from "./Redux/features/AppUtilsSlice";
import { getUserData, logoutUser } from "./Redux/features/AuthSlice";
import {
  getToken,
  verifyToken,
  getCompantId,
  setTempCompantId,
  spitTime,
} from "./utils";
import { API } from "./config";
import { SHOW_INFO } from "./utils/toastMessages";
import {
  fetchOneAssignedPermissionData,
  getAllPermissions,
} from "./Redux/features/PermissionsSlice";
import { getAllRoles } from "./Redux/features/RoleSlice";

function App() {
  const { pathname } = useLocation(); // <-- get current location being accessed
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companyId = getCompantId();
  const TOKEN = getToken();
  const {
    Auth: { Authenticate, currentUser },
    userRoles: { Roles },
    UserPermission: { assignedPermissions, allPermissions },
    AppUtils: { currentRole },
  } = useSelector((state) => state);

  const getRolesAlignWithPermissions = () => {
    // // console.log("all roles", Roles);
    const result = Roles.find((tree) => tree.name === currentUser.role[0]);
    // // console.log("all permissions", result);
    return result;
  };

  useEffect(() => {
    if (verifyToken()) {
      setTempCompantId(companyId, TOKEN);

      // API.settings.setToken(TOKEN);
      var { exp } = jwt_decode(TOKEN);
      // console.log("passs checking !!");
      // // console.log("expire date : ", exp);
      if (Date.now() >= exp * 1000) {
        // console.log("passs expire !!");
        dispatch(logoutUser());
      }

      if (Object.keys(currentUser).length === 0) {
        // console.log("passs UserData !!");

        dispatch(getUserData({ token: TOKEN, navigate, from: pathname }));
        // dispatch(getAllPermissions());
        // dispatch(getAllRoles());
      }
    }

    if (!verifyToken()) {
      // console.log("token-none");
      dispatch(logoutUser());
      navigate("/login", { state: { from: pathname, authKey: "token-none" } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Authenticate, pathname]);

  useEffect(() => {
    API.settings.companyId();

    return () => {};
  }, [companyId]);

  useEffect(() => {
    if (pathname.match("inspection-plan")) {
      // console.log("Location changed : ", pathname);
      dispatch(setgCurrentForm("/inspection-plan/view/"));
    }
  }, [dispatch, pathname]);

  // useEffect(() => {
  //   // console.log("id found and funtoin called", spitTime());
  //   // console.log("id found", spitTime(), "found", currentRole?.id);
  //   dispatch(setCurrentRole(getRolesAlignWithPermissions()));
  //   fetchOneAssignedPermissionData(currentRole?.id);
  // }, [Roles, currentRole]);

  return <AppRoutes />;
}

export default App;
