import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { API, key } from "../../../../config";
import ToggleButton from "react-toggle-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const CustomFormCrud = () => {
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
            <div className="col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="col-form-label" htmlFor="first-name">
                    FIRST NAME
                  </label>
                  <div className="">
                    <input
                      type="text"
                      className="form-control rounded"
                      value="Test"
                      id="first-name"
                      placeholder="First Name1"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="col-form-label" htmlFor="form-choice">
                    FORM CHOICE
                  </label>
                  <select
                    id="form-choice"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultChecked>Single Line Text Box</option>
                    <option value="1">Form1</option>
                    <option value="2">Form2</option>
                  </select>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0"
                  >
                    ADD FIELDS
                  </button>
                </div>
                <div className="mb-3">
                  <img
                    className="me-1"
                    height={"16px"}
                    src="\assets\img\drag-icon.png"
                    alt=""
                  />
                  <label className="col-form-label" htmlFor="first-name11">
                    FIRST NAME1
                  </label>
                  <input
                    disabled
                    type="text"
                    {...register("rejectionCode")}
                    className="form-control sm-width rounded"
                    value={rejectionCode}
                    onChange={(e) => setRejectionCode(e.target.value)}
                    id="first-name11"
                    placeholder="First Name1"
                  />
                </div>

                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0 me-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    REMOVE
                  </button>
                </div>
                <div className="mb-3">
                  <img
                    className="me-1"
                    height={"16px"}
                    src="\assets\img\drag-icon.png"
                    alt=""
                  />
                  <label className="col-form-label" htmlFor="address">
                    ADDRESS
                  </label>
                  <div className="">
                    <textarea
                      disabled
                      className="form-control sm-width"
                      id="address"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0 me-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    REMOVE
                  </button>
                </div>

                <div className="mb-3">
                  <img
                    className="me-1"
                    height={"16px"}
                    src="\assets\img\drag-icon.png"
                    alt=""
                  />
                  <label className="col-form-label" htmlFor="gender">
                    GENDER
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        disabled
                        type="text"
                        className="form-control rounded sm-width1"
                        value="Gender"
                        id="gender"
                        placeholder="First Name1"
                      />
                    </div>
                    <div className="col-6">
                      <select
                        id="gender"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultChecked>Select Option</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0 me-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    REMOVE
                  </button>
                </div>
                <div className="mb-3">
                  <img
                    className="me-1"
                    height={"16px"}
                    src="\assets\img\drag-icon.png"
                    alt=""
                  />
                  <label className="col-form-label" htmlFor="permanent-address">
                    PERMANENT ADDRESS
                  </label>
                  <div className="">
                    <textarea
                      className="form-control sm-width"
                      id="permanent-address"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0 me-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    REMOVE
                  </button>
                </div>

                <div className="mb-3">
                  <img
                    className="me-1"
                    height={"16px"}
                    src="\assets\img\drag-icon.png"
                    alt=""
                  />
                  <label className="col-form-label" htmlFor="province">
                    Province
                  </label>
                  <div className="row">
                    <div className="d-flex align-items-center col-4 m20">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="option"
                        value="option1"
                      />
                      <input
                        disabled
                        id="province"
                        type="text"
                        className={`form-control ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Punjab"
                      />
                    </div>

                    <div className="d-flex align-items-center col-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="option"
                        value="option1"
                      />
                      <input
                        disabled
                        id="province"
                        type="text"
                        className={`form-control ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Sindh"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0 me-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    REMOVE
                  </button>
                </div>
                <div className="mb-3">
                  <img
                    className="me-1"
                    height={"16px"}
                    src="\assets\img\drag-icon.png"
                    alt=""
                  />
                  <label className="col-form-label" htmlFor="religion">
                    RELIGION
                  </label>
                  <div className="row">
                    <div className="d-flex align-items-center col-4 m20">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        disabled
                        id="religion"
                        type="text"
                        className={`form-control ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Islam"
                      />
                    </div>

                    <div className="d-flex align-items-center col-4">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        disabled
                        id="religion"
                        type="text"
                        className={`form-control ${
                          errors.rejectionText ? "is-invalid" : ""
                        }`}
                        value="Sikh"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm rounded-0 me-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    REMOVE
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="col-md-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomFormCrud;
