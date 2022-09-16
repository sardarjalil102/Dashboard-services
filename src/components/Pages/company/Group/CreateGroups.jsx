import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "react-toggle-button";

import { handelState } from "../../../../utils/handelStates";
import { addGroupData } from "../../../../Redux/features/GroupSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../common/Spinner";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateGroups = () => {
  const navigate = useNavigate();
  const initState = {
    name: "",
    isActive: false,
  };

  // const [submitData, setSubmitData] = useState(initState);

  const {
    Groups: { status, error },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addGroupData(submitData));
  //   if (!error && status === "loading") {
  //     navigate("/groups");
  //   }
  // };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Groups"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/groups", title: "Groups" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="mb-5 mt-3">
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
                        dispatch(addGroupData(values));
                      }}
                    >
                      {({ errors, values, touched, handleBlur }) => (
                        <Form>
                          <div className="row mb-3">
                            <label
                              className="col-sm-2 col-form-label"
                              htmlFor="name"
                            >
                              Group Name:
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="text"
                                name="name"
                                className={`form-control ${
                                  errors.name && touched.name
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onBlur={handleBlur}
                                placeholder="Group Name"
                              />
                              <span className="invalid-feedback">
                                <ErrorMessage name="name" />
                              </span>
                            </div>
                          </div>

                          {/* is active*/}
                          <div className="mb-3 row align-items-center">
                            <label
                              className="col-form-label col-sm-2"
                              htmlFor="isActive"
                            >
                              Is Active:
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="checkbox"
                                name="isActive"
                                className="form-check-input"
                              />
                            </div>
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
                  {/* <div className="col-md-6">

                                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateGroups;
