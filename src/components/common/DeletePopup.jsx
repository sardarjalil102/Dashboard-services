import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";

const DeletePopup = ({ handleClose, open, setIsAllow }) => {
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
            Are you sure to delete it?
          </Typography>
          <div className="d-flex flex-row gap-3 justify-content-between">
            <div>
              <button
                onClick={() => {
                  setIsAllow(true);
                  handleClose();
                }}
                type="button"
                className="btn btn-success mt-4"
                aria-label="submit data"
              >
                Yes
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setIsAllow(false);
                  handleClose();
                }}
                type="button"
                className="btn btn-danger mt-4"
                aria-label="submit data"
              >
                No
              </button>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeletePopup;
