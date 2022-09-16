import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Spinner from "../../../common/Spinner";
import { key } from "../../../../config";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";

import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompany,
  getAllCompanies,
} from "../../../../Redux/features/CompanyManagementSlice";
import { setCompantId } from "../../../../utils";
import {
  getCompanyId,
  setCompnyId,
} from "../../../../Redux/features/AuthSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import { SHOW_INFO } from "../../../../utils/toastMessages";
import DeletePopup from "../../../common/DeletePopup";
const CompanyManagment = () => {
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(0);
  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const { companies } = useSelector((state) => state.CompanyManagement);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (companies?.length === 0) {
      dispatch(getAllCompanies());
    }
  }, [companies?.length, dispatch]);

  const handlePageClick = async (data) => {
    // // console.log(data.selected);
  };

  // // console.log(permissions.assignedPermissions);

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteCompany(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);
  // const handelSubmit = (e, id) => {
  //   e.preventDefault();
  //   // // console.log(submissionData);
  //   dispatch(getCompanyId(id));
  // };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Company"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Company", activeLink: true },
          ]}
        />

        {permissions.includes("Company-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/company/create">
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
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Contact Person</th>
                        <th>Contact Email</th>
                        <th>Material Type</th>
                        <th>Dashboard Url</th>
                        <th>Material Url</th>
                        <th>Transaction Url</th>
                        <th>Acceptance Reason</th>
                        <th>Time Zone</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {companies?.map((company, id) => (
                        <tr key={id}>
                          <th scope="row">{company.id}</th>
                          <td>{company.name}</td>
                          <td>
                            {company.contactPersonFirstName}{" "}
                            {company.contactPersonLastName}
                          </td>
                          <td>{company.contactPersonEmail}</td>
                          <td>{company.materialScheduleFrequencyType}</td>
                          <td>{company.biDashboardUrl}</td>
                          <td>{company.sapMaterialUrl}</td>
                          <td>{company.sapTransactionUrl}</td>
                          <td>{company.acceptanceReason}</td>
                          <td>{company.timezone}</td>
                          <td className="py-0">
                            {" "}
                            <div className="d-flex align-items-center justify-content-center">
                              {permissions.includes("Company-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/company/${company.id}`}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Company-Select") ? (
                                <span
                                  onClick={() => {
                                    setCompantId(company.id);
                                    dispatch(setCompnyId(company.id));
                                    SHOW_INFO(
                                      true,
                                      `Now Company Id set to ${company.id}`
                                    );
                                  }}
                                  className="dropdown-item hover-green p-3 text-center me-4 rounded pointer"
                                >
                                  <AiOutlineLogin size={"1rem"} />
                                </span>
                              ) : null}
                              {permissions.includes("Company-Delete") ? (
                                <span
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  to="#"
                                  onClick={() => {
                                    handleOpen();
                                    setId(company.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </span>
                              ) : null}
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
      <DeletePopup
        handleClose={handleClose}
        open={open}
        setIsAllow={setIsAllow}
      />
    </>
  );
};

export default CompanyManagment;
