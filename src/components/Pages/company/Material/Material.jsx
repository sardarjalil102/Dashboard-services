import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  deleteMaterialMaster,
  fetchAllMaterials,
} from "../../../../Redux/features/MaterialMasterSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../common/Spinner";
import { BsEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const Material = () => {
  const navigate = useNavigate();
  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const [materialSearch, setMaterialSearch] = useState("");

  const { materials, error, status, paginationData } = useSelector(
    (state) => state.MaterialMaster
  );
  const { permissions } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (materials?.length === 0) {
      dispatch(fetchAllMaterials(offset));
    }
  }, [dispatch, offset, materials?.length]);

  const handelSearchList = (e) => {
    e.preventDefault();
  };

  // pagination useEffect
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

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteMaterialMaster(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  const handlePageClick = async (event) => {
    const selectedPage = event.selected;
    // // console.log(selectedPage);
    setOffset(selectedPage + 1);
    dispatch(fetchAllMaterials(selectedPage + 1));
  };
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Material Master"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Material Master", activeLink: true },
          ]}
        />
        {permissions.includes("MaterialMaster-Create") ? (
          <div className="col-4 align-self-center text-end">
            <button
              type="button"
              onClick={() => navigate("/material/create")}
              className="btn btn-primary"
            >
              Create
            </button>
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
                      value={materialSearch}
                      onChange={(e) => setMaterialSearch(e.target.value)}
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
                      <i
                        onClick={(e) => handelSearchList(e)}
                        className="fas fa-search"
                      ></i>
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
                        {/* <th>Material Id</th> */}
                        {/* <th>Material Prefix</th> */}
                        <th>Material No.</th>
                        <th>Material Type</th>
                        <th>Material Text</th>
                        <th>Reference No</th>
                        {/* <th>Plants</th> */}
                        {/* <th>Status</th> */}
                        <th>Flag-PP</th>
                        <th>Flag-MM</th>
                        <th>Flag-SD</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {materials?.map((matt) => (
                        <tr key={matt.id}>
                          {/* <th scope="row">{matt.id}</th> */}
                          {/* <td>{matt.materialPrefix}</td> */}
                          <td>
                            {matt.materialPrefix}-{matt.materialNo}
                          </td>
                          <td>{matt.materialType}</td>
                          <td>{matt.materialText}</td>
                          <td>{matt.referenceNo}</td>
                          {/* <td>{matt.referenceNo}</td> */}
                          <td>{matt.ppFlag ? "Yes" : "No"}</td>
                          <td>{matt.mmFlag ? "Yes" : "No"}</td>
                          <td>{matt.sdFlag ? "Yes" : "No"}</td>
                          <td className="py-0">
                            <span className="d-flex align-items-center justify-content-center ml-n1">
                              {permissions.includes("MaterialMaster-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/material/${matt.id}`}
                                  state={matt}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {/* <Link
                                className="dropdown-item hover-danger p-1 text-center me-4 rounded"
                                to={`/material/edit/${matt.id}`}
                              >
                                <BiEditAlt size={"1rem"} />
                              </Link> */}
                              {permissions.includes("MaterialMaster-Delete") ? (
                                <Link
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  to="#"
                                  onClick={() => {
                                    handleOpen();
                                    setId(matt.id);
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

export default Material;
