import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneBuildAreaData } from "../../../../Redux/features/BuildAreaSlice";

import CenteredTree from "./components/CenteredTree";
import Spinner from "../../../../components/common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const ViewBuildArea = () => {
  // const location = useLocation();
  let { id } = useParams();
  const dispatch = useDispatch();
  const { area, error, status } = useSelector((state) => state.BuildArea);

  //     useEffect(() => {
  //         let temTree = []
  //       // setSubmissionData(plan);
  //       setTreeData();
  // area?.forEach({} =>
  //     {

  // });

  //   return () => {
  //     // setTreeData([]);
  //   };
  // }, [area]);

  React.useLayoutEffect(() => {
    dispatch(fetchOneBuildAreaData(id));
  }, [dispatch, id]);

  return (
    <>
      {error && <span>{error}</span>}
      <div className="row">
        <MainBreadcrum name='Build Area' subName=''
          links={[
            { path: "/", title: "" },
            { path: "/build-area", title: "Build Area" },
            { path: "", title: "Tree", activeLink: true },
          ]}
        />
        <div className="col-4 align-self-center text-end">
          {/* <Link to="/inspection-plan/create"> */}
          {/* <button type="button" className="btn btn-primary">
            Add Node
          </button> */}
          {/* </Link> */}
        </div>
      </div>
      <div className="mt-3">
        <div className="mb-5">
          <div style={{
                overflow: 'auto',
                whiteSpace: 'nowrap'
            }} className="card">
            <div className="card-body h-100">
              {status === "loading" ? (
                <Spinner />
              ) : (
                <CenteredTree data={area} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBuildArea;
