import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { API, key } from "../../../../config";

import ToggleButton from "react-toggle-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const ViewCustomForm = () => {
  const navigate = useNavigate();
  const [rejectionCode, setRejectionCode] = useState("");
  const [rejectionText, setRejectionText] = useState("");

  // form validation rules
  const validationSchema = Yup.object().shape({
    rejectionCode: Yup.string().required("Code is required"),
    rejectionText: Yup.string().required("Text is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    const token = localStorage.getItem("access_token");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("code", rejectionCode);
    data.append("reason", rejectionText);
    data.append("discount", "1");

    var config = {
      method: "post",
      url: key.server.api + "/rejected-reasons",
      headers: {
        companyId: "1",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        navigate("/rejection-reasons");
      })
      .catch(function (error) {
        // // // console.log(error);
      });

    return false;
  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2 style={{ fontFamily: "Rubik, sans-serif" }} className="py-3 mb-2">
            Custom <span className="fs-5">- Form</span>
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/rejection-reasons">Rejection Reason</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Form
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-7">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="name">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control rounded"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-2"
                    htmlFor="last-name"
                  >
                    last Name
                  </label>
                  <div className="col-sm-10 my-auto">
                    <input
                      type="text"
                      className="form-control rounded"
                      id="last-name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="gender">
                    Gender
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control rounded"
                      id="gender"
                      placeholder="Gender"
                    />
                  </div>
                </div>
              </form>
              <div
                className="btn-toolbar mb-3 justify-content-center mt-5"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-outline-secondary">
                    Docs1
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Docs2
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Docs3
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Docs4
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-12">
                  <div
                    className="card shadow-0 border"
                    style={{ backgroundColor: "#f3f4f4" }}
                  >
                    <div className="card-body p-4">
                      <div className="card mb-4">
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consect adipis elit.
                            Digniss, reiciend consect.
                          </p>

                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-6">
                              <img
                                src="\assets\img\avatar2.png"
                                alt="avatar"
                                width="25"
                                height="25"
                              />
                              <span className="small text-muted mb-0 ms-2">
                                User
                              </span>
                            </div>
                            <div className="col-lg-4 col-md-6 text-md-center text-end my-auto col-6">
                              <p className="small text-muted mb-0">
                                March 07, 2021
                              </p>
                            </div>
                            <div className="col-lg-4 col-md-12 text-lg-end text-md-center text-sm-center text-center col-12">
                              <span className="small text-muted me-2">
                                <i className="fas fa-thumbs-up me-1"></i>132
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4">
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consect adipis elit.
                            Digniss, reiciend consect.
                          </p>

                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-6">
                              <img
                                src="\assets\img\avatar2.png"
                                alt="avatar"
                                width="25"
                                height="25"
                              />
                              <span className="small text-muted mb-0 ms-2">
                                User
                              </span>
                            </div>
                            <div className="col-lg-4 col-md-6 text-md-center text-end my-auto col-6">
                              <p className="small text-muted mb-0">
                                March 07, 2021
                              </p>
                            </div>
                            <div className="col-lg-4 col-md-12 text-lg-end text-md-center text-sm-center text-center col-12">
                              <span className="small text-muted me-2">
                                <i className="fas fa-thumbs-up me-1"></i>132
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4">
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consect adipis elit.
                            Digniss, reiciend consect.
                          </p>

                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-6">
                              <img
                                src="\assets\img\avatar2.png"
                                alt="avatar"
                                width="25"
                                height="25"
                              />
                              <span className="small text-muted mb-0 ms-2">
                                User
                              </span>
                            </div>
                            <div className="col-lg-4 col-md-6 text-md-center text-end my-auto col-6">
                              <p className="small text-muted mb-0">
                                March 07, 2021
                              </p>
                            </div>
                            <div className="col-lg-4 col-md-12 text-lg-end text-md-center text-sm-center text-center col-12">
                              <span className="small text-muted me-2">
                                <i className="fas fa-thumbs-up me-1"></i>132
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCustomForm;
