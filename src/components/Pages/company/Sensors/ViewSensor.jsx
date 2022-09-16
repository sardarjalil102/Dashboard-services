import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneSensorData,
  updateOneSensor,
} from "../../../../Redux/features/SensorSlice";
import { handelState } from "../../../../utils/handelStates";
import { fetchInspectionPlans } from "../../../../Redux/features/InspectionPlanSlice";
import { fetchAllTypes } from "../../../../Redux/features/SensorTypeSlice";
import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const ViewSensor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editToggle, setEditToggle] = useState(true);

  const { id } = useParams();

  const [submitData, setSubmitData] = useState({});

  const {
    Sensors: { oneSensor, status },
    InspectionPlan: { plans },
    SensorType: { allTypes },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchInspectionPlans());
    dispatch(fetchAllTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOneSensorData(id));
  }, [dispatch, id]);

  useLayoutEffect(() => {
    setSubmitData(oneSensor);
    return () => {};
  }, [oneSensor]);

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(updateOneSensor({ id: id, finalData: submitData }));
    navigate("/sensor");
  };
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Sensor"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/sensor", title: "Sensors" },
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
      <div className="mt-3">
        <div className="mb-5 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <form
                    className="browser-default-validation"
                    onSubmit={handelSubmit}
                  >
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="sensor-id"
                      >
                        SENSOR ID:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          readOnly={editToggle}
                          value={submitData.sensorId}
                          className="form-control"
                          onChange={(e) =>
                            handelState(
                              submitData,
                              setSubmitData,
                              "sensorId",
                              e.target.value
                            )
                          }
                          id="sensor-id"
                          placeholder="Sensor ID"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="sensor-name"
                      >
                        SENSOR NAME:
                      </label>
                      <div className="col-sm-10">
                        <input
                          readOnly={editToggle}
                          value={submitData.name}
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            handelState(
                              submitData,
                              setSubmitData,
                              "name",
                              e.target.value
                            )
                          }
                          id="sensor-name"
                          placeholder="Sensor Name"
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
                        <textarea
                          readOnly={editToggle}
                          value={submitData.description}
                          className="form-control"
                          id="description"
                          onChange={(e) =>
                            handelState(
                              submitData,
                              setSubmitData,
                              "description",
                              e.target.value
                            )
                          }
                          rows={3}
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="build"
                      >
                        Inspection Plan:
                      </label>
                      <div className="col-sm-10">
                        <select
                          id="build"
                          className="form-select"
                          disabled={editToggle}
                          // defaultvalue={oneSensor?.inspectionPlan.title}
                          onChange={(e) =>
                            handelState(
                              submitData,
                              setSubmitData,
                              "inspectionPlanId",
                              e.target.value
                            )
                          }
                          aria-label="Default select example"
                        >
                          <option>Select</option>
                          {plans?.map((pl) => (
                            <option
                              Value={pl.id}
                              selected={
                                submitData?.inspectionPlan?.id === pl?.id
                                  ? true
                                  : false
                              }
                            >
                              {pl.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="sensor-id2"
                      >
                        SENSOR type ID:
                      </label>
                      <div className="col-sm-10">
                        <select
                          id="sensor-id2"
                          className="form-select"
                          disabled={editToggle}
                          value={submitData.sensorTypeId}
                          onChange={(e) =>
                            handelState(
                              submitData,
                              setSubmitData,
                              "sensorTypeId",
                              e.target.value
                            )
                          }
                          aria-label="Default select example"
                        >
                          <option defaultChecked>Select</option>
                          {allTypes?.map((p) => (
                            <option
                              value={p.id}
                              selected={
                                submitData?.sensorType?.id === p?.id
                                  ? true
                                  : false
                              }
                            >
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="station-name"
                      >
                        THRESHOLD:
                      </label>
                      <div className="col-sm-10">
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              readOnly={editToggle}
                              value={submitData.minThreshold}
                              onChange={(e) =>
                                handelState(
                                  submitData,
                                  setSubmitData,
                                  "minThreshold",
                                  e.target.value
                                )
                              }
                              id="station-name"
                              placeholder="MIN"
                            />
                          </div>
                          <div className="col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              readOnly={editToggle}
                              value={submitData.maxThreshold}
                              onChange={(e) =>
                                handelState(
                                  submitData,
                                  setSubmitData,
                                  "maxThreshold",
                                  e.target.value
                                )
                              }
                              id="station-name"
                              placeholder="MAX"
                            />
                          </div>
                          <div className="col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              readOnly={editToggle}
                              value={submitData.unit}
                              onChange={(e) =>
                                handelState(
                                  submitData,
                                  setSubmitData,
                                  "unit",
                                  e.target.value
                                )
                              }
                              id="station-name"
                              placeholder="UNIT"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-form-label col-sm-2" htmlFor="plan">
                        SEND ALERTS TO:
                      </label>
                      <div className="col-sm-10 text-start">
                        <button
                          disabled={editToggle}
                          type="button"
                          className="btn btn-sm btn-outline-primary p-2"
                        >
                          SELECT PEOPLE{" "}
                        </button>
                      </div>
                    </div>
                    {!editToggle && (
                      <div className="row">
                        <div className="col-12 align-self-center text-center">
                          <button type="submit" className="btn btn-primary">
                            Save{" "}
                          </button>
                        </div>
                      </div>
                    )}
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

export default ViewSensor;
