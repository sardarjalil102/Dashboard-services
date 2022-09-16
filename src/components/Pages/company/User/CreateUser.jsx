import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { addUsersData } from "../../../../Redux/features/UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoles } from "../../../../Redux/features/RoleSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import { ErrorMessage, Field, Form, Formik } from "formik";

const CreateUser = () => {
  const initialSate = {
    email: null,
    firstName: null,
    lastName: null,
    phoneNo: null,
    currencyCode: null,
    mmFlag: false,
    ppFlag: false,
    sdFlag: false,
    username: null,
    password: null,
    role: null,
    company: null,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().nullable().required("Required"),
    firstName: Yup.string().nullable().required("Required"),
    role: Yup.string().nullable().required("Required"),
    username: Yup.string().nullable().required("Required"),
    password: Yup.string()
      .nullable()
      .min(8, "Password is too short - should be 8 chars minimum")
      .required("Required"),
    currencyCode: Yup.string().nullable().required("Required"),
    phoneNo: Yup.string().nullable().required("Required"),
  });

  // const [submissionData, setSubmissionData] = useState(initialSate);

  const dispatch = useDispatch();

  const { Roles } = useSelector((state) => state.userRoles);

  useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  // // // console.log(Roles);

  useEffect(() => {
    // // console.log("roles from creat user :", Roles);
  }, [Roles]);

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   // // console.log(submissionData);
  //   dispatch(addUsersData(submissionData));
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="User"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/user", title: "Users" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>

      <div className="mt-3">
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <Formik
                    validationSchema={validationSchema}
                    initialValues={initialSate}
                    onSubmit={(values) => {
                      // // console.log(values);
                      dispatch(addUsersData(values));
                    }}
                  >
                    {({ errors, values, touched, handleBlur }) => (
                      <Form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="username"
                          >
                            USERNAME:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className={`form-control ${
                                errors.username && touched.username
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="text"
                              onBlur={handleBlur}
                              name="username"
                              placeholder="Username"
                            />
                            <ErrorMessage
                              name="username"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="firstName"
                          >
                            FIRST NAME:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className={`form-control ${
                                errors.firstName && touched.firstName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              name="firstName"
                              onBlur={handleBlur}
                              placeholder="First Name"
                              type="text"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="lastName"
                          >
                            LAST NAME:
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className="form-control"
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="phoneNo"
                          >
                            PHONE NUMBER:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className={`form-control ${
                                errors.phoneNo && touched.phoneNo
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                              name="phoneNo"
                              type="number"
                              placeholder="Phone Number"
                            />
                            <ErrorMessage
                              name="phoneNo"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="currencyCode"
                          >
                            CURRENCY CODE:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className={`form-control ${
                                errors.currencyCode && touched.currencyCode
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="text"
                              onBlur={handleBlur}
                              name="currencyCode"
                              placeholder="Currency Code"
                            />
                            <ErrorMessage
                              name="currencyCode"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="email"
                          >
                            EMAIL:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className={`form-control ${
                                errors.email && touched.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                              type="email"
                              name="email"
                              placeholder="Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="password"
                          >
                            PASSWORD:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              className={`form-control ${
                                errors.password && touched.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                            <ErrorMessage
                              name="password"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="role"
                          >
                            ROLE:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              as="select"
                              name="role"
                              className={`form-select ${
                                errors.role && touched.role ? "is-invalid" : ""
                              }`}
                              onBlur={handleBlur}
                            >
                              <option value="">Select</option>
                              {Roles?.map((roles) => (
                                <option key={roles.id}>{roles.name}</option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="role"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-10 offset-2">
                            <div className="form-check form-check-inline">
                              <Field
                                className="form-check-input"
                                type="checkbox"
                                name="mmFlag"
                              />
                              <label
                                style={{
                                  fontSize: "0.75rem",
                                  textTransform: "uppercase",
                                }}
                                className="form-check-label"
                                htmlFor="mmFlag"
                              >
                                PROCUREMENT (MM)
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <Field
                                className="form-check-input"
                                type="checkbox"
                                name="ppFlag"
                              />
                              <label
                                style={{
                                  fontSize: "0.75rem",
                                  textTransform: "uppercase",
                                }}
                                className="form-check-label"
                                htmlFor="ppFlag"
                              >
                                PRODUCTION (PP)
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <Field
                                className="form-check-input"
                                type="checkbox"
                                name="sdFlag"
                              />
                              <label
                                style={{
                                  fontSize: "0.75rem",
                                  textTransform: "uppercase",
                                }}
                                className="form-check-label"
                                htmlFor="sdFlag"
                              >
                                SALES (SD)
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* <div className="row mb-3">
                              <label
                                className="col-sm-2 col-form-label"
                                htmlFor="company"
                              >
                                COMPANY:*
                              </label>
                              <div className="col-sm-10">
                                <select
                                  id="company"
                                  className="form-select"
                                  aria-label="Default select example"
                                  onChange={(e) =>
                                    setSubmissionData({
                                      ...submissionData,
                                      company: e.target.value,
                                    })
                                  }
                                  value={submissionData.company}
                                >
                                  <option selected>Select</option>

                                  <option value="1">Company1</option>
                                  <option value="0">Company2</option>
                                </select>
                              </div>
                            </div> */}

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
                {/* <div className="col-md-6">

                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
