import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addConfigs } from "../../../../Redux/features/MaterialNoConfigSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

const NoConfigCreate = () => {
  const dispatch = useDispatch();
  const initState = {
    prefix: "",
    // length: "",
    startFrom: "",
  };

  const validationSchema = Yup.object().shape({
    prefix: Yup.string().required("Required"),
    // length: Yup.string().required("Required"),
    startFrom: Yup.string().required("Required"),
  });

  // const [submissionData, setSubmissionData] = useState({});

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   // // console.log(submissionData);
  //   dispatch(addConfigs(submissionData));
  // };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2 style={{ fontFamily: "Rubik, sans-serif" }} className="py-3 mb-2">
            Material No Config <span className="fs-5">- Create</span>
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/material-no-config">Material No Config</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Create
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mt-3">
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <Formik
                    initialValues={initState}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      // e.preventDefault();
                      // // console.log(values);
                      dispatch(addConfigs(values));
                    }}
                  >
                    {({ errors, values, touched, handleBlur }) => (
                      <Form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="prefix"
                          >
                            PREFIX:*
                          </label>
                          <div className="col-sm-10">
                            <Field
                              as="select"
                              name="prefix"
                              className={`form-select ${
                                errors.prefix && touched.prefix
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option>Select</option>
                              <option value="R">R</option>
                              <option value="S">S</option>
                              <option value="F">F</option>
                            </Field>
                          </div>
                          <ErrorMessage
                            name="prefix"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                        {/* <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="length"
                          >
                            LENGHT:*
                          </label>
                          <div className="col-sm-10">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.length && touched.length
                                  ? "is-invalid"
                                  : ""
                              }`}
                              name="length"
                              onBlur={handleBlur}
                              placeholder="Length"
                            />
                          </div>
                          <ErrorMessage
                            name="length"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div> */}
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="startFrom"
                          >
                            Start Form:*
                          </label>
                          <div className="col-sm-10">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.startFrom && touched.startFrom
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                              name="startFrom"
                              placeholder="Start From"
                            />
                          </div>
                          <ErrorMessage
                            name="startFrom"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="row">
                          <div className="col-12 align-self-center text-center">
                            <button type="submit" className="btn btn-primary">
                              Save{" "}
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoConfigCreate;
