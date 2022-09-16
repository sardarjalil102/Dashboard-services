import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ToggleButton from "react-toggle-button";

import { handelState } from "../../../../utils/handelStates";
import {
  fetchOneGroupData,
  updateOneGroup,
} from "../../../../Redux/features/GroupSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateGroups = () => {
  const navigate = useNavigate();

  const [editToggle, setEditToggle] = useState(true);

  const { Id } = useParams();
  const [submitData, setSubmitData] = useState({ name: "", isActive: 0 });
  const dispatch = useDispatch();

  const {
    Groups: { oneGroup, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOneGroupData(Id));
    return () => {};
  }, [Id, dispatch]);

  useLayoutEffect(() => {
    setSubmitData(oneGroup);
    return () => {};
  }, [oneGroup]);

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(updateOneGroup({ id: Id, finalData: submitData }));
    if (status === "succeeded") {
      navigate("/groups");
    }
  };
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Groups"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/groups", title: "Groups" },
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
                        htmlFor="company"
                      >
                        Group Name:
                      </label>
                      <div className="col-sm-10">
                        <input
                          readOnly={editToggle}
                          defaultValue={submitData.name}
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
                          id="company"
                          placeholder="Group Name"
                        />
                      </div>
                    </div>

                    {/* is active*/}
                    <div className="mb-3 row align-items-center">
                      <label className="col-form-label col-sm-3" htmlFor="">
                        Is Active:
                      </label>
                      <div className="col-sm-9">
                        <input
                          disabled={editToggle}
                          type="checkbox"
                          className="form-check-input"
                          checked={submitData.isActive}
                          onChange={(e) =>
                            handelState(
                              submitData,
                              setSubmitData,
                              "isActive",
                              !submitData.isActive
                            )
                          }
                        />
                      </div>
                    </div>

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

export default CreateGroups;
