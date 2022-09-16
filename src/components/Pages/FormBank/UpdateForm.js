import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes, Link, useLocation,useNavigate } from "react-router-dom";

// local imports

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./formbank.css";
import { API, key } from "../../../config";
import MainBreadcrum from "../../layout/MainBreadcrum";
import { ToastContainer, toast }from 'react-toastify';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  createFormFields,
  getAllFormFields,
  deleteFormField,
  updateFormField,
  updateUserForm,
} from "../../../Redux/features/FormSlice"
const FormBuilder = () => {
  const [show, setShow] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const [type, setType] = React.useState("1");
  const [model, setModel] = React.useState(false);
  const [fieldName, setFieldName] = React.useState();
  let formFields = useSelector((state) => state.Form.formFields);
  const [fieldBank, setFieldBank] = React.useState([]);
  const [groups, setGroups] = React.useState([]);
  const [updateItem, setUpdateItem] = React.useState();
  const location = useLocation();
  const navigate = useNavigate()
  const  dispatch =useDispatch()
  let  Item=localStorage.getItem('updatedFormData')
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState(false);
  const [subItem, setSubItems] = useState([]);
  const [error, setError] = React.useState(false);
  const [duplicate , setDuplicate] = React.useState(false);
  const ref = React.useRef()
  // console.log('Item')
  const { name, id, isWorkflowEnabled, instructions } = JSON.parse(Item)

  const typeRef= React.useRef()
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

  const  removeDuplicateObjectFromArray =(value)=> {
    if(fieldBank.length){
    fieldBank.map((item)=>{
         let fielName= item.name.toLowerCase()
         let newField =value.toLowerCase()
       if(fielName == newField){
        setDuplicate(true)
       }
       else{
        setDuplicate(false)
        setFieldName(value)
       }
    })
  }
  else if(fieldBank.length < 1){
      setFieldName(value)
      setDuplicate(false)  
  }
 }

 
 const updateForm = () => {
  let body = {
    name: value.formName,
  }
   
    dispatch(
      updateUserForm({
        data: body,
        onResponse: (data) => {
          navigate('/FormBuilder')
        },
        id: id,
      })
    );
 }

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
    setSubItems(item.items)
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

  const handleOnCahangeType=(item)=>{
     setType(item)
     ref.current.value = ''
     setSubItems([])
  }

  

  React.useEffect(() => {
    dispatch(getAllFormFields(id));
  }, []);

  React.useEffect(() => {
    setFieldBank(formFields);
  }, [formFields]);
  const renderFormBuilder = () => {
    return (
      <div className="my-3 mx-2 p-5 col-lg-5 card  order-1">
        <div className="row gx-2">
          <div className="col-6">
        <label for="exampleInputEmail1">Form Name</label>
        <input
          value={value.formName}
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
                {isWorkflowEnabled === 1 ?"WorkFlow Enabled Form":'General Form'}
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

  const renderModelBox = () => {
    return (
      <div className="my-3 mx-2 px-5 py-3 col-lg-5 card order-3">
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
        {hide ? (
          <div
            style={{ backgroudColor: "green" }}
            className="m-2 col-lg-3 alert alert-success align-self-lg-center"
            role="alert"
          >
            Successfully Added
          </div>
        ) : null}
        { error?  <div className="alert alert-danger mt-2" role="alert">
              Somthing Went Wrong Please Fill All the fields Carefully and try again!
          </div> :null }
          { duplicate ?  <div className="alert alert-danger mt-2" role="alert">
            your Not able to add Duplicate Fields!
          </div> :null }
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
            { subItem &&
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
          style={{ marginRight: 10 }}
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
              {
                  subItem.map((item, index) => {
                    // console.log('xitem',item)
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
        {hide ? (
          <div
            style={{ backgroudColor: "green" }}
            className="m-2 col-lg-3 alert alert-success align-self-lg-center"
            role="alert"
          >
            Successfully Update
          </div>
        ) : null}
        <div className={"align-items-col-end"}>
          <button
            disabled={itemName === "" ? true : false}
            onClick={() => handleUpdateItem()}
            style={{ marginRight: 10 }}
            type="submit"
            className="btn m-10 align-self-lg-end col-lg-4 btn-primary mt-3"
          >
            Edit 
          </button>
          <button
            onClick={() => setShowModal(false)}
            style={{ marginRight: 10 }}
            type="submit"
            className="btn m-10 align-self-lg-end col-lg-4 btn-danger mt-3"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const renderSingleInputBox = (item, index) => {
    return (
      <div key={index} className="col mt-1 row g-0 p-2">
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
      <div key={index} className="col row g-0 mt-1 p-2">
        <div className="col-10">
        <label className={"p-1"}>{item.name}</label>
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
    // console.log('DropDown item',item)
    return (
      <div key={index} className="col row g-0 mt-1 p-2">
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
        </div>
      </div>
    );
  };

  const CheckBox = (item, index) => {
    return (
      <>
        <div key={index} className="col row g-0 mt-1 p-2">
          {/* <label className={'p-1'}>{item.fieldName}</label> */}
          {/* <input disabled type="text" className="form-control" placeholder={item.fieldName} /> */}
          <div className="col-10">
          <input
            disabled
            type="text"
            className=" form-control"
            placeholder={item.name}
          />
          <div>
            {item.items&& item.items.map((data, index) => {
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
          {item.items && item.items.map((data, index) => {
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
      <div className="my-3 mx-2 px-5 py-3 form col-lg-6 align-self-center card order-2">
      <span className="fs-4 fw-bold ps-2">Preview</span>
        {fieldBank ?
          fieldBank.map((item, index) => {
            return (
              <div className={"col-lg-12 m-2 "}>
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
          }):null}
      </div>
    );
  };

  return (
    <div className={"row"}>
      <MainBreadcrum
        name="Form"
        subName=""
        links={[
          { path: "/", title: "" },
          { path: "", title: " Edit Form Builder", activeLink: true },
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
        {/* <div className="my-3 mx-2 p-3 col-lg-11 align-self-center card order-last">
        <i style={{width:'150px', hieght:40}} onClick={()=>updateForm()} className=" m-1 fas fa-edit btn align-self-center  btn-success"></i>
            </div> */}
            <div className="row order-last pe-4">
              <div className="col-lg-12 align-self-center text-end">
                <button onClick={()=>updateForm()} className="btn btn-primary">
                  Save{" "}
                </button>
              </div>
            </div>
          </>
        </div>
     
  );
};

export default FormBuilder;

