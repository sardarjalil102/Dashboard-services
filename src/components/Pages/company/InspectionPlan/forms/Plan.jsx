import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../common/Spinner";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ImageDropZone from "../components/ImageDropZone";
import FakeSelect from "../../../../common/FakeSelect";
import FormSkeletonLoading from "../../../../common/SkeltonLoading/FormSkeletonLoading";
import ImageUpload from "../../../../common/ImageUpload";

const Plan = ({ planData }) => {
  const [submissionData, setSubmissionData] = useState({});
  const [seletedMaterial, setSeletedMaterial] = useState({
    id: null,
    plant: [],
  });
  const {
    InspectionPlan: { error, status },
    MaterialMaster: { materials },
  } = useSelector((state) => state);

  useEffect(() => {
    setSubmissionData(planData);
    setSeletedMaterial({
      id: planData?.material?.id,
      plant: planData?.material?.plants,
    });

    return () => {
      setSubmissionData({});
    };
  }, [planData, planData?.material?.id, planData?.material?.plants]);

  const HandelMateriaSelect = (e) => {
    // // console.log(e);
    const searchObject = materials.find((m) => m.id == e);
    // // // console.log(searchObject.plants);
    setSeletedMaterial({ id: searchObject.id, plant: searchObject.plants });
  };

  if (status === "loading") {
    return <FormSkeletonLoading />;
  }
  return (
    <div className="row">
      {error && <p>{error}</p>}
      <div className="col-md-6 order-md-1 order-2 pe-0">
      <form
        className="browser-default-validation mx-1"
        // onSubmit={(e) => handelSubmit(e)}
      >
        {/* {pathname.includes("/inspection-plan/view/") ? "true" : "not forund"} */}

        {/* material  */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="material-master">
            MATERIAL MASTER:
          </label>
          <div className="col-sm-9">
            <select
              disabled={true}
              id="material-master"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                // // // console.log(e.target.value);
                HandelMateriaSelect(e.target.value);
                setSubmissionData({
                  ...submissionData,
                  materialId: e.target.value,
                });
              }}
              // defaultValue={submissionData?.material?.id}
            >
              <option >Select</option>
              {materials?.map(({ materialNo, materialText, id, plant }) => (
                <option
                  key={id}
                  selected={planData?.material?.id === id ? true : false}
                  value={id}
                >
                  {`${materialNo} - ${materialText}`}
                </option>
              ))}
              {/* {materials?.map(({ materialNo, materialText, id, plant }) => (
                <option
                  key={id}
                  value={id}
                >{`${materialNo} - ${materialText}`}</option>
              ))} */}
            </select>
          </div>
        </div>

        {/* plants */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="plants">
            PLANTS:
          </label>
          <div className="col-sm-9">
            <select
              disabled={true}
              id="plants"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) =>
                setSubmissionData({
                  ...submissionData,
                  plantId: e.target.value,
                })
              }
              value={submissionData?.plant?.id}
            >
              <option selected>Select</option>
              {seletedMaterial?.plant?.map(({ plantName, id }) => (
                <option key={id} value={id}>
                  {plantName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* event */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="event">
            EVENT:
          </label>
          <div className="col-sm-9">
            <select
              disabled={true}
              id="event"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) =>
                setSubmissionData({
                  ...submissionData,
                  eventFlag: e.target.value,
                })
              }
              value={submissionData?.eventFlag}
            >
              <option selected>Select</option>
              <option value="MM">production - MM</option>
              <option value="pp">Procurement - PP</option>
              <option value="SD">Sales - SD</option>
            </select>
          </div>
        </div>

        {/* lot min rnage */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="lotMinRange">
            Lot Min. Range:
          </label>

          <div className="col-sm-9">
            <input
              readOnly
              onChange={(e) =>
                setSubmissionData({
                  ...submissionData,
                  lotMinRange: e.target.value,
                })
              }
              value={submissionData?.lotMinRange}
              type="number"
              className="form-control"
              id="lotMinRange"
              placeholder="Lot Min. Range"
            />
          </div>
        </div>

        {/* lot max range */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="lotMaxRange">
            Lot Max. Range:
          </label>
          <div className="col-sm-9">
            <input
              readOnly
              onChange={(e) =>
                setSubmissionData({
                  ...submissionData,
                  lotMaxRange: e.target.value,
                })
              }
              value={submissionData?.lotMaxRange}
              type="number"
              className="form-control"
              id="lotMaxRange"
              placeholder="Lot Max. Range"
            />
          </div>
        </div>

        {/* title */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="title">
            TITLE:
          </label>
          <div className="col-sm-9">
            <input
              readOnly
              type="text"
              onChange={(e) =>
                setSubmissionData({
                  ...submissionData,
                  title: e.target.value,
                })
              }
              value={submissionData?.title}
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
        </div>

        {/* description */}
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3" htmlFor="description">
            DESCRIPTION:
          </label>
          <div className="col-sm-9">
            <textarea
              readOnly
              className="form-control"
              id="description"
              onChange={(e) =>
                setSubmissionData({
                  ...submissionData,
                  description: e.target.value,
                })
              }
              value={submissionData?.description}
              rows={3}
              placeholder="Description"
            />
          </div>
        </div>

        {/* assign work id  */}
        <div className="mb-3 row">
          <label
            className="col-form-label col-sm-3"
            htmlFor="assigned-workstation"
          >
            ASSIGNED WORKSTATION:
          </label>
          <div className="my-auto col-sm-9">
            <FakeSelect defaultValue={submissionData?.workStations} />
            {/* <Select
              defaultValue={submissionData?.workStations}
              //   onChange={handleChange}
              components={makeAnimated()}
              isMulti
            /> */}
          </div>
        </div>

        {/* save button */} 
        {/* <div className="row">
          <div className="col-12 align-self-center text-center">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div> */}
      </form>
      </div>
      <div className="col-md-6 order-md-2 order-1 mb-3">
        <ImageUpload image={planData?.image?.url} edit={false}/>
      </div>
    </div>
  );
};

export default Plan;
