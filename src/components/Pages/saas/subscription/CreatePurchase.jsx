import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchOnePlanData,
  getAllPlans,
} from "../../../../Redux/features/PlansSlice";
import StripeCheckout from "react-stripe-checkout";


import {
  addChargesData,
  getIntent,
} from "../../../../Redux/features/StripeSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const Form = () => {
  // const navigate = useNavigate();

  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIntent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOnePlanData(id));
  }, [dispatch, id]);

  const { onePlan } = useSelector((state) => state.Plan);

  const publishableKey = "pk_test_T5AXnYAWQSypZOkdH68vgD8y0010oyGwce";

  const [submissionData, setSubmissionData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addChargesData(submissionData));

    // // console.log("purchase data :", submissionData);
  }
  const sensorPrice = onePlan.pricePerSensor;
  const userPrice = onePlan.pricePerUser;
  const storagePrice = onePlan.pricePerGb;

  const priceForStripe =
    sensorPrice * onePlan.noOfSensors +
    userPrice * onePlan.noOfUsers +
    storagePrice * onePlan.storage;
  // // console.log(priceForStripe);

  const payNow = async (token) => {
    try {
      // // // console.log(token);
      const response = await axios.post("http://localhost:5000/payment", {
        data: {
          price: priceForStripe,
          token,
        },
      });
      if (response.status === 200) {
        // // // console.log("your payment is done");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum name='Form' subName='(Purchase Plan)'
          links={[
            { path: "/", title: "" },
            { path: "", title: "Purchase Plan", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <form
                    onSubmit={handleSubmit}
                    className="browser-default-validation"
                  >
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="no-users"
                      >
                        Number of Users :*
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className={`form-control `}
                          id="no-users"
                          placeholder="No. of Users"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              noOfUsers: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="no-sensors"
                      >
                        Number of Sensors :*
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className={`form-control `}
                          id="no-sensors"
                          placeholder="No. of Sensors"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              noOfSensors: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="storage"
                      >
                        Storage:*
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className={`form-control `}
                          id="storage"
                          placeholder="Storage"
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              storage: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 align-self-center text-center">
                        <StripeCheckout
                          stripeKey={publishableKey}
                          label="Pay Now"
                          name="Pay with credit card"
                          billingAddress
                          shippingAddress
                          amount={priceForStripe}
                          description={`your total is $${priceForStripe}`}
                          token={payNow}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* <div className="col-md-6">

                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
