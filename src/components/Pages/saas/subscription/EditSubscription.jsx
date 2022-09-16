import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  updateOnePlan,
  fetchOnePlanData,
} from "../../../../Redux/features/PlansSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const EditSubscription = () => {
  const { id } = useParams();

  const initialSate = {
    name: null,
    noOfMonths: null,
    pricePerMonth: null,
    discount: null,
    pricePerSensor: null,
    pricePerGb: null,
    pricePerUser: null,
    isActive: null,
  };

  const [submissionData, setSubmissionData] = useState(initialSate);
  const [editToggle, setEditToggle] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { onePlan, error, status } = useSelector((state) => state.Plan);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchOnePlanData(id));

    return () => {};
  }, [dispatch, id]);

  useLayoutEffect(() => {
    setSubmissionData(onePlan);

    return () => {
      setSubmissionData(initialSate);
    };
  }, [onePlan]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOnePlan({ id: id, finalData: submissionData }));
    if (status === true) {
      navigate("/subscription");
    }
  };
  return (
    <>
      {error && <span>{error}</span>}
      <div className="row">
        <MainBreadcrum
          name="Plans"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/subscription", title: "Plans" },
            { path: "", title: "View", activeLink: true },
          ]}
        />
        {permissions.includes("Plan-Update") ? (
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
        ) : null}
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mt-1">
                <form
                  className="browser-default-validation"
                  onSubmit={(e) => handelSubmit(e)}
                >
                  {/* material  */}
                  <div className="mb-3 row">
                    <label className="col-form-label col-sm-3" htmlFor="name">
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            name: e.target.value,
                          })
                        }
                        value={submissionData.name}
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="noOfMonths"
                    >
                      No. of Months
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            noOfMonths: e.target.value,
                          })
                        }
                        value={submissionData.noOfMonths}
                        className="form-control"
                        id="noOfMonths"
                        placeholder="No. of Months"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="pricePerMonth"
                    >
                      Price Per Month
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            pricePerMonth: e.target.value,
                          })
                        }
                        value={submissionData.pricePerMonth}
                        className="form-control"
                        id="pricePerMonth"
                        placeholder="Price Per Month"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="discount"
                    >
                      Discount
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            discount: e.target.value,
                          })
                        }
                        value={submissionData.discount}
                        className="form-control"
                        id="discount"
                        placeholder="Discount"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="pricePerSensor"
                    >
                      Price Per Sensor
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            pricePerSensor: e.target.value,
                          })
                        }
                        value={submissionData.pricePerSensor}
                        className="form-control"
                        id="pricePerSensor"
                        placeholder="Price Per Sensor"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="pricePerGb"
                    >
                      Price Per Gb
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            pricePerGb: e.target.value,
                          })
                        }
                        value={submissionData.pricePerGb}
                        className="form-control"
                        id="pricePerGb"
                        placeholder="Price Per Gb"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="pricePerUser"
                    >
                      Price Per User
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            pricePerUser: e.target.value,
                          })
                        }
                        value={submissionData.pricePerUser}
                        className="form-control"
                        id="pricePerUser"
                        placeholder="Price Per User"
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="isActive"
                    >
                      isactive
                    </label>
                    <div className="col-sm-9">
                      <select
                        disabled={editToggle}
                        id="isActive"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            isActive: e.target.value,
                          })
                        }
                        value={submissionData.isActive}
                      >
                        <option selected>Select</option>

                        <option value="1">yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                  </div>

                  {/* save button */}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSubscription;
