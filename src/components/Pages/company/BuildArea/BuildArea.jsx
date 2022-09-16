import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

// local imoprts

import TableLoading from "../../../common/SkeltonLoading/TableLoading";

import {
  deleteBuildArea,
  fetchBuildAreas,
} from "../../../../Redux/features/BuildAreaSlice";
import AddBuildAreaMasterModal from "./components/AddBuildAreaMasterModal";
import { fetchAllMaterials } from "../../../../Redux/features/MaterialMasterSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const BuildArean = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [areasList, setAreasList] = useState([]);
  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isAllow, setIsAllow] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);
  const [getId, setId] = useState(null);

  const {
    BuildArea: { areas, error, status, paginationData },
    MaterialMaster: { materials },
  } = useSelector((state) => state);
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchAllMaterials());
    dispatch(fetchBuildAreas(offset));

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

  useLayoutEffect(() => {
    setAreasList(areas);
    return () => {
      setAreasList([]);
    };
  }, [areas]);

  const handlePageClick = async (event) => {
    const selectedPage = event.selected;
    // // console.log(selectedPage);
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteBuildArea(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  const TABLE_HEADINGS = ["AREA ID", "Name", "N0. CHILD", "ACTIONS"];

  return (
    <>
      {error && <span>{error}</span>}
      <div className="row">
        <MainBreadcrum
          name="Build Area"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Build Area", activeLink: true },
          ]}
        />
        {permissions.includes("BuildArea-Create") ? (
          <div className="col-4 align-self-center text-end">
            <button
              onClick={handleOpen}
              type="button"
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
                        {TABLE_HEADINGS.map((h) => (
                          <th
                            className={`fw-bold ${
                              h === "ACTIONS" ? " text-center " : " "
                            } `}
                            key={h}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="table-border-bottom-0">
                      {areasList?.map((a, i) => (
                        <tr key={a?.id}>
                          <th scope="row">{a?.id}</th>
                          <td>{a?.name}</td>
                          <td>{a?.child?.length}</td>
                          <td className="py-0">
                            <span className="d-flex align-items-center justify-content-center ml-n1">
                              {permissions.includes("BuildArea-View") ? (
                                <Link
                                  className="dropdown-item hover-blue p-3 text-center me-4 rounded"
                                  to={`/build-area/${a?.id}`}
                                  // state={{ id: plan.id }}
                                >
                                  <BsEyeFill size={"1rem"} />
                                </Link>
                              ) : null}
                              {/* <Link
                                className="dropdown-item hover-green p-1 text-center me-4 rounded"
                                to={`/`}
                              >
                                <BiEditAlt size={"1rem"} />
                              </Link> */}
                              {permissions.includes("BuildArea-Delete") ? (
                                <span
                                  className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                  onClick={() => {
                                    handleModelOpen();
                                    setId(a.id);
                                  }}
                                >
                                  <RiDeleteBin6Line size={"1rem"} />
                                </span>
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
      <AddBuildAreaMasterModal
        material={materials}
        handleClose={handleClose}
        open={open}
      />
      <DeletePopup
        handleClose={handleModelClose}
        open={modelOpen}
        setIsAllow={setIsAllow}
      />
    </>
  );
};

export default BuildArean;
