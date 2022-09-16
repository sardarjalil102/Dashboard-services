import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteLots,
  fetchLots,
} from "../../../../Redux/features/InspectionLotSlice";

import { BsEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const InspectionLot = () => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(0);

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const { lots } = useSelector((state) => state.InspectionLot);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (lots?.length === 0) {
      dispatch(fetchLots());
    }
    // // // console.log(plans);
  }, [dispatch, lots?.length]);

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteLots(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Inspection Lot"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Inspection Lot", activeLink: true },
          ]}
        />
        {permissions.includes("InspectionLot-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/inspection-lot/create">
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
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {lots?.map((insp) => (
                      <tr key={insp.id}>
                        <th scope="row">{insp.id}</th>
                        <th scope="row">{insp.referenceNo}</th>
                        <th scope="row">{insp.lotQty}</th>
                        <th scope="row">{insp?.material?.materialText}</th>
                        <th scope="row">{insp?.plant?.id}</th>
                        <th scope="row">{insp.eventFlag}</th>
                        <th scope="row">{insp?.assignUsers.length}</th>
                        <th scope="row">{insp.createdAt}</th>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            {permissions.includes("InspectionLot-View") ? (
                              <Link
                                className="dropdown-item hover-green p-3 text-center me-4 rounded"
                                to={`/inspection-lot/${insp.id}`}
                              >
                                <BsEyeFill size={"1rem"} />
                              </Link>
                            ) : null}
                            {permissions.includes("InspectionLot-Delete") ? (
                              <span
                                className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                onClick={() => {
                                  handleOpen();
                                  setId(insp.id);
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
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
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

export default InspectionLot;
