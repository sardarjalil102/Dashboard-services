import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const UserListModal = ({ open, handleClose, userList }) => {
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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          className="text-center mb-3"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Users Emails
        </Typography>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Emails</th>
              {/* <th scope="col">User Name</th> */}
            </tr>
          </thead>
          <tbody>
            {userList?.map((email, i) => (
              <tr key={i}>
                <th scope="row">{i+1}</th>
                <td>{email}</td>
                {/* <td>Mark</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Modal>
  );
};

export default UserListModal;
