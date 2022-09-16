import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { addBuildAreaMaster } from "../../../../../Redux/features/BuildAreaSlice";

const AddBuildAreaMasterModal = ({ handleClose, open, material }) => {
  const initChildState = {
    name: "",
    machineName: null,
    materialMasterId: null,
    masterType: null,
  };

  const [submissionData, setSubmissionData] = useState(initChildState);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(submissionData);
    dispatch(addBuildAreaMaster(submissionData));
    setSubmissionData({});

    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #69809a",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <Box sx={style} className="rounded bg-white">
          <Typography
            className="text-center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create New Build Area Master
          </Typography>
          <form className=" d-flex justify-content-between align-items-center flex-nowrap flex-column">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* input field */}
              <div className="mb-3 row">
                <label className="col-form-label col-sm-3" htmlFor="name">
                  name
                </label>

                <div className="col-sm-9">
                  <input
                    onChange={(e) =>
                      setSubmissionData({
                        ...submissionData,
                        name: e.target.value,
                      })
                    }
                    value={submissionData?.name}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>

              {/* type drop down */}
              <div className="mb-3 row">
                <label
                  className="col-form-label col-sm-3 "
                  htmlFor="type"
                >
                  TYPE:
                </label>
                <div className="col-sm-9">
                  <select
                    id="type"
                    className="form-select"
                    aria-label="select type for selection"
                    onChange={(e) => {
                      setSubmissionData({
                        ...submissionData,
                        masterType: e.target.value,
                      });
                    }}
                  >
                  <option value="" selected>
                      Select Type
                    </option>
                    <option value="MS">Machine</option>
                    <option value="MM">Material</option>
                  </select>
                </div>
              </div>

              {submissionData.masterType && (
                <>
                  {submissionData.masterType === "MS" ? (
                    //machineName
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="machineName"
                      >
                        Machine Name
                      </label>

                      <div className="col-sm-9">
                        <input
                          onChange={(e) =>
                            setSubmissionData({
                              ...submissionData,
                              machineName: e.target.value,
                            })
                          }
                          value={submissionData?.machineName}
                          type="text"
                          className="form-control"
                          id="machineName"
                          placeholder="Machine Name"
                        />
                      </div>
                    </div>
                  ) : submissionData.masterType === "MM" ? (
                    // material list
                    <div className="mb-3 row">
                      <label
                        className="col-form-label col-sm-3"
                        htmlFor="material-master"
                      >
                        MATERIAL MASTER:
                      </label>
                      <div className="col-sm-9">
                        <select
                          id="material-master"
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setSubmissionData({
                              ...submissionData,
                              materialMasterId: e.target.value,
                            });
                          }}
                          value={submissionData?.material?.id}
                        >
                          <option selected>Select</option>
                          {material?.map(
                            ({ materialNo, materialText, id, plant }) => (
                              <option
                                key={id}
                                value={id}
                              >{`${materialNo} - ${materialText}`}</option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  ) : null}
                </>
              )}
            </Typography>
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={handelSubmit}
              aria-label="submit data"
            >
              Submit
            </button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddBuildAreaMasterModal;
