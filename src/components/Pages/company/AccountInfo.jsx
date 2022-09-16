import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchOneCompanyData,
  updateOneCompanyData,
} from "../../../Redux/features/CompanyManagementSlice";
import MainBreadcrum from "../../layout/MainBreadcrum";

const AccountInfo = () => {
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
          name="Account"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Info", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <form className="browser-default-validation">
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="company-name"
                      >
                        Company Name:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="company-name"
                          disabled
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    {/* <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="street-address-1"
                      >
                        STREET ADDRESS 1:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="street-address-1"
                          placeholder="Street Address 1"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="street-address-2"
                      >
                        STREET ADDRESS 2:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="street-address-2"
                          placeholder="Street Address 2"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="city"
                      >
                        City:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="Street Address 2"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="state"
                      >
                        STATE / PROVINCE:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="State / Province"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="country"
                      >
                        COUNTRY:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="zip"
                      >
                        ZIP / POSTAL CODE:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder="Zip / Postal code"
                        />
                      </div>
                    </div> */}
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="firstname"
                      >
                        CONTACT FIRST NAME:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Contact First Name"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="lastname"
                      >
                        CONTACT LAST NAME:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="Contact Last Name"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="phone"
                      >
                        CONTACT PHONE:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="email"
                      >
                        CONTACT EMAIL:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Contact Email"
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
                  </form>
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

export default AccountInfo;
