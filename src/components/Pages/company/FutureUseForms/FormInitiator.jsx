import React, { useState } from "react";
import { API, key } from "../../../../config";
import { Link, useNavigate } from "react-router-dom";

import ToggleButton from "react-toggle-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const FormInitiator = () => {
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
            Initiator <span className="fs-5">- Form</span>
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
            <div className="col-md-6 border border-dark pt-5">
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th scope="col">Sr. #</th>
                    <th scope="col">Form Name</th>
                    <th scope="col">Add</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Form A</td>
                    <td>Add {">"}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Form B</td>
                    <td>Add {">"}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Form C</td>
                    <td>Add {">"}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Form D</td>
                    <td>Add {">"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 border border-start-0 border-dark pt-5 px-3 pb-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="col-form-label" htmlFor="first-name">
                    FIRST NAME1
                  </label>
                  <div className="">
                    <input
                      type="text"
                      {...register("rejectionCode")}
                      className="form-control rounded"
                      value={rejectionCode}
                      onChange={(e) => setRejectionCode(e.target.value)}
                      id="first-name"
                      placeholder="First Name1"
                    />
                  </div>
                  <div className="invalid-feedback">
                    {errors.rejectionCode?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="col-form-label" htmlFor="address">
                    ADDRESS
                  </label>
                  <div className="">
                    <textarea className="form-control" id="address" rows={3} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="col-form-label" htmlFor="gender">
                    GENDER
                  </label>
                  <div className="">
                    <select
                      id="gender"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultChecked>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="col-form-label" htmlFor="permanent-address">
                    PERMANENT ADDRESS
                  </label>
                  <div className="">
                    <textarea
                      className="form-control"
                      id="permanent-address"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="col-form-label" htmlFor="rejection-text">
                    Province
                  </label>
                  <div className="d-flex align-items-center justify-content-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="option"
                        value="option1"
                      />
                      <input
                        disabled
                        id="rejection-text"
                        type="text"
                        className={`form-control me-2 ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Punjab"
                      />
                    </div>

                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="option"
                        value="option1"
                      />
                      <input
                        disabled
                        id="rejection-text"
                        type="text"
                        className={`form-control ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Sindh"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="col-form-label" htmlFor="rejection-text">
                    RELIGION
                  </label>
                  <div className="d-flex align-items-center justify-content-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        disabled
                        id="rejection-text"
                        type="text"
                        className={`form-control me-2 ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Islam"
                      />
                    </div>

                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        disabled
                        id="rejection-text"
                        type="text"
                        className={`form-control ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Sikh"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInitiator;
