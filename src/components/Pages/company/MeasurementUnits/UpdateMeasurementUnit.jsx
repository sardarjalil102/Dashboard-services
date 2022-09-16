import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Spinner from "../../../common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneMeasurementData,
  updateOneMeasurement,
} from "../../../../Redux/features/MeasurementUnitSlice";

import { handelState } from "../../../../utils/handelStates";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const UpdateMeasurementUnit = () => {
  const navigate = useNavigate();

  const [editToggle, setEditToggle] = useState(true);

  const { id } = useParams();
  const [submitData, setSubmitData] = useState({});
  const dispatch = useDispatch();

  const {
    Measurement: { oneMeasurement, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOneMeasurementData(id));
    return () => {};
  }, [id, dispatch]);

  useLayoutEffect(() => {
    setSubmitData(oneMeasurement);
    return () => {};
  }, [oneMeasurement]);

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(updateOneMeasurement({ id: id, finalData: submitData }));
    navigate("/measurement-units");
  };
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Measurement Units"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/measurement-units", title: "Measurement Units" },
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
            <div className="col-12">
              <form>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-1" htmlFor="code">
                    Code:*
                  </label>
                  <div className="col-sm-11">
                    <input
                      readOnly={editToggle}
                      type="number"
                      className="form-control"
                      value={submitData.code}
                      onChange={(e) =>
                        handelState(
                          submitData,
                          setSubmitData,
                          "code",
                          e.target.value
                        )
                      }
                      id="code"
                      placeholder="Enter Code"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-1" htmlFor="name">
                    NAME:*
                  </label>
                  <div className="col-sm-11">
                    <input
                      readOnly={editToggle}
                      id="name"
                      type="text"
                      className="form-control"
                      value={submitData.name}
                      onChange={(e) =>
                        handelState(
                          submitData,
                          setSubmitData,
                          "name",
                          e.target.value
                        )
                      }
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                {/* <div className="mb-3 row">
                  <label className="col-form-label col-sm-1" htmlFor="type">
                    TYPE:
                  </label>
                  <div className="col-sm-11">
                    <select
                      disabled={editToggle}
                      id="type"
                      className="form-select"
                      value={submitData.unitType}
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          unitType: e.target.value,
                        })
                      }
                      aria-label="Default select example"
                    >
                      <option defaultChecked>Select</option>
                      <option value="in">In</option>
                      <option value="mm">Mm</option>
                      <option value="cm">Cm</option>
                    </select>
                  </div>
                </div> */}
                {!editToggle && (
                  <div className="row">
                    <div className="col-12 align-self-center text-center">
                      <button
                        onClick={(e) => handelSubmit(e)}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Save{" "}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            {/* <div className="col-md-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMeasurementUnit;
