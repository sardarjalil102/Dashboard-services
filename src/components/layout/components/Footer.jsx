import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        {/* <div className="mb-2 mb-md-0">
          © 2022 , made with ❤️ by{" "}
          <Link to="#" className="footer-link fw-semibold">
            TECHANDOVER
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
