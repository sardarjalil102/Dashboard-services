import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import {
  fetchOneLot,
  updateOneLot,
} from "../../../../Redux/features/InspectionLotSlice";
import { getAllUsers } from "../../../../Redux/features/UsersSlice";

import FakeSelect from "../../../common/FakeSelect";
import Select from "react-select";
import { to_option } from "../../../../utils/handelStates";
import makeAnimated from "react-select/animated";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const ViewInspectionLot = () => {
  const { id } = useParams();
  const [editToggle, setEditToggle] = useState(true);
  const [userOptions, setUserOptions] = useState([]);
  const [userSho, setUserShow] = useState([]);

  const dispatch = useDispatch();

  const { materials } = useSelector((state) => state.MaterialMaster);

  const { plants } = useSelector((state) => state.Plant);

  const { users } = useSelector((state) => state.Users);

  const { lot } = useSelector((state) => state.InspectionLot);

  const [submissionData, setSubmissionData] = useState({});

  useEffect(() => {
    dispatch(fetchAllMaterials());
    dispatch(fetchPlants());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOneLot(id));

    return () => {};
  }, [dispatch, id]);

  useLayoutEffect(() => {
    const userOpt = to_option(users, ["id", "username"], ["value", "label"]);

    const userShow = to_option(
      lot.assignUsers,
      ["id", "username"],
      ["value", "label"]
    );

    setUserShow(userShow);
    setUserOptions(userOpt);

    setSubmissionData(lot);

    return () => {
      setSubmissionData({});
    };
  }, [lot, users]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOneLot({ id: id, finalData: submissionData }));
    setEditToggle(true);
  };

  const handleUserChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      tempSelect.push(selec.value);
    });
    setSubmissionData({
      ...submissionData,
      assignUsers: tempSelect,
    });
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Inspection Lot"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/inspection-lot", title: "Inspection Lot" },
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
                    onSubmit={(e) => handelSubmit(e)}
                  >
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="material"
                      >
                        MATERIAL:
                      </label>
                      <div className="col-sm-10">
                        <select
                          disabled={editToggle}
                          id="materialId"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              materialId: e.target.value,
                            })
                          }
                          value={submissionData.materialId}
                        >
                          <option> Select</option>
                          {materials.map((mat) => (
                            <option
                              value={mat.id}
                              selected={
                                submissionData?.material?.id === mat.id
                                  ? true
                                  : false
                              }
                            >
                              {mat.materialText}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="plantId"
                      >
                        PLANT:
                      </label>
                      <div className="col-sm-10">
                        <select
                          disabled={editToggle}
                          id="plantId"
                          className="form-select"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              plantId: e.target.value,
                            })
                          }
                          value={submissionData.plantId}
                        >
                          <option> Select</option>
                          {plants?.map((plant) => (
                            <option
                              value={plant.id}
                              selected={
                                submissionData?.plant?.id === plant?.id
                                  ? true
                                  : false
                              }
                            >
                              {plant.plantName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="event"
                      >
                        EVENT:
                      </label>
                      <div className="col-sm-10">
                        <select
                          disabled={editToggle}
                          id="event"
                          className="form-select"
                          aria-label="Default select example"
                          placeholder="Event"
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
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-2"
                        htmlFor="userIds"
                      >
                        Assigned Role:
                      </label>
                      <div className="col-sm-10">
                        <select
                          disabled={editToggle}
                          id="userIds"
                          name="userIds"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              userIds: e.target.value,
                            })
                          }
                        >
                          <option value="">Select</option>
                          {users.map((user) => (
                            <option
                              value={user.id}
                              selected={
                                submissionData?.userIds == user.id
                                  ? true
                                  : false
                              }
                            >
                              {user.username}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="refrence-no"
                      >
                        Refrence NO:
                      </label>
                      <div className="col-sm-10">
                        <input
                          readOnly={editToggle}
                          type="text"
                          className="form-control"
                          id="refrence-no"
                          placeholder="Refrence Number"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              referenceNo: e.target.value,
                            })
                          }
                          value={submissionData.referenceNo}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="lot-quantity"
                      >
                        Lot QUANTITY:
                      </label>
                      <div className="col-sm-10">
                        <input
                          readOnly={editToggle}
                          type="number"
                          className="form-control"
                          id="lot-quantity"
                          placeholder="Lot Quantity"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              lotQty: e.target.value,
                            })
                          }
                          value={submissionData.lotQty}
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
                {/* <div className="col-md-6"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInspectionLot;
