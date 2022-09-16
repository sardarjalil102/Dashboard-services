import React, { useState } from "react";
import { API, key } from "../../../../config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGroups } from "../../../../Redux/features/WorkFlowGroupSlice";
import { getAllCatogries } from "../../../../Redux/features/CategorySlice.js";
import { uploadFile } from "../../../../Redux/features/FileSlice.js";
import { BiImageAdd } from "react-icons/bi";
import { saveWorkflowEnableForm } from "../../../../Redux/features/FormSlice.js";
import ToggleButton from "react-toggle-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MainBreadcrum from "../../../layout/MainBreadcrum";
const FixedFields = () => {
  const BaseUrl = key.server.api;
  const ref = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();
  const ref4 = React.useRef();
  const ref5 = React.useRef();
  const ref6 = React.useRef();
  const ref7 = React.useRef();
  const ref8 = React.useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [rejectionCode, setRejectionCode] = useState("");
  const [rejectionText, setRejectionText] = useState("");
  const [groups, setGroups] = React.useState([]);
  const [child, setChild] = React.useState([]);
  const [allCatagories, setAllCatagories] = React.useState([]);
  const [documents, setDocuments] = React.useState([]);
  const [mediaId, setMediaId] = React.useState([]);
  const [value, setValue] = useState({
    from: "",
    to: "",
    title: "",
    amount: "",
    detail: "",
    groupId: "",
    location: "lhr",
    department: "none",
    categoryId: "",
    processTypeId: "",
  });

  // form validation rules
  const validationSchema = Yup.object().shape({
    rejectionCode: Yup.string().required("Code is required"),
    rejectionText: Yup.string().required("Text is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const workFlowApproval = () => {
    let data = value;
    data.documents = mediaId;
    data.details = text;
    dispatch(saveWorkflowEnableForm({
      data:data,
      onResponse:()=>{
        emptyValue()
      }
    }));
  };

  const handleChange = (value) => setText(value);

  const getSigleCatagory = (id) => {
    handleonChange(id, "categoryId");
    let cId = id.target.value;
    allCatagories.map((item, index) => {
      if (item.id == cId) {
        setChild(item.child);
      }
    });
  };

  const emptyValue=()=>{
    ref.current.value ="";
    ref1.current.value ="";
    ref2.current.value ="";
    ref3.current.value ="";
    ref4.current.value ="";
    ref5.current.value ="";
    ref6.current.value ="";
    ref7.current.value ="";
    ref8.current.value =""
  }

  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    setValue({
      ...value,
      [key]: ev,
    });
  };

  const handleFile = (e) => {
    setDisable(!disable);
    documents.push(e.target.files);
    var bodyFormData = new FormData();
    for (const images of e.target.files) {
      bodyFormData.append("file", images);
      dispatch(
        uploadFile({
          data: bodyFormData,
          onResponse: (data) => {
            if (data) {
              setDisable(false);
              mediaId.push(data.id);
            }
          },
        })
      );
    }
  };

  React.useEffect(() => {
    setGroups(state.WorkFlowGroup.allGroups);
  }, [state.WorkFlowGroup.allGroups]);

  React.useEffect(() => {
    setAllCatagories(state.catogries.allCategories);
  }, [state.catogries.allCategories]);

  React.useEffect(() => {
    dispatch(fetchAllGroups());
    dispatch(getAllCatogries());
  }, []);

  return (
    <>
      <>
        <div className="row">
          <MainBreadcrum
            name="Fixed Form Field"
            subName=""
            links={[
              { path: "/", title: "" },
              { path: "", title: "Create Form", activeLink: true },
            ]}
          />
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="title">
                    From
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control rounded"
                      id="title"
                      ref={ref}
                      onChange={(e) => handleonChange(e, "from")}
                      placeholder="Approval for XYZ Task"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="title">
                    To
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control rounded"
                      id="title"
                      ref={ref1}
                      onChange={(e) => handleonChange(e, "to")}
                      placeholder="Approval for XYZ Task"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="title">
                    TITLE (100 Chars)
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control rounded"
                      onChange={(e) => handleonChange(e, "title")}
                      id="title"
                      ref={ref2}
                      placeholder="Approval for XYZ Task"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="amount">
                    AMOUNT
                  </label>
                  <div className="col-sm-10">
                    <div class="form-outline">
                      <input
                        onChange={(e) => handleonChange(e, "amount")}
                        type="number"
                        id="typeNumber"
                        ref={ref3}
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="category">
                    CATEGORY
                  </label>
                  <div className="col-sm-10">
                    <select
                      onChange={(e) => getSigleCatagory(e)}
                      class="mt-2 form-control form-select"
                      aria-label="Default select example"
              
                    >
                      {allCatagories &&
                        allCatagories.map((item, index) => {
                          return (
                            <option ref={ref4} value={item.id} key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="category">
                    Child
                  </label>
                  <div className="col-sm-10">
                    <select
                      class="mt-2 form-control form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleonChange(e, "processTypeId")}
                    >
                      {child &&
                        child.map((item, index) => {
                          return (
                            <option ref={ref5} value={item.id} key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>

                <div style={{ height: "155px" }} className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="group">
                    Details
                  </label>
                  <div className="col-sm-10">
                    <ReactQuill
                      className="rounded"
                      style={{ height: "120px" }}
                      value={text}
                      ref={ref6}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="group">
                    GROUP
                  </label>
                  <div className="col-sm-10">
                    <select
                      onChange={(e) => handleonChange(e, "groupId")}
                      class="mt-2 form-control form-select"
                      aria-label="Default select example"
                    >
                      {groups.map((item, index) => {
                        return (
                          <option ref={ref7} value={item.id} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-form-label col-sm-2" htmlFor="address">
                    Upload Attachment
                  </label>
                  <div className="col-sm-5">
                    <label className="row mt-2 w-100 justify-content-center align-items-center m-auto pointer img-upload-C">
                      <BiImageAdd
                        color="#677788"
                        style={{ color: "#677788", marginBottom: "15px" }}
                        size={"6rem"}
                      />
                      <input
                        onChange={handleFile}
                        ref={ref8}
                        type="file"
                        name="images"
                        id="imgid"
                        className="imgcls"
                        accept=".jfif,.jpg,.jpeg,.png,.gif"
                        multiple
                      />
                    </label>
                  </div>
                </div>
                <div className="mb-3 row text-center">
                  <label
                    className="col-form-label col-sm-2"
                    htmlFor="address"
                  ></label>
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-2"
                      htmlFor="address"
                    ></label>
                    <div className="col-sm-10">
                      <button
                        onClick={() => workFlowApproval()}
                        type="submit"
                        disabled={disable}
                        class="btn m-10 mb-3 align-self-lg-center col-lg-2 btn-primary mt-3"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default FixedFields;