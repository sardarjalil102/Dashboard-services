import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInspectionPlans } from "../../../../../../Redux/features/InspectionPlanSlice";
import { handelState } from "../../../../../../utils/handelStates";
import { Row, Col } from "react-bootstrap";
import {
  addHistogramQualitativedata,
  getInspectors,
  getQcPoints,
  getSteps,
} from "../../../../../../Redux/features/GraphsSlice";
import { SHOW_INFO } from "../../../../../../utils/toastMessages";

const Filters = () => {
  const initState = {
    startDate: "",
    endDate: "",
    inspectorId: "",
    stepId: "",
    inspectionPlanId: "",
    qcPointId: "",
  };
  const [graphData, setGraphData] = useState(initState);
  const dispatch = useDispatch();
  const formRef = useRef();

  const {
    InspectionPlan: { plans },
    Graphs: { steps, QcPoints, inspectors },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchInspectionPlans());
    dispatch(getInspectors());
    return () => {};
  }, [dispatch]);

  const fetchFilterSteps = (id) => {
    // console.log("steps ID :", id);
    dispatch(getSteps(id));
  };

  const fetchFilterQCPoints = (id, qty) => {
    // console.log("QC Point ID :", id);
    dispatch(getQcPoints({ id, qty: qty }));
  };

  useEffect(() => {
    fetchFilterQCPoints(graphData.stepId, 1);
    return () => {};
  }, [graphData.stepId]);

  useEffect(() => {
    fetchFilterSteps(graphData.inspectionPlanId);
    return () => {};
  }, [graphData.inspectionPlanId]);

  const handleSubmitState = (e) =>
    handelState(graphData, setGraphData, e.target.name, e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    for (const [key, value] of Object.entries(initState)) {
      if (
        formRef.current[key] === undefined ||
        formRef.current[key].value === null ||
        formRef.current[key].value === ""
      ) {
        error = true;
        SHOW_INFO(true, `${key} is not filled`);
      }
    }
    if (!error) {
      dispatch(addHistogramQualitativedata(graphData));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="row bg-light py-3 m-auto ms-n1 gx-2 px-2"
    >
      <div className="col-md-3">
        <div className="mb-3 row">
          <label
            className="col-form-label col-sm-3 my-auto"
            htmlFor="material-master"
          >
            Time Period:
          </label>
          <iv className="col-sm-9">
            <select
              id="material-master"
              className="form-select"
              aria-label="Default select example"
              // onChange={handleSubmitState}
            >
              <option selected>Last 1 month</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 days</option>
            </select>
          </iv>
        </div>
      </div>
      <div className="col-md-3">
        <div className="mb-3 row">
          <label
            className="col-form-label col-sm-3 my-auto"
            htmlFor="lotMinRange"
          >
            From:
          </label>
          <div className="col-sm-9">
            <input
              required
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              onChange={handleSubmitState}
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="mb-3 row">
          <label className="col-form-label col-sm-3 my-auto" htmlFor="endDate">
            To:
          </label>
          <div className="col-sm-9">
            <input
              required
              className="form-control"
              type="date"
              id="endDate"
              name="endDate"
              onChange={handleSubmitState}
            />
          </div>
        </div>
      </div>
      <Row>
        {/* insoectors */}
        <Col md={5}>
          <div className="mb-3 row">
            <label
              className="col-form-label col-sm-3 my-auto"
              htmlFor="inspectorId"
            >
              inspectors:
            </label>
            <div className="col-sm-9">
              <select
                required
                id="inspectorId"
                name="inspectorId"
                onChange={handleSubmitState}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                {inspectors?.map((insU) => (
                  <option value={insU?.id}>{insU?.username}</option>
                ))}
              </select>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* inspection plan */}
        <Col md={4}>
          <div className="mb-3 row">
            <label
              className="col-form-label col-sm-3 my-auto"
              htmlFor="inspectionPlan"
            >
              Inspection Plan:
            </label>
            <div className="col-sm-9">
              <select
                id="inspectionPlanId"
                name="inspectionPlanId"
                onChange={handleSubmitState}
                className="form-select"
                aria-label="inspection plan "
              >
                <option value="">Select</option>
                {plans?.map((insp) => (
                  <option value={insp?.id}>{insp?.title}</option>
                ))}
              </select>
            </div>
          </div>
        </Col>
        {/* steps */}
        <Col md={4}>
          {steps?.length !== 0 ? (
            <div className="mb-3 row">
              <label
                className="col-form-label col-sm-3 my-auto"
                htmlFor="inspectionPlan"
              >
                Steps:
              </label>
              <div className="col-sm-9">
                <select
                  required
                  id="stepId"
                  name="stepId"
                  onChange={handleSubmitState}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Select</option>
                  {steps?.map((step) => (
                    <option value={step?.id}>{step?.title}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
          {/* qc point */}
        </Col>
        <Col md={4}>
          {QcPoints.length !== 0 && graphData.stepId !== "" ? (
            <div className="mb-3 row">
              <label
                className="col-form-label col-sm-3 my-auto"
                htmlFor="qcPointId"
              >
                QC Point:
              </label>
              <div className="col-sm-9">
                <select
                  id="qcPointId"
                  name="qcPointId"
                  onChange={handleSubmitState}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Select</option>
                  {QcPoints?.map((insp) => (
                    <option value={insp?.id}>{insp?.title}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
        </Col>
      </Row>

      <div className={`col-12 text-end`}>
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </div>
    </form>
  );
};

export default Filters;
