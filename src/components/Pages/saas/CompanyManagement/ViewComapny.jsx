import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import ToggleButton from "react-toggle-button";
import { compnayInitstate } from "../../../../data/initialStates";
import { handelState } from "../../../../utils/handelStates";
import { key } from "../../../../config";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneCompanyData,
  updateOneCompanyData,
} from "../../../../Redux/features/CompanyManagementSlice";

import FormSkeletonLoading from "../../../common/SkeltonLoading/FormSkeletonLoading";
import SoloFormLoading from "../../../common/SkeltonLoading/SoloFormLoading";
import MainBreadcrum from "../../../layout/MainBreadcrum";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

const ViewComapny = () => {
  const [editToggle, setEditToggle] = useState(true);
  const [formSubmitData, setFormSubmitData] = useState({});

  const dispatch = useDispatch();
  const { Id } = useParams();

  const { company, status } = useSelector((state) => state.CompanyManagement);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOneCompanyData(Id));

    return () => {
      setFormSubmitData({});
    };
  }, [Id, dispatch]);

  useEffect(() => {
    setFormSubmitData(company);
    return () => {
      setFormSubmitData({});
    };
  }, [company]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // delete formSubmitData.contactPersonEmail
    dispatch(updateOneCompanyData({ id: Id, finalData: formSubmitData }));
    setEditToggle(true);
    if (status === "succeeded") {
      navigate("/company");
    }
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Company"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/company", title: "Company" },
            { path: "", title: "View", activeLink: true },
          ]}
        />
        <div className="col-4 align-self-center text-end">
          {editToggle ? (
            <button
              type="button"
              onClick={() => setEditToggle(false)}
              className="btn btn-primary"
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditToggle(true)}
              className="btn btn-dark btn-circle"
            >
              X
            </button>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              {status === "loading" ? (
                <SoloFormLoading times={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* name */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="company-name"
                    >
                      COMPANY NAME:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.name}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "name",
                            e.target.value
                          )
                        }
                        // className={`form-control ${errors.companyName ? "is-invalid" : ""
                        //   }`}
                        id="company-name"
                        placeholder="Company Name"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.companyName?.message} */}
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
                      readOnly={editToggle}
                      className="form-control"
                      type="text"
                      defaultValue={formSubmitData?.streetAddress1}
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
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.streetAddress2}
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
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.city}
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
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.state}
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
                  </div> */}

                  {/* country */}
                  {/* <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="country"
                    >
                      Country:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.country}
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
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.zip}
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
                      htmlFor="first-name"
                    >
                      CONTACT PERSON FIRST NAME:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.contactPersonFirstName}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "contactPersonFirstName",
                            e.target.value
                          )
                        }
                        // className={`form-control ${errors.firstName ? "is-invalid" : ""
                        //   }`}
                        id="first-name"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.firstName?.message} */}
                    </div>
                  </div>

                  {/* contact 1 last name */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="contact-last-name"
                    >
                      CONTACT PERSON LAST NAME:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.contactPersonLastName}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "contactPersonLastName",
                            e.target.value
                          )
                        }
                        // className={`form-control ${errors.lastName ? "is-invalid" : ""
                        //   }`}
                        id="contact-last-name"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.lastName?.message} */}
                    </div>
                  </div>

                  {/* contact phone Number */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="contact-person-number"
                    >
                      CONTACT PERSON Phone Number:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.contactPersonPhoneNo}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "contactPersonPhoneNo",
                            e.target.value
                          )
                        }
                        // className={`form-control ${errors.email ? "is-invalid" : ""
                        //   }`}
                        id="contact-person-number"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* contact Email */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="contact-person-email"
                    >
                      CONTACT PERSON EMAIL:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="email"
                        defaultValue={formSubmitData?.contactPersonEmail}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "contactPersonEmail",
                            e.target.value
                          )
                        }
                        // className={`form-control ${errors.email ? "is-invalid" : ""
                        //   }`}
                        id="contact-person-email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
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
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.biDashboardUrl}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "biDashboardUrl",
                            e.target.value
                          )
                        }
                        id="dashboard-url"
                        placeholder="https://www.domain.com"
                        required=""
                      />
                    </div>
                  </div>

                  {/* SENSOR CONFIGURATION */}
                  <div className="mb-3 row align-items-center">
                    <label className="col-form-label col-sm-3" htmlFor="">
                      SENSOR CONFIGURATION:
                    </label>
                    <div className="col-sm-9">
                      <ToggleButton
                        value={formSubmitData?.isSensorConfiguration}
                        onToggle={() =>
                          setFormSubmitData({
                            ...formSubmitData,
                            isSensorConfiguration:
                              !formSubmitData.isSensorConfiguration,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* sap configure */}
                  <div className="mb-3 row align-items-center">
                    <label className="col-form-label col-sm-3" htmlFor="">
                      SAP CONFIGURATION:
                    </label>
                    <div className="col-sm-9">
                      <ToggleButton
                        value={formSubmitData?.isSapConfiguration}
                        onToggle={() =>
                          setFormSubmitData({
                            ...formSubmitData,
                            isSapConfiguration:
                              !formSubmitData.isSapConfiguration,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* spa plugin */}
                  <div className="mb-3 row align-items-center">
                    <label className="col-form-label col-sm-3" htmlFor="">
                      SAP PLUGIN:
                    </label>
                    <div className="col-sm-9">
                      <ToggleButton
                        // defaultValue={formSubmitData?.isSapPlugin}
                        value={formSubmitData?.isSapPlugin}
                        onToggle={() =>
                          setFormSubmitData({
                            ...formSubmitData,
                            isSapPlugin: !formSubmitData.isSapPlugin,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* spa material url */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="sap-material-url"
                    >
                      SAP MATERIAL URL:
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.sapMaterialUrl}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "sapMaterialUrl",
                            e.target.value
                          )
                        }
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
                      htmlFor="Material-SF"
                    >
                      Material Schedule Frequency:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.materialScheduleFrequency}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "materialScheduleFrequency",
                            e.target.value
                          )
                        }
                        id="Material-SF"
                        placeholder="Material Schedule Frequency"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* matterial frequency config */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="material-SFtype"
                    >
                      Material Schedule Frequency Type:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={
                          formSubmitData?.materialScheduleFrequencyType
                        }
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "materialScheduleFrequencyType",
                            e.target.value
                          )
                        }
                        id="material-SFtype"
                        placeholder="Material Schedule Frequency Type"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* sap transaction url */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="sap-transaction-url"
                    >
                      SAP TRANSACTION URL:
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.sapTransactionUrl}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "sapTransactionUrl",
                            e.target.value
                          )
                        }
                        id="sap-transaction-url"
                        placeholder="https://www.domain.com"
                        required=""
                      />
                    </div>
                  </div>

                  {/* trasaction frequency */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="trasaction-SF"
                    >
                      Transaction Schedule Frequency:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={
                          formSubmitData?.transactionScheduleFrequency
                        }
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "transactionScheduleFrequency",
                            e.target.value
                          )
                        }
                        id="trasaction-SF"
                        placeholder="Transaction Schedule Frequency"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* transaction frequency type */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="transaction-SFtype"
                    >
                      Transaction Schedule Frequency Type:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={
                          formSubmitData?.transactionScheduleFrequencyType
                        }
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "transactionScheduleFrequencyType",
                            e.target.value
                          )
                        }
                        id="transaction-SFtype"
                        placeholder="Transaction Schedule Frequency Type"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* sap connection type */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="sap-connection-type"
                    >
                      Sap Connection Type:*
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        className="form-control"
                        type="text"
                        defaultValue={formSubmitData?.sapConnectionType}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "sapConnectionType",
                            e.target.value
                          )
                        }
                        id="sap-connection-type"
                        placeholder="Sap Connection Type"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* acceptenct rate */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="acceptance-reason"
                    >
                      Acceptance Reason:*
                    </label>
                    <div className="col-sm-9">
                      <textarea
                        readOnly={editToggle}
                        type="text"
                        defaultValue={formSubmitData?.acceptanceReason}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "acceptanceReason",
                            e.target.value
                          )
                        }
                        className="form-control"
                        id="acceptance-reason"
                        placeholder="Acceptance Reason"
                        required=""
                      />
                    </div>
                    <div className="invalid-feedback">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>

                  {/* time zone */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="material-type"
                    >
                      Time Zone:
                    </label>
                    <div className="col-sm-9">
                      <select
                        id="material-type"
                        // defaultValue={}
                        onChange={(e) =>
                          handelState(
                            formSubmitData,
                            setFormSubmitData,
                            "timezone",
                            e.target.value
                          )
                        }
                        className="form-select"
                        aria-label="Default select example"
                        disabled={editToggle}
                      >
                        <option value="">select time Zone</option>
                        {key.constant.TIME_ZONE.map(({ value, text }, i) => (
                          <option
                            key={i}
                            value={value}
                            selected={
                              formSubmitData?.timezone === value ? true : false
                            }
                          >
                            {text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {!editToggle && (
                    <div className="row">
                      <div className="col-12 align-self-center text-center">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewComapny;
