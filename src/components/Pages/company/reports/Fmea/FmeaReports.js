import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, key } from "../../../../../config";
import axios from "axios";
import MainBreadcrum from "../../../../layout/MainBreadcrum";
import {
  getFixForms,
  getEnablesFormDetail,
} from "../../../../../Redux/features/FormSlice";
import { getAllFmeaReports } from "../../../../../Redux/features/ReportSlice";

const FmeaReports = () => {
  const { enableForms, enableFormDetail, fixedForms } = useSelector(
    (state) => state.Form
  );
  const [fixedFormDetail, setFixedFormDetails] = React.useState({});
  const dispatch = useDispatch();

  const getEanbleFormDetail = (data) => {
    fixedForms.map((item, index) => {
      if (item.id === data.id) {
        setFixedFormDetails(item);
      }
    });
  };

  React.useEffect(() => {
    dispatch(getFixForms());
    dispatch(getAllFmeaReports());
  }, []);

  const renderForm = () => {
    return (
      <div className="row m-3">
        <div className="col-sm-12">
          <div className="card">
            <div className="p-2 card-body table-wrapper-scroll-y my-custom-scrollbar">
              <h4>Reports</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Form Title</th>
                    <th scope="col">Form</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fixedForms &&
                    fixedForms.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.title}</td>
                          <td>{item.from}</td>
                          <td>
                            <button
                              onClick={() => getEanbleFormDetail(item)}
                              className="btn btn-primary"
                            >
                              Trail
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <MainBreadcrum
        name="Reports"
        subName=""
        links={[
          { path: "/", title: "" },
          { path: "", title: "Fmea Reports", activeLink: true },
        ]}
      />
      <div className="layout-page">
        {/* <Header /> */}
        {renderForm()}
      </div>
    </div>
  );
};

export default FmeaReports;
