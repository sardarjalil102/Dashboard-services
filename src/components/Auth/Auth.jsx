import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { key } from "../../config";
import { authLogIn } from "../../Redux/features/AuthSlice";
import Spinner from "../common/Spinner";
import { handelState } from "../../utils/handelStates";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loginData, setLoginData] = useState({
    // grant_type: "password",
    // client_id: key.auth.client_id,
    email: "",
    password: "",
    // client_secret: key.auth.clien_secret,
    rememberMe: false,
  });

  const { from } = location.state || "/";

  const { Authenticate, status } = useSelector((state) => state.Auth);

  useEffect(() => {
    // console.log("from login (current location) :", location.state);
  }, []);

  // // console.log("ASdasd: ", process.env.REACT_APP_TITLE)
  const onSubmitLogin = (e) => {
    e.preventDefault();

    // console.log(loginData);
    dispatch(authLogIn({ loginData, navigate, from: from?.pathname }));
  };

  return (
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner py-4">
        <div className="card">
          <div className="card-body">
            <div className="app-brand justify-content-center">
              <a
                tabIndex="8"
                href="index.html"
                className="app-brand-link gap-2"
              >
                <span className="app-brand-logo demo">
                  <img
                    style={{ filter: "invert(35%)" }}
                    height={"35px"}
                    src="\assets\img\processintel.png"
                    alt="Logo"
                  />
                </span>
                {/* <span className="app-brand-text demo h3 mb-0 fw-bold">
                    Frest
                  </span> */}
              </a>
            </div>
            <h4 className="mb-2">Welcome to ProcessIntel! 👋</h4>
            <p className="mb-4">
              Please sign-in to your account and start the adventure
            </p>

            {status === "loading" ? (
              <Spinner />
            ) : !Authenticate ? (
              <form className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework">
                <div className="mb-3 fv-plugins-icon-container">
                  <label tabIndex={-1} htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="admin@admin.com"
                    onChange={(e) =>
                      handelState(
                        loginData,
                        setLoginData,
                        "email",
                        e.target.value
                      )
                    }
                    autoFocus={true}
                  />
                  <div className="fv-plugins-message-container invalid-feedback" />
                </div>
                <div className="mb-3 form-password-toggle fv-plugins-icon-container">
                  <div className="d-flex justify-content-between">
                    <label
                      tabIndex={-2}
                      className="form-label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link tabIndex={-3} to="/forgot">
                      <small>Forgot Password?</small>
                    </Link>
                  </div>
                  <div className="input-group input-group-merge has-validation">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="12345678"
                      aria-describedby="password"
                      value={loginData.password}
                      onChange={(e) =>
                        handelState(
                          loginData,
                          setLoginData,
                          "password",
                          e.target.value
                        )
                      }
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide" />
                    </span>
                  </div>
                  <div className="fv-plugins-message-container invalid-feedback" />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={loginData.rememberMe}
                      onChange={(e) =>
                        handelState(
                          loginData,
                          setLoginData,
                          "rememberMe",
                          e.target.checked
                        )
                      }
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    onClick={(e) => onSubmitLogin(e)}
                    className="btn btn-primary d-grid w-100"
                  >
                    Sign in
                  </button>
                </div>
                <div />
              </form>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
