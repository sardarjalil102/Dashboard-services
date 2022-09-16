import React from "react";
import { Link } from "react-router-dom";

const CUTable = ({ data, heading }) => {
  return (
    <table className="table">
      <thead>
        <tr className="text-nowrap">
          {heading?.map((h) => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
        {false ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            {data.map((users) => (
              <tr>
                <th scope="row">{users.id}</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>status</td>
                <td></td>
                <td>
                  {" "}
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to={`/user/${users.id}`}>
                        <i className="bx bx-edit-alt me-1" />
                        View
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={`/user/edit/${users.id}`}
                      >
                        <i className="bx bx-edit-alt me-1" />
                        Update
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        // onClick={(e) =>
                        //   handelUserDelete(e, users.id)
                        // }
                      >
                        <i className="bx bx-trash me-1" /> Delete
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default CUTable;
