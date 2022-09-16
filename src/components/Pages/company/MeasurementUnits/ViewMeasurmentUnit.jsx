import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API, key } from "../../config";

const ViewMeasurmentUnit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    const config = {
      method: "get",
      url: key.server.api + `/measurement-units/${id}`,
      headers: {
        companyId: "1",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setCode(response.data.data.code);
        setName(response.data.data.name);
        setType(response.data.data.unitType);
      })

      .catch(function (error) {
       // // // console.log(error);
      });
  }, []);

  return (
 <>
              <div className="row">
                <div className="col-6">
                  <h2
                    style={{ fontFamily: "Rubik, sans-serif" }}
                    className="py-3 mb-2"
                  >
                    Measurement Units <span className="fs-5">- View</span>
                  </h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/measurement-units">Measurement Units</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        View
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <form>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-1"
                            htmlFor="code"
                          >
                            Code:*
                          </label>
                          <div className="col-sm-11">
                            <input
                              type="number"
                              className="form-control"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                              id="code"
                              placeholder="Enter Code"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-1"
                            htmlFor="name"
                          >
                            NAME:*
                          </label>
                          <div className="col-sm-11">
                            <input
                              id="name"
                              type="text"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-form-label col-sm-1"
                            htmlFor="type"
                          >
                            TYPE:
                          </label>
                          <div className="col-sm-11">
                            <select
                              id="type"
                              className="form-select"
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              aria-label="Default select example"
                            >
                              <option selected>Select</option>
                              <option value="sap">Sap</option>
                              <option value="non-sap">Non-Sap</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <div className="col-md-6"></div> */}
                  </div>
                </div>
              </div>
           </>
  );
};

export default ViewMeasurmentUnit;
