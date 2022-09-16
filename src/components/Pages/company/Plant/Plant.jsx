import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

// local imports

import {
  deletePlant,
  fetchPlants,
} from "../../../../Redux/features/PlantSlice";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import Spinner from "../../../common/Spinner";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const Plant = () => {
  // const navigate = useNavigate();
  // const [plantList, setPlantList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  // const [lastPage, setLastPage] = useState(0);
  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);

  const { plants, error, status, paginationData } = useSelector(
    (state) => state.Plant
  );
  const { permissions } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlants(offset));
    // // // console.log(plans);
  }, [dispatch, offset]);

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
    dispatch(fetchPlants());
  }, [dispatch]);

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deletePlant(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  const handlePageClick = async (event) => {
    const selectedPage = event.selected;
    // // console.log(selectedPage);
    setOffset(selectedPage + 1);
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Plants"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Plants", activeLink: true },
          ]}
        />
        {permissions.includes("Plant-Create") ? (
          <div className="col-4 align-self-center text-end">
            <Link to="/plant/create">
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
                  <>
                    <TableLoading />
                  </>
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>Unique ID</th>
                        <th>Name</th>
                        <th>Desciption</th>
                        {/* <th>Plant Type</th> */}
                        {/* <th>ID</th> */}
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {plants.map((plant, i) => (
                        <tr key={i}>
                          <th scope="row">{plant.plantId}</th>
                          <td>{plant.plantName}</td>
                          <td>{plant.plantShortText}</td>
                          {/* <td>{plant.plantType}</td> */}
                          {/* <td>{plant.id}</td> */}
                          <td className="py-0">
                            <div className="d-flex align-items-center justify-content-center">
                              {permissions.includes("Plant-View") ? (
                                <Link
                                  className="dropdown-item hover-green p-3 text-center me-4 rounded"
                                  to={`/view-plant/edit/${plant.id}`}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {permissions.includes("Plant-Delete") ? (
                                <span
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  onClick={() => {
                                    handleOpen();
                                    setId(plant.id);
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

export default Plant;
