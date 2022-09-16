import React from "react";
import Select from "react-select";

const FMEA = () => {
  const options = [
    { value: "team1", label: "Team1" },
    { value: "team2", label: "Team2" },
    { value: "team3", label: "Team3" },
  ];
  const [inputList, setInputList] = React.useState([
    {
      name: "",
      function: "",
      impact: "",
      failureServity: "",
      failureOccurrence: "",
      failureProcessPrevention: "",
      failureProcessDetection: "",
      failureDetection: "",
      riskzero: "",
      actions: "",
      ownerShip: "",
      dueDate: "",
      fmeaActionTaken: "",
      actualDateCompletion: "",
      fmeaSeverity: "",
      fmeaOccurrence: "",
      detection: "",
      riskone: "",
    },
  ]);

  const handleAddClick = () => {
    setInputList([...inputList, {
        name: "",
        function: "",
        impact: "",
        failureServity: "",
        failureOccurrence: "",
        failureProcessPrevention: "",
        failureProcessDetection: "",
        failureDetection: "",
        riskzero: "",
        actions: "",
        ownerShip: "",
        dueDate: "",
        fmeaActionTaken: "",
        actualDateCompletion: "",
        fmeaSeverity: "",
        fmeaOccurrence: "",
        detection: "",
        riskone: "",
      },]);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const renderdayanamicField = () => {
    return (
      <>
        {inputList.map((x, i) => {
          return (
            <div class="row  card m-4 p-3">
              <div className="box col">
                <input
                  name="name"
                  className="form-control rounded m-2"
                  placeholder=" Name"
                  value={x.name}
                  //   onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="form-control rounded m-2"
                  name="function"
                  placeholder="Function"
                  value={x.function}
                  //   onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="form-control rounded m-2"
                  name="impact"
                  placeholder="Impact"
                  value={x.function}
                  //   onChange={e => handleInputChange(e, i)}
                />
              <input
                  className="form-control rounded m-2"
                  name="failureServity"
                  placeholder="Failure Servity"
                  value={x.failureServity}
                  //   onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="form-control rounded m-2"
                  name="failureOccurrence"
                  placeholder="Failure Occurrence"
                  value={x.failureOccurrence}
                  //   onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="form-control rounded m-2"
                  name="failureProcessPrevention"
                  placeholder="Failure Process Prevention"
                  value={x.failureProcessPrevention}
                  //   onChange={e => handleInputChange(e, i)}
                />
                 <input
                  className="form-control rounded m-2"
                  name="failureDetection"
                  placeholder="Failure Detection"
                  value={x.failureDetection}
                  //   onChange={e => handleInputChange(e, i)}
                />
                 <input
                  className="form-control rounded m-2"
                  name="riskzero"
                  placeholder="Risk zero"
                  value={x.riskzero}
                  //   onChange={e => handleInputChange(e, i)}
                />
                 <input
                  className="form-control rounded m-2"
                  name="actions"
                  placeholder="Actions"
                  value={x.actions}
                  //   onChange={e => handleInputChange(e, i)}
                />
                 <input
                  className="form-control rounded m-2"
                  name="ownerShip"
                  placeholder="OwnerShip"
                  value={x.ownerShip}
                  //   onChange={e => handleInputChange(e, i)}
                />
                
                
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button className="btn btn-primary m-2 "onClick={handleAddClick}>Add</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <figure className="site-logo">Site logo</figure>
      <div
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
        className="container-fluid mt-5"
      >
        <table
          width={1300}
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: 1300 }}
        >
          <tbody>
            <tr>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderLeft: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                LOT NO.
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="product"
                  readOnly="true"
                  defaultValue="NEW"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                PLAN TITLE
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="process"
                  readOnly="true"
                  defaultValue="AGILE"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                STEP TITLE
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="process_id"
                  readOnly="true"
                  defaultValue="NQ"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                QC TITLE
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="approved_by"
                  readOnly="true"
                  defaultValue="Junaid"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={8} height={10}></td>
            </tr>
          </tbody>
        </table>

        <table
          width={1300}
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: 1300 }}
        >
          <tbody>
            <tr>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderLeft: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                PRODUCT
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="product"
                  readOnly="true"
                  defaultValue="NEW"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                PROCESS
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="process"
                  readOnly="true"
                  defaultValue="AGILE"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                ID
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="process_id"
                  readOnly="true"
                  defaultValue="NQ"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                APPROVED BY
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderTop: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="approved_by"
                  readOnly=""
                  defaultValue="Junaid"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  borderLeft: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                PARTY RESPONSIBLE
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="text"
                  name="party_responsible"
                  readOnly="true"
                  defaultValue="Process"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                TEAM
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <Select isMulti options={options} />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                DATE
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="date"
                  name="date_to_begin"
                  readOnly=""
                  defaultValue="2020-02-12"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
              <td
                width={100}
                style={{
                  background: "#000",
                  borderBottom: "1px solid #c1c1c1",
                  color: "#fff",
                  fontSize: 12,
                  padding: 5,
                }}
              >
                DATE COMPLETED
              </td>
              <td
                width={100}
                style={{
                  borderBottom: "1px solid #c1c1c1",
                  borderRight: "1px solid #c1c1c1",
                }}
              >
                <input
                  type="date"
                  name="date_to_complete"
                  readOnly="true"
                  defaultValue="2020-02-14"
                  style={{
                    width: "100%",
                    height: 30,
                    border: 0,
                    padding: 5,
                    fontSize: 12,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={8} height={10}></td>
            </tr>
          </tbody>
        </table>

        {/* <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                    <thead>
                        <tr>
                            <th
                                colSpan={14}
                                style={{
                                    borderTop: "1px solid #c1c1c1",
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "left",
                                    background: "#000"
                                }}
                            >
                                FAILURE MODE AND <br /> EFFECTS ANALYSIS
                            </th>
                            <th
                                colSpan={6}
                                style={{
                                    borderTop: "1px solid #c1c1c1",
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "left",
                                    background: "#000"
                                }}
                            >
                                {" "}
                                FMEA RESULTS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            >
                                ID
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#8398b2"
                                }}
                            >
                                PROCESS STEP
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#747171"
                                }}
                            >
                                REQUIREMENT
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#525252"
                                }}
                            >
                                EFFECTS OF FAILURE
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            >
                                SEVERITY
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#8398b2"
                                }}
                            >
                                CAUSES
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            >
                                OCCURRENCE
                            </td>
                            <td
                                width={130}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: "7px 4px 7px 7px",
                                    textAlign: "right",
                                    background: "#747171"
                                }}
                            >
                                CURRENT PROCESS
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: "7px 7px 7px 0",
                                    textAlign: "left",
                                    background: "#747171"
                                }}
                            >
                                CONTROLS
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            >
                                DETECTION
                            </td>
                            <td
                                width={60}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#000"
                                }}
                            >
                                RPN
                            </td>
                            <td
                                width={130}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#525252"
                                }}
                            >
                                RECOMMENDED ACTIONS
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#525252"
                                }}
                            >
                                OWNERSHIP
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#525252"
                                }}
                            >
                                DATE DUE
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#8398b2"
                                }}
                            >
                                ACTION RESULTS
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#8398b2"
                                }}
                            >
                                DATE COMPLETED
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#747171"
                                }}
                            >
                                SEVERITY
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#747171"
                                }}
                            >
                                OCCURRENCE
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#747171"
                                }}
                            >
                                DETECTION
                            </td>
                            <td
                                width={60}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#000"
                                }}
                            >
                                RPN
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    borderLeft: "1px solid #c1c1c1",
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            >
                                #
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#abbacc"
                                }}
                            >
                                name, ID number, etc.
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#aeaaaa"
                                }}
                            >
                                function
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#7e7c7b"
                                }}
                            >
                                consequential impact on other systems, departments, etc.
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            ></td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#abbacc"
                                }}
                            >
                                list all contributing factors
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            ></td>
                            <td
                                width={130}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#aeaaaa"
                                }}
                            >
                                prevention
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#aeaaaa"
                                }}
                            >
                                detection
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#44546b"
                                }}
                            ></td>
                            <td
                                width={60}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#000"
                                }}
                            >
                                risk priority number
                            </td>
                            <td
                                width={130}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#7e7c7b"
                                }}
                            >
                                steps required to reduce severity and occurrence and increase detection
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#7e7c7b"
                                }}
                            >
                                organization, team, or individual responsible
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#7e7c7b"
                                }}
                            >
                                target date of completion
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#abbacc"
                                }}
                            >
                                actions taken
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#abbacc"
                                }}
                            >
                                actual date of completion
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#aeaaaa"
                                }}
                            ></td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#aeaaaa"
                                }}
                            ></td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#aeaaaa"
                                }}
                            ></td>
                            <td
                                width={60}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    color: "#fff",
                                    fontSize: 11,
                                    padding: 7,
                                    textAlign: "center",
                                    background: "#000"
                                }}
                            >
                                risk priority number
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                1
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={1}
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={2}
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={3}
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={4}
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={5}
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={6}
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={7}
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={8}
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={9}
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={10}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={10}
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={11}
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue="2020-02-12"
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue="Taken"
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue="2020-02-14"
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                2
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                3
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                4
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                5
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                6
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                7
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                8
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                9
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                10
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                11
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                12
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                13
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                width={70}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderLeft: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                14
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['name']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['function']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['impact']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_causes']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={130}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_prevention']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_process_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['failure_detection']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskzero']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actions']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['ownership']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['due_date']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_action_taken']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['actual_date_completion']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_severity']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['fmea_occurrence']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={100}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue=""
                                    readOnly=""
                                    name="fmea[$i]['detection    ']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                            <td
                                width={60}
                                style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    borderBottom: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1",
                                    background: "#fff"
                                }}
                            >
                                <input
                                    type="text"
                                    defaultValue={0}
                                    readOnly=""
                                    name="fmea[$i]['riskone']"
                                    style={{
                                        fontSize: 12,
                                        background: "#fff",
                                        width: "100%",
                                        padding: 5,
                                        border: 0,
                                        height: 35
                                    }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table> */}
        {renderdayanamicField()}
      </div>
    </>
  );
};

export default FMEA;
