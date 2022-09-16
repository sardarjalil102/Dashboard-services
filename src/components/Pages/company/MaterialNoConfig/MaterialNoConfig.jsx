import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { BsEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableLoading from "../../../common/SkeltonLoading/TableLoading";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteConfigs,
  fetchConfigs,
} from "../../../../Redux/features/MaterialNoConfigSlice";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import DeletePopup from "../../../common/DeletePopup";

const MaterialNoConfig = () => {
  const dispatch = useDispatch();

  const [isAllow, setIsAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getId, setId] = useState(null);
  const { configs, error, status } = useSelector(
    (state) => state.MaterialNoConfig
  );
  const { permissions } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(fetchConfigs());
  }, [dispatch]);

  useEffect(() => {
    if (isAllow) {
      // console.log("isAllow", isAllow);
      dispatch(deleteConfigs(getId));
    }
    // setIsAllow(false);
  }, [isAllow]);

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Material No Config"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Material No Config", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive text-nowrap">
                {false ? (
                  <>
                    <TableLoading />
                  </>
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>ID</th>
                        {/* <th>Company</th> */}
                        <th>Prefix</th>
                        {/* <th>Length</th> */}
                        <th>StartFrom</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {configs.map((mat) => (
                        <tr>
                          <th scope="row">{mat.id}</th>
                          {/* <td>{mat.company}</td> */}
                          <td>{mat.prefix}</td>
                          {/* <td>{mat.length}</td> */}
                          <td>{mat.startFrom}</td>
                          <td className="py-0">
                            {" "}
                            {/* <div className="d-flex align-items-center justify-content-center"> */}
                            {permissions?.includes("MaterialNoConfig-View") ? (
                              <Link
                                className="dropdown-item hover-blue p-3 me-4 rounded pointer"
                                to={`/material-no-config/${mat.id}`}
                              >
                                <BsEyeFill size={"1rem"} />
                              </Link>
                            ) : null}
                            {/* <Link
                                className="dropdown-item hover-danger p-3 text-center me-4 rounded pointer"
                                to="#"
                                 onClick={() => {
                                  handleOpen();
                                  setId(id);
                                }}
                              >
                                <RiDeleteBin6Line size={"1rem"} />
                              </Link> */}
                            {/* </div> */}
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
      <DeletePopup
        handleClose={handleClose}
        open={open}
        setIsAllow={setIsAllow}
      />
    </>
  );
};

export default MaterialNoConfig;
