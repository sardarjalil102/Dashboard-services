import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneUserData,
  updateOneUserData,
} from "../../../../Redux/features/UsersSlice";
import { getAllRoles } from "../../../../Redux/features/RoleSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const UpdateUser = () => {
  const { id } = useParams();
  const [editToggle, setEditToggle] = useState(true);

  const [submissionData, setSubmissionData] = useState({});

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.Users);

  const { Roles } = useSelector((state) => state.userRoles);

  useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOneUserData(id));

    return () => { };
  }, [dispatch, id]);

  useLayoutEffect(() => {
    setSubmissionData(user);

    return () => {
      setSubmissionData({});
    };
  }, [user]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOneUserData({ id: id, finalData: submissionData }));
    setEditToggle(true);
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum name='User' subName=''
          links={[
            { path: "/", title: "" },
            { path: "/user", title: "Users" },
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
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <form
                onSubmit={(e) => handelSubmit(e)}
                className="browser-default-validation"
              >
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="username">
                    USERNAME:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      type="text"
                      id="username"
                      className="form-control"
                      value={submissionData.username}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          username: e.target.value,
                        })
                      }
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="firstname"
                  >
                    FIRST NAME:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      className="form-control"
                      id="firstname"
                      placeholder="First Name"
                      value={submissionData.firstName}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="lastname">
                    LAST NAME:
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      className="form-control"
                      type="text"
                      value={submissionData.lastName}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          lastName: e.target.value,
                        })
                      }
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="phone-number"
                  >
                    PHONE NUMBER:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      className="form-control"
                      type="text"
                      value={submissionData.phoneNo}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          phoneNo: e.target.value,
                        })
                      }
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="currency-code"
                  >
                    CURRENCY CODE:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      className="form-control"
                      type="text"
                      value={submissionData.currencyCode}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          currencyCode: e.target.value,
                        })
                      }
                      placeholder="Currency Code"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="email">
                    EMAIL:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      className="form-control"
                      type="email"
                      value={submissionData.email}
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          email: e.target.value,
                        })
                      }
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="password">
                    PASSWORD:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      readOnly={true}
                      type="password"
                      // value={submissionData.password}
                      // onChange={(e) =>
                      //   setSubmissionData({
                      //     ...submissionData,
                      //     password: e.target.value,
                      //   })
                      // }
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="role">
                    ROLE:*
                  </label>
                  <div className="col-sm-10">
                    <select
                      disabled={editToggle}
                      id="role"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          role: e.target.value,
                        })
                      }
                      value={submissionData.role}
                    >
                      {Roles?.map((roles) => (
                        <option key={roles.id}>{roles.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-10 offset-2">
                    <div className="form-check form-check-inline">
                      <input
                        disabled={editToggle}
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        checked={submissionData.mmFlag}
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            mmFlag: e.target.checked,
                          })
                        }
                      />
                      <label
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                        }}
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        PROCUREMENT (MM)
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        disabled={editToggle}
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        checked={submissionData.ppFlag}
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            ppFlag: e.target.checked,
                          })
                        }
                      />
                      <label
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                        }}
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        PRODUCTION (PP)
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        disabled={editToggle}
                        className="form-check-input"
                        checked={submissionData.sdFlag}
                        type="checkbox"
                        id="inlineCheckbox3"
                        onChange={(e) =>
                          setSubmissionData({
                            ...submissionData,
                            sdFlag: e.target.checked,
                          })
                        }
                      />
                      <label
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                        }}
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                      >
                        SALES (SD)
                      </label>
                    </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
