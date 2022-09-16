import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addPlanData } from "../../../../Redux/features/PlansSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";

import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const CreatePlan = () => {
  const initialSate = {
    name: null,
    noOfMonths: null,
    pricePerMonth: null,
    discount: null,
    pricePerSensor: null,
    pricePerGb: null,
    pricePerUser: null,
    isActive: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().nullable().required("Required"),
    noOfMonths: Yup.string().nullable().required("Required"),
    pricePerMonth: Yup.string().nullable().required("Required"),
    pricePerGb: Yup.string().nullable().required("Required"),
    pricePerSensor: Yup.string().nullable().required("Required"),
    pricePerUser: Yup.string().nullable().required("Required"),
    discount: Yup.string().nullable().required("Required"),
  });

  const [submissionData, setSubmissionData] = useState(initialSate);

  const dispatch = useDispatch();

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   // // console.log(submissionData);
  //   dispatch(addPlanData(submissionData));
  // };
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Plans"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/subscription", title: "Plans" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mt-1">
                <Formik
                  className="browser-default-validation"
                  initialValues={initialSate}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    // // console.log(values);
                    dispatch(addPlanData(values));
                    setSubmissionData(initialSate);
                  }}
                >
                  {({ handleChange, handleBlur, values, errors, touched }) => {
                    return (
                      <Form>
                        {/* name  */}
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="name"
                          >
                            Name:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="name"
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange("name")}
                              value={values.name}
                              className={`form-control ${
                                errors.name && touched.name ? "is-invalid" : ""
                              }`}
                              id="name"
                              placeholder="Name"
                            />
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="noOfMonths"
                          >
                            No. of Months:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="noOfMonths"
                              type="number"
                              onBlur={handleBlur}
                              onChange={handleChange("noOfMonths")}
                              value={values.noOfMonths}
                              className={`form-control ${
                                errors.noOfMonths && touched.noOfMonths
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="noOfMonths"
                              placeholder="No. of Months"
                            />
                            <ErrorMessage
                              name="noOfMonths"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="pricePerMonth"
                          >
                            Price Per Month:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="pricePerMonth"
                              type="number"
                              onBlur={handleBlur}
                              onChange={handleChange("pricePerMonth")}
                              value={values.pricePerMonth}
                              className={`form-control ${
                                errors.pricePerMonth && touched.pricePerMonth
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="pricePerMonth"
                              placeholder="Price Per Month"
                            />
                            <ErrorMessage
                              name="pricePerMonth"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="discount"
                          >
                            Discount:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="discount"
                              onBlur={handleBlur}
                              type="number"
                              onChange={handleChange("discount")}
                              value={values.discount}
                              className={`form-control ${
                                errors.discount && touched.discount
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="discount"
                              placeholder="Discount"
                            />
                            <ErrorMessage
                              name="discount"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="pricePerSensor"
                          >
                            Price Per Sensor:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="pricePerSensor"
                              type="number"
                              onBlur={handleBlur}
                              onChange={handleChange("pricePerSensor")}
                              value={values.pricePerSensor}
                              className={`form-control ${
                                errors.pricePerSensor && touched.pricePerSensor
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="pricePerSensor"
                              placeholder="Price Per Sensor"
                            />
                            <ErrorMessage
                              name="pricePerSensor"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="pricePerGb"
                          >
                            Price Per Gb:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="pricePerGb"
                              type="number"
                              onBlur={handleBlur}
                              onChange={handleChange("pricePerGb")}
                              value={values.pricePerGb}
                              className={`form-control ${
                                errors.pricePerGb && touched.pricePerGb
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="pricePerGb"
                              placeholder="Price Per Gb"
                            />
                            <ErrorMessage
                              name="pricePerGb"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="pricePerUser"
                          >
                            Price Per User:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              name="pricePerUser"
                              type="number"
                              onBlur={handleBlur}
                              onChange={handleChange("pricePerUser")}
                              value={values.pricePerUser}
                              className={`form-control ${
                                errors.pricePerUser && touched.pricePerUser
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="pricePerUser"
                              placeholder="Price Per User"
                            />
                            <ErrorMessage
                              name="pricePerUser"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="isActive"
                          >
                            Active
                          </label>
                          <div className="col-sm-9">
                            <select
                              name="isActive"
                              id="isActive"
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange("isActive")}
                              value={values.isActive}
                            >
                              <option selected>Select</option>

                              <option value="1">yes</option>
                              <option value="0">No</option>
                            </select>
                          </div>
                        </div>

                        {/* save button */}
                        <div className="row">
                          <div className="col-12 align-self-center text-center">
                            <button type="submit" className="btn btn-primary">
                              Save
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePlan;
