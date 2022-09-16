import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BsEyeFill, BsCartCheck } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

// import StripeCheckout from "react-stripe-checkout";
// local imoprts
import {
  deleteUserPlan,
  getAllPlans,
} from "../../../../Redux/features/PlansSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
// import Footer from "../../../../layout/Footer";
import DeletePopup from "../../../common/DeletePopup";

// import Spinner from "../../../common/Spinner";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";

const Plan = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAllow, setIsAllow] = useState(false);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  // const [lastPage, setLastPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const { Plans, error, status } = useSelector((state) => state.Plan);
  const { permissions } = useSelector((state) => state.Auth);

  // const plans = useSelector(selectAllPlans())
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [getId, setId] = useState(null);

  useEffect(() => {
    if (Plans?.length === 0) {
      dispatch(getAllPlans());
    }
  }, [Plans?.length, dispatch]);

  const handlePageClick = async (data) => {
    // // console.log(data.selected);
  };

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteUserPlan(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Plans"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Plans", activeLink: true },
          ]}
        />
        {permissions.includes("Plans-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/subscription/create">
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
                        <th>Name</th>
                        <th>No of Months</th>
                        <th>Price Per Month</th>
                        <th>Discount</th>
                        <th>Price Per Person</th>
                        <th>Price Per User</th>
                        <th>Price Per Gb</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody className="table-border-bottom-0">
                      {Plans?.map((plan) => (
                        <tr key={plan.id}>
                          <th scope="row">{plan.name}</th>
                          <th scope="row">{plan.noOfMonths}</th>
                          <th scope="row">{plan.pricePerMonth}</th>
                          <th scope="row">{plan.discount}</th>
                          <th scope="row">{plan.pricePerSensor}</th>
                          <th scope="row">{plan.pricePerUser}</th>
                          <th scope="row">{plan.pricePerGb}</th>
                          <th scope="row">{plan.isActive}</th>

                          <td className="py-0">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center ml-n1">
                              {permissions.includes("Plan-Purchase") ? (
                                <Link
                                  className="dropdown-item hover-green p-3 text-center me-4 rounded pointer "
                                  to={`/form/${plan.id}`}
                                  state={{ id: plan.id }}
                                >
                                  <BsCartCheck size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Plan-View") ? (
                                <Link
                                  className="dropdown-item hover-green p-3 text-center me-4 rounded pointer "
                                  to={`/edit-subscription/${plan.id}`}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Plan-Delete") ? (
                                <button
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer "
                                  to="#"
                                  onClick={() => {
                                    handleOpen();
                                    setId(plan.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </button>
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
                  pageCount={pageCount}
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
        <DeletePopup
          handleClose={handleClose}
          open={open}
          setIsAllow={setIsAllow}
        />
      </div>
    </>
  );
};

export default Plan;
