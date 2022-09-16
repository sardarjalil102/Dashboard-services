import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteType,
  fetchAllTypes,
} from "../../../../../Redux/features/SensorTypeSlice";
import TableLoading from "../../../../common/SkeltonLoading/TableLoading";
import MainBreadcrum from "../../../../layout/MainBreadcrum";

const SensorType = () => {
  const dispatch = useDispatch();

  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const {
    SensorType: { allTypes, status, paginationData },
  } = useSelector((state) => state);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchAllTypes(offset));
  }, [dispatch, offset]);
  const handelDelete = (e, item) => {
    e.preventDefault();
    dispatch(deleteType(item));
  };

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
          name="Sensor Type"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Sensor Type", activeLink: true },
          ]}
        />
        {permissions.includes("SensorType-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/create-sensor-type">
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
                <div className="table-responsive text-center text-nowrap">
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>Sensor Id</th>
                        <th>Sensor Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {allTypes?.map((t) => (
                        <tr>
                          <th scope="row">{t.id}</th>
                          <td>{t.name}</td>
                          <td className="py-0">
                            <div className="d-flex align-items-center justify-content-center">
                              {permissions.includes("SensorType-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                  to={`/sensor-type/${t.id}`}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("SensorType-Delete") ? (
                                <button
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  onClick={(e) => handelDelete(e, t.id)}
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
                    pageCount={currentPagination.total}
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
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SensorType;
