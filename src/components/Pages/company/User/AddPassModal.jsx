import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

const AddPassModal = ({ handleClose, open }) => {
  const [pass, setPass] = useState({});

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
            Create New Password
          </Typography>
          <form className=" d-flex justify-content-between align-items-center flex-nowrap flex-column">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* input field */}
              <div className="mb-3 row">
                <label className="col-form-label col-sm-3" htmlFor="name">
                  Current Password
                </label>

                <div className="col-sm-9 my-auto">
                  <input
                    type="password"
                    className="form-control"
                    id="name"
                    placeholder="Current Password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-form-label col-sm-3" htmlFor="name">
                  Password
                </label>

                <div className="col-sm-9 my-auto">
                  <input
                    type="password"
                    className="form-control"
                    id="name"
                    placeholder="New Password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-form-label col-sm-3" htmlFor="name">
                  Confirm Password
                </label>

                <div className="col-sm-9 my-auto">
                  <input
                    type="password"
                    className="form-control"
                    id="name"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
            </Typography>
            <button
              onClick={handleClose}
              type="button"
              className="btn btn-primary mt-4"
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

export default AddPassModal;
