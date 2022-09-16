import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  addRejectedReasonsData,
  updateOneRejectedReason,
  fetchAllRejectedReasons,
  fetchOneRejectedReasonData,
} from "../../../../Redux/features/RejectedReasonsSlice";
import { handelState } from "../../../../utils/handelStates";
import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const ViewRejectionReason = () => {
  const navigate = useNavigate();
  const [editToggle, setEditToggle] = useState(true);
  const [link, setLink] = useState([]);

  const {
    state: { child, parentId },
  } = useLocation();
  const { Id } = useParams();

  const [rejectionData, setRejectionData] = useState({ code: "", reason: "" });
  const dispatch = useDispatch();
  const {
    RejectedReasons: { oneReason, allReasons, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOneRejectedReasonData(Id));
    return () => {};
  }, [Id, dispatch]);

  useLayoutEffect(() => {
    setRejectionData(oneReason);
    if (child) {
      setLink([
        { path: "/", title: "" },
        { path: "/rejection-reasons", title: "Rejection Reason" },
        {
          path: `/rejection-reasons/child/${parentId}`,
          title: " Child ",
        },
        { path: "", title: "View", activeLink: true },
      ]);
    } else {
      setLink([
        { path: "/", title: "" },
        { path: "/rejection-reasons", title: "Rejection Reason" },
        { path: "", title: "View", activeLink: true },
      ]);
    }
    return () => {};
  }, [child, oneReason, parentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOneRejectedReason({ id: Id, finalData: rejectionData }));
  };
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum name="Rejection Reason" subName="" links={link} />
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
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-2"
                    htmlFor="rejectionCode"
                  >
                    Rejection Code: <span className="text-danger"> *</span>
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      type="number"
                      className={`form-control`}
                      defaultValue={rejectionData.code}
                      onChange={(e) =>
                        handelState(
                          rejectionData,
                          setRejectionData,
                          "code",
                          e.target.value
                        )
                      }
                      id="rejectionCode"
                      placeholder="Rejection Code"
                      required="must fill this field"
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.rejectionCode?.message} */}
                  </div>
                </div>

                <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-2"
                    htmlFor="rejection-text"
                  >
                    Rejection Reason:<span className="text-danger"> *</span>
                  </label>
                  <div className="col-sm-10">
                    <input
                      readOnly={editToggle}
                      required="Must fill Rejection Text"
                      id="rejection-text"
                      type="text"
                      className={`form-control`}
                      value={rejectionData.reason}
                      onChange={(e) =>
                        handelState(
                          rejectionData,
                          setRejectionData,
                          "reason",
                          e.target.value
                        )
                      }
                      placeholder="Rejection  Reason"
                    />
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.rejectionText?.message} */}
                  </div>
                </div>

                {/* parent Id  */}
                <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-2"
                    htmlFor="parent-id"
                  >
                    Parent Id:
                  </label>
                  <div className="col-sm-10">
                    <select
                      id="parent-id"
                      className="form-select"
                      aria-label="Default select example"
                      disabled={editToggle}
                      onChange={(e) => {
                        handelState(
                          rejectionData,
                          setRejectionData,
                          "parentId",
                          e.target.value
                        );
                      }}
                      // value={rejectionData.parentId}
                    >
                      <option value="">Select</option>
                      {allReasons?.map(({ reason, id }) => (
                        <option key={id} value={id}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="invalid-feedback">
                    {/* {errors.rejectionText?.message} */}
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
            {/* <div className="col-md-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRejectionReason;
