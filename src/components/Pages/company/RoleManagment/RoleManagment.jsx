import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

// local imoprts
import { deleteRole, getAllRoles } from "../../../../Redux/features/RoleSlice";
// import Footer from "../../../../layout/Footer";

import Spinner from "../../../common/Spinner";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import { getAllPermissions } from "../../../../Redux/features/PermissionsSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const RoleManagement = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  // const [lastPage, setLastPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const { Roles, error, status } = useSelector((state) => state.userRoles);
  const { permissions } = useSelector((state) => state.Auth);

  // const plans = useSelector(selectAllPlans())

  useEffect(() => {
    dispatch(getAllRoles());
    dispatch(getAllPermissions());
  }, [dispatch]);

  const handlePageClick = async (data) => {
    // // console.log(data.selected);
  };

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteRole(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Role Management"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Role Management", activeLink: true },
          ]}
        />
        {permissions?.includes("Roles-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link className="btn btn-primary" to="/roles/create">
              Create
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
                        <th>isCompany</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody className="table-border-bottom-0">
                      {Roles?.map((role) => (
                        <tr key={role.id}>
                          <th scope="row">{role.name}</th>
                          <th scope="row">{`${role.isCompany}`}</th>
                          <td className="py-0">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center ml-n1">
                              {permissions.includes("Permission-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer "
                                  to={`/assign-permissions/${role.id}`}
                                  state={{ id: role.id }}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Roles-View") ? (
                                <Link
                                  className="dropdown-item hover-green p-3 text-center me-4 rounded pointer "
                                  to={`/roles/${role.id}`}
                                >
                                  <BiEditAlt size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Roles-Delete") ? (
                                <Link
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer "
                                  to="#"
                                  onClick={() => {
                                    handleOpen();
                                    setId(role.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </Link>
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
      </div>
      <DeletePopup
        handleClose={handleClose}
        open={open}
        setIsAllow={setIsAllow}
      />
    </>
  );
};

export default RoleManagement;
