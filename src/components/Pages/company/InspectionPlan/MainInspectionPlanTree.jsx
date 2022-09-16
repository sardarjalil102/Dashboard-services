import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import Tree from "../../../Tree";
import BreadCrum from "./components/BreadCrum";
import Plan from "./forms/Plan";
import Step from "./forms/Step";
import { AiFillHome } from "react-icons/ai";
import QcPoint from "./forms/QcPoint";
import { fetchOneInspectoinPlanData } from "../../../../Redux/features/InspectionPlanSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import { fetchOneStep } from "../../../../Redux/features/StepSlice";
import { setgCurrentForm } from "../../../../Redux/features/AppUtilsSlice";
import { fetchOneQCPoint } from "../../../../Redux/features/QCPointSlice";
import Spinner from "../../../common/Spinner";
import useTimeout from "../../../common/useTimeout";
import ViewPlanLoading from "../../../common/SkeltonLoading/ViewPlanLoading";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const MainInspectionPlanTree = () => {
  let { id } = useParams();
  const { pathName } = useLocation();
  const [currentForm, setCurrentForm] = useState("/inspection-plan/view/");
  const [treeData, setTreeData] = useState([]);
  const [currentStepForm, setCurrentStepFrom] = useState();
  const [currentPlanForm, setCurrentPlanFrom] = useState();
  const [currentQCPointForm, setCurrentQCPointFrom] = useState();

  const dispatch = useDispatch();
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);

  useTimeout(() => {
    setHasTimeElapsed(true);
  }, 2000);

  const {
    InspectionPlan: {
      plan,
      actionType,
      treeStuff: { tree },
    },
    AppUtils: { currentNode, gCurrentForm },
    Step: { step },
    QCPoint: { qcPoint },
  } = useSelector((state) => state);

  React.useLayoutEffect(() => {
    dispatch(fetchOneInspectoinPlanData(id));
    dispatch(fetchAllMaterials());
  }, [dispatch, id]);

  useEffect(() => {
    if (currentNode?.type === "step" && actionType !== "a") {
      dispatch(fetchOneStep(currentNode?.id));
    }
    if (currentNode?.type === "qc") {
      dispatch(fetchOneQCPoint(currentNode?.id));
    }
    setCurrentForm(gCurrentForm);
    return () => {};
  }, [gCurrentForm, currentNode, dispatch, pathName]);

  useEffect(() => {
    setTreeData(tree);
    const temOptArr = [];
    plan?.workStations?.forEach((work) => {
      temOptArr.push({ value: work?.id, label: work?.name });
      //  // // console.log({ value: work?.id, label: work?.name });
    });
    setCurrentPlanFrom({ ...plan, workStations: temOptArr });
    setCurrentStepFrom(step);
    setCurrentQCPointFrom(qcPoint);
    return () => {
      setTreeData([]);
    };
  }, [plan, tree, step, qcPoint]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Inspection Plan"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/inspection-plan", title: "Inspection Plan" },
            { path: "", title: "View", activeLink: true },
          ]}
        />
        {/* <div className="col-md-4 align-self-center text-end pt-4">
          <Link to="#">
            <button type="button" className="btn btn-primary">
              EDIT
            </button>
          </Link>
        </div> */}
      </div>

      <div>
        <div className="card">
          <div className="card-body px-0 pt-0 pb-3">
            {hasTimeElapsed ? (
              <div className="row ps-2 pe-3">
                <div
                  style={{ backgroundColor: "#f3f4f4" }}
                  className="col-md-3 p-2 mb-n3"
                >
                  <Tree data={treeData} />
                </div>

                <div className="col-md-9 col-12">
                  <BreadCrum
                    setCurrentStepFrom={setCurrentStepFrom}
                    setCurrentQCPointFrom={setCurrentQCPointFrom}
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                  />

                  {currentForm.includes("/inspection-plan/view/") ? (
                    <Plan planData={currentPlanForm} />
                  ) : currentForm.includes("/inspection-plan/step") ? (
                    <Step stepData={currentStepForm} planId={plan?.id} />
                  ) : currentForm.includes("/inspection-plan/qcpoint") ? (
                    <QcPoint qcPointData={currentQCPointForm} />
                  ) : null}
                </div>
              </div>
            ) : (
              <ViewPlanLoading />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainInspectionPlanTree;
