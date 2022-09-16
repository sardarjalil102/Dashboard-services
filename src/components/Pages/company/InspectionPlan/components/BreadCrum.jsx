import React from "react";
import { useDispatch } from "react-redux";
import { QCPointCleaner } from "../../../../../Redux/features/QCPointSlice";
import { stepCleaner } from "../../../../../Redux/features/StepSlice";
// import { useNavigate } from "react-router-dom";

const BreadCrum = ({
  setCurrentForm,
  currentForm,
  setCurrentStepFrom,
  setCurrentQCPointFrom,
}) => {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  // const handelStepCreation = () => {
  //   navigate("/inspection-plan/step", {
  //     // state: { id: submissionData?.id },
  //   });
  //   // dispatch(updateTree({ id: submissionData?.id, treeData,  children : submissionData?.steps}));
  // };

  return (
    <div className="d-flex justify-content-between align-items-center w-100 px-2">
      <div>
        <h6
          style={{ fontFamily: "Rubik, sans-serif", cursor: "pointer" }}
          className="py-3 mb-2"
        >
          <span className="rounded-5 px-3"> Build</span>{" "}
              /{" "}
          {currentForm.includes("/inspection-plan/view/") ? (
            <span className="rounded-5 px-3" onClick={() => setCurrentForm("/inspection-plan/view/")}>
              {" "}
              Plan
            </span>
          ) : currentForm.includes("/inspection-plan/step") ? (
            <>
              <span className="rounded-5 px-3" onClick={() => setCurrentForm("/inspection-plan/view/")}>
                {" "}
                Plan
              </span>{" "}
              /{" "}
              <span className="rounded-5 px-3" onClick={() => setCurrentForm("/inspection-plan/step")}>
                {" "}
                Step
              </span>
            </>
          ) : currentForm.includes("/inspection-plan/qcpoint") ? (
            <>
              <span className="rounded-5 px-3" onClick={() => setCurrentForm("/inspection-plan/view/")}>
                {" "}
                Plan
              </span>{" "}
              /{" "}
              <span className="rounded-5 px-3" onClick={() => setCurrentForm("/inspection-plan/step")}>
                Step
              </span>{" "}
              /{" "}
              <span className="rounded-5 px-3" onClick={() => setCurrentForm("/inspection-plan/qcpoint")}>
                QcPoint
              </span>
            </>
          ) : (
            ""
          )}
        </h6>
        {/* <h3 style={{ fontFamily: "Rubik, sans-serif" }} className="py-2">
          BUILD DETAILS
        </h3> */}
      </div>
      <div
        style={{ height: "120px", justifyContent: "end" }}
        className="align-self-center text-end"
      >
        {currentForm.includes("/inspection-plan/view/") ? (
          <button
            style={{ marginTop: "60px" }}
            type="button"
            className="btn btn-primary"
            onClick={() => {
              dispatch(stepCleaner())
              setCurrentForm("/inspection-plan/step");
              setCurrentStepFrom({});
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
            Add Step
          </button>
        ) : currentForm.includes("/inspection-plan/step") ? (
          <div
            style={{ height: "120px", justifyContent: "end" }}
            className="align-self-center text-end"
          >
            <button
              style={{ marginTop: "60px" }}
              type="button"
              className="btn btn-primary"
              onClick={() => {
                dispatch(QCPointCleaner())
                setCurrentForm("/inspection-plan/qcpoint");
                setCurrentQCPointFrom({});
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
              Add QC Points
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BreadCrum;
