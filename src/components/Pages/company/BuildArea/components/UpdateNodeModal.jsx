import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Done from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import {
  addBuildAreaData,
  fetchBuildAreas,
  fetchOneBuildAreaData,
  updateBuilArea,
} from "../../../../../Redux/features/BuildAreaSlice";
import { useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RiFolderUploadFill } from "react-icons/ri";
import { FaSave } from "react-icons/fa";
import {
  clearFileState,
  uploadFile,
} from "../../../../../Redux/features/AppUtilsSlice";
import Spinner from "../../../../common/Spinner";

const UpdateNodeModal = ({ handleClose, open, parentId, data}) => {
  let { id } = useParams();
  const imageUploadData = new FormData();

  const {
    AppUtils: { status, fileData },
  } = useSelector((state) => state);
  const [submissionData, setSubmissionData] = useState(data);

  useEffect(() => {
    setSubmissionData({
      ...setSubmissionData,
      name: data.name,
      isInput: data.isInput,
    });

    return () => {
      // setSubmissionData({});
    };
  }, [data]);

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    // // console.log(submissionData);

    let finalData = { ...submissionData };
    if (fileData?.id) {
      finalData = { ...submissionData, mediaId: fileData?.id };
    }

    dispatch(
      updateBuilArea({
        id: parentId,
        finalData: { ...finalData, parentId: null, id: parentId },
      })
    );

    setSubmissionData({});
    dispatch(clearFileState());
    dispatch(fetchOneBuildAreaData(id));

    dispatch(fetchBuildAreas(1));

    handleClose();
    setSubmissionData({});
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
      onClose={() => {
        handleClose();
        setSubmissionData({});
      }}
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
            Update Node
          </Typography>
          <form className=" d-flex justify-content-center flex-nowrap flex-column">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className=" d-flex flex-column justify-content-between align-items-center flex-nowrap">
                <div className="mb-3 row">
                  <label className="col-form-label " htmlFor="name">
                    Node Name
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      onChange={(e) =>
                        setSubmissionData({
                          ...submissionData,
                          name: e.target.value,
                          buildMasterId: id,
                        })
                      }
                      defaultValue={submissionData.name}
                      className="form-control"
                      id="name"
                      placeholder="Node Name"
                    />
                  </div>
                </div>
                {/* is inpul */}
                <div className="mb-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={submissionData.isInput}
                    id="inlineCheckbox1"
                    onChange={(e) =>
                      setSubmissionData({
                        ...submissionData,
                        isInput: e.target.checked,
                      })
                    }
                  />
                </div>

                {/* file upload */}
                <div
                  className="mx-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Upload"
                >
                  <div className="image-upload">
                    <label for="file-input">
                      <RiFolderUploadFill size={22} />
                    </label>

                    <input
                      id="file-input"
                      className="d-none"
                      type="file"
                      onChange={(e) => {
                        imageUploadData.append("file", e.target.files[0]);
                        // for (const value of imageUploadData.values()) {
                        //   // console.log(value);
                        // }
                        // // console.log(imageUploadData.values());
                        dispatch(uploadFile(imageUploadData));
                      }}
                    />
                  </div>
                </div>
              </div>
            </Typography>
            {status === "loading" ? (
              <Spinner />
            ) : (
              <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={handelSubmit}
                aria-label="submit data"
              >
                Submit
              </button>
            )}
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UpdateNodeModal;
