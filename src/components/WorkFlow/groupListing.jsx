import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { API, key } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import { getAllUsers } from "../../Redux/features/UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createGroup,
  getAllGroupsUsers,
} from "../../Redux/features/WorkFlowGroupSlice";
import { useNavigate } from "react-router-dom";
import ShowFormDetail from "../Pages/FormBank/ShowFormDetail";
const UserList = () => {
  const [groupName, setGroupName] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState([]);
  const [approverUser, setApproverUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.Users.users);
  // console.log("allUsers", allUsers);
  const [users, setUsers] = React.useState();
  const role = ["Viewer", "Approver"];
  // console.log("allUsers", users);
  const addGroup = () => {
    const hasApprover = selectedUser.some(function (item) {
      return item.role === "Approver";
    });
    if (!hasApprover && selectedUser.length > 1) {
      toast.error("You need to select at least one approver!", {
        position: toast.POSITION.TOP_RIGHT,
        backgroud: "red",
      });
    } else {
      let newArray = selectedUser;
      selectedUser.map((item, index) => {
        delete newArray[index]["username"];
        delete newArray[index]["email"];
        newArray[index].serialNo = index + 1;
        newArray[index].userId = newArray[index].id;
        delete newArray[index]["id"];
        newArray[index].role =
          newArray.length == 1
            ? "A"
            : newArray[index].role == "Approver"
            ? "A"
            : "R";
      });
      let body = {
        name: groupName,
        users: newArray,
      };
      dispatch(createGroup(body));
    }
  };

  React.useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const switchUser = (item, index) => {
    const filter = users.filter((data) => data.id != item.id);
    let obj = {};
    obj.username = item.username;
    obj.role = "Viewer";
    obj.id = item.id;
    obj.email = item.email;
    setUsers(filter);
    selectedUser.push(obj);
  };

  const removeUser = (item) => {
    const filterItem = selectedUser.filter((data) => data.id != item.id);
    setSelectedUser(filterItem);
    users.push(item);
  };

  const changeElementValue = (obj, val) => {
    let array = [];
    array.push(val.target.value);
    const newarry = selectedUser.map((item, index) => {
      if (item.id === obj.id) {
        val.target.value === "Approver"
          ? setApproverUser(item.id)
          : setApproverUser(null);
        return { ...item, role: val.target.value };
      }
      return item;
    });
    setSelectedUser(newarry);
  };

  const renderUserList = (data) => {
    return (
      <div
        style={{ height: 200, overflowY: "scroll" }}
        class={'col justify-content-between flex-column" mt-4'}
      >
        <table class="table sortable">
          <thead>
            <tr>
              <th>User Email</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td>
                        <button
                          onClick={() => switchUser(item, index)}
                          style={{
                            backgroundColor: data === "Add" ? "Green" : "red",
                          }}
                          type="submit"
                          class="btn btn-danger border border-secondary"
                        >
                          {data}
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  };

  const renderGroupList = (data) => {
    return (
      <div class={'col justify-content-between flex-column" mt-4'}>
        <table class="table table-responsive">
          <thead>
            <tr>
              {/* 
             <th>Email</th>
             */}
              <th>sr</th>
              <th>Name</th>
              <th>Action</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {selectedUser
              ? selectedUser.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.username}</td>
                      <td>
                        <button
                          onClick={() => removeUser(item)}
                          style={{
                            backgroundColor: data === "Add" ? "Green" : "red",
                          }}
                          type="submit"
                          class="btn btn-danger border border-secondary"
                        >
                          {data}
                        </button>
                      </td>
                      <td>
                        {selectedUser.length > 1 ? (
                          <select
                            onChange={(vale) => changeElementValue(item, vale)}
                            style={{
                              padding: 2,
                              backgroundColor: "blue",
                              borderRadius: 2,
                              height: "40px",
                              width: "100px",
                            }}
                            className="form btn-sm btn-primary"
                          >
                            {approverUser === null
                              ? role.map((n) => {
                                  return (
                                    <option isOptionDisabled={true} value={n}>
                                      {n}
                                    </option>
                                  );
                                })
                              : approverUser !== null &&
                                approverUser === item.id
                              ? role.map((n) => {
                                  return (
                                    <option isOptionDisabled={true} value={n}>
                                      {n}
                                    </option>
                                  );
                                })
                              : ["Viewer"].map((n) => {
                                  return (
                                    <option isOptionDisabled={true} value={n}>
                                      {n}
                                    </option>
                                  );
                                })}
                          </select>
                        ) : (
                          <select
                            disabled
                            style={{
                              padding: 2,
                              backgroundColor: "blue",
                              borderRadius: 2,
                              height: "40px",
                              width: "100px",
                            }}
                            className="form btn-sm btn-primary"
                          >
                            {role.map((n) => (
                              <option value={n}>Approver</option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td></td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  };

  const renderUserListView = () => {
    return (
      <div style={{ marginTop: 10 }} class="container ">
        <div class="row">
          <div
            style={{ flexDirection: "column" }}
            class="col card  justify-content-between p-4 flex-direction-row m-2"
          >
            <h4 style={{ color: "black" }}>User List</h4>
            <hr class="my-12" />
            {renderUserList("Add")}
          </div>
          <div
            style={{ flexDirection: "column" }}
            class="col card  justify-content-between p-4 flex-direction-row m-2"
          >
            <div
              style={{ flexDirection: "row", boxShadow: "none" }}
              className={"col card justify-content-between  flex-direction-row"}
            >
              <h4 style={{ color: "black" }}>Group User List</h4>
              {/* <button type="submit" class="btn btn-primary border border-secondary">Send</button> */}
            </div>
            <hr class="my-12" />
            {renderGroupList("X")}
          </div>
        </div>
      </div>
    );
  };

  const renderCreatForm = () => {
    return (
      <div class="container ">
        <ShowFormDetail />
        <div
          style={{ marginLeft: 2 }}
          class="col card  justify-content-between p-4 flex-direction-row m-2"
        >
          <h2>Create Group</h2>
          <form>
            <div class="form-group">
              <label for="pwd">Group:</label>
              <input
                type="text"
                class="form-control"
                id="grp"
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter Group Name"
                name="group"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <div className="layout-page">
          {renderCreatForm()}
          {renderUserListView()}
          <button
            disabled={groupName ? false : true}
            style={{ marginRight: 10 }}
            onClick={() => addGroup()}
            type="submit"
            class="btn m-10 align-self-lg-center col-lg-2 btn-primary mt-3"
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;