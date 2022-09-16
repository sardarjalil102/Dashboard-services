import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

import { API, key } from "../../../../config";
import Spinner from "../../../common/Spinner";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminLogs } from "../../../../Redux/features/AdminLogsSlice";

const AdminLog = () => {
  const dispatch = useDispatch();
  const {
    AdminLogs: { logs, status },
    Auth: { currentUser },
  } = useSelector((state) => state);
  useEffect(() => {
    if (currentUser.id) {
      dispatch(getAllAdminLogs(currentUser.id));
    }
  }, [currentUser.id, dispatch]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Admin Logs"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Admin Logs", activeLink: true },
          ]}
        />
        
      </div>
      <div className="mt-3">
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-md-8"></div>
                <div className="col-4">
                  <div className="input-group rounded">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="table-responsive text-nowrap">
                {status === "loading" ? (
                  <>
                    <TableLoading />
                  </>
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>ID</th>
                        <th>Log</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {logs?.map((roles) => (
                        <tr>
                          <th scope="row">{roles.id}</th>
                          <td>{roles.name}</td>
                          <td>{roles.isCompany}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLog;
