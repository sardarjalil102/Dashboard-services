import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

import Spinner from "../../../common/Spinner";
import {
  BsArrowCounterclockwise,
  BsEyeFill,
  BsUnlockFill,
} from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import { deleteUser, getAllUsers } from "../../../../Redux/features/UsersSlice";
import { useDispatch, useSelector } from "react-redux";

import AddPassModal from "./AddPassModal";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const User = () => {
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  // const [lastPage, setLastPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const { users, error, status } = useSelector((state) => state.Users);
  const { permissions } = useSelector((state) => state.Auth);

  // const plans = useSelector(selectAllPlans())
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isAllow, setIsAllow] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const handleModelOpen = () => setOpen(true);
  const handleModelClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handlePageClick = async (data) => {
    // // console.log(data.selected);
  };

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteUser(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Users"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Users", activeLink: true },
          ]}
        />
        {permissions.includes("User-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/user/create">
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
                {false ? (
                  <>
                    <TableLoading />
                  </>
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {users?.map((user) => (
                        <tr>
                          <th scope="row">{user.id}</th>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.role[0]?.name}</td>
                          <td className="py-0">
                            <div className="d-flex align-items-center justify-content-center">
                              {permissions.includes("User-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/user/edit/${user.id}`}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("User-Delete") ? (
                                <Link
                                  onClick={handleOpen}
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to="#"
                                >
                                  <BsUnlockFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {/* <Link
                                className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                to="#"
                                onClick={() => {
                                  handleOpen();
                                  setId(user.id);
                                }}
                              >
                                <RiDeleteBin6Line size={"1rem"} />
                              </Link> */}
                            </div>
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
      </div>
      <AddPassModal handleClose={handleClose} open={open} />
      <DeletePopup
        handleClose={handleModelClose}
        open={modelOpen}
        setIsAllow={setIsAllow}
      />
    </>
  );
};

export default User;
