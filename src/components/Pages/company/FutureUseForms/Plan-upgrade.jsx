import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { API, key } from "../../../../config";
import ToggleButton from "react-toggle-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Input from "@mui/material/Input";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const PlanUpgrade = () => {
  const ariaLabel = { "aria-label": "description" };
  const navigate = useNavigate();
  const [rejectionCode, setRejectionCode] = useState("");
  const [rejectionText, setRejectionText] = useState("");

  // form validation rules
  const validationSchema = Yup.object().shape({
    rejectionCode: Yup.string().required("Code is required"),
    rejectionText: Yup.string().required("Text is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    const token = localStorage.getItem("access_token");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("code", rejectionCode);
    data.append("reason", rejectionText);
    data.append("discount", "1");

    var config = {
      method: "post",
      url: key.server.api + "/rejected-reasons",
      headers: {
        companyId: "1",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        navigate("/rejection-reasons");
      })
      .catch(function (error) {
        // // // console.log(error);
      });

    return false;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Plan"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Upgrade", activeLink: true },
          ]}
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="card-group">
                <div className="card mx-2">
                  <img
                    className="card-img-top w-50 mx-auto mt-4 mb-1"
                    src="\assets\img\processintel.png"
                    alt="Logo"
                  />
                  <div className="card-body text-center mt-auto">
                    <h5 className="card-title fs-4">30-DAYS DEMO</h5>
                    <div className="row mb-3">
                      <div className="col-sm-7 mt-auto">
                        <label
                          for="exampleInputEmail1"
                          htmlFor="months"
                          className="form-label fs-6"
                        >
                          No. of Months:
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <Input
                          id="months"
                          placeholder="0"
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-7 mt-auto">
                        <label
                          for="exampleInputEmail1"
                          htmlFor="sensors"
                          className="form-label fs-6"
                        >
                          No. of Sensors:
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <Input
                          id="sensors"
                          placeholder="0"
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                    <div className="row">
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
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button className="btn-primary">Upgrade</Button>
                      <Button className="btn-primary">Amount</Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="card mx-2">
                  <img
                    className="card-img-top w-50 mx-auto mt-4 mb-1"
                    src="\assets\img\processintel.png"
                    alt="Logo"
                  />
                  <div className="card-body text-center mt-auto">
                    <h5 className="card-title fs-4">30-DAYS DEMO</h5>
                    <div className="row mb-3">
                      <div className="col-sm-7 mt-auto">
                        <label
                          for="exampleInputEmail1"
                          htmlFor="months"
                          className="form-label fs-6"
                        >
                          No. of Months:
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <Input
                          id="months"
                          placeholder="0"
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-7 mt-auto">
                        <label
                          for="exampleInputEmail1"
                          htmlFor="sensors"
                          className="form-label fs-6"
                        >
                          No. of Sensors:
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <Input
                          id="sensors"
                          placeholder="0"
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                    <div className="row">
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
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button className="btn-primary">Upgrade</Button>
                      <Button className="btn-primary">Amount</Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="card mx-2">
                  <img
                    className="card-img-top w-50 mx-auto mt-4 mb-1"
                    src="\assets\img\processintel.png"
                    alt="Logo"
                  />
                  <div className="card-body text-center mt-auto">
                    <h5 className="card-title fs-4">30-DAYS DEMO</h5>
                    <div className="row mb-3">
                      <div className="col-sm-7 mt-auto">
                        <label
                          for="exampleInputEmail1"
                          htmlFor="months"
                          className="form-label fs-6"
                        >
                          No. of Months:
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <Input
                          id="months"
                          placeholder="0"
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-7 mt-auto">
                        <label
                          for="exampleInputEmail1"
                          htmlFor="sensors"
                          className="form-label fs-6"
                        >
                          No. of Sensors:
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <Input
                          id="sensors"
                          placeholder="0"
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                    <div className="row">
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
                          inputProps={ariaLabel}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button className="btn-primary">Upgrade</Button>
                      <Button className="btn-primary">Amount</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanUpgrade;
