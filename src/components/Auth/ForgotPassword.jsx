import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <Link to="/" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                  <img height={'35px'} src="\assets\img\processintel.png" alt="Logo" />
                  </span>
                  {/* <span className="app-brand-text demo h3 mb-0 fw-bold">
                    Frest
                  </span> */}
                </Link>
              </div>
              <h4 className="mb-2">Forgot Password? 🔒</h4>
              <p className="mb-4">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
              <form
                className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
                noValidate="novalidate"
              >
                <div className="mb-3 fv-plugins-icon-container">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoFocus=""
                  />
                  <div className="fv-plugins-message-container invalid-feedback" />
                </div>
                <button className="btn btn-primary d-grid w-100">
                  Send Reset Link
                </button>
                <div />
                <input type="hidden" />
              </form>
              <div className="text-center">
                <Link
                  to="/"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="bx bx-chevron-left scaleX-n1-rtl" />
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
