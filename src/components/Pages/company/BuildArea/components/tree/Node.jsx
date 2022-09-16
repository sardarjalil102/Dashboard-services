import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import { IoMdAddCircle } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";

import AddNodeModal from "../AddNodeModal";
import { openInNewTab } from "../../../../../../utils";
import { SHOW_INFO } from "../../../../../../utils/toastMessages";
import UpdateNodeModal from "../UpdateNodeModal";

const Node = ({ name, pid, media, isInput }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [updateOpen, setUpdatetopen] = React.useState(false);
  const [updateEdit, setUpdateEdit] = React.useState(false);

  const UpdatehandleOpen = () => setUpdatetopen(true);
  const UpdatehandleClose = () => setUpdatetopen(false);

  // useEffect(() => {
  //   console.log(`${name} : ${isInput}`);
  //   return () => {};
  // }, [isInput]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mx-lg-4 mx-sm-1 mx-0">
        <div
          className="rounded-top rounded-bottom bg-white text-white"
          style={{
            paddingBottom: "5px",
            // width: "100%",
            minWidth: "200px",
            // height: "50px",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          }}
        >
          {/* <span className="text-secondary">{name}</span> */}
          <p className="text-secondary my-auto py-3">{name}</p>
          <hr className="text-grey p-0 my-0 mx-4" />

          <div className="row">
            <div className="col-lg-7 text-center">
              <IconButton
                onClick={() => {
                  if (!media) {
                    SHOW_INFO(media, "Media not Found");
                    return;
                  }
                  openInNewTab(media);
                }}
              >
                <AiFillFileText size={"1.1rem"} color="#0000001A" />
              </IconButton>
              <IconButton onClick={() => UpdatehandleOpen()}>
                <FaEdit size={"1.1rem"} color="#0000001A" />
              </IconButton>
            </div>
            <div className="col-lg-4 text-xxl-end">
              <IconButton
                onClick={() => {
                  handleOpen();
                }}
              >
                <IoMdAddCircle color="#0C4688" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <AddNodeModal handleClose={handleClose} open={open} parentId={pid} />
      <UpdateNodeModal
        handleClose={UpdatehandleClose}
        open={updateOpen}
        parentId={pid}
        data={{ name, pid, media, isInput }}
        edit={updateEdit}
        setEdit={setUpdateEdit}
      />
    </>
  );
};

export default Node;
