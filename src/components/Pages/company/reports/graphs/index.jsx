import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addQualitativedata } from "../../../../../Redux/features/GraphsSlice";
import MainBreadcrum from "../../../../layout/MainBreadcrum";
import Donut from "./components/Donut";
import Filters from "./components/Filters";
import Histogram from "./components/Histogram";

const Graph = () => {
  const dispatch = useDispatch();

  const {
    Graphs: { histogramData },
  } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addQualitativedata(initState));
  };

  return (
    <div>
      <div className="row">
        <MainBreadcrum
          name="Graph"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Graph", activeLink: true },
          ]}
        />
      </div>

      <Filters />
      <div className=" row my-3 p-3 bg-light m-auto ms-n1">
        <div className="col-lg-6 text-center">
          {histogramData ? <Histogram /> : <h4>No Graph Available</h4>}
        </div>
        {/* <div className="col-lg-6 text-center">
          <Donut />
        </div> */}
      </div>
    </div>
  );
};

export default Graph;
