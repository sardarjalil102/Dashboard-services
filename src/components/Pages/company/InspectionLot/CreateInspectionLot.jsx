import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import { useSelect } from "@mui/base";
import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import { addLots } from "../../../../Redux/features/InspectionLotSlice";
import { getAllUsers } from "../../../../Redux/features/UsersSlice";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateInspectionLot = () => {
  const dispatch = useDispatch();

  const { materials } = useSelector((state) => state.MaterialMaster);

  const { plants } = useSelector((state) => state.Plant);

  const { users } = useSelector((state) => state.Users);

  const initState = {
    materialId: null,
    plantId: null,
    eventFlag: null,
    referenceNo: null,
    lotQty: null,
    status: false,
    userIds: null,
  };

  const validation = Yup.object().shape({
    materialId: Yup.string().nullable().required("Required"),
    plantId: Yup.string().nullable().required("Required"),
    eventFlag: Yup.string().nullable().required("Required"),
    referenceNo: Yup.string().nullable().required("Required"),
    lotQty: Yup.string().nullable().required("Required"),
    userIds: Yup.string().nullable().required("Required"),
  });

  // const [submissionData, setSubmissionData] = useState(initState);

  useEffect(() => {
    dispatch(fetchAllMaterials());
    dispatch(fetchPlants());
    dispatch(getAllUsers());
  }, [dispatch]);

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   // // // console.log(submissionData);
  //   // dispatch(addLots(submissionData));
  //   // setSubmissionData(initState);
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Inspection Lot"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/inspection-lot", title: "Inspection Lot" },
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
                    validationSchema={validation}
                    onSubmit={(values) => {
                      // e.preventDefault();
                      // // console.log(values);
                      dispatch(addLots(values));
                    }}
                  >
                    {({ errors, values, touched, handleBlur }) => (
                      <Form>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-2"
                            htmlFor="materialId"
                          >
                            MATERIAL:
                            <span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              onBlur={handleBlur}
                              as="select"
                              name="materialId"
                              className={`form-select ${
                                errors.materialId && touched.materialId
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option selected> Select</option>
                              {materials.map((mat) => (
                                <option value={mat.id}>
                                  {mat.materialText}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="materialId"
                              component="span"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-2"
                            htmlFor="plantId"
                          >
                            PLANT:<span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              onBlur={handleBlur}
                              as="select"
                              name="plantId"
                              className={`form-select ${
                                errors.plantId && touched.plantId
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option value="">Select</option>
                              {plants?.map((plant) => (
                                <option value={plant.id}>
                                  {plant.plantName}
                                </option>
                              ))}
                            </Field>
                            <span className="invalid-feedback">
                              <ErrorMessage name="plantId" />
                            </span>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-2"
                            htmlFor="eventFlag"
                          >
                            EVENT:<span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              onBlur={handleBlur}
                              as="select"
                              name="eventFlag"
                              className={`form-select ${
                                errors.eventFlag && touched.eventFlag
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Event"
                            >
                              <option selected>Select</option>
                              <option value="MM">Procurement - MM</option>
                              <option value="PP">Production - PP</option>
                              <option value="SD">Sales - SD</option>
                            </Field>
                            <span className="invalid-feedback">
                              <ErrorMessage name="plantId" />
                            </span>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="userIds"
                          >
                            ASSIGNED Role:
                            <span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10 my-auto">
                            <div className="input-group rounded">
                              <Field
                                onBlur={handleBlur}
                                as="select"
                                name="userIds"
                                className={`form-select ${
                                  errors.userIds && touched.userIds
                                    ? "is-invalid"
                                    : ""
                                }`}
                              >
                                <option value="">Select</option>
                                {users.map((user) => (
                                  <option value={user.id}>
                                    {user.username}
                                  </option>
                                ))}
                              </Field>
                              <span className="invalid-feedback">
                                <ErrorMessage name="userIds" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="referenceNo"
                          >
                            Refrence NO:
                            <span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              onBlur={handleBlur}
                              type="number"
                              name="referenceNo"
                              className={`form-control ${
                                errors.referenceNo && touched.referenceNo
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Refrence Number"
                            />
                            <span className="invalid-feedback">
                              <ErrorMessage name="referenceNo" />
                            </span>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="lotQty"
                          >
                            Lot QUANTITY:
                            <span className="fs-6 text-danger"> * </span>
                          </label>
                          <div className="col-sm-10">
                            <Field
                              onBlur={handleBlur}
                              type="number"
                              name="lotQty"
                              placeholder="Lot Quantity"
                              className={`form-control ${
                                errors.lotQty && touched.lotQty
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <span className="invalid-feedback">
                              <ErrorMessage name="lotQty" />
                            </span>
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
                {/* <div className="col-md-6"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInspectionLot;
