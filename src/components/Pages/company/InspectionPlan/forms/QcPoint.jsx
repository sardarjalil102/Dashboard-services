import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ToggleButton from "react-toggle-button";

import {
  addcheckCondition,
  addQCPoint,
  getAllChackConditions,
} from "../../../../../Redux/features/QCPointSlice";
import Spinner from "../../../../common/Spinner";
import ImageDropZone from "../components/ImageDropZone";

import TableLoading from "../../../../common/SkeltonLoading/TableLoading";

import CheckConditionModal from "../components/CheckConditionModal";
import ListConditions from "../components/ListConditions";
import UserListModal from "../components/UserListModal";
import { getAllUsers } from "../../../../../Redux/features/UsersSlice";
import {
  addQCPointToTree,
  updateTree,
} from "../../../../../Redux/features/InspectionPlanSlice";
import FormSkeletonLoading from "../../../../common/SkeltonLoading/FormSkeletonLoading";
import { fetchConfigs } from "../../../../../Redux/features/MaterialNoConfigSlice";
import { fetchAllMeasurement } from "../../../../../Redux/features/MeasurementUnitSlice";
import ImageUpload from "../../../../common/ImageUpload";

const QcPoint = ({ qcPointData }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const initCheckCondtion = {
    qcPointId: null,
    type: "",
    operator: "",
    value: 10,
    frequency: "",
    noOfIteration: 523,
    action: "emailType",
    emails: "",
  };

  const [QCPointData, setQCPointData] = useState(qcPointData);
  const [checkCondition, setCheckCondition] = useState(initCheckCondtion);
  const [conditionFormToggle, setConditionFormToggle] = useState(false);
  const [userOpt, setUserOpt] = useState([]);
  const [stepImage, setStepImage] = useState();

  const handleOpenConditionForm = () => setConditionFormToggle(true);
  const handleCloseConditionForm = () => setConditionFormToggle(false);

  useEffect(() => {
    dispatch(getAllChackConditions(qcPointData.id));
    // console.log("sending request :");
    dispatch(getAllUsers());
    dispatch(fetchConfigs());
    dispatch(fetchAllMeasurement());

    return () => {};
  }, [dispatch, qcPointData.id]);

  const {
    QCPoint: { qcPoint, status },
    Users: { users },
    Step: { step },
    MaterialNoConfig: { configs },
    Measurement: { allMeasurements },
  } = useSelector((state) => state);

  useLayoutEffect(() => {
    if (step?.goodImage?.url !== stepImage) {
      setStepImage(step?.goodImage?.url);
    } else {
      setStepImage(null);
    }

    setQCPointData(qcPoint);
    let tempOpt = users.map((u) => {
      return { value: u.email, label: u.email };
    });
    setUserOpt(tempOpt);
    return () => {
      setQCPointData({});
    };
  }, [qcPoint, users]);

  const handleConditionSubmit = (e) => {
    e.preventDefault();
    // console.log("submitting conditional  data ");
    dispatch(
      addcheckCondition({ ...checkCondition, qcPointId: qcPointData.id })
    );
    setCheckCondition(initCheckCondtion);
    handleCloseConditionForm();
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // const { id } = location.state;
    // console.log(step.id);
    const finalData = {
      ...QCPointData,
      stepId: step.id,
      x: "37.3083547",
      y: "66.64307321",
    };
    // // // console.log(id);
    // console.log(finalData);
    dispatch(addQCPoint(finalData));
    // dispatch(
    //   updateTree({stepId:step.id, data:{id:QCPointData.order, label:QCPointData?.title}})
    //   // addQCPointToTree({ id: finalData.stepId, label: finalData.title })
    // );
  };

  if (status === "loading") {
    return <FormSkeletonLoading />;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 order-md-1 order-2 pe-0">
          <form
            className="browser-default-validation w-100 order-1"
            onSubmit={handelSubmit}
          >
            {/* title */}
            <div className="row mb-3">
              <label
                className="col-sm-3 col-form-label"
                htmlFor="qcpoint-title"
              >
                QC POINT TITLE:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={QCPointData?.title}
                  onChange={(e) =>
                    setQCPointData({
                      ...QCPointData,
                      title: e.target.value,
                    })
                  }
                  className="form-control"
                  id="qcpoint-title"
                  placeholder="QC Point Title"
                />
              </div>
            </div>

            {/* description */}
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="qcpoint-dec">
                QC POINT DESCRIPTION:
              </label>
              <div className="col-sm-9">
                <textarea
                  type="text"
                  value={QCPointData?.description}
                  onChange={(e) =>
                    setQCPointData({
                      ...QCPointData,
                      description: e.target.value,
                    })
                  }
                  className="form-control"
                  id="qcpoint-dec"
                  placeholder="QC Point Description"
                />
              </div>
            </div>

            {/*    isMeasurement:*/}
            <div className="mb-3 row align-items-center">
              <label className="col-form-label col-sm-3" htmlFor="">
                isMeasurement:
              </label>
              <div className="col-sm-9">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={QCPointData?.isMeasurement}
                  onChange={() =>
                    setQCPointData({
                      ...QCPointData,
                      isMeasurement: !QCPointData.isMeasurement,
                    })
                  }
                />
              </div>
            </div>
            {QCPointData?.isMeasurement ? (
              <>
                {/* // passMinRange */}
                <div className="row mb-3">
                  <label
                    className="col-sm-3 col-form-label"
                    htmlFor="passMinRange"
                  >
                    Min. Range:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      value={QCPointData?.passMinRange}
                      onChange={(e) =>
                        setQCPointData({
                          ...QCPointData,
                          passMinRange: e.target.value,
                        })
                      }
                      className="form-control"
                      id="passMinRange"
                      placeholder="minimun Range"
                    />
                  </div>
                </div>
                {/* // passMinRange */}
                <div className="row mb-3">
                  <label
                    className="col-sm-3 col-form-label"
                    htmlFor="passMaxRange"
                  >
                    Max. Range:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      value={QCPointData?.passMaxRange}
                      onChange={(e) =>
                        setQCPointData({
                          ...QCPointData,
                          passMaxRange: e.target.value,
                        })
                      }
                      className="form-control"
                      id="passMaxRange"
                      placeholder="Maximum Range"
                    />
                  </div>
                </div>

                {/* // material No config */}
                <div className="mb-3 row">
                  <label
                    className="col-form-label col-sm-3"
                    htmlFor="measurementUnitId"
                  >
                    Measurement Unit :
                  </label>
                  <div className="col-sm-9">
                    <select
                      id="measurementUnitId"
                      className="form-select"
                      aria-label="measurementUnitId"
                      onChange={(e) =>
                        setQCPointData({
                          ...QCPointData,
                          measurementUnitId: e.target.value,
                        })
                      }
                    >
                      <option>Select</option>
                      {allMeasurements?.map((m) => (
                        <option value={m.id}>{m.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            <div className="row mb-3">
              <label
                className="col-sm-3 col-form-label"
                htmlFor="qcpoint-order"
              >
                QC POINT ORDER:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={QCPointData?.order}
                  onChange={(e) =>
                    setQCPointData({
                      ...QCPointData,
                      order: e.target.value,
                    })
                  }
                  className="form-control"
                  id="qcpoint-order"
                  placeholder="QC Point Order"
                />
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

        <div className="col-md-6 order-md-2 order-1 mb-3">
          <img className="w-100" src={stepImage} alt="step foto" />
        </div>
      </div>

      <div className="container-fluid px-0">
        <div className="d-flex justify-content-between my-5">
          <h4 className="my-auto">Conditional Check</h4>
          <div>
            <button
              onClick={handleOpenConditionForm}
              type="button"
              className="btn btn-sm btn-primary py-2"
            >
              Build conditions
            </button>
          </div>
        </div>

        {/* list conditions */}
        <ListConditions />

        {/* form modal */}
        <CheckConditionModal
          option={userOpt}
          checkCondition={checkCondition}
          setCheckCondition={setCheckCondition}
          handleConditionSubmit={handleConditionSubmit}
          open={conditionFormToggle}
          handleClose={handleCloseConditionForm}
        />
      </div>
    </>
  );

  // const initstate = {
  //   stepId: null,
  //   title: null,
  //   x: "37.3083547",
  //   y: "66.64307321",
  //   description: null,
  //   order: null,
  //   isMeasurement: "0",
  //   passMinRange: "",
  //   passMaxRange: "",
  //   measurementUnitId: "",
  // };
};

export default QcPoint;
