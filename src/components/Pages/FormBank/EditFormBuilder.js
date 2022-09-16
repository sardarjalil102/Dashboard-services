import React, { useCallback, useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Route,
  Routes,
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
// local imports
import {
  createFormFields,
  getAllFormFields,
  deleteFormField,
  updateFormField,
} from "../../../Redux/features/FormSlice";

import axios from "axios";
import "./formbank.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import MainBreadcrum from "../../layout/MainBreadcrum";
const FormBuilder = () => {
  const [show, setShow] = React.useState(false);
  const [type, setType] = React.useState("1");
  const [model, setModel] = React.useState(false);
  const [fieldName, setFieldName] = React.useState("");
  const [groups, setGroups] = React.useState([]);
  const [updateItem, setUpdateItem] = React.useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState(false);
  const [subItem, setSubItems] = useState([]);
  const [error, setError] = React.useState(false);
  const [duplicate, setDuplicate] = React.useState(false);
  let formFields = useSelector((state) => state.Form.formFields);
  const [fieldBank, setFieldBank] = React.useState(formFields && formFields);
  const item = localStorage.getItem("formInfo");
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = React.useRef();
  const { name, id, isWorkflowEnabled, instructions } = JSON.parse(item);
  const typeRef = React.useRef();
  const [value, setValue] = useState({
    formName: name,
    isWorkFlowEnlabed: "",
    group: "",
    instruction: "",
    type: "",
  });

  const options = [
    { type: 1, title: "Single Line Text Box" },
    { type: 2, title: "Paragraph Line Text Box" },
    { type: 3, title: "Drop Down" },
    { type: 4, title: "Check Box" },
    { type: 5, title: "Radio Button" },
  ];

  const workflow = [
    { id: 2, type: "General" },
    { id: 1, type: "isWorkFlowEnlabed" },
  ];

  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    setValue({
      ...value,
      [key]: ev,
    });
  };

  const removeDuplicateObjectFromArray = (value) => {
    setFieldName(value);
  };

  const AddFieldsToForm = () => {
    let item = [];
    let obj = {
      fieldName: fieldName,
      type: type,
    };

    if (subItem) {
      obj.items = subItem;
    }
    item.push(obj);
    let data = {
      id: id,
      workflowFormBuilderId: id,
      name: fieldName,
      type: type,
      order: 1,
    };
    let subValues = [];
    if (subItem.length) {
      subItem.map((item, index) => {
        subValues.push(item.value);
      });
    }
    data.item = subValues;
    dispatch(
      createFormFields({
        data: data,
        onResponse: (data) => {
          dispatch(getAllFormFields(id));
          setFieldName("");
          setSubItems([]);
          ref.current.value = "";
        },
      })
    );
  };

  const handleFieldsData = () => {
    AddFieldsToForm();
  };

  const removeData = (param) => {
    dispatch(
      deleteFormField({
        id: param.id,
        onResponse: (data) => {
          let filterData = fieldBank.filter((item) => item.id != param.id);
          setFieldBank(filterData);
        },
      })
    );
  };

  const editField = (item) => {
    setShowModal(true);
    setUpdateItem(item);
    setSubItems(item.items);
    setItemName(item.name);
  };

  const handleUpdateItem = () => {
    let data = {
      id: id,
      workflowFormBuilderId: id,
      name: itemName,
      type: updateItem.type,
      order: 1,
    };
    dispatch(
      updateFormField({
        data: data,
        onResponse: (data) => {
          setShowModal(false);
          dispatch(getAllFormFields(id));
        },
        id: updateItem.id,
      })
    );
  };

  const addSubItem = () => {
    let obj = {};
    let item = [];
    item = subItem;
    const generateID = () => {
      return Math.random().toString(36).slice(2);
    };
    const UID = generateID();
    obj.childId = UID;
    item.push(obj);
    setSubItems(item);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  const removeChild = (item) => {
    let filterData = subItem.filter((data) => data.childId != item.childId);
    setSubItems(filterData);
  };

  const onChangeHandle = (e, data) => {
    subItem.map((item, index) => {
      if (item.childId === data.childId) {
        item.value = e;
      } else {
      }
    });
  };

  const handleOnCahangeType = (item) => {
    setType(item);
    ref.current.value = "";
    setSubItems([]);
  };

  React.useEffect(() => {
    dispatch(getAllFormFields(id));
  }, []);

  React.useEffect(() => {
    setFieldBank(formFields);
  }, [formFields]);

  const renderFormBuilder = () => {
    return (
      <div className="my-3 mx-2 p-5 col-lg-5  card order-1">
        <div className="row gx-2">
          <div className="col-6">
        <label for="exampleInputEmail1">Form Name</label>
        <input
          value={name}
          disabled={true}
          onChange={(e) => handleonChange(e, "formName")}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter From Name"
        />
          </div>
          <div className="col-6">
        <label for="exampleInputEmail1">Form Type</label>
        <select
          disabled={true}
          onChange={(e) => handleonChange(e, "isWorkFlowEnlabed")}
          className="form-control form-select"
          aria-label="Default select example"
        >
          {workflow.map((item, index) => {
            return (
              <option value={isWorkflowEnabled} key={index}>
                {isWorkflowEnabled === 1
                  ? "WorkFlow Enabled Form"
                  : "General Form"}
              </option>
            );
          })}
        </select>
          </div>
        </div>

        <label className="mt-3">Instruction</label>
        <input
          value={instructions}
          disabled={true}
          onChange={(e) => handleonChange(e, "instruction")}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Instruction"
        />
        <label className="mt-3">Field Type</label>
        <select
          onChange={(e) => handleOnCahangeType(e.target.value)}
          className="form-control form-select"
          aria-label="Default select example"
        >
          {options.map((item, index) => {
            return (
              <option value={item.type} key={index}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  // console.log("subItem", subItem);
  const renderModelBox = () => {
    return (
      <div className="my-3 mx-2 p-5 col-lg-5 card order-3">
        <div className="form-group">
          {type == 1 || type == 2 ? (
            <>
        <label>Name</label>
            <input
              onChange={(e) => removeDuplicateObjectFromArray(e.target.value)}
              type="text"
              ref={ref}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Field Name"
            />
            </>
          ) : null}
        </div>
        {type == 3 || type == 4 || type == 5 ? (
          <>
            <div className="input-group mb-3">
              <input
                onChange={(e) => removeDuplicateObjectFromArray(e.target.value)}
                type="text"
                ref={ref}
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <button
                onClick={() => addSubItem(type)}
                className="btn-primary w-10 border-radius"
              >
                +
              </button>
            </div>
            {subItem &&
              subItem.map((item, index) => {
                // console.log("subItem data", subItem);
                return (
                  <div key={index} className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={item && item.value}
                      onChange={(e) => onChangeHandle(e.target.value, item)}
                    />
                    <button
                      onClick={() => removeChild(item)}
                      className="btn-primary w-10 border-radius"
                    >
                      -
                    </button>
                  </div>
                );
              })}
          </>
        ) : null}
        <button
          disabled={fieldName === "" ? true : false}
          onClick={() => handleFieldsData()}
          type="submit"
          className="btn m-10 align-self-lg-end btn-primary mt-3"
        >
          Add New Field
        </button>
      </div>
    );
  };

  const renderEditBox = () => {
    return (
      <div className="my-3 mx-2 p-5 col-lg-6 card order-last">
        <div className="form-group">
          {type == 1 || type == 2 ? (
            <input
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
                setFieldName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Field Name"
            />
          ) : (
            <div>
              <div className="input-group mb-3">
                <input
                  value={itemName}
                  onChange={(e) => {
                    setItemName(e.target.value);
                    setFieldName(e.target.value);
                  }}
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <button
                  onClick={() => addSubItem(type)}
                  className="btn-primary w-10 border-radius"
                >
                  +
                </button>
              </div>
              {subItem.map((item, index) => {
                // console.log("xitem", item);
                return (
                  <div className="input-group mb-3">
                    <input
                      placeholder={item.name}
                      type="text"
                      className="form-control"
                      onChange={(e) => onChangeHandle(e.target.value, item)}
                    />
                    <button
                      onClick={() => removeChild(item)}
                      className="btn-primary w-10 border-radius"
                    >
                      -
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={"align-items-col-end"}>
          <button
            disabled={itemName === "" ? true : false}
            onClick={() => handleUpdateItem()}
            style={{ marginRight: 10 }}
            type="submit"
            className="btn m-10 align-self-lg-end col-lg-4 btn-primary mt-3"
          >
            {" "}
            Edit
          </button>
          <button
            onClick={() => setShowModal(false)}
            style={{ marginRight: 10 }}
            type="submit"
            className="btn m-10 align-self-lg-end col-lg-4 btn-danger mt-3"
          >
            {" "}
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const renderSingleInputBox = (item, index) => {
    // console.log("item", item);
    return (
      <div key={index} className="col mt-1 p-2 row g-0">
        <div className="col-10">
        <label className={"p-1 d-block"}>{item.name}</label>
        <input
          disabled
          type="text"
          className="form-control"
          placeholder={item.name}
        />
        </div>
        <div className="col-2 text-center my-auto">
        <span>
        <BiEditAlt onClick={() => editField(item)} className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="edit" />
        <RiDeleteBin6Line onClick={() => removeData(item)} color="#C32929" className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="delete" />
        </span>
        </div>
        {/* <button
          onClick={() => removeData(item)}
          style={{ color: "white" }}
          className=" align-self-lg-end btn bg-danger"
        >
          <i className="fa fa-times"></i>
        </button>
        <button
          onClick={() => editField(item)}
          style={{ color: "white" }}
          className="btn m-2 align-self-lg-end bg-primary"
        >
          <i className="fa fa-edit"></i>
        </button> */}
      </div>
    );
  };

  const textArea = (item, index) => {
    return (
      <div key={index} className="col mt-1 p-2 row g-0">
        <div className="col-10">
        <label className={"p-1 d-block"}>{item.name}</label>
        <textarea
          placeholder={item.name}
          disabled
          type="text"
          className="form-control"
        />
        </div>
        <div className="col-2 text-center my-auto">
        <span>
        <BiEditAlt onClick={() => editField(item)} className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="edit" />
        <RiDeleteBin6Line onClick={() => removeData(item)} color="#C32929" className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="delete" />
        </span>
        </div>
        
      </div>
    );
  };

  const MakeItem = function (X, Y) {
    return <option key={Y}>{X}</option>;
  };

  const DropDown = (item, index) => {
    // console.log("DropDown item", item);
    return (
      <div key={index} className="col row mt-1 p-2 g-0">
        <div className="col-10">
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            {item.name}
          </label>
          <select className="form-select" id="inputGroupSelect01">
            {item.items &&
              item.items.map((item, index) => {
                return MakeItem(item.name, index);
              })}
          </select>
        </div>
        </div>
        <div className="col-2 text-center my-auto">
        <span>
        <BiEditAlt onClick={() => editField(item)} className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="edit" />
        <RiDeleteBin6Line onClick={() => removeData(item)} color="#C32929" className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="delete" />
        </span>
        {/* <button
          onClick={() => removeData(item)}
          style={{ color: "white" }}
          className=" btn bg-danger"
        >
          <i className="fa fa-times"></i>
        </button>
        <button
          onClick={() => editField(item)}
          style={{ color: "white" }}
          className="btn m-2 bg-primary"
        >
          <i className="fa fa-edit"></i>
        </button> */}
        </div>
      </div>
    );
  };

  const CheckBox = (item, index) => {
    return (
      <>
        <div key={index} className="col mt-1 p-2 row g-0">
        <div className="col-10">
          <input
            disabled
            type="text"
            className=" form-control"
            placeholder={item.name}
          />
          <div>
            {item.items &&
              item.items.map((data, index) => {
                return (
                  <div className="form-check form-check-inline ml-2 mt-1">
                    <input
                      disabled
                      className="form-check-input"
                      type="checkbox"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      {data.name}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-2 text-center my-auto">
        <span>
        <BiEditAlt onClick={() => editField(item)} className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="edit" />
        <RiDeleteBin6Line onClick={() => removeData(item)} color="#C32929" className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="delete" />
        </span>
        </div>
        </div>
      </>
    );
  };

  const renderRadioField = (item, index) => {
    // console.log("renderRadioField", item);
    return (
      <div key={index} className="col row g-0 mt-1 p-2">
        <div className="col-10">
        <input
          mb={2}
          disabled
          type="text"
          className="form-control"
          placeholder={item.name}
        />
        <div>
          {item.items &&
            item.items.map((data, index) => {
              return (
                <div className="form-check form-check-inline ml-2 mt-1">
                  <input
                    disabled
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    {data.name}
                  </label>
                </div>
              );
            })}
        </div>
        </div>
        <div className="col-2 text-center my-auto">
        <span>
        <BiEditAlt onClick={() => editField(item)} className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="edit" />
        <RiDeleteBin6Line onClick={() => removeData(item)} color="#C32929" className="mx-2 pointer" size={"1rem"} data-bs-toggle="tooltip" data-bs-placement="top" title="delete" />
        </span>
        </div>
      </div>
    );
  };

  const renderFormFields = () => {
    return (
      <div className="my-3 mx-2 px-5 py-3 form col-lg-6 card order-2">
      <span className="fs-4 fw-bold ps-2">Preview</span>
        {fieldBank &&
          fieldBank.map((item, index) => {
            return (
              <div classNameName={"col-lg-12 m-2 "}>
                {item.type === "1"
                  ? renderSingleInputBox(item, index)
                  : item.type == "2"
                  ? textArea(item, index)
                  : item.type === "3"
                  ? DropDown(item, index)
                  : item.type === "4"
                  ? CheckBox(item)
                  : item.type === "5"
                  ? renderRadioField(item)
                  : null}
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className={"row"}>
      <MainBreadcrum
        name="Form Builder"
        subName=""
        links={[
          { path: "/", title: "" },
          { path: "", title: "Form Builder", activeLink: true },
        ]}
      />
      {renderFormBuilder()}
      <>
        {!showModal ? (
          <>
            <>{renderModelBox()}</>
            <>{fieldBank.length > 0 ? renderFormFields() : null}</>
          </>
        ) : (
          renderEditBox()
        )}
      </>
    </div>
  );
};

export default FormBuilder;
