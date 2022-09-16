import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../../common/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { fetchWorkStations } from "../../../../Redux/features/WorkStaionSlice";
import { addInspectoinPlanData } from "../../../../Redux/features/InspectionPlanSlice";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import { fetchBuildAreas } from "../../../../Redux/features/BuildAreaSlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ImageDropZone from "./components/ImageDropZone";
import { toast } from "react-toastify";
import ImageUpload from "../../../common/ImageUpload";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateMaterial = () => {
  const [seletedMaterial, setSeletedMaterial] = useState({
    id: null,
    plant: [],
  });
  const [option, setOption] = useState([]);
  const initialSate = {
    materialId: null,
    plantId: null,
    eventFlag: null,
    title: null,
    description: null,
    lotMinRange: null,
    lotMaxRange: null,
    imageId: 1,
    buildArea: null,
  };

  const [submissionData, setSubmissionData] = useState(initialSate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    MaterialMaster: { materials },
    WorkStation: { workStations, status },
    BuildArea: { areas },
    AppUtils,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllMaterials());
    dispatch(fetchBuildAreas());
    dispatch(fetchWorkStations());
    return () => { };
  }, [dispatch]);

  useEffect(() => {
    const temOptArr = [];
    workStations.forEach((work) => {
      temOptArr.push({ value: work?.id, label: work?.name });
      //  // // console.log({ value: work?.id, label: work?.name });
    });
    // // // console.log("temp array :",temOptArr);
    setOption(temOptArr);
    return () => { };
  }, [workStations]);

  const HandelMateriaSelect = (e) => {
    // // console.log(e);
    const searchObject = materials.find((m) => m.id == e);
    // // console.log(searchObject.plants);
    setSeletedMaterial({ id: searchObject.id, plant: searchObject.plants });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    // // console.log(submissionData);

    try {
      // wait for the action to complete successfully
      const response = await dispatch(
        addInspectoinPlanData({
          ...submissionData,
          imageId: AppUtils?.fileData?.id,
          imageUrl:
            "https://i.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04",
          thumbnailUrl:
            "https://i.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04",
        })
      ).unwrap();
      // then navigate
      // console.log("from create components :", response);
      navigate(`/inspection-plan/view/${response.id}`);
    } catch (error) {
      toast(`there is an error :${error}`);
    }
  };

  const handleChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      // // // console.log(selec.value);
      tempSelect.push(selec.value);
    });
    setSubmissionData({
      ...submissionData,
      workstationIds: tempSelect,
    });

    // // // console.log(`Option selected:`, tempSelect);
  };
  return (
    <>
      <div className="row">
        <MainBreadcrum name='Inspection Plan' subName=''
          links={[
            { path: "/", title: "" },
            { path: "/inspection-plan", title: "inspection plan" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      {status === "loading" ? (
        <Spinner />
      ) : (
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
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="material-master"
                      >
                        MATERIAL MASTER:
                      </label>
                      <div className="col-sm-9">
                        <select
                          id="material-master"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) => {
                            // // // console.log(e.target.value);
                            HandelMateriaSelect(e.target.value);
                            setSubmissionData({
                              ...submissionData,
                              materialId: e.target.value,
                            });
                          }}
                          value={submissionData.materialId}
                        >
                          <option selected>Select</option>
                          {materials?.map(
                            ({ materialNo, materialText, id, plant }) => (
                              <option
                                key={id}
                                value={id}
                              >{`${materialNo} - ${materialText}`}</option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    {/* plants */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="plants"
                      >
                        PLANTS:
                      </label>
                      <div className="col-sm-9">
                        <select
                          id="plants"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              plantId: e.target.value,
                            })
                          }
                          value={submissionData.plantId}
                        >
                          <option selected>Select</option>
                          {seletedMaterial?.plant?.map(({ plantName, id }) => (
                            <option key={id} value={id}>
                              {plantName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* event */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="event"
                      >
                        EVENT:
                      </label>
                      <div className="col-sm-9">
                        <select
                          id="event"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              eventFlag: e.target.value,
                            })
                          }
                          value={submissionData.eventFlag}
                        >
                          <option selected>Select</option>
                          <option value="MM">PROCUREMENT (MM)</option>
                          <option value="PP">PRODUCTION (PP)</option>
                          <option value="SD">SALES (SD)</option>
                        </select>
                      </div>
                    </div>

                    {/* lot min rnage */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="lotMinRange"
                      >
                        Lot Min. Range:
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="lotMinRange"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              lotMinRange: e.target.value,
                            })
                          }
                          value={submissionData.lotMinRange}
                          placeholder="Lot Min. Range"
                        />
                      </div>
                    </div>

                    {/* lot max range */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="lotMaxRange"
                      >
                        Lot Max. Range:
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="lotMaxRange"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              lotMaxRange: e.target.value,
                            })
                          }
                          value={submissionData.lotMaxRange}
                          placeholder="Lot Max. Range"
                        />
                      </div>
                    </div>

                    {/* title */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="title"
                      >
                        TITLE:
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              title: e.target.value,
                            })
                          }
                          value={submissionData.title}
                          className="form-control"
                          id="title"
                          placeholder="Title"
                        />
                      </div>
                    </div>

                    {/* description */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="description"
                      >
                        DESCRIPTION:
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
                          rows={3}
                          placeholder="Description"
                        />
                      </div>
                    </div>

                    {/* assign work id  */}
                    <div className="mb-3 row pe-1">
                      <label
                        className="form-label col-sm-3"
                        htmlFor="assigned-workstation"
                      >
                        ASSIGNED WORKSTATION:
                      </label>
                      <div className="my-auto col-sm-9">
                        {/* <div className="input-group rounded"> */}
                        <Select
                          defaultValue={submissionData?.workstationIds}
                          onChange={handleChange}
                          components={makeAnimated()}
                          isMulti
                          options={option}
                        />

                        {/* <input
                                  id="assigned-workstation"
                                  type="search"
                                  onChange={(e) => {
                                    setWorkStation(e.target.value);
                                  }}
                                  className="form-control rounded"
                                  placeholder="Workstation Name"
                                  aria-label="Search"
                                  aria-describedby="search-addon"
                                />
                                <span
                                  className="input-group-text border-0"
                                  id="search-addon"
                                >
                                  <i className="fas fa-search"></i>
                                </span>*/}
                        {/* </div> */}
                      </div>
                    </div>
                    {/* BUild Area  */}
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="Build Area"
                      >
                        BUild Area:
                      </label>
                      <div className="col-sm-9">
                        <select
                          id="Build Area"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) => {
                            // // // console.log(e.target.value);
                            setSubmissionData({
                              ...submissionData,
                              buildArea: e.target.value,
                            });
                          }}
                          value={submissionData.buildArea}
                        >
                          <option selected>Select Build Area</option>
                          {areas?.map(({ id, name }) => (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* save button */}
                    <div className="row">
                      <div
                        className={`col-12 align-self-center text-center ${AppUtils.status === "loading" ? " disabled " : " "
                          }`}
                      >
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* image section */}
                <div className="col-md-6">
                  <ImageUpload image={null} />
                  {/* <label
                            className="row mt-2 w-100 justify-content-center align-items-center m-auto"
                            style={{
                              border: "1px solid black",
                              height: "60vh",
                            }}
                          >
                            <input
                              className="mt-auto d-none"
                              type="file"
                              name="file1"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100"
                              height="100"
                              fill="currentColor"
                              className="bi bi-file-earmark-plus-fill fa-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                            </svg>
                          </label>
                          <div className="row">
                            <div className="col-12 text-end">
                              <p className="fs-7">
                                UPLOAD PHOTO (Allowed file type format: png,
                                jpg, jpeg)
                              </p>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-12 align-self-center text-center">
                              <button type="submit" className="btn btn-primary">
                                Replace Photo
                              </button>
                            </div>
                          </div> */}
                </div>
                {/* image section ends here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateMaterial;
