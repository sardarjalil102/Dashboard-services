import React, { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../../../config";
import { getAllGeneralForm } from "../../../../../Redux/features/GeneralFormSlice";
import MainBreadcrum from "../../../../layout/MainBreadcrum";

const GeneralFormList = () => {
  const [generalForm, setGeneralForm] = useState([]);

  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(0);
  const [currentPagination, setcurrentPagination] = useState({});
  const [offset, setOffset] = useState(1);

  const dispatch = useDispatch();

  const {
    GeneralForm: { generalForms, status, error, paginationData },
  } = useSelector((state) => state);

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
    dispatch(getAllGeneralForm(selectedPage + 1));

    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    dispatch(getAllGeneralForm(offset));
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="General Form"
          subName="Reports"
          links={[
            { path: "/", title: "" },
            {
              path: "/report/general-form",
              title: "General Form",
              activeLink: true,
            },
          ]}
        />
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
                      <th>Sr. No</th>
                      <th>Form Name</th>
                      <th className="text-center ">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {generalForms.workflowForms?.map((form) => (
                      <tr className="cursor-pointer" key={form.id}>
                        <th scope="row">{form.id}</th>
                        <td>{form.name}</td>
                        <td className="py-0">
                          <Link
                            className="dropdown-item hover-blue p-3 text-center me-4 rounded"
                            to={`/report/general-form/filled/${form.id}`}
                          >
                            <BsEyeFill size={"1rem"} />
                          </Link>
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
    </>
  );
};

export default GeneralFormList;
