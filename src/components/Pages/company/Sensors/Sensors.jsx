import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteSensor,
  fetchAllSensors,
} from "../../../../Redux/features/SensorSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const Sensors = () => {
  const dispatch = useDispatch();

  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const {
    Sensors: { allSensors, status, paginationData },
  } = useSelector((state) => state);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchAllSensors(offset));
  }, [dispatch, offset]);
  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteSensor(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

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
    setOffset(selectedPage + 1);
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Sensors"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Sensors", activeLink: true },
          ]}
        />
        {permissions.includes("Sensor-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/sensor/create">
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
              {status === "loading" ? (
                <TableLoading />
              ) : (
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>Sensor Id</th>
                        <th>Sensor Name</th>
                        <th>Description</th>
                        <th>Sensor Type</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Unit</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {allSensors?.map((s) => (
                        <tr>
                          <th scope="row">{s.sensorId}</th>
                          <td>{s.name}</td>
                          <td>{s.description}</td>
                          <td>{s.sensorType?.name}</td>
                          <td>{s.minThreshold}</td>
                          <td>{s.maxThreshold}</td>
                          <td>{s.unit}</td>
                          <td className="py-0">
                            <div className="d-flex align-items-center justify-content-center">
                              {permissions.includes("Sensor-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/sensor/${s.id}`}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Sensor-Delete") ? (
                                <button
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  onClick={() => {
                                    handleOpen();
                                    setId(s.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </button>
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
                  />
                </div>
              )}
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

export default Sensors;
