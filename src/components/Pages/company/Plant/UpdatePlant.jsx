import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchOnePlantData,
  updateOnePlant,
} from "../../../../Redux/features/PlantSlice";
import SoloFormLoading from "../../../common/SkeltonLoading/SoloFormLoading";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const UpdatePlant = () => {
  const { id } = useParams();
  const [editToggle, setEditToggle] = useState(true);

  const [submissionData, setSubmissionData] = useState({});

  const dispatch = useDispatch();

  const { plant, status } = useSelector((state) => state.Plant);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOnePlantData(id));

    return () => {};
  }, [dispatch, id]);

  useLayoutEffect(() => {
    setSubmissionData(plant);

    return () => {
      setSubmissionData({});
    };
  }, [plant]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOnePlant({ id: id, finalData: submissionData }));
    setEditToggle(true);
    //if condition for status
    if (status === "rejected") {
      navigate("#");
    } else if (status === "succeeded") {
      navigate("/plant");
    }
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Plant"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/plant", title: "Plants" },
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
        <SoloFormLoading times={[1, 2, 3]} />
      ) : (
        <div className="mt-3">
          <div className="mb-5">
            <div className="card">
              <div className="card-body">
                <form
                  onSubmit={(e) => handelSubmit(e)}
                  className="browser-default-validation"
                >
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="plant-id"
                    >
                      Unique ID :<span className="fs-6 text-danger"> * </span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        readOnly={editToggle}
                        type="text"
                        className="form-control"
                        id="plant-id"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            plantId: e.target.value,
                          })
                        }
                        value={submissionData.plantId}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="plant-name"
                    >
                      NAME :<span className="fs-6 text-danger"> * </span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            plantName: e.target.value,
                          })
                        }
                        value={submissionData.plantName}
                        className="form-control"
                        id="plant-name"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="plant-shorttext"
                    >
                      Description:
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        readOnly={editToggle}
                        type="text"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            plantShortText: e.target.value,
                          })
                        }
                        value={submissionData.plantShortText}
                        className="form-control"
                        id="plant-shorttext"
                      />
                    </div>
                  </div>
                  {/* <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="plant-type"
                  >
                    PLANT TYPE:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      type="text"
                      value={submissionData.plantType}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          plantType: e.target.value,
                        })
                      }
                      className="form-control"
                      id="plant-type"
                      placeholder="Plant Type"
                    />
                  </div>
                </div> */}

                  {!editToggle && (
                    <div className="row">
                      <div className="col-12 align-self-center text-center">
                        <button type="submit" className="btn btn-primary">
                          Save{" "}
                        </button>
                      </div>
                    </div>
                  )}
                  {/* <button onClick={() => reset()}>Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdatePlant;
