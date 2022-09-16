import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
// import { BiEditAlt } from "react-icons/bi";
// import { RiDeleteBin6Line } from "react-icons/ri";

// local imoprts
import TableLoading from "../../../../components/common/SkeltonLoading/TableLoading";
import MainBreadcrum from "../../../../components/layout/MainBreadcrum";
import { Link, useLocation, useParams } from "react-router-dom";
import { getQcPointReports } from "../../../../Redux/features/InspectionLotReportSlice";

const QcPointReport = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { qcPointReport, error, status } = useSelector(
    (state) => state.InspectionLotReport
  );

  const { id, stepId } = useParams();

  useEffect(() => {
    dispatch(getQcPointReports({ id, stepId }));
    // // console.log(state);
  }, [dispatch, id, stepId]);

  return (
    <>
      {error && <span>{error}</span>}
      <div className="row">
        <MainBreadcrum
          name="Inspection Lot"
          subName="Report"
          links={[
            { path: "/", title: "" },
            {
              path: "/inspection-lot-report",
              title: "Inspection Lot",
              // activeLink: true,
            },
            {
              path: `/step-report/${state?.id}/${state?.flag}`,
              title: "Steps",
              // activeLink: true,
            },
            {
              path: "",
              title: "Qc Point",
              activeLink: true,
            },
          ]}
        />
        {/* <div className="col-4 align-self-center text-end">
          <Link to="/inspection-plan/create">
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
                {status === "loading" ? (
                  <TableLoading />
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>TITLE</th>
                        <th>Order NO</th>
                        <th>Type</th>
                        <th>Measurement Type</th>
                        <th>Min value</th>
                        <th>Max Value</th>
                        <th>Entered Value</th>
                        <th>Result</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {qcPointReport?.map((qc) => (
                        <tr key={qc.id}>
                          <td>{qc?.title}</td>
                          <td>{qc?.order}</td>
                          <td>
                            {qc?.isMeasurement === 1
                              ? "Quantitative"
                              : "Qualitative"}
                          </td>
                          <td>{qc?.measurementUnit}</td>
                          <td>{qc?.passMinRange}</td>
                          <td>{qc?.passMaxRange}</td>
                          <td>{qc?.status}</td>
                          <td>{qc?.qcResult}</td>
                          {/* <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <Link
                                className="dropdown-item hover-green p-3 text-center me-4 rounded"
                                to={`#`}
                              >
                                <BsEyeFill size={"1rem"} />
                              </Link>
                            </div>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                    {/* )} */}
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

export default QcPointReport;
