import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import "../src/assets/css/style.css";
import "./assets/css/theme-default.css";
import "./assets/css/demo.css";
import "./assets/fonts/flag-icons.css";
import "./assets/fonts/fontawesome.css";
import "./assets/css/perfect-scrollbar.css";
import "./assets/css/style.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    <ToastContainer />
  </Provider>
);
