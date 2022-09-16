import { Skeleton } from "@mui/material";
import React from "react";
import FormSkeletonLoading from "./FormSkeletonLoading";
import TreeSkeletonLoading from "./TreeSkeletonLoading";

const ViewPlanLoading = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div style={{ height: "100vh" }} className="row">
            <TreeSkeletonLoading />
            <div className="col px-4">
              <Skeleton style={{ width: "100px" }} animation="pulse" />
              <Skeleton
                style={{ width: "200px", marginTop: "20px" }}
                animation="pulse"
              />
              <div className="mt-4">
                <FormSkeletonLoading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPlanLoading;
