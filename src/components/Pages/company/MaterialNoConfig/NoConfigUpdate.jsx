import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneConfig,
  updateOneConfig,
} from "../../../../Redux/features/MaterialNoConfigSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const NoConfigUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(true);

  const [submissionData, setSubmissionData] = useState({});

  const { config } = useSelector((state) => state.MaterialNoConfig);

  useEffect(() => {
    dispatch(fetchOneConfig(id));
    return () => {};
  }, [dispatch, id]);

  useLayoutEffect(() => {
    setSubmissionData(config);

    return () => {
      setSubmissionData({});
    };
  }, [config]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);
    dispatch(updateOneConfig({ id: id, finalData: submissionData }));
    setEditToggle(true);
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Material No Config"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/material-no-config", title: "Material No Config" },
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
                  <label className="col-sm-2 col-form-label" htmlFor="prefix">
                    PREFIX:*
                  </label>
                  <div className="col-sm-10">
                    <select
                      disabled={true}
                      // onChange={(e) =>
                      //   setSubmissionData({
                      //     ...submissionData,
                      //     prefix: e.target.value,
                      //   })
                      // }
                      value={submissionData.prefix}
                      className="form-control"
                      id="prefix"
                      placeholder="Prefix"
                      // className="form-select form-select-sm"
                    >
                      <option value="">Select</option>
                      <option value="R">R</option>
                      <option value="S">S</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                </div>
                {/* <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="length">
                    LENGHT:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      type="text"
                      className="form-control"
                      id="length"
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          length: e.target.value,
                        })
                      }
                      value={submissionData.length}
                      placeholder="Length"
                    />
                  </div>
                </div> */}
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="startFrom"
                  >
                    Start Form:*
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      type="text"
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          startFrom: e.target.value,
                        })
                      }
                      value={submissionData.startFrom}
                      className="form-control"
                      id="startFrom"
                      placeholder="Start From"
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
                {/* <button onClick={() => reset()}>Cancel</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoConfigUpdate;
