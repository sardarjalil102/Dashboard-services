import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import { getAllPlans } from "../../../../../Redux/features/PlansSlice";
import { addChargesData } from "../../../../../Redux/features/StripeSlice";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Card = ({ plan }) => {
  const dispatch = useDispatch();

  const initState = {
    companyId: "5",
    planId: plan?.id,
    noOfUsers: null,
    noOfSensors: null,
    storage: null,
    paymentMethod: "Pkwfsdf23234",
    customerId: "Pk_sdsadsadsa",
  };

  const sensorPrice = plan.pricePerSensor;
  const userPrice = plan.pricePerUser;
  const storagePrice = plan.pericePerGb;

  const publishableKey = "pk_test_T5AXnYAWQSypZOkdH68vgD8y0010oyGwce";

  useEffect(() => {
    dispatch(getAllPlans());
  }, [dispatch]);

  const [submissionData, setSubmissionData] = useState(initState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addChargesData(submissionData));

    // // console.log("purchase data :", submissionData);
  }

  const priceForStripe =
    sensorPrice * initState.noOfSensors +
    userPrice * initState.noOfUsers +
    storagePrice * initState.storage;

  const payNow = async (token) => {
    try {
      // // // console.log(token);
      const response = await axios.post("http://localhost:5000/payment", {
        data: {
          price:
            sensorPrice * initState.noOfSensors +
            userPrice * initState.noOfUsers +
            storagePrice * initState.storage,
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
    <div className="col-md-4">
      <div className="card m-2">
        <img
          className="card-img-top w-50 mx-auto mt-4 mb-1"
          src="\assets\img\processintel.png"
          alt="Logo"
        />
        <form onSubmit={handleSubmit} className="browser-default-validation">
          <div className="card-body text-center">
            <h5 className="card-title fs-4">{plan?.name}</h5>
            <p className="card-text">
              Process Intel QMS software full access to all features.
            </p>
            <div className="row mb-3">
              <div className="col-sm-7 mt-auto">
                <label
                  for="exampleInputEmail1"
                  htmlFor="users"
                  className="form-label fs-6"
                >
                  No. of Users:
                </label>
              </div>
              <div className="col-sm-4">
                <Input
                  id="users"
                  placeholder="0"
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
              <div className="col-sm-7 mt-auto">
                <label
                  for="exampleInputEmail1"
                  htmlFor="months"
                  className="form-label fs-6"
                >
                  No. of Sensors:
                </label>
              </div>
              <div className="col-sm-4">
                <Input
                  id="months"
                  placeholder="0"
                  onChange={(e) =>
                    setSubmissionData({
                      ...submissionData,
                      noOfSensors: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 mt-auto">
                <label
                  for="exampleInputEmail1"
                  htmlFor="storage"
                  className="form-label fs-6"
                >
                  No. of Storage:
                </label>
              </div>
              <div className="col-sm-4">
                <Input
                  id="storage"
                  placeholder="0"
                  onChange={(e) =>
                    setSubmissionData({
                      ...submissionData,
                      storage: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button className="btn-primary">
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
              </Button>
              <Button className="btn-primary">Amount: {priceForStripe}</Button>
            </ButtonGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
