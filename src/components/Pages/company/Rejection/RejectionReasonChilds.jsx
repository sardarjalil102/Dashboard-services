import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

import Spinner from "../../../common/Spinner";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRejectedReasons,
  fetchAllRejectedReasons,
  fetchOneRejectedReasonData,
} from "../../../../Redux/features/RejectedReasonsSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const RejectionReasonChilds = () => {
  // const navigate = useNavigate();

  const { parentId } = useParams();
  const [rejectionData, setRejectionData] = useState([]);

  const dispatch = useDispatch();

  const {
    RejectedReasons: { oneReason, allReasons, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOneRejectedReasonData(parentId));
    return () => {};
  }, [dispatch, parentId]);

  useLayoutEffect(() => {
    // console.log(parentId);
    setRejectionData(oneReason);
    return () => {};
  }, [oneReason, parentId]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Rejection Reason"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/rejection-reasons", title: "Rejection Reason" },
            { path: "", title: "Childs", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div
          className="mb-5 
                "
        >
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
                        <th>ID</th>
                        <th>Code</th>
                        <th>Reason</th>
                        {/* <th>parent</th> */}
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {rejectionData?.child?.map((rej) => (
                        <tr>
                          <th scope="row">{rej.id}</th>
                          <td>{rej.code}</td>
                          <td>{rej.reason}</td>
                          {/* <td>{rej.parent}</td> */}
                          <td className="py-0">
                            {" "}
                            <div className="d-flex align-items-center justify-content-center">
                              <Link
                                className="dropdown-item hover-blue p-3 text-center  rounded pointer"
                                to={`/rejection-reasons/${rej.id}`}
                                state={{ child: true, parentId }}
                              >
                                <BsEyeFill size={"1rem"} />
                              </Link>
                              {/* <button
                                className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                onClick={() => {
                                  handleOpen();
                                  setId(rej.id);
                                }}
                              >
                                <RiDeleteBin6Line size={"1rem"} />
                              </button> */}
                              {/* <Link
                                className="dropdown-item hover-blue p-3 text-center me-4 rounded pointer"
                                to={`/rejection-reasons/child/${rej.id}`}
                              >
                                <MdTableView size={"1rem"} />
                              </Link> */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectionReasonChilds;
