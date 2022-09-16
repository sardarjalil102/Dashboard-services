import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addRejectedReasonsData,
  fetchAllRejectedReasons,
} from "../../../../Redux/features/RejectedReasonsSlice";
import * as Yup from "yup";
import { handelState } from "../../../../utils/handelStates";
import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";

// import ToggleButton from "react-toggle-button";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

const CreateRejectionReason = () => {
  const navigate = useNavigate();

  const initState = {
    code: "",
    reason: "",
    parentId: null,
  };

  // const [rejectionData, setRejectionData] = useState({
  //   code: "",
  //   reason: "",
  //   parentId: null,
  // });
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Required"),
    reason: Yup.string().required("Required"),
  });

  const {
    RejectedReasons: { allReasons, status },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchAllRejectedReasons());
  }, [dispatch]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addRejectedReasonsData(rejectionData));
  //   navigate("/rejection-reasons");
  // };

  if (status === "loading") {
    return <Spinner />;
  }
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Rejection Reason"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/rejection-reasons", title: "Rejection Reason" },
            { path: "", title: "Add", activeLink: true },
          ]}
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <Formik
                onSubmit={(values) => {
                  // e.preventDefault();
                  // // console.log(values);
                  dispatch(addRejectedReasonsData(values));
                }}
                initialValues={initState}
                validationSchema={validationSchema}
              >
                {({ errors, values, touched, handleBlur }) => (
                  <Form>
                    <div className="mb-3 row">
                      <label className="col-form-label col-sm-2" htmlFor="code">
                        Rejection Code: <span className="text-danger"> *</span>
                      </label>
                      <div className="col-sm-10">
                        <Field
                          type="number"
                          className={`form-control ${
                            errors.code && touched.code ? "is-invalid" : ""
                          }`}
                          onBlur={handleBlur}
                          name="code"
                          placeholder="Rejection Code"
                        />
                        <ErrorMessage
                          name="code"
                          component="span"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="reason"
                      >
                        Rejection Reason:<span className="text-danger"> *</span>
                      </label>
                      <div className="col-sm-10">
                        <Field
                          name="reason"
                          type="text"
                          className={`form-control ${
                            errors.reason && touched.reason ? "is-invalid" : ""
                          }`}
                          onBlur={handleBlur}
                          placeholder="Rejection  Reason"
                        />
                        <ErrorMessage
                          name="reason"
                          component="span"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>

                    {/* parent Id  */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="parentId"
                      >
                        Parent Id:
                      </label>
                      <div className="col-sm-10">
                        <Field
                          as="select"
                          name="parentId"
                          className="form-select"
                        >
                          <option value="" selected>
                            Select
                          </option>
                          {allReasons?.map(({ reason, id }) => (
                            <option key={id} value={id}>
                              {reason}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>

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
            </div>
            {/* <div className="col-md-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRejectionReason;
