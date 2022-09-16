import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneWorkStationData,
  updateOneWorkStationData,
} from "../../../../Redux/features/WorkStaionSlice";
import Select from "react-select";

import Spinner from "../../../common/Spinner";
import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import makeAnimated from "react-select/animated";
import FakeSelect from "../../../common/FakeSelect";
import { ImCross } from "react-icons/im";
import { to_option } from "../../../../utils/handelStates";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const ViewWorkStation = () => {
  const navigate = useNavigate();
  const [editToggle, setEditToggle] = useState(true);
  const dispatch = useDispatch();

  const { Id } = useParams();

  const [submissionData, setSubmissionData] = useState({});
  const [plantOptions, setPlantOptions] = useState([]);
  const [materialOptions, setMaterialOptions] = useState([]);

  const {
    Plant: { plants },
    MaterialMaster: { materials },
    WorkStation: { workStation, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOneWorkStationData(Id));
    dispatch(fetchPlants());
    dispatch(fetchAllMaterials());

    return () => {};
  }, [dispatch, Id]);

  useLayoutEffect(() => {
    const plantsOpt = to_option(
      plants,
      ["id", "plantName"],
      ["value", "label"]
    );

    const materialOpt = to_option(
      materials,
      ["id", "materialText"],
      ["value", "label"]
    );

    setPlantOptions(plantsOpt);
    setMaterialOptions(materialOpt);
    setSubmissionData(workStation);

    return () => {};
  }, [workStation, materials, plants, status]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOneWorkStationData({ Id, finalData: submissionData }));
    // // console.log(submissionData);
    setEditToggle(true);
    if (status === "succeeded") {
      navigate("/station");
    }
  };

  const handleMaterialChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      // // // console.log(selec.value);
      tempSelect.push(selec.value);
    });
    setSubmissionData({
      ...submissionData,
      materialIds: tempSelect,
    });
  };

  const handlePlantChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      tempSelect.push(selec.value);
    });
    setSubmissionData({
      ...submissionData,
      plantIds: tempSelect,
    });
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="WorkStation"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/station", title: "WorkStation" },
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
              <ImCross className="mx-1" size={"1rem"} />
            </button>
          )}
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mt-1">
                {status === "loading" ? (
                  <Spinner />
                ) : (
                  <form
                    className="browser-default-validation"
                    onSubmit={(e) => handelSubmit(e)}
                  >
                    <div className="mb-3 row">
                      <label className="col-form-label col-sm-3" htmlFor="name">
                        Station Name
                      </label>
                      <div className="col-sm-9">
                        <input
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
                          placeholder="Station Name"
                          readOnly={editToggle}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="description"
                      >
                        description
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          id="description"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              description: e.target.value,
                            })
                          }
                          value={submissionData.description}
                          readOnly={editToggle}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="materialMaster"
                      >
                        Assigned Material
                      </label>
                      <div className="col-sm-9">
                        {editToggle && (
                          // material
                          <FakeSelect
                            defaultValue={workStation?.materialMaster}
                          />
                        )}
                        {!editToggle && (
                          <Select
                            components={makeAnimated()}
                            defaultValue={workStation?.materialMaster}
                            onChange={handleMaterialChange}
                            isMulti
                            options={materialOptions}
                          />
                        )}
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="plants"
                      >
                        Assigned PLANTS:
                      </label>
                      <div className="col-sm-9">
                        {editToggle && (
                          // material
                          <FakeSelect defaultValue={workStation?.plant} />
                        )}
                        {!editToggle && (
                          <Select
                            id="plants"
                            cacheOptions
                            defaultValue={workStation?.plant}
                            options={plantOptions}
                            onChange={handlePlantChange}
                            components={makeAnimated()}
                            isMulti
                            // isDisabled={editToggle}
                          />
                        )}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWorkStation;
