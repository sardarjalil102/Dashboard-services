import React from "react";
import { Tree } from "react-organizational-chart";
import NodeWithName from "../components/tree/NodeWithName";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import AddNodeModal from "./AddNodeModal";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { openInNewTab } from "../../../../../utils";
import { SHOW_INFO } from "../../../../../utils/toastMessages";

const CenteredTree = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Tree
      label={
        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{
              width: "20%",
              // height: "50px",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            }}
            className="rounded-top rounded-bottom bg-white text-white  "
          >
            <p className="text-secondary my-auto py-3">{data?.name}</p>

            <hr className="text-grey p-0 my-0 mx-4" />

            <div className="row">
              <div className="col-md-7 text-center">
                {" "}
                <IconButton
                  onClick={() => {
                    if (data?.media) {
                      openInNewTab(data?.media);
                    } else {
                      SHOW_INFO(true, "Media not Found");
                    }
                  }}
                >
                  <AiFillFileText size={"1.1rem"} color="#0000001A" />
                </IconButton>
                <IconButton>
                  <FaEdit size={"1.1rem"} color="#0000001A" />
                </IconButton>
                {/* <IconButton>
            <BiTrash size={'1.1rem'} color="#ee3535" />
          </IconButton> */}
              </div>
              <div className="col-md-4 text-end">
                <IconButton
                  className="p-2"
                  onClick={handleOpen}
                  aria-label="click to open pop up"
                >
                  <IoMdAddCircle color="#0C4688" />
                </IconButton>
              </div>
            </div>

            <AddNodeModal
              handleClose={handleClose}
              open={open}
              parentId={data?.id}
            />
          </div>
        </div>
      }
    >
      {data?.child?.map(({ name, child, id, isInput, media }) => (
        <>
          {/* <span>{name}</span> */}
          <NodeWithName
            key={id}
            name={name}
            child={child}
            id={id}
            isInput={isInput}
            media={media}
          />
        </>
      ))}
    </Tree>
  );
};

export default CenteredTree;

// {/* <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Fade in={open}>
//               <Box className="rounded bg-white">
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                   Add Node here :
//                 </Typography>
//                 <div className=" d-flex justify-content-between align-items-center flex-nowrap">
//                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     <TextField
//                       onChange={(e) =>
//                         setSubmissionData({
//                           ...submissionData,
//                           name: e.target.value,
//                           parentId: data.id,
//                         })
//                       }
//                       label="Node"
//                       color="primary"
//                     />
//                   </Typography>
//                   <span className="p-2 btn-secondary rounded mt-3">
//                     <IconButton onClick={handelSubmit} aria-label="submit data">
//                       <Done />
//                     </IconButton>
//                   </span>
//                 </div>
//               </Box>
//             </Fade>
//           </Modal> */}
