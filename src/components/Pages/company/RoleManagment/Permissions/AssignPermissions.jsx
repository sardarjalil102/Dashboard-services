import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  AssignNewPermissions,
  fetchOneAssignedPermissionData,
  getAllPermissions,
} from "../../../../../Redux/features/PermissionsSlice";
import Spinner from "../../../../common/Spinner";
import MainBreadcrum from "../../../../layout/MainBreadcrum";

import CheckBoxes from "./components/CheckBoxes";

const AssignedRole = () => {
  const { rolId } = useParams();

  const [slectedArray, setSlectedArray] = useState([]);

  const dispatch = useDispatch();
  const { assignedPermissions, status, allPermissions, error } = useSelector(
    (state) => state.UserPermission
  );
  const { permissions } = useSelector((state) => state.Auth);

  const [editToggle, setEditToggle] = useState(true);

  useEffect(() => {
    dispatch(getAllPermissions());
    dispatch(fetchOneAssignedPermissionData(rolId));

    return () => {};
  }, [dispatch, rolId]);

  useEffect(() => {
    setSlectedArray(assignedPermissions);
    // // console.log(assignedPermissions);

    return () => {
      setSlectedArray([]);
    };
  }, [allPermissions, assignedPermissions]);

  if (status === "loading") {
    return <Spinner />;
  }

  const handlePermissionSave = () => {
    dispatch(
      AssignNewPermissions({ id: rolId, data: { permissions: slectedArray } })
    );
  };

  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Roles"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/roles", title: "Role Management" },
            { path: "", title: "Assign Permissions", activeLink: true },
          ]}
        />
        {permissions.includes("Permission-Edit") ? (
          <div className="col-4 align-self-center text-end">
            {editToggle ? (
              <button
                type="button"
                onClick={() => setEditToggle(false)}
                className="btn btn-primary"
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setEditToggle(true)}
                className="btn btn-dark btn-circle"
              >
                X
              </button>
            )}
          </div>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col mt-1">
                <div className="d-flex gap-5">
                  {error && <span>{error}</span>}
                  <div className="d-flex justify-content-center align-items-center">
                    <h3>all Permissions</h3>
                    {!editToggle && (
                      <button
                        className="btn btn-primary"
                        onClick={handlePermissionSave}
                      >
                        Save
                      </button>
                    )}
                  </div>
                </div>
                <hr />

                <div className="row">
                  {allPermissions?.map(({ name, id }) => (
                    <CheckBoxes
                      key={id}
                      name={name}
                      id={id}
                      dis={editToggle}
                      slectedArray={slectedArray}
                      setSlectedArray={setSlectedArray}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignedRole;
