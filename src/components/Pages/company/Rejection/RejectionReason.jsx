import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

import Spinner from "../../../common/Spinner";
import { BsEyeFill } from "react-icons/bs";
// import { BiEditAlt } from "react-icons/bi";
import { MdTableView } from "react-icons/md";

import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRejectedReasons,
  fetchAllRejectedReasons,
} from "../../../../Redux/features/RejectedReasonsSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const RejectionReason = () => {
  const navigate = useNavigate();

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const [reasjectionReason, setRejectionReason] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  // const [lastPage, setLastPage] = useState(0);
  // const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  const {
    RejectedReasons: { allReasons, status },
  } = useSelector((state) => state);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchAllRejectedReasons());
  }, [dispatch]);

  useEffect(() => {
    setRejectionReason(allReasons?.filter((reason) => reason.parent == ""));
  }, [allReasons]);

  //   setRejectionReason((reasjectionReason) => [
  //     ...reasjectionReason,
  //     reason,
  //   ]);
  // }

  // const handlePageClick = async (data) => {
  //   // // console.log(data.selected);
  //   // scroll to the top
  //   //window.scrollTo(0, 0)
  // };

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteRejectedReasons(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Rejection Reason"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Rejection Reason", activeLink: true },
          ]}
        />
        {permissions.includes("RejectionReason-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/rejection-reasons/create">
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="mt-3">
        <div
          className="mb-5 
                "
        >
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
                        <th>Code</th>
                        <th>Reason</th>
                        {/* <th>parent</th> */}
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {reasjectionReason?.map((rej) => (
                        <tr>
                          <th scope="row">{rej.id}</th>
                          <td>{rej.code}</td>
                          <td>{rej.reason}</td>
                          {/* <td>{rej.parent}</td> */}
                          <td className="py-0">
                            <div className="d-flex align-items-center justify-content-center">
                              {permissions.includes("RejectionReason-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/rejection-reasons/${rej.id}`}
                                  state={{ child: false, parentId: rej.id }}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes(
                                "RejectionReason-Delete"
                              ) ? (
                                <button
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  onClick={() => {
                                    handleOpen();
                                    setId(rej.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </button>
                              ) : null}
                              {permissions.includes("RejectionReason-Child") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/rejection-reasons/child/${rej.id}`}
                                >
                                  <MdTableView size={"1rem"} />
                                </Link>
                              ) : null}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {/* <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          breakLabel={"..."}
                          pageCount={pageCount}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={3}
                          onPageChange={handlePageClick}
                          containerClassName={
                            "pagination justify-content-center mt-3"
                          }
                          pageClassName={"page-item"}
                          pageLinkClassName={"page-link"}
                          previousClassName={"page-item"}
                          previousLinkClassName={"page-link"}
                          nextClassName={"page-item"}
                          nextLinkClassName={"page-link"}
                          breakClassName={"page-item"}
                          breakLinkClassName={"page-link"}
                          activeClassName={"active12"}
                        /> */}
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

export default RejectionReason;
