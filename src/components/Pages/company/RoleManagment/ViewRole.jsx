import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addRolesData,
  fetchOneRoleData,
  updateOneRole,
} from "../../../../Redux/features/RoleSlice";
import Select from "react-select";

import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const ViewRole = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialSate = {
    name: null,
    isCompany: null,
  };

  const [submissionData, setSubmissionData] = useState(initialSate);

  const { Role, error, status } = useSelector((state) => state.userRoles);
  const { permissions } = useSelector((state) => state.Auth);

  const [editToggle, setEditToggle] = useState(true);

  useEffect(() => {
    dispatch(fetchOneRoleData(roleId));

    return () => {};
  }, [dispatch, roleId]);

  useLayoutEffect(() => {
    setSubmissionData(Role);

    return () => {
      setSubmissionData(initialSate);
    };
  }, [Role]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOneRole({ id: roleId, finalData: submissionData }));
    // if (status === "succeeded") {
    //   navigate(-1);
    // }
  };
  return (
    <>
      <div className="row">
        {error && <span>{error}</span>}
        <MainBreadcrum
          name="Roles"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/roles", title: "Role Management" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
        {permissions.includes("Roles-Edit") ? (
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
                {status === "loading" ? (
                  <Spinner />
                ) : (
                  <form
                    className="browser-default-validation"
                    onSubmit={(e) => handelSubmit(e)}
                  >
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
                        htmlFor="isCompany"
                      >
                        isCompany
                      </label>
                      <div className="col-sm-9">
                        <input
                          className="form-check-input"
                          disabled={editToggle}
                          type="checkbox"
                          id="isCompany"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              isCompany: e.target.checked,
                            })
                          }
                          checked={submissionData.isCompany}
                        />
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

export default ViewRole;
