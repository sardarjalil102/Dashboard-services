import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import Spinner from "../../../common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addWorkStationData } from "../../../../Redux/features/WorkStaionSlice";

import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import makeAnimated from "react-select/animated";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateWorkstation = () => {
  const [submissionData, setSubmissionData] = useState({});
  const [plantOptions, setPlantOptions] = useState([]);
  const [materialOptions, setMaterialOptions] = useState([]);

  const dispatch = useDispatch();
  // const {  } = useSelector((state) => state.WorkStation);

  const {
    Plant: { plants },
    MaterialMaster: { materials },
    WorkStation: { error, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPlants());
    dispatch(fetchAllMaterials());
  }, [dispatch]);

  useLayoutEffect(() => {
    const temOptArr = [];
    plants.forEach((p) => {
      temOptArr.push({ value: p.id, label: p.plantName });
      //  // // console.log({ value: work?.id, label: work?.name });
    });
    // // console.log("temp array for plant(opt) :", temOptArr);
    setPlantOptions(temOptArr);
    return () => {};
  }, [plants]);

  useLayoutEffect(() => {
    const plantsOpt = plants?.map((p) => {
      return { value: p.id, label: p.plantName };
    });

    const materialOpt = materials?.map((m) => {
      return { value: m.id, label: `${m.materialNo} - ${m.materialText}` };
    });
    // // // console.log("temp array for plant(opt) :", plantsOpt);
    setPlantOptions(plantsOpt);
    setMaterialOptions(materialOpt);

    return () => {};
  }, [materials, plants, status]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // // console.log(submissionData);
    dispatch(addWorkStationData(submissionData));
    setSubmissionData({});
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
            { path: "", title: "Create", activeLink: true },
          ]}
        />
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
                          // required="Required"
                          value={submissionData.name}
                          className="form-control"
                          id="name"
                          placeholder="Station Name"
                          required
                        />
                        <div class="invalid-feedback">Required</div>
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
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="description"
                      >
                        Assigned Material
                      </label>
                      <div className="col-sm-9">
                        <Select
                          // defaultValue={submissionData?.workstationIds}
                          onChange={handleMaterialChange}
                          components={makeAnimated()}
                          isMulti
                          options={materialOptions}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="description"
                      >
                        Assigned Plant
                      </label>
                      <div className="col-sm-9">
                        <Select
                          // defaultValue={submissionData?.workstationIds}
                          onChange={handlePlantChange}
                          components={makeAnimated()}
                          isMulti
                          options={plantOptions}
                        />
                      </div>
                    </div>

                    {/* save button */}
                    <div className="row">
                      <div className="col-12 align-self-center text-center">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
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

export default CreateWorkstation;
