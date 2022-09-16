import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteWorkStation,
  fetchWorkStations,
} from "../../../../Redux/features/WorkStaionSlice";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const Workistation = () => {
  const dispatch = useDispatch();

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const { workStations, status, error } = useSelector(
    (state) => state.WorkStation
  );
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchWorkStations());
  }, [dispatch]);
  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteWorkStation(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Work Station"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Work Station", activeLink: true },
          ]}
        />
        {permissions.includes("WorkStation-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/station/create">
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
                      <th>Station</th>
                      <th>Name</th>
                      <th>Part Desciption</th>
                      <th>Assigned Material</th>
                      <th>Assigned Plants</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {workStations?.map((work) => (
                      <tr>
                        <th scope="row">{work.id}</th>
                        <td>{work.name}</td>
                        <td>{work.description}</td>
                        <td>{work?.materialMaster?.length}</td>
                        <td>{work?.plant?.length}</td>
                        <td className="py-0">
                          <div className="d-flex align-items-center justify-content-center">
                            {permissions.includes("WorkStation-View") ? (
                              <Link
                                className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                to={`/station/${work?.id}`}
                              >
                                <BsEyeFill size={"1rem"} />
                              </Link>
                            ) : null}
                            {permissions.includes("WorkStation-Delete") ? (
                              <span
                                className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                onClick={() => {
                                  handleOpen();
                                  setId(work?.id);
                                }}
                              >
                                <RiDeleteBin6Line
                                  color="#6b7a8b"
                                  size={"1rem"}
                                />
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

export default Workistation;
