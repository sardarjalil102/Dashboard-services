import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addRolesData } from "../../../../Redux/features/RoleSlice";
import Select from "react-select";

import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const CreateRole = () => {
  const initialSate = {
    name: "",
    isCompany: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
  });

  // const [submissionData, setSubmissionData] = useState(initialSate);

  const dispatch = useDispatch();
  const { error, status } = useSelector((state) => state.userRoles);

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   // // // console.log(submissionData);
  //   dispatch(addRolesData(submissionData));
  //   setSubmissionData(initialSate);
  // };
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Roles"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/roles", title: "Role Management" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mt-1">
                {status === "loading" ? (
                  <Spinner />
                ) : (
                  <Formik
                    initialValues={initialSate}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      // e.preventDefault();
                      // // console.log(values);
                      dispatch(addRolesData(values));
                    }}
                  >
                    {({ errors, values, touched, handleBlur }) => (
                      <Form>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-3"
                            htmlFor="name"
                          >
                            Name:<span className="text-danger">{" "}*</span>
                          </label>
                          <div className="col-sm-9">
                            <Field
                            id="name"
                              type="text"
                              className={`form-control ${
                                errors.name && touched.name ? "is-invalid" : ""
                              }`}
                              name="name"
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
                            htmlFor="isCompany"
                          >
                            isCompany
                          </label>
                          <div className="col-sm-9">
                            <Field
                            id="isCompany"
                              className="form-check-input"
                              type="checkbox"
                              name="isCompany"
                            />
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
                    )}
                  </Formik>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRole;
