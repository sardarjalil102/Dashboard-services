import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/components/Footer";
import Datatable from "./Datatable";
import Sidebar from "../components/layout/Sidebar";
import AdminLogs from "./Pages/AdminLogs";
import DataTables from "./Datatable";
import Forms from "./Forms";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
          <div className="card h-100">{/* <DataTables /> */}</div>
        </div>
        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
          <div className="card h-100">{/* <Forms /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
