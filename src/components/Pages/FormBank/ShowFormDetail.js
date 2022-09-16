import React from "react";
import "./formbank.css";
import MainBreadcrum from "../../layout/MainBreadcrum";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnablesForms,
  getEnablesFormDetail,
} from "../../../Redux/features/FormSlice";
const ShowFormDetail = () => {
  const [allForms, setAllForms] = React.useState([]);
  const [singleForm, setSingleForm] = React.useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [userComments, setUserComments] = React.useState([]);

  const getEanbleFormDetail = (item) => {
    dispatch(getEnablesFormDetail(item.id));
  };

  React.useEffect(() => {
    dispatch(getEnablesForms());
  }, []);

  React.useEffect(() => {
    setAllForms(state.Form.enableForms);
  }, [state.Form.enableForms]);

  React.useEffect(() => {
    setSingleForm(state.Form.enableFormDetail.fields);
    setUserComments(state.Form.enableFormDetail.userComments);
  }, [state.Form.enableFormDetail]);

  // console.log("data is", singleForm);
  const renderForm = () => {
    return (
      <div className="row my-3 mx-1 ms-n1">
        <div className="col-sm-7 ps-0">
          <div className="card">
            <div className="p-2 card-body table-wrapper-scroll-y my-custom-scrollbar">
              {allForms.length > 0 ? (
                <>
                  {/* <h4>User Enable Forms</h4> */}
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Form name</th>
                        <th scope="col">Form Type</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allForms &&
                        allForms.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.form.name}</td>
                              <td>
                                {item.isWorkflowEnabled == 1
                                  ? "General Form"
                                  : "Work Flow Enabled Form"}
                              </td>
                              <td>
                                <button
                                  onClick={() => getEanbleFormDetail(item)}
                                  className="btn btn-primary btn-sm"
                                >
                                  Trail
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    padding: 40,
                    flexFlow: "row wrap",
                    justifyContent: "center",
                  }}
                  className={"d-flex j"}
                >
                  <img
                    className="p-1 img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU"
                    alt="Responsive "
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="card p-2 col-lg-5 table-wrapper-scroll-y my-custom-scrollbar">
          {singleForm ? (
            <div className="row col-lg-12 m-1">
              <div className="col-sm-6 card p-3">
                <form>
                  <h4>Trail</h4>
                  <div className="mb-3 p-2">
                    {singleForm &&
                      singleForm.map((item, index) => {
                        return (
                          <>
                            {" "}
                            <label
                              key={index}
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {item.filledValue[0]?.fieldName}
                            </label>
                            <input
                              value={item.filledValue[0]?.value}
                              disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                        );
                      })}
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                {userComments &&
                  userComments.map((item, index) => {
                    return (
                      <div
                        style={{ borderWidth: 1 }}
                        className=" card p-1"
                      >
                        <div className="card-body">
                          <p style={{ fontSize: 16, color: "green" }}>
                            {item.comment == null ? "NA" : item.comment}
                          </p>
                          <div className="dropdown-divider mb-3" />
                          <div className="d-flex flex-column justify-content-between">
                            <div className="align-items-center">
                              <h4 className="small mb-2">
                                {item.user?.username
                                  ? item.user?.username
                                  : "NA"}
                              </h4>
                            </div>
                            <div className="align-items-center">
                              <h4 className="small mb-2">{item.date}</h4>
                            </div>
                            <div className="align-items-center">
                              <p
                                style={{ color: "green" }}
                                className="small text-muted mb-0"
                              >
                                {item.status === "pending" ? "NA" : item.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                padding: 40,
                justifyContent: "center",
              }}
              className={"d-flex j"}
            >
              <img
                className="m-3 img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU"
                alt="Responsive foto"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <MainBreadcrum
        name="User Enable Form"
        subName=""
        links={[
          { path: "/", title: "" },
          { path: "", title: "User Enable Form", activeLink: true },
        ]}
      />
      <div className="layout-container">
        <div className="layout-page">{renderForm()}</div>
      </div>
    </div>
  );
};

export default ShowFormDetail;
