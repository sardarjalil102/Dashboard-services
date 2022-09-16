import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import { useDispatch, useSelector } from "react-redux";
import { addSensorData } from "../../../../Redux/features/SensorSlice";
import { handelState } from "../../../../utils/handelStates";
import { fetchInspectionPlans } from "../../../../Redux/features/InspectionPlanSlice";
import { fetchAllTypes } from "../../../../Redux/features/SensorTypeSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateSensor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initState = {
    description: "",
    inspectionPlanId: "",
    maxThreshold: "",
    minThreshold: "",
    name: "",
    sensorId: "",
    sensorTypeId: "",
    unit: "",
  };

  // const [submitData, setSubmitData] = useState(initState);

  const validationSchema = Yup.object().shape({
    sensorId: Yup.string().required("Required"),
    inspectionPlanId: Yup.string().nullable().required("Required"),
    sensorTypeId: Yup.string().nullable().required("Required"),
    name: Yup.string().nullable().nullable().required("Required"),
    minThreshold: Yup.string().nullable().required("Required"),
    maxThreshold: Yup.string().nullable().required("Required"),
    unit: Yup.string().nullable().required("Required"),
  });

  const {
    Sensors: { status, error },
    InspectionPlan: { plans },
    SensorType: { allTypes },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchInspectionPlans());
    dispatch(fetchAllTypes());
  }, [dispatch]);

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addSensorData(submitData));
  //   setSubmitData(initState);
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Sensor"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/sensor", title: "Sensors" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
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
                      // // console.log(values);
                      dispatch(addSensorData(values));
                    }}
                  >
                    {({ errors, values, touched, handleBlur }) => (
                      <Form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="sensorId"
                          >
                            SENSOR ID:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.sensorId && touched.sensorId
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                              name="sensorId"
                              placeholder="Sensor ID"
                            />
                            <ErrorMessage
                              name="sensorId"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="name"
                          >
                            SENSOR NAME:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              type="text"
                              className={`form-control ${
                                errors.name && touched.name ? "is-invalid" : ""
                              }`}
                              onBlur={handleBlur}
                              name="name"
                              placeholder="Sensor Name"
                            />
                            <ErrorMessage
                              name="name"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="description"
                          >
                            DESCRIPTION:
                          </label>
                          <div className="col-sm-10">
                            <Field
                              as="textarea"
                              className="form-control"
                              name="description"
                              rows={3}
                              placeholder="Description"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-2"
                            htmlFor="inspectionPlanId"
                          >
                            Inspection Plan:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              as="select"
                              name="inspectionPlanId"
                              className={`form-select ${
                                errors.inspectionPlanId &&
                                touched.inspectionPlanId
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                            >
                              <option value="" defaultChecked>
                                Select
                              </option>
                              {plans?.map((p) => (
                                <option value={p.id}>{p.title}</option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="inspectionPlanId"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-2"
                            htmlFor="sensorTypeId"
                          >
                            SENSOR type ID:
                            <span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              as="select"
                              name="sensorTypeId"
                              className={`form-select ${
                                errors.sensorTypeId && touched.sensorTypeId
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                            >
                              <option defaultChecked>Select</option>
                              {allTypes?.map((p) => (
                                <option value={p.id}>{p.name}</option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="sensorTypeId"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="station-name"
                          >
                            THRESHOLD:<span className="text-danger"> *</span>
                          </label>
                          <div className="col-sm-10">
                            <div className="row">
                              <div className="col-md-4">
                                <Field
                                  type="number"
                                  className={`form-control ${
                                    errors.minThreshold && touched.minThreshold
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  onBlur={handleBlur}
                                  name="minThreshold"
                                  placeholder="MIN"
                                />
                                <ErrorMessage
                                  name="minThreshold"
                                  component="span"
                                  className="invalid-feedback"
                                />
                              </div>
                              <div className="col-md-4">
                                <Field
                                  type="number"
                                  className={`form-control ${
                                    errors.maxThreshold && touched.maxThreshold
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  onBlur={handleBlur}
                                  name="maxThreshold"
                                  placeholder="MAX"
                                />
                                <ErrorMessage
                                  name="maxThreshold"
                                  component="span"
                                  className="invalid-feedback"
                                />
                              </div>
                              <div className="col-md-4">
                                <Field
                                  type="text"
                                  className={`form-control ${
                                    errors.unit && touched.unit
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  onBlur={handleBlur}
                                  name="unit"
                                  placeholder="UNIT"
                                />
                                <ErrorMessage
                                  name="unit"
                                  component="span"
                                  className="invalid-feedback"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-2"
                            htmlFor="alert"
                          >
                            SEND ALERTS TO:
                          </label>
                          <div className="col-sm-10 text-start">
                            <label className="col-form-label  text-muted">
                              currently not in use
                            </label>
                            {/* <Select
                              // defaultValue={submissionData?.workstationIds}
                              onChange
                              components={makeAnimated()}
                              isMulti
                              options
                            /> */}
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
    </>
  );
};

export default CreateSensor;
