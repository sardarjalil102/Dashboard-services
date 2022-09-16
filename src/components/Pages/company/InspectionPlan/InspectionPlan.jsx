import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

// local imoprts
import {
  deleteInspectoinPlan,
  fetchInspectionPlans,
} from "../../../../Redux/features/InspectionPlanSlice";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const InspectionPlan = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const { plans, error, status, paginationData } = useSelector(
    (state) => state.InspectionPlan
  );
  const { permissions } = useSelector((state) => state.Auth);

  // const plans = useSelector(selectAllPlans())

  useEffect(() => {
    // if (plans?.length < 0) {
    dispatch(fetchInspectionPlans(offset));
    // }
    // // // console.log(plans);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    // // console.log(paginationData);

    setcurrentPagination({
      ...currentPagination,
      currentPage: paginationData?.currentPage,
    });
    setcurrentPagination({
      ...currentPagination,
      perPage: paginationData?.perPage,
    });
    setcurrentPagination({
      ...currentPagination,
      lastPage: paginationData?.lastPage,
    });
    setcurrentPagination({
      ...currentPagination,
      total: Math.ceil(paginationData?.total / paginationData?.perPage),
    });
  }, [paginationData]);

  const handlePageClick = async (event) => {
    const selectedPage = event.selected;
    // // console.log(selectedPage);
    dispatch(fetchInspectionPlans(selectedPage + 1));

    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteInspectoinPlan(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  return (
    <>
      {error && <span>{error}</span>}
      <div className="row">
        <MainBreadcrum
          name="Inspection Plan"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Inspection Plan", activeLink: true },
          ]}
        />
        {permissions.includes("InspectionPlan-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/inspection-plan/create">
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </Link>
          </div>
        ) : null}
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
                        {/* <th>SUBTITLE</th> */}
                        <th>STEPS</th>
                        <th>QC POINTS</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody className="table-border-bottom-0">
                      {plans?.map((plan) => (
                        <tr key={plan.id}>
                          <td className="fw-semibold">{plan.title}</td>
                          <td>{plan?.steps?.length}</td>
                          {/* <td></td> */}
                          <td>
                            {plans?.map(
                              ({ steps }) => steps["qcPoints"]?.length
                            )}
                          </td>
                          <td className="py-0">
                            <span className="d-flex align-items-center justify-content-center ml-n1">
                              {permissions.includes("InspectionPlan-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded"
                                  to={`/inspection-plan/view/${plan.id}`}
                                  state={{ id: plan.id }}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("InspectionPlan-Delete") ? (
                                <span
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  onClick={() => {
                                    handleOpen();
                                    setId(plan.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </span>
                              ) : null}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  pageCount={currentPagination.total}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center mt-3"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active12"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeletePopup
        handleClose={handleClose}
        open={open}
        setIsAllow={setIsAllow}
      />
    </>
  );
};

export default InspectionPlan;
