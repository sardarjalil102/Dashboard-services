import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserListModal from "./UserListModal";

const ListConditions = () => {
  const { checkConditions } = useSelector((state) => state.QCPoint);
  const [userListToggle, setUserListToggle] = useState(false);
  const [emails, setEmails] = useState([]);

  const handleOpenUserList = (emails) => {
    setEmails(emails);
    setUserListToggle(true);
  };
  const handleCloseUserList = () => setUserListToggle(false);

  return (
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr className="text-nowrap">
            <th>TYPE</th>
            <th>OPERATOR</th>
            <th>VALUE</th>
            <th>FREQUENCY</th>
            <th>ITERATIONS</th>
            <th>EMAIL</th>
            <th>USERS</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="table-border-bottom-0">
          {checkConditions?.map((ckCon) => (
            <tr key={ckCon.id}>
              <td>{ckCon.type}</td>
              <td>{ckCon.operator}</td>
              <td>{ckCon.value}</td>
              <td>{ckCon.frequency}</td>
              <td>{ckCon.noOfIteration}</td>
              <td>{ckCon.action}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => handleOpenUserList(ckCon.emails)}
              >
                <BsEyeFill size={"1rem"} />
                {/* modal user list */}
              </td>
              <td>
                {" "}
                <span className="d-flex align-items-center justify-content-center ml-n1">
                  {/* <Link
                    className="dropdown-item hover-blue p-1 text-center me-4 rounded"
                    to="#"
                  >
                    <BiEditAlt size={"1rem"} />
                  </Link> */}

                  <span className="dropdown-item hover-danger p-1 text-center me-4 rounded">
                    <RiDeleteBin6Line size={"1rem"} />
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserListModal
        userList={emails}
        open={userListToggle}
        handleClose={handleCloseUserList}
      />
    </div>
  );
};

export default ListConditions;
