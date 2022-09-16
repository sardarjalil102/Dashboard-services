import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addMeasurementData } from "../../../../Redux/features/MeasurementUnitSlice";

import { handelState } from "../../../../utils/handelStates";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateMeasurementUnits = () => {
  const navigate = useNavigate();

  const initState = { code: "", name: "" };
  // const [submitData, setSubmitData] = useState(initState);

  const {
    Measurement: { status },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
  });

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addMeasurementData(submitData));

  //   setSubmitData(initState);
  //   // navigate("/measurement-units");
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Measurement Units"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/measurement-units", title: "Measurement Units" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <Formik
                initialValues={initState}
                onSubmit={(values, { resetForm }) => {
                  // e.prepventDefault();
                  // // console.log(values);
                  dispatch(addMeasurementData(values));
                  if (status !== "failed") {
                    resetForm();
                  }
                }}
                validationSchema={validationSchema}
              >
                {({ errors, values, touched, handleBlur }) => (
                  <Form>
                    <div className="mb-3 row">
                      <label className="col-form-label col-sm-1" htmlFor="code">
                        Code:<span className="fs-6 text-danger"> * </span>
                      </label>
                      <div className="col-sm-11">
                        <Field
                          type="number"
                          className={`form-control ${
                            errors.code && touched.code ? "is-invalid" : ""
                          }`}
                          name="code"
                          onBlur={handleBlur}
                          placeholder="Enter Code"
                        />
                        <ErrorMessage
                          name="code"
                          component="span"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-form-label col-sm-1" htmlFor="name">
                        NAME:<span className="fs-6 text-danger"> * </span>
                      </label>
                      <div className="col-sm-11">
                        <Field
                          name="name"
                          type="text"
                          className={`form-control ${
                            errors.name && touched.name ? "is-invalid" : ""
                          }`}
                          onBlur={handleBlur}
                          placeholder="Enter Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    {/* <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-1"
                        htmlFor="unitType"
                      >
                        TYPE:
                      </label>
                      <div className="col-sm-11">
                        <Field
                          as="select"
                          name="unitType"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value="in">In</option>
                          <option value="mm">Mm</option>
                          <option value="cm">Cm</option>
                        </Field>
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
            {/* <div className="col-md-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMeasurementUnits;
