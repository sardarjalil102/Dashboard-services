import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../../../../config";
import { getFormDetails } from "../../../../../Redux/features/GeneralFormSlice";
import SoloFormLoading from "../../../../common/SkeltonLoading/SoloFormLoading";
import MainBreadcrum from "../../../../layout/MainBreadcrum";
import Fields from "./components/Fields";

const GeneralFormDetail = ({ detailId }) => {
  const dispatch = useDispatch();
  const { generalFormDetail, status } = useSelector(
    (state) => state.GeneralForm
  );
  useEffect(() => {
    // console.log("id from form detail", detailId);
    if (detailId) {
      dispatch(getFormDetails(detailId));
    }
    return () => {};
  }, [detailId, dispatch]);

  return (
    <div className="card">
      <div className="card-body">
        {status === "loading" ? (
          <SoloFormLoading times={[1, 2, 3, 4]} />
        ) : (
          <>
            {generalFormDetail?.fields?.map((field, i) => (
              <div key={i} className="">
                <Fields fieldData={field} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GeneralFormDetail;
