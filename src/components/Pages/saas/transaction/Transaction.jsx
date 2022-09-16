import React from "react";



import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState, useEffect } from "react";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";


const Transaction = () => {
  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const { plants, error, status, paginationData } = useSelector(
    (state) => state.Plant
  );

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

  const handlePageClick = async (event) => {
    const selectedPage = event.selected;
    // // console.log(selectedPage);
    setOffset(selectedPage + 1);
  };

  const handelDeletePlant = (e, item) => {
    e.preventDefault();
    // // console.log(item);
  };
  return (
    <>
      <div className="row">
        <MainBreadcrum name='Manage Transaction' subName=''
          links={[
            { path: "/", title: "" },
            { path: "/inspection-plan", title: "Inspection Plan" },
            { path: "", title: "Manage Transaction", activeLink: true },
          ]}
        />
        <div className="col-4 align-self-center text-end">
          <Link to="/transaction/create">
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="mt-3">
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
                      <th>S.No</th>
                      <th>Company Name</th>
                      <th>Amount</th>
                      {/* <th>Plant Type</th> */}
                      <th>Date(UTC)</th>
                      <th>Trasaction Type</th>
                      <th>Stripe Invoice Id</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {plants.map((plant) => (
                      <tr>
                        <th scope="row">{plant.plantId}</th>
                        <td>{plant.plantName}</td>
                        <td>{plant.plantShortText}</td>
                        {/* <td>{plant.plantType}</td> */}
                        <td>{plant.id}</td>
                        <td>{plant.plantShortText}</td>
                        <td>{plant.plantShortText}</td>
                        {/* <td>
                                      {" "}
                                      <div className="d-flex align-items-center justify-content-center">
                                        <Link
                                          className="dropdown-item hover-blue p-1 text-center me-4 rounded"
                                          to={`/view-plant/${plant.id}`}
                                        >
                                          <BsEyeFill size={'1rem'}/>
                                        </Link>
                                        <Link
                                          className="dropdown-item hover-green p-1 text-center me-4 rounded"
                                        to={`/view-plant/edit/${plant.id}`}
                                          >
                                          <BiEditAlt size={'1rem'}/>
                                        </Link>
                                        <Link
                                          className="dropdown-item hover-danger p-1 text-center me-4 rounded"
                                          to="#"
                                        >
                                          <RiDeleteBin6Line size={'1rem'}/>
                                        </Link>
                                      </div>
                                    </td> */}
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
          </div>

        </div>
      </div>
    </>
  );
};

export default Transaction;
