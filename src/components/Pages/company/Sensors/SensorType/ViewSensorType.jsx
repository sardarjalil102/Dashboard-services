import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ToggleButton from "react-toggle-button";

import { handelState } from "../../../../../utils/handelStates";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../common/Spinner";
import {
  fetchOneTypeData,
  updateOneType,
} from "../../../../../Redux/features/SensorTypeSlice";
import MainBreadcrum from "../../../../layout/MainBreadcrum";

const CreateSensorType = () => {
  const navigate = useNavigate();

  const [editToggle, setEditToggle] = useState(true);

  const { id } = useParams();
  const [submitData, setSubmitData] = useState({});

  const {
    SensorType: { oneType, status },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneTypeData(id));
    return () => { };
  }, [id, dispatch]);

  useLayoutEffect(() => {
    setSubmitData(oneType);
    return () => { };
  }, [oneType]);

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(updateOneType({ id: id, finalData: submitData }));
    navigate("/sensor-type");
  };
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum name='Sensor Type' subName=''
          links={[
            { path: "/", title: "" },
            { path: "/sensor-type", title: "Sensor Type" },
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
      {status === "loading" ? (
        <Spinner />
      ) : (
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
                          htmlFor="name"
                        >
                          Name:
                        </label>
                        <div className="col-sm-10">
                          <input
                            readOnly={editToggle}
                            value={submitData.name}
                            onChange={(e) =>
                              handelState(
                                submitData,
                                setSubmitData,
                                "name",
                                e.target.value
                              )
                            }
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                          />
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
      )}
    </>
  );
};

export default CreateSensorType;
