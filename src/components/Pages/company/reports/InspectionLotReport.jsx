import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { BsEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import MainBreadcrum from "../../../../components/layout/MainBreadcrum";
import { getInspectionLotReports } from "../../../../Redux/features/InspectionLotReportSlice";

const InspectionLotReport = () => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(0);

  const { lotReport } = useSelector((state) => state.InspectionLotReport);

  useEffect(() => {
    dispatch(getInspectionLotReports());
    // // // console.log(plans);
  }, [dispatch]);

  //   const handelDelete = (e, itemId) => {
  //     e.preventDefault();
  //     // // console.log("item deleted");
  //     dispatch(deleteLots(itemId));
  //   };
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Inspection Lot"
          subName="Report"
          links={[
            { path: "/", title: "" },
            { path: "", title: "Inspection Lot", activeLink: true },
          ]}
        />
        {/* <div className="col-4 align-self-center text-end">
          <Link to="/inspection-lot/create">
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </Link>
        </div> */}
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
                <table className="table">
                  <thead>
                    <tr className="text-nowrap">
                      <th>Lot Number</th>
                      <th>Reference Number</th>
                      <th>Lot Qty</th>
                      <th>Material</th>
                      <th>Plant</th>
                      <th>Events</th>
                      <th>Inspectors</th>
                      <th>Inspection Plan</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {lotReport?.map((insp) => (
                      <tr key={insp.id}>
                        <th scope="row">{insp.id}</th>
                        <td>{insp.referenceNo}</td>
                        <td>{insp.lotQty}</td>
                        <td>{insp?.material?.materialText}</td>
                        <td>{insp?.plant?.id}</td>
                        <td>{insp.eventFlag}</td>
                        <td>{insp?.assignUsers.length}</td>
                        <td>{insp?.inspectionPlan?.name}</td>
                        <td>{insp.createdAt}</td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <Link
                              className="dropdown-item hover-green p-3 text-center me-4 rounded"
                              to={`/step-report/${insp.id}/${insp.eventFlag}`}
                            >
                              <BsEyeFill size={"1rem"} />
                            </Link>
                            {/* <span
                              className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                              //   onClick={(e) => handelDelete(e, insp?.id)}
                            >
                              <RiDeleteBin6Line size={"1rem"} />
                            </span> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspectionLotReport;
