import React from "react";
import { useDispatch } from "react-redux";
import {
  setgCurrentForm,
  setCurrentNode,
} from "../../../Redux/features/AppUtilsSlice";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { updateActionType } from "../../../Redux/features/InspectionPlanSlice";
import { stepCleaner } from "../../../Redux/features/StepSlice";

const Node = ({ item, hasChildren, level, onToggle, selected }) => {
  const dispatch = useDispatch();

  const handelTreeClick = () => {
    // console.log(item);
    if (level === 2) {
      dispatch(setgCurrentForm("/inspection-plan/qcpoint"));
      dispatch(setCurrentNode(item));
    }
    if (level === 1) {
      dispatch(setgCurrentForm("/inspection-plan/step"));
      dispatch(setCurrentNode(item));
    }
    if (level === 0) {
      dispatch(setgCurrentForm("/inspection-plan/view/"));
      dispatch(setCurrentNode(item));
    }
    // // console.log("current item :", item );
    // // console.log("current level :", level );
  };
  return (
    <div
      className="pointer mx-n2 mt-n2 mb-2"
      style={{
        paddingLeft: ` ${level <= 0 ? `${12}px` : `${level * 35}px`}`,
        backgroundColor: `${hasChildren ? "white" : "#F9F9F9"}`,
        border: `${hasChildren ? "none" : "1px solid #EEEEEE"}`,
        paddingTop: "7px",
        paddingBottom: "7px",
      }}
      onClick={onToggle}
    >
      <span onClick={handelTreeClick} className="pointer">
        <p style={{ overflowX: "auto" }} className="d-inline">
          {item.label}
        </p>
      </span>
      <div
        className={`${hasChildren ? " " : "d-none"} pointer d-inline float-end`}
      >
        {selected ? (
          <IoIosArrowDown size="1rem" />
        ) : (
          <IoIosArrowForward size="1rem" />
        )}
      </div>
      <div
        className={`${hasChildren ? " " : "d-none"} pointer d-inline float-end`}
      >
        <IoMdAddCircle
          onClick={() => {
            dispatch(updateActionType("a"));
          }}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="add"
          color="#0C4688"
        />
        <FaEdit
          onClick={() => dispatch(updateActionType("e"))}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="edit"
          className="me-1 ms-2"
          color="#0000001A"
        />
      </div>
      <span className={`${hasChildren ? "d-none" : ""} pointer float-end`}>
        <FaEdit
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="edit"
          className="ms-2"
          color="#0000001A"
        />
      </span>
    </div>
  );
};

export default Node;
// {/* <i class='bx bx-chevron-right'></i> */ }

// {/* <i class='bx bx-chevron-down' ></i> */}
