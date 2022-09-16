import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate, useLocation, createSearchParams } from "react-router-dom";
// local imports

import { createForm } from "../../../Redux/features/FormSlice";
import { useDispatch } from "react-redux";
import MainBreadcrum from "../../layout/MainBreadcrum";
const FormBuilder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    formName: "",
    isWorkFlowEnlabed: 1,
    instruction: "",
    order: 1
  });

  const workflow = [
    { id: 1, type: "isWorkFlowEnlabed" },
    { id: 0, type: "General" },
  ];

  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    setValue({
      ...value,
      [key]: ev,
    });
  };

  const AddFormFields = async () => {
    let body = {
      name: value.formName,
      isWorkflowEnabled: value.isWorkFlowEnlabed,
      instructions: value.instruction,
      order: "333",
    };
    dispatch(createForm({
      data: body,
      onResponse: (data) => {
        if (data) {
          localStorage.setItem('formInfo', JSON.stringify(data))
          navigate({
            pathname: '/editForm',
          });
        }
      }
    }));
  };

  React.useEffect(() => {
  }, [])

  const renderFormBuilder = () => {
    return (
      <div className="p-5 card ms-n1">
        <div className="row">
          <div className="col-6">
        <label for="exampleInputEmail1">Form Name</label>
        <input
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
          onChange={(e) => handleonChange(e, "isWorkFlowEnlabed")}
          className="form-control form-select"
          aria-label="Default select example"
        >
          {workflow.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.type}
              </option>
            );
          })}
        </select>
          </div>
        </div>
        <label className="mt-3">Instruction</label>
        <input
          onChange={(e) => handleonChange(e, "instruction")}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Instruction"
        />
        <button
          onClick={() => AddFormFields()}
          type="submit"
          className="btn m-10 align-self-lg-end col-lg-2 btn-primary mt-3"
        >
          Submit
        </button>
      </div>
    );
  };

  return (
    <div className="row">
      <MainBreadcrum name='Create Form' subName=''
        links={[
          { path: "/", title: "" },
          { path: "", title: "Create Form", activeLink: true },
        ]}
      />
      <div className="layout-container">
        <div className="layout-page">
          {renderFormBuilder()}
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;

