import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from 'react-router-dom';
// import { fetchOneInspectoinPlanData } from '../../../../../Redux/features/InspectionPlanSlice';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { setgCurrentForm } from "../../../../../Redux/features/AppUtilsSlice";
import { addStep } from "../../../../../Redux/features/StepSlice";
import {
  addStepToTree,
  updateActionType,
} from "../../../../../Redux/features/InspectionPlanSlice";
import Spinner from "../../../../common/Spinner";
import ImageDropZone from "../components/ImageDropZone";
import FormSkeletonLoading from "../../../../common/SkeltonLoading/FormSkeletonLoading";
import ImageUpload from "../../../../common/ImageUpload";
import { key } from "../../../../../config";

const Step = ({ planId, currentStepForm }) => {
  const [option, setOption] = useState([]);
  const [stepFormData, setStepFormData] = useState({});
  const dispatch = useDispatch();

  const {
    Step: { step, status },
    InspectionPlan: { plan, actionType },
    AppUtils,
  } = useSelector((state) => state);

  useEffect(() => {
    const temOptArr = plan?.workStations?.map((work) => {
      return { value: work?.id, label: work?.name };
    });
    setOption(temOptArr);
    // // console.log("seting up step data ...");
    if (actionType !== "a") {
      setStepFormData(step);
    }
    if (actionType === "a") {
    setStepFormData({});
    }

    return () => {
      // setStepFormData({});
      // // console.log("cleaning step data ...");
    };
  }, [plan?.workStations, step]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...stepFormData,
      inspectionPlanId: planId,
      goodImageUrl:
        "https://i.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04",
      goodThumbnailUrl:
        "https://i.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04",
      badImageUrl:
        "https://i.picsum.photos/id/865/200/300.jpg?hmac=jCzg6busodS2mP_yK-Vt64bNfl6Sk3TUT0cSFMukwkU",
      badThumbnailUrl:
        "https://i.picsum.photos/id/865/200/300.jpg?hmac=jCzg6busodS2mP_yK-Vt64bNfl6Sk3TUT0cSFMukwkU",
      goodImageId: AppUtils?.fileData?.id,
      badImageId: AppUtils?.fileData?.id,
    };
    dispatch(addStep(finalData));
  };

  const handleChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      // // // console.log(selec.value);
      tempSelect.push(selec.value);
    });
    setStepFormData({
      ...stepFormData,
      workstationIds: tempSelect,
    });

    // // // console.log(`Option selected:`, tempSelect);
  };

  if (status === "loading") {
    return <FormSkeletonLoading />;
  }
  return (
    <div className="row">
      <div className="col-md-6 order-md-1 order-2 pe-0">
        <form className="browser-default-validation" onSubmit={handelSubmit}>
          {/* title */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label" htmlFor="title">
              TITLE:
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                value={stepFormData?.title}
                onChange={(e) =>
                  setStepFormData({
                    ...stepFormData,
                    title: e.target.value,
                  })
                }
                className="form-control"
                id="title"
                placeholder="Title"
              />
            </div>
          </div>

          {/* order NO */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label" htmlFor="orderNo">
              Order No.:
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                value={stepFormData?.orderNo}
                onChange={(e) =>
                  setStepFormData({
                    ...stepFormData,
                    orderNo: e.target.value,
                  })
                }
                className="form-control"
                id="orderNo"
                placeholder="Order Number"
              />
            </div>
          </div>

          {/* description */}
          <div className="row mb-3">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="description-text"
            >
              DESCRIPTION:
            </label>
            <div className="col-sm-9">
              <textarea
                type="text"
                value={stepFormData?.description}
                onChange={(e) =>
                  setStepFormData({
                    ...stepFormData,
                    description: e.target.value,
                  })
                }
                className="form-control"
                id="description-text"
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
                defaultValue={stepFormData?.workstationIds}
                onChange={handleChange}
                components={makeAnimated()}
                isMulti
                options={option}
              />
            </div>
          </div>

          {/* save button */}
          <>
            {AppUtils?.status === "loading" ? (
              <Spinner />
            ) : (
              <div className="row">
                <div className="col-12 align-self-center text-center">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            )}
          </>
        </form>
      </div>
      <div className="col-md-6 order-md-2 order-1 mb-3">
        <ImageUpload image={stepFormData?.goodImage?.url} />
      </div>
    </div>
  );
};

export default Step;
