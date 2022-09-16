import React, { useEffect, useLayoutEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getFormsFilledBy } from "../../../../../Redux/features/GeneralFormSlice";
import MainBreadcrum from "../../../../layout/MainBreadcrum";
import GeneralFormDetail from "./GeneralFormDetail";

const GeneralFormFilledBy = () => {
  const [generalForm, setGeneralForm] = useState([]);
  const [formDetailId, setFormDetailId] = useState(null);

  const dispatch = useDispatch();

  const { Id } = useParams();
  const navigate = useNavigate();

  const {
    GeneralForm: { generalFormFilledBy, status, error },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getFormsFilledBy(Id));
    return () => {};
  }, [dispatch, Id]);

  // // console.log(generalForm);

  useLayoutEffect(() => {
    setGeneralForm(generalFormFilledBy);

    return () => {
      setGeneralForm({});
    };
  }, [generalFormFilledBy]);

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
            },
            {
              path: "/report/general-form/filled/",
              title: "Filled By",
              activeLink: true,
            },
          ]}
        />
      </div>
      <span className="row">
        <div className="mt-3 col-md-6">
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
                        <th>Filled By</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {generalForm?.map((form) => (
                        <tr className="cursor-pointer" key={form.id}>
                          <th scope="row">{form.id}</th>
                          <td>{form.form.name}</td>
                          <td>{`${form.user.firstName} ${form.user.lastName}`}</td>
                          <td className="py-0">
                            <span
                              className="dropdown-item hover-blue p-3 text-center me-4 rounded"
                              onClick={() => {
                                // console.log(form.id);
                                setFormDetailId(form.id);
                              }}
                            >
                              <BsEyeFill size={"1rem"} />
                            </span>
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 col-md-6">
          <GeneralFormDetail detailId={formDetailId} />
        </div>
      </span>
    </>
  );
};

export default GeneralFormFilledBy;
