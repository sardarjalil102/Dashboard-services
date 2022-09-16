import { Skeleton } from "@mui/material";
import { random } from "lodash";
import React, { useEffect, useState } from "react";
import FormSkeletonLoading from "./FormSkeletonLoading";
import TreeSkeletonLoading from "./TreeSkeletonLoading";

const SoloFormLoading = ({ times }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-12">
              <div>
                {times?.map((t) => (
                  <div style={{ height: "5vh" }} className="mb-3 row">
                    <div className="col-sm-3">
                      <Skeleton animation="pulse" />
                    </div>
                    <div className="col-sm-9">
                      <Skeleton animation="pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoloFormLoading;
