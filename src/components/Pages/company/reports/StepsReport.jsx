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
import { Link, useParams } from "react-router-dom";
import { getStepsReports } from "../../../../Redux/features/InspectionLotReportSlice";

const StepsReport = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  //   const [currentPagination, setcurrentPagination] = useState({});
  //   const [offset, setOffset] = useState(1);

  const { stepsReport, error, status } = useSelector(
    (state) => state.InspectionLotReport
  );

  const { id, flag } = useParams();
  // const plans = useSelector(selectAllPlans())

  useEffect(() => {
    dispatch(getStepsReports({ id, flag }));
    // // console.log(flag);
  }, [dispatch, flag, id]);

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
              path: "",
              title: "Steps",
              activeLink: true,
            },
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
                  <TableLoading />
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>TITLE</th>
                        <th>Order NO</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {stepsReport?.lenght === 0 ? (
                        <tr>
                          {" "}
                          <td>
                            {" "}
                            <h4>No Data Available </h4>
                          </td>
                        </tr>
                      ) : (
                        stepsReport?.map((step) => (
                          <tr key={step.id}>
                            <td>{step?.title}</td>
                            <td>{step?.orderNo}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  className="dropdown-item hover-green p-3 text-center me-4 rounded"
                                  to={`/qc-report/${id}/steps/${step?.id}`}
                                  state={{ id, flag }}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
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

export default StepsReport;
