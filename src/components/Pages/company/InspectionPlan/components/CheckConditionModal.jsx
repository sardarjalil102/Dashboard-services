import React from "react";
import Select from "react-select";
import { Box, Modal } from "@mui/material";
import makeAnimated from "react-select/animated";


const CheckConditionModal = ({
  open,
  handleClose,
  handleConditionSubmit,
  checkCondition,
  setCheckCondition,
  option,
}) => {
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

  const handleChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      // // // console.log(selec.value);
      tempSelect.push(selec.value);
    });
    setCheckCondition({
      ...checkCondition,
      emails: tempSelect.toString(),
    });

    // // // console.log(`Option selected:`, tempSelect);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form
          className="browser-default-validation w-100 order-1"
          onSubmit={handleConditionSubmit}
        >
          {/* type */}
          <div className="mb-3 row">
            <label className="col-form-label col-sm-3" htmlFor="type">
              Type :
            </label>
            <div className="col-sm-9">
              <select
                readOnly
                id="type"
                className="form-select"
                onChange={(e) => {
                  setCheckCondition({
                    ...checkCondition,
                    type: e.target.value,
                  });
                }}
                value={checkCondition?.type}
              >
                <option selected>Select type</option>
                <option selected>Email</option>
                <option selected>Audit</option>
                <option selected>Reposrt/Forms</option>
              </select>
            </div>
          </div>

          {/* operator */}
          <div className="mb-3 row">
            <label className="col-form-label col-sm-3" htmlFor="operator">
              Operator :
            </label>
            <div className="col-sm-9">
              <select
                readOnly
                id="operator"
                className="form-select"
                onChange={(e) => {
                  setCheckCondition({
                    ...checkCondition,
                    operator: e.target.value,
                  });
                }}
                value={checkCondition?.operator}
              >
                <option value="">Select Operator</option>
                <option value="f">Out of Range[Fail]</option>
                <option value="gt"> {`< than`} </option>
                <option value="lt"> {`> than`} </option>
                <option value="et">Equals to </option>
              </select>
            </div>
          </div>

          {/* Conditional Value */}
          <div className="row mb-3">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="conditional-Value"
            >
              conditional Value:
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                value={checkCondition?.value}
                onChange={(e) =>
                  setCheckCondition({
                    ...checkCondition,
                    value: e.target.value,
                  })
                }
                className="form-control"
                id="conditional-Value"
                placeholder="Conditional Value"
              />
            </div>
          </div>

          {/* Frequency */}
          <div className="mb-3 row">
            <label className="col-form-label col-sm-3" htmlFor="Frequency">
              Frequency :
            </label>
            <div className="col-sm-9">
              <select
                readOnly
                id="Frequency"
                className="form-select"
                onChange={(e) => {
                  setCheckCondition({
                    ...checkCondition,
                    frequency: e.target.value,
                  });
                }}
                value={checkCondition?.frequency}
              >
                <option selected>Select Frequency</option>
                <option selected>Daily</option>
                <option selected>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
          </div>

          {/* number of itrations */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label" htmlFor="num-iteration">
              Num of Iteration:
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                value={checkCondition?.noOfIteration}
                onChange={(e) =>
                  setCheckCondition({
                    ...checkCondition,
                    noOfIteration: e.target.value,
                  })
                }
                className="form-control"
                id="num-iteration"
                placeholder="Number here "
              />
            </div>
          </div>
          {/* action */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label" htmlFor="qcpoint-order">
              Action:
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                value={checkCondition?.order}
                onChange={(e) =>
                  setCheckCondition({
                    ...checkCondition,
                    action: e.target.value,
                  })
                }
                className="form-control"
                id="check-condition-action"
                placeholder="Action"
              />
            </div>
          </div>

          {/* user emails */}
          <div className="mb-3 row pe-1">
            <label
              className="form-label col-sm-3 my-auto"
              htmlFor="assigned-workstation"
            >
              USERS EMAILS:
            </label>
            <div className="my-auto col-sm-9">
              {/* <div className="input-group rounded"> */}
              <Select
                onChange={handleChange}
                components={makeAnimated()}
              isMulti
                options={option}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 align-self-center text-center">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CheckConditionModal;
