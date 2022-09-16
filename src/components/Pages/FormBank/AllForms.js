import React from "react";
import Sidebar from "../../layout/components/Sidebar.jsx";
import Header from "../../layout/components/Header";
import { API, key } from "../../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import {
  getAllForms,
  deleteForm,
  saveEnableForm,
} from "../../../Redux/features/FormSlice";
import { uploadFile } from "../../../Redux/features/FileSlice";
import { BiEditAlt } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { fetchAllGroups } from "../../../Redux/features/WorkFlowGroupSlice";
import MainBreadcrum from "../../layout/MainBreadcrum";
import "./formbank.css";
import { useDispatch, useSelector } from "react-redux";
const AllForms = () => {
  const [allForms, setAllForms] = React.useState([]);
  const [singleForm, setSingleForm] = React.useState();
  const [groups, setGroups] = React.useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState();
  const [fieldData, setFieldData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [mediaId, setMediaId] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let state = useSelector((state) => state);
  const { WorkFlowGroup } = state;
  const gender = ["Male", "Female"];
  const BaseUrl = key.server.api;
  var config = {
    method: "get",

    // headers: {
    //   companyId: "1",
    //   Authorization: `Bearer ${key.token}`,
    // },
  };

  const handleonChange = (item) => {
    setSelectedGroup(item);
  };

  const getForms = () => {
    config.url = `${BaseUrl}/workflow-form-builders`;
    config.method = "get";
    axios(config)
      .then(function (response) {
        // console.log("response", response.data.data);
        setAllForms(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const deletForm = (item) => {
    dispatch(
      deleteForm({
        id: item.id,
        onResponse: (data) => {
          if (data) {
            let filterForms = allForms.filter((data) => data.id != item.id);
            setAllForms(filterForms);
          }
        },
      })
    );
  };

  const goTo = (item) => {
    // console.log('item is', item)
    localStorage.setItem("updatedFormData", JSON.stringify(item));
    let a = localStorage.getItem("updatedFormData");
    // console.log('a', JSON.parse(a))
    navigate("/updateForm");
  };

  const SaveEnabledForm = () => {
    let obj = {
      formId: singleForm && singleForm.id,
      groupId: selectedGroup,
      mediaId: mediaId,
      // fieldsData:fieldData
    };
    let array = [];
    singleForm.fields.map((item, index) => {
      let dataObj = {};
      dataObj.fieldId = item.id;
      dataObj.type = item.type;
      dataObj.value = item.value;
      array.push(dataObj);
    });
    obj.fieldsData = array;
    config.url = `${BaseUrl}/workflow-save-form`;
    config.method = "post";
    config.data = obj;
    dispatch(saveEnableForm(obj));
  };

  React.useEffect(() => {
    getForms();
    dispatch(fetchAllGroups());
  }, []);

  React.useEffect(() => {
    setGroups(WorkFlowGroup.allGroups);
  }, [WorkFlowGroup.allGroups]);

  const handleOnchange = (e, data) => {
    let tempArray = singleForm;
    tempArray.fields.map((item, index) => {
      if (item.id == data.id) {
        item.value = e.target.value;
      }
    });
  };

  const handleCheckBox = (e, data) => {
    singleForm.fields.map((item, index) => {
      if (item.id === data.id) {
        let newItem = [];
        newItem.push(e);
        item.value = newItem;
      }
    });
  };

  const handleRadioButton = (e, data) => {
    singleForm.fields.map((item, index) => {
      if (item.id === data.id) {
        item.value = e;
      }
    });
  };

  const handleFile = (e) => {
    var bodyFormData = new FormData();
    bodyFormData.append("file", e.target.files[0]);
    dispatch(
      uploadFile({
        data: bodyFormData,
        onResponse: (data) => {
          if (data) {
            setMediaId(data.id);
          }
        },
      })
    );
  };

  const renderInput = (item) => {
    return (
      <div className="form-group">
        <input
          type="email"
          className="my-3 form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={item.name}
          onChange={(e) => handleOnchange(e, item)}
        />
      </div>
    );
  };

  const renderTextArea = (item) => {
    return (
      <div className="form-group">
        <textarea
          type="text"
          placeholder={item.name}
          className="my-3 form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => handleOnchange(e, item)}
        ></textarea>
      </div>
    );
  };

  const renderDropDown = (item) => {
    let i = item.items && item.items;
    return (
      <select
        onChange={(e) => handleOnchange(e, item)}
        className="form-select my-3"
        aria-label="Default select example"
      >
        {i &&
          i.map((data, index) => {
            return (
              <>
                <option value="" disabled selected hidden>
                  Please Choose...
                </option>
                <option key={index}>{data.name}</option>
              </>
            );
          })}
      </select>
    );
  };

  const renderCheckBox = (item) => {
    // console.log("renderCheckBox item is", item);
    return (
      <div className="form-group">
        <input
          type="email"
          disabled
          className="my-3 form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={item.name}
        />
        {item.items &&
          item.items.map((data, index) => {
            return (
              <>
                <div key={index} className="m-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onClick={(e) => handleCheckBox(data.name, item)}
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    {data.name}
                  </label>
                </div>
              </>
            );
          })}
      </div>
    );
  };

  const renderRadioButton = (item) => {
    return (
      <div className="form-group">
        <input
          type="email"
          disabled
          className="m-2 form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={item.name}
        />
        {item.items &&
          item.items.map((data, index) => {
            return (
              <div key={index} className="m-2 form-check">
                <input
                  onClick={(e) => handleRadioButton(data.name, item)}
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  {data.name}
                </label>
              </div>
            );
          })}
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="row my-3 mx-2">
        <div className="col-sm-7 px-0">
          <div className="card">
            <div className="p-2 card-body table-wrapper-scroll-y my-custom-scrollbar">
              {/* <h4>All Forms</h4> */}
              {allForms.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Form name</th>
                      <th scope="col">Form Type</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allForms &&
                      allForms.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>
                              {item.isWorkflowEnabled == 1
                                ? "Work Flow Enabled Form"
                                : "General Form"}
                            </td>
                            <td>
                              <div className="d-flex align-items-center justify-content-end">
                                {item.isWorkflowEnabled == 1 ? (
                                  <span
                                    onClick={() => setSingleForm(item)}
                                    className="pe-2 text-center rounded pointer "
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Add"
                                  >
                                    <CgAdd size={"0.9rem"} />
                                  </span>
                                ) : null}
                                <span
                                  onClick={() => goTo(item)}
                                  className="pe-2 text-center rounded pointer "
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="edit"
                                >
                                  <BiEditAlt size={"0.9rem"} />
                                </span>
                                <span
                                  onClick={() => deletForm(item)}
                                  className="text-center rounded pointer "
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="delete"
                                >
                                  <RiDeleteBin6Line size={"0.9rem"} />
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                  }}
                  className={"d-flex j"}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU"
                    className="img-fluid p-1"
                    alt="Responsive image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body px-4 table-wrapper-scroll-y my-custom-scrollbar">
              {/* <h5 className="card-title">User Form</h5> */}
              {singleForm ? (
                <div>
                  <input
                    value={`${singleForm?.name}(${
                      singleForm.isWorkflowEnabled != 1
                        ? "General Form"
                        : "Work Flow Enabled Form"
                    })`}
                    type="text"
                    disabled
                    className="my-3 form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <input
                    // type="text"
                    onChange={handleFile}
                    className="my-3 form-control"
                    type="file"
                    name="images"
                    id="imgid"
                  />
                  {/* <input onChange={handleFile} className="m-2 form-control" type="file" name="images" id="imgid" classNameName="imgcls"  /> */}
                  <select
                    onChange={(e) => handleonChange(e.target.value)}
                    className="my-3 form-control form-select"
                    aria-label="Default select example"
                  >
                    {groups &&
                      groups.map((item, index) => {
                        return (
                          <option value={item.id} key={index}>
                            {item?.name}
                          </option>
                        );
                      })}
                  </select>
                  {singleForm &&
                    singleForm.fields.map((item, index) => {
                      return (
                        <form key={index}>
                          {item.type == 1
                            ? renderInput(item)
                            : item.type == 2
                            ? renderTextArea(item)
                            : item.type == 3
                            ? renderDropDown(item)
                            : item.type == 4
                            ? renderCheckBox(item)
                            : renderRadioButton(item)}
                        </form>
                      );
                    })}
                  <div className="row">
                    <div className="col-12 align-self-center text-center">
                      <button
                        onClick={() => SaveEnabledForm()}
                        className="btn btn-primary"
                      >
                        {" "}
                        Save{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                  }}
                  className={"d-flex j"}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU"
                    className="img-fluid p-1"
                    alt="Responsive image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <MainBreadcrum
        name="Forms"
        subName=""
        links={[
          { path: "/", title: "" },
          { path: "", title: "Forms", activeLink: true },
        ]}
      />
      <div className="layout-page">{renderForm()}</div>
    </div>
  );
};

export default AllForms;
