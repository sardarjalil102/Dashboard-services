import { useNavigate, useRoutes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

// local imports
import { setgCurrentForm } from "../Redux/features/AppUtilsSlice";
import { getUserData, logoutUser } from "../Redux/features/AuthSlice";
import { getToken, isRememberME, verifyToken } from "../utils";
import { PrivateRoutes, PublicRoutes } from "./routes";
import Spinner from "../components/common/Spinner";

function AppRoutes() {
  let PublicElement = useRoutes(PublicRoutes);
  let PrivateElement = useRoutes(PrivateRoutes);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const location = useLocation(); // <-- get current location being accessed
  const navigate = useNavigate();

  const {
    Auth: { Authenticate },
  } = useSelector((state) => state);

  // useEffect(() => {
  //   if (isRememberME() && verifyToken()) {
  //     const TOKEN = getToken();
  //     var { exp } = jwt_decode(TOKEN);
  //     // console.log("expire date : ", exp);

  //     if (Date.now() >= exp * 1000) {
  //       // console.log("token is expire");
  //       dispatch(logoutUser());
  //       // // console.log("token-Exp");
  //       // navigate("/login", { state: { from: location, authKey: "token-Exp" } });
  //     }
  //     // console.log("token is not  expire");
  //     // console.log("token :", TOKEN);
  //     dispatch(
  //       getUserData({ token: TOKEN, navigate, from: location.pathname })
  //     );
  //     // navigate(location, { state: { from: location, authKey: "token-Done" } });
  //   }

  //   if (!verifyToken()) {
  //     // console.log("token is not found");
  //     // console.log("token-none");
  //     navigate("/login", { state: { from: location, authKey: "token-none" } });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Authenticate]);

  useEffect(() => {
    if (pathname.match("inspection-plan")) {
      // console.log("Location changed : ", pathname);
      dispatch(setgCurrentForm("/inspection-plan/view/"));
    }
    // console.log(" private Routes(App.js):", PrivateElement);
  }, [pathname]);

  return (
    <Suspense fallback={<Spinner />}>
      {/* <ProtectRoute> */}
      {!Authenticate ? PublicElement : PrivateElement}
      {/* </ProtectRoute> */}
    </Suspense>
  );
}

export default AppRoutes;
