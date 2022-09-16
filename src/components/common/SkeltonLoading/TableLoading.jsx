import { Skeleton } from "@mui/material";
import React from "react";

const TableLoading = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr className="text-nowrap">
            <th>
              {" "}
              <Skeleton animation="pulse" />
            </th>
            <th>
              {" "}
              <Skeleton animation="pulse" />
            </th>
            <th>
              {" "}
              <Skeleton animation="pulse" />
            </th>
            <th>
              {" "}
              <Skeleton animation="pulse" />
            </th>
            <th>
              {" "}
              <Skeleton animation="pulse" />
            </th>
            <th>
              {" "}
              <Skeleton animation="pulse" />
            </th>
          </tr>
        </thead>

        <tbody className="table-border-bottom-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((p) => (
            <tr key={p}>
              <th scope="row">
                <Skeleton animation="wave" />
              </th>
              <td>
                <Skeleton animation="wave" />
              </td>
              <td>
                <Skeleton animation="wave" />
              </td>
              <td>
                <Skeleton animation="wave" />
              </td>
              <td>
                <Skeleton animation="wave" />
              </td>

              <td>
                {" "}
                <span className="d-flex align-items-center justify-content-center ml-n1">
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableLoading;
