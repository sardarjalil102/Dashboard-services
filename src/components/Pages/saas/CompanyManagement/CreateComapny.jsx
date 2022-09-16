import React, { useState } from "react";

// import { Link } from "react-router-dom";
import ToggleButton from "react-toggle-button";
import { handelState } from "../../../../utils/handelStates";
import { key } from "../../../../config";
import { useDispatch } from "react-redux";
import { addCompanyData } from "../../../../Redux/features/CompanyManagementSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import { ErrorMessage, Form, Formik } from "formik";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const CreateComapny = () => {
  const initState = {
    name: "",
    streetAddress1: null,
    streetAddress2: null,
    city: null,
    state: null,
    country: null,
    zip: null,
    contactPersonFirstName: "",
    contactPersonLastName: "",
    contactPersonPhoneNo: "",
    contactPersonEmail: "",
    link5y: "",
    link8d: "",
    biDashboardUrl: "",
    buildArea: "",
    isSensorConfiguration: false,
    isSapConfiguration: false,
    isSapPlugin: false,
    sapMaterialUrl: "",
    materialScheduleFrequency: "",
    materialScheduleFrequencyType: "",
    sapTransactionUrl: "",
    transactionScheduleFrequency: "",
    transactionScheduleFrequencyType: "",
    sapConnectionType: "",
    acceptanceReason: "",
    timezone: "",
  };

  const [formSubmitData, setFormSubmitData] = useState(initState);

  const validationSchema = Yup.object().shape({
    contactPersonEmail: Yup.string().email().nullable().required("Required"),
    contactPersonFirstName: Yup.string().nullable().required("Required"),
    name: Yup.string().required("Required"),
    contactPersonLastName: Yup.string().nullable().required("Required"),
    contactPersonPhoneNo: Yup.string().nullable().required("Required"),
    materialScheduleFrequency: Yup.string().nullable().required("Required"),
    materialScheduleFrequencyType: Yup.string().nullable().required("Required"),
    transactionScheduleFrequency: Yup.string().nullable().required("Required"),
    transactionScheduleFrequencyType: Yup.string()
      .nullable()
      .required("Required"),
    sapConnectionType: Yup.string().nullable().required("Required"),
    acceptanceReason: Yup.string().nullable().required("Required"),
  });

  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addCompanyData(formSubmitData));
  //   setFormSubmitData(initState);
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Company"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/company", title: "Company" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <Formik
                initialValues={initState}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // e.preventDefault();
                  // // console.log(values);
                  dispatch(addCompanyData(values));
                  setFormSubmitData(initState);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  setFieldTouched,
                }) => {
                  return (
                    <Form>
                      {/* name */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="name"
                        >
                          COMPANY NAME:<span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="name"
                            className={`form-control ${
                              errors.name && touched.name ? "is-invalid" : ""
                            }`}
                            type="text"
                            onBlur={handleBlur}
                            defaultValue={values.name}
                            onChange={handleChange("name")}
                            id="company-name"
                            placeholder="Company Name"
                            required=""
                          />
                          <ErrorMessage
                            name="name"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* street adress 1*/}
                      {/* <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-3"
                    htmlFor="street-address1"
                  >
                    Street Address 1:*
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={formSubmitData.streetAddress1}
                      onChange={(e) =>
                        handelState(
                          formSubmitData,
                          setFormSubmitData,
                          "streetAddress1",
                          e.target.value
                        )
                      }
                      // className={`form-control ${errors.StreetAddress1 ? "is-invalid" : ""
                      //   }`}
                      id="street-address1"
                      placeholder="Street Address 1"
                      required=""
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.streetAddress1?.message} 
                  </div>
                </div> */}

                      {/* street address 2 */}
                      {/* <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-3"
                    htmlFor="street-address2"
                  >
                    Street Address 2:*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={formSubmitData.streetAddress2}
                      onChange={(e) =>
                        handelState(
                          formSubmitData,
                          setFormSubmitData,
                          "streetAddress2",
                          e.target.value
                        )
                      }
                      // className={`form-control ${errors.StreetAddress2 ? "is-invalid" : ""
                      //   }`}
                      id="street-address2"
                      placeholder="Street Address 2"
                      required=""
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.streetAddress2?.message}
                  </div>
                </div> */}

                      {/* city */}
                      {/* <div className="mb-3 row">
                  <label className="col-form-label col-sm-3" htmlFor="city">
                    City:*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={formSubmitData.city}
                      onChange={(e) =>
                        handelState(
                          formSubmitData,
                          setFormSubmitData,
                          "city",
                          e.target.value
                        )
                      }
                      // className={`form-control ${errors.city ? "is-invalid" : ""
                      //   }`}
                      id="city"
                      placeholder="City"
                      required=""
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.city?.message} 
                  </div>
                </div> */}

                      {/* state */}
                      {/* <div className="mb-3 row">
                  <label className="col-form-label col-sm-3" htmlFor="state">
                    State:*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={formSubmitData.state}
                      onChange={(e) =>
                        handelState(
                          formSubmitData,
                          setFormSubmitData,
                          "state",
                          e.target.value
                        )
                      }
                      // className={`form-control ${errors.state ? "is-invalid" : ""
                      //   }`}
                      id="state"
                      placeholder="State"
                      required=""
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.state?.message} 
                  </div>
                </div> 

                {/* country */}
                      {/* <div className="mb-3 row">
                  <label className="col-form-label col-sm-3" htmlFor="country">
                    Country:*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={formSubmitData.country}
                      onChange={(e) =>
                        handelState(
                          formSubmitData,
                          setFormSubmitData,
                          "country",
                          e.target.value
                        )
                      }
                      // className={`form-control ${errors.country ? "is-invalid" : ""
                      //   }`}
                      id="country"
                      placeholder="Country"
                      required=""
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.country?.message} 
                  </div>
                </div> */}

                      {/* zip */}
                      {/* <div className="mb-3 row">
                  <label className="col-form-label col-sm-3" htmlFor="zip">
                    Zip:*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={formSubmitData.zip}
                      onChange={(e) =>
                        handelState(
                          formSubmitData,
                          setFormSubmitData,
                          "zip",
                          e.target.value
                        )
                      }
                      // className={`form-control ${errors.zip ? "is-invalid" : ""
                      //   }`}
                      id="zip"
                      placeholder="Zip"
                      required=""
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.zip?.message} 
                  </div>
                </div> */}

                      {/* contact name 1 */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="contactPersonFirstName"
                        >
                          CONTACT PERSON FIRST NAME:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="contactPersonFirstName"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.contactPersonFirstName &&
                              touched.contactPersonFirstName
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.contactPersonFirstName}
                            onChange={handleChange("contactPersonFirstName")}
                            id="first-name"
                            placeholder="First Name"
                          />
                          <ErrorMessage
                            name="contactPersonFirstName"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* contact 1 last name */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="contactPersonLastName"
                        >
                          CONTACT PERSON LAST NAME:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="contactPersonLastName"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.contactPersonLastName &&
                              touched.contactPersonLastName
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.contactPersonLastName}
                            onChange={handleChange("contactPersonLastName")}
                            // className={`form-control ${errors.lastName ? "is-invalid" : ""
                            //   }`}
                            id="contact-last-name"
                            placeholder="Last Name"
                          />
                          <ErrorMessage
                            name="contactPersonLastName"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* contact phone Number */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="contactPersonPhoneNo"
                        >
                          CONTACT PERSON Phone Number:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="contactPersonPhoneNo"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.contactPersonPhoneNo &&
                              touched.contactPersonPhoneNo
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.contactPersonPhoneNo}
                            onChange={handleChange("contactPersonPhoneNo")}
                            id="contact-person-number"
                            placeholder="Phone Number"
                          />
                          <ErrorMessage
                            name="contactPersonPhoneNo"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* contact Email */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="contactPersonEmail"
                        >
                          CONTACT PERSON EMAIL:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="contactPersonEmail"
                            type="email"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.contactPersonEmail &&
                              touched.contactPersonEmail
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.contactPersonEmail}
                            onChange={handleChange("contactPersonEmail")}
                            id="contact-person-email"
                            placeholder="Email Address"
                          />
                          <ErrorMessage
                            name="contactPersonEmail"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* bi dashboard url */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="dashboard-url"
                        >
                          BI DASHBOARD URL:
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="biDashboardUrl"
                            defaultValue={values.biDashboardUrl}
                            onChange={handleChange("biDashboardUrl")}
                            className="form-control"
                            id="dashboard-url"
                            placeholder="https://www.domain.com"
                          />
                        </div>
                      </div>

                      {/* SENSOR CONFIGURATION */}
                      <div className="mb-3 row align-items-center">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="isSensorConfiguration"
                        >
                          SENSOR CONFIGURATION:
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="isSensorConfiguration"
                            type="checkbox"
                            className="form-check-input"
                            value={values.isSensorConfiguration}
                            onChange={handleChange("isSensorConfiguration")}
                          />
                        </div>
                      </div>

                      {/* sap configure */}
                      <div className="mb-3 row align-items-center">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="isSapConfiguration"
                        >
                          SAP CONFIGURATION:
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="isSapConfiguration"
                            type="checkbox"
                            className="form-check-input"
                            value={values.isSapConfiguration}
                            onChange={handleChange("isSapConfiguration")}
                          />
                        </div>
                      </div>

                      {/* spa plugin */}
                      <div className="mb-3 row align-items-center">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="isSapPlugin"
                        >
                          SAP PLUGIN:
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="isSapPlugin"
                            type="checkbox"
                            className="form-check-input"
                            // defaultValue={formSubmitData.isSapPlugin}
                            value={values.isSapPlugin}
                            onChange={handleChange("isSapPlugin")}
                          />
                        </div>
                      </div>

                      {/* spa material url */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="sapMaterialUrl"
                        >
                          SAP MATERIAL URL:
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="sapMaterialUrl"
                            defaultValue={values.sapMaterialUrl}
                            onChange={handleChange("sapMaterialUrl")}
                            className="form-control"
                            id="sap-material-url"
                            placeholder="https://www.domain.com"
                            required=""
                          />
                        </div>
                      </div>

                      {/* material frequency */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="materialScheduleFrequency"
                        >
                          Material Schedule Frequency:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="materialScheduleFrequency"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.materialScheduleFrequency &&
                              touched.materialScheduleFrequency
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.materialScheduleFrequency}
                            onChange={handleChange("materialScheduleFrequency")}
                            id="Material-SF"
                            placeholder="Material Schedule Frequency"
                          />
                          <ErrorMessage
                            name="materialScheduleFrequency"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* matterial frequency config */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="materialScheduleFrequencyType"
                        >
                          Material Schedule Frequency Type:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="materialScheduleFrequencyType"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.materialScheduleFrequencyType &&
                              touched.materialScheduleFrequencyType
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.materialScheduleFrequencyType}
                            onChange={handleChange(
                              "materialScheduleFrequencyType"
                            )}
                            id="material-SFtype"
                            placeholder="Material Schedule Frequency Type"
                          />
                          <ErrorMessage
                            name="materialScheduleFrequency"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* sap transaction url */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="sapTransactionUrl"
                        >
                          SAP TRANSACTION URL:
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="sapTransactionUrl"
                            defaultValue={values.sapTransactionUrl}
                            onChange={handleChange("sapTransactionUrl")}
                            className="form-control"
                            id="sap-transaction-url"
                            placeholder="https://www.domain.com"
                          />
                        </div>
                      </div>

                      {/* trasaction frequency */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="trasactionScheduleFrequency"
                        >
                          Transaction Schedule Frequency:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="transactionScheduleFrequency"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.transactionScheduleFrequency &&
                              touched.transactionScheduleFrequency
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.transactionScheduleFrequency}
                            onChange={handleChange(
                              "transactionScheduleFrequency"
                            )}
                            id="trasaction-SF"
                            placeholder="Transaction Schedule Frequency"
                          />
                          <ErrorMessage
                            name="transactionScheduleFrequency"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* transaction frequency type */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="transactionScheduleFrequencyType"
                        >
                          Transaction Schedule Frequency Type:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="transactionScheduleFrequencyType"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.transactionScheduleFrequencyType &&
                              touched.transactionScheduleFrequencyType
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={
                              values.transactionScheduleFrequencyType
                            }
                            onChange={handleChange(
                              "transactionScheduleFrequencyType"
                            )}
                            id="transaction-SFtype"
                            placeholder="Transaction Schedule Frequency Type"
                          />
                          <ErrorMessage
                            name="transactionScheduleFrequencyType"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* sap connection type */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="sapConnectionType"
                        >
                          Sap Connection Type:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="sapConnectionType"
                            type="text"
                            onBlur={handleBlur}
                            className={`form-control ${
                              errors.sapConnectionType &&
                              touched.sapConnectionType
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.sapConnectionType}
                            onChange={handleChange("sapConnectionType")}
                            id="sap-connection-type"
                            placeholder="Sap Connection Type"
                          />
                          <ErrorMessage
                            name="sapConnectionType"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* acceptenct rate */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="acceptanceReason"
                        >
                          Acceptance Reason:
                          <span className="text-danger">{" "}*</span>
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            onBlur={handleBlur}
                            name="acceptanceReason"
                            type="text"
                            className={`form-control ${
                              errors.acceptanceReason &&
                              touched.acceptanceReason
                                ? "is-invalid"
                                : ""
                            }`}
                            defaultValue={values.acceptanceReason}
                            onChange={handleChange("acceptanceReason")}
                            id="acceptance-reason"
                            placeholder="Acceptance Reason"
                          />
                          <ErrorMessage
                            name="acceptanceReason"
                            component="span"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/* time zone */}
                      <div className="mb-3 row">
                        <label
                          className="col-form-label col-sm-3"
                          htmlFor="timezone"
                        >
                          Time Zone:
                        </label>
                        <div className="col-sm-9">
                          <select
                            name="timezone"
                            id="material-type"
                            defaultValue={values.timezone}
                            onChange={handleChange("timezone")}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue>select time Zone</option>
                            {key.constant.TIME_ZONE.map(
                              ({ value, text }, i) => (
                                <option key={i} value={value}>
                                  {text}
                                </option>
                              )
                            )}
                          </select>
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
                  );
                }}
              </Formik>
            </div>
            {/* <div className="col-md-2">

                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateComapny;
