import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addPlantData } from "../../../../Redux/features/PlantSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreatePlant = () => {
  const dispatch = useDispatch();


  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Plant"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/plant", title: "Plants" },
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
                    initialValues={{
                      plantId: "",
                      plantName: "",
                      plantShortText: "",
                    }}
                    validationSchema={Yup.object({
                      plantId: Yup.string().required("Required"),
                      plantName: Yup.string().required("Required"),
                    })}
                    onSubmit={(values) => {
                      // e.preventDefault();
                      // // console.log(values);
                      dispatch(addPlantData(values));
                    }}
                  >
                    {({ errors, touched, handleBlur }) => (
                      <Form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="UniqueId"
                          >
                            Unique ID :
                            <span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                            id='UniqueId'
                              type="number"
                              name="plantId"
                              className={`form-control ${
                                errors.plantId && touched.plantId
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Unique ID"
                              onBlur={handleBlur}
                            />
                            <span className="invalid-feedback">
                              <ErrorMessage name="plantId" />
                            </span>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="Name"
                          >
                            NAME :<span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                            id="Name"
                              type="text"
                              name="plantName"
                              className={`form-control ${
                                errors.plantName && touched.plantName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onBlur={handleBlur}
                              placeholder="Name"
                            />
                            <span className="invalid-feedback">
                              <ErrorMessage name="plantName" />
                            </span>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="Description"
                          >
                            Description:
                          </label>
                          <div className="col-sm-10">
                            <Field
                            id="Description"
                              as="textarea"
                              name="plantShortText"
                              className="form-control"
                              placeholder="Description"
                            />
                          </div>
                        </div>
                        {/* <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="plantType"
                          >
                            PLANT TYPE:
                            <span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              type="text"
                              name="plantType"
                              className={`form-control ${
                                errors.plantType && touched.plantType
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Plant type"
                            />
                            <span className="invalid-feedback">
                              <ErrorMessage name="plantType" />
                            </span>
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

export default CreatePlant;
