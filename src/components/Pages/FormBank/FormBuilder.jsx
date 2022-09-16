import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";
import { useDispatch, useSelector } from "react-redux";
import { addBuilder } from "../../../Redux/features/WorkFlowFormBuilderSlice";
import Spinner from "../../common/Spinner";
import { handelState } from "../../../utils/handelStates.js";
const FormBuilder = () => {
  const dispatch = useDispatch();

  const initState = {
    name: null,
    isWorkflowEnabled: null,
    instructions: null,
  };

  const {
    WorkBuilder: { status, error },
  } = useSelector((state) => state);

  const [submitData, setSubmitData] = useState(initState);
  
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addBuilder(submitData));
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2 style={{ fontFamily: "Rubik, sans-serif" }} className="py-3 mb-2">
            Work Flow <span className="fs-5">- Create</span>
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">WorkFlow</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Create
              </li>
            </ol>
          </nav>
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
                          htmlFor="company"
                        >
                          Name:
                        </label>
                        <div className="col-sm-10">
                          <input
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
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="company"
                        >
                          Instructions:
                        </label>
                        <div className="col-sm-10">
                          <input
                            onChange={(e) =>
                              handelState(
                                submitData,
                                setSubmitData,
                                "instructions",
                                e.target.value
                              )
                            }
                            type="text"
                            className="form-control"
                            id="company"
                            placeholder="Instructions"
                          />
                        </div>
                      </div>

                      {/* is active*/}
                      <div className="mb-3 row align-items-center">
                        <label className="col-form-label col-sm-2" htmlFor="">
                          Work Flow Enabled:
                        </label>
                        <div className="col-sm-10">
                          <select
                            id=" isWorkflowEnabled"
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) =>
                              handelState(
                                submitData,
                                setSubmitData,
                                "isWorkflowEnabled",
                                e.target.value
                              )
                            }
                            value={submitData.isWorkflowEnabled}
                          >
                            <option selected>Select</option>

                            <option value="1">yes</option>
                            <option value="0">No</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 align-self-center text-center">
                          <button type="submit" className="btn btn-primary">
                            Save{" "}
                          </button>
                        </div>
                      </div>
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

export default FormBuilder;
