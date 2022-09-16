import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "react-toggle-button";

import { handelState } from "../../../../../utils/handelStates";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../common/Spinner";
import { addTypeData } from "../../../../../Redux/features/SensorTypeSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import MainBreadcrum from "../../../../layout/MainBreadcrum";

const CreateSensorType = () => {
  const navigate = useNavigate();

  // const [submitData, setSubmitData] = useState();

  const {
    SensorType: { status, error },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addTypeData(submitData));
  //   if (!error && status === "loading") {
  //     navigate("/sensor-type");
  //   }
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Sensor Type"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/sensor-type", title: "Sensor Type" },
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
                      initialValues={{ name: "" }}
                      validationSchema={Yup.object({
                        name: Yup.string().required("Required"),
                      })}
                      onSubmit={(values) => {
                        // // console.log(values);
                        dispatch(addTypeData(values));
                      }}
                    >
                      {({ errors, touched, handleBlur }) => (
                        <Form>
                          <div className="row mb-3">
                            <label
                              className="col-sm-2 col-form-label"
                              htmlFor="name"
                            >
                              Name:<span className="text-danger">{" "}*</span>
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="text"
                                className={`form-control ${
                                  errors.name && touched.name
                                    ? "is-invalid"
                                    : ""
                                }`}
                                onBlur={handleBlur}
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

export default CreateSensorType;
