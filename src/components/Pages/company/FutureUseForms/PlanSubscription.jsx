import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlans } from "../../../../Redux/features/PlansSlice";
import Card from "../../saas/subscription/component/Card";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const PlanSubscription = () => {
  const { Plans } = useSelector((state) => state.Plan);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlans());
  }, [dispatch]);

  return (
    <>
      <div className="row">
      <MainBreadcrum name='Plan' subName=''
          links={[
            { path: "/", title: "" },
            { path: "", title: "Subsciption" , activeLink: true  },
          ]}
        />
      </div>
      <div className="card">
        <div className="row gx-0">
              {Plans.map((plan) => (
                <Card plan={plan} />
              ))}
            </div>
      </div>
    </>
  );
};

export default PlanSubscription;
