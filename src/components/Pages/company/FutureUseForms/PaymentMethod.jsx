import React, { useState } from "react";
import { API, key } from "../../../../config";
import { Link, useNavigate } from "react-router-dom";

import ToggleButton from "react-toggle-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { FaCcVisa } from "react-icons/fa";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const PaymentMethod = () => {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid grey",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Payment"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Method", activeLink: true },
          ]}
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4 className="my-auto">Payment methods</h4>
            <button
              onClick={handleOpen}
              type="button"
              className="btn btn-sm btn-primary py-2"
            >
              Add payment method
            </button>
          </div>
          <div className="row border my-auto mt-3 mb-1 mx-1">
            <div className="col-md-3 py-3">
              <FaCcVisa size={"1.2rem"} color={"#0D488B"} />{" "}
              <span className="m-0 fw-semibold ps-1 pt-n1">
                Visa ending in 2421
              </span>
            </div>
            <div className="col-md-5 text-center py-3">
              <p className="m-0 fw-semibold">Expires 03/2026</p>
            </div>
            <div className="col-md-2 text-center py-3">
              <span className="m-0 fw-semibold pt-n1 pe-1">Default</span>{" "}
              <BsFillQuestionSquareFill />
            </div>
            <div className="col-md-2 text-end py-3 pointer">
              <RiDeleteBin6Line size={"1.2rem"} />
            </div>
          </div>
          <div className="row border my-auto mt-3 mb-4 mx-1">
            <div className="col-md-3 py-3">
              <FaCcVisa size={"1.2rem"} color={"#0D488B"} />{" "}
              <span className="m-0 fw-semibold ps-1 pt-n1">
                Visa ending in 2421
              </span>
            </div>
            <div className="col-md-5 text-center py-3">
              <p className="m-0 fw-semibold">Expires 03/2026</p>
            </div>
            <div className="col-md-2 text-center py-3">
              <span className="m-0 fw-semibold pt-n1 pe-1">Default</span>{" "}
              <BsFillQuestionSquareFill />
            </div>
            <div className="col-md-2 text-end py-3 pointer">
              <RiDeleteBin6Line size={"1.2rem"} />
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3> Add a new payment method</h3>
              </Typography>
              <div className="pt-3 px-1">
                <BsArrowLeft color="#87acf2" />
                <Link className="ms-1" to="#">
                  {" "}
                  Choose a different payment method
                </Link>
                <p className="fw-semibold mt-3">
                  We accept Visa, Mastercard, American Express, UnionPay, and
                  Discover credit cards
                </p>
                <p className="fw-semibold mt-3">
                  You may see a temporary authorization hold on your card, which
                  your bank should release soon. DigitalOcean does not charge
                  you until you start using paid services.
                </p>
                {/* <label for="basic-addon3"className="mb-1 mt-3">Card Code CVC</label> */}
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fas fa-credit-card my-1"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Card Code CVC"
                    placeholder="MM / YY  CVC"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography> */}
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
