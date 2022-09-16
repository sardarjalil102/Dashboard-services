import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllFishBoneReports,updateFishBoneReport } from "../../../../Redux/features/ReportSlice.js";

const Report1 = () => {

    const [value,setValue]=React.useState({
       comments:'Hello',
       effect:'None'
    })

    const handleonChange = (evt, key) => {
        const ev = evt.target.value;
        setValue({
          ...value,
          [key]: ev,
        });
      };

    const dispatch =useDispatch()
    React.useEffect(()=>{
        dispatch(getAllFishBoneReports())
    },[])

    const UpdateReport=()=>{
        dispatch(updateFishBoneReport())
    }

    return (
        <>
            <figure className="site-logo">Site logo</figure>
            <div style={{
                padding: 30, overflow: 'auto',
                whiteSpace: 'nowrap'
            }}>
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
                                    padding: 5
                                }}
                            >
                                LOT NO.
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderTop: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
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
                                        fontSize: 12
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
                                    padding: 5
                                }}
                            >
                                PLAN TITLE
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderTop: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
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
                                        fontSize: 12
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
                                    padding: 5
                                }}
                            >
                                STEP TITLE
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderTop: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
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
                                        fontSize: 12
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
                                    padding: 5
                                }}
                            >
                                QC TITLE
                            </td>
                            <td
                                width={100}
                                style={{
                                    borderBottom: "1px solid #c1c1c1",
                                    borderTop: "1px solid #c1c1c1",
                                    borderRight: "1px solid #c1c1c1"
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
                                        fontSize: 12
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={8} height={10}></td>
                        </tr>
                    </tbody>
                </table>
                <form
                    className="form-horizontal"
                    method="POST"
                    action=""
                >
                    <input type="hidden" name="form_id" id="form_id" defaultValue={7} />
                    <input
                        type="hidden"
                        name=""
                        defaultValue=""
                    />
                    <input type="hidden" name="build_id" id="build_id" defaultValue={89} />
                    <input
                        type="hidden"
                        name="session_id"
                        id="session_id"
                        defaultValue={1195}
                    />
                    <table
                        width={1306}
                        align="center"
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                        style={{ margin: "0 auto" }}
                    >
                        <tbody>
                            <tr>
                                <td>
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                        <tbody>
                                            <tr>
                                                <td
                                                    align="left"
                                                    style={{
                                                        verticalAlign: "top",
                                                        padding: 20,
                                                        color: "#fff",
                                                        fontFamily: '"robotobold", Arial, Helvetica, sans-serif',
                                                        fontSize: 14,
                                                        background: "#d5dce5"
                                                    }}
                                                >
                                                    <table
                                                        width="96.5%"
                                                        cellPadding={0}
                                                        cellSpacing={0}
                                                        border={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td width="26%" style={{ position: "relative" }}>
                                                                    <span className="aero-tilt-dn" />
                                                                    <table
                                                                        width="100%"
                                                                        cellPadding={0}
                                                                        cellSpacing={0}
                                                                        border={0}
                                                                    >
                                                                        <thead>
                                                                            <tr>
                                                                                <th
                                                                                    width="72%"
                                                                                    style={{
                                                                                        padding: 5,
                                                                                        background: "#000",
                                                                                        color: "#fff",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 13
                                                                                    }}
                                                                                >
                                                                                    SYSTEMS
                                                                                </th>
                                                                                <th width="28%"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "center",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "right",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td />
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "left",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="26%" style={{ position: "relative" }}>
                                                                    <span className="aero-tilt-dn" />
                                                                    <table
                                                                        width="100%"
                                                                        cellPadding={0}
                                                                        cellSpacing={0}
                                                                        border={0}
                                                                    >
                                                                        <thead>
                                                                            <tr>
                                                                                <th
                                                                                    width="72%"
                                                                                    style={{
                                                                                        padding: 5,
                                                                                        background: "#000",
                                                                                        color: "#fff",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 13
                                                                                    }}
                                                                                >
                                                                                    PROCESS
                                                                                </th>
                                                                                <th width="28%"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "center",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "right",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td />
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "left",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="26%" style={{ position: "relative" }}>
                                                                    <span className="aero-tilt-dn" />
                                                                    <table
                                                                        width="100%"
                                                                        cellPadding={0}
                                                                        cellSpacing={0}
                                                                        border={0}
                                                                    >
                                                                        <thead>
                                                                            <tr>
                                                                                <th
                                                                                    width="72%"
                                                                                    style={{
                                                                                        padding: 5,
                                                                                        background: "#000",
                                                                                        color: "#fff",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 13
                                                                                    }}
                                                                                >
                                                                                    FORMS
                                                                                </th>
                                                                                <th width="28%"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "center",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "right",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td />
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "left",
                                                                                        color: "#fff",
                                                                                        padding: "20px 0 0",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table
                                                        width="100%"
                                                        cellPadding={0}
                                                        cellSpacing={0}
                                                        border={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    width={250}
                                                                    style={{
                                                                        verticalAlign: "middle",
                                                                        color: "#fff",
                                                                        padding: "15px 20px 15px 0",
                                                                        position: "relative",
                                                                        textTransform: "uppercase",
                                                                        fontStyle: "italic",
                                                                        fontFamily:
                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                        fontSize: 16,
                                                                        fontWeight: 'bold'
                                                                    }}
                                                                >
                                                                    CAUSE
                                                                    <span
                                                                        className="aero-rt"
                                                                        style={{ width: "96%", right: "-64px" }}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table
                                                        width="96.5%"
                                                        cellPadding={0}
                                                        cellSpacing={0}
                                                        border={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td width="26%" style={{ position: "relative" }}>
                                                                    <span className="aero-tilt-dn up" />
                                                                    <table
                                                                        width="100%"
                                                                        cellPadding={0}
                                                                        cellSpacing={0}
                                                                        border={0}
                                                                    >
                                                                        <tbody>
                                                                            <tr>
                                                                                <td />
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "left",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "right",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td />
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "center",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </tbody>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <td
                                                                                    width="72%"
                                                                                    style={{
                                                                                        padding: 5,
                                                                                        background: "#000",
                                                                                        color: "#fff",
                                                                                        textAlign: "center",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 13
                                                                                    }}
                                                                                >
                                                                                    PEOPLE
                                                                                </td>
                                                                                <td width="28%"></td>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>
                                                                </td>
                                                                <td width="26%" style={{ position: "relative" }}>
                                                                    <span className="aero-tilt-dn up" />
                                                                    <table
                                                                        width="100%"
                                                                        cellPadding={0}
                                                                        cellSpacing={0}
                                                                        border={0}
                                                                    >
                                                                        <tbody>
                                                                            <tr>
                                                                                <td />
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "left",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "right",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td />
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "center",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </tbody>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <td
                                                                                    width="72%"
                                                                                    style={{
                                                                                        padding: 5,
                                                                                        background: "#000",
                                                                                        color: "#fff",
                                                                                        textAlign: "center",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 13
                                                                                    }}
                                                                                >
                                                                                    POLICIES
                                                                                </td>
                                                                                <td width="28%"></td>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>
                                                                </td>
                                                                <td width="26%" style={{ position: "relative" }}>
                                                                    <span className="aero-tilt-dn up" />
                                                                    <table
                                                                        width="100%"
                                                                        cellPadding={0}
                                                                        cellSpacing={0}
                                                                        border={0}
                                                                    >
                                                                        <tbody>
                                                                            <tr>
                                                                                <td />
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "left",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "right",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td />
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    height="60px"
                                                                                    style={{
                                                                                        verticalAlign: "middle",
                                                                                        textAlign: "center",
                                                                                        color: "#fff",
                                                                                        padding: "0 0 20px",
                                                                                        textTransform: "uppercase",
                                                                                        fontStyle: "italic",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position: "relative",
                                                                                            width: 80,
                                                                                            display: "inline-block"
                                                                                        }}
                                                                                    >
                                                                                        <span className="aero-rt" />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-2px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                        <textarea
                                                                                            name="system_cause_one"
                                                                                            readOnly=""
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                height: 25,
                                                                                                width: 80,
                                                                                                resize: "none",
                                                                                                margin: "-5px auto",
                                                                                                fontSize: 13
                                                                                            }}
                                                                                            defaultValue={"SYS1"}
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </tbody>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <td
                                                                                    width="72%"
                                                                                    style={{
                                                                                        padding: 5,
                                                                                        background: "#000",
                                                                                        color: "#fff",
                                                                                        textAlign: "center",
                                                                                        fontFamily:
                                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 13
                                                                                    }}
                                                                                >
                                                                                    PLACE
                                                                                </td>
                                                                                <td width="28%"></td>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td
                                                    width="25%"
                                                    style={{ background: "#aeabab", verticalAlign: "top" }}
                                                >
                                                    <table
                                                        width="100%"
                                                        height={573}
                                                        cellPadding={0}
                                                        cellSpacing={0}
                                                        border={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    height="60px"
                                                                    style={{
                                                                        verticalAlign: "middle",
                                                                        textAlign: "center",
                                                                        color: "#fff",
                                                                        padding: "3px 20px 3px 0",
                                                                        textTransform: "uppercase",
                                                                        fontStyle: "italic",
                                                                        fontFamily:
                                                                            '"robotobold", Arial, Helvetica, sans-serif',
                                                                        fontSize: 16,
                                                                        fontWeight: 'bold'
                                                                    }}
                                                                >
                                                                    Effect
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        verticalAlign: "middle",
                                                                        padding: "5px 30px 20px",
                                                                        color: "#576271",
                                                                        textAlign: "center",
                                                                        fontFamily:
                                                                            '"robotoregular", Arial, Helvetica, sans-serif',
                                                                        fontSize: 13
                                                                    }}
                                                                >
                                                                    <textarea
                                                                        name="effect"
                                                                        onChange={(e)=>handleonChange(e, "effect")}
                                                                        value={value.effect}
                                                                        readOnly=""
                                                                        style={{
                                                                            textAlign: "center",
                                                                            height: 250,
                                                                            width: "90%",
                                                                            resize: "none",
                                                                            margin: "0px auto",
                                                                            fontSize: 13
                                                                        }}
                                                                        defaultValue={"Eff1"}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                        <tbody>
                                            <tr>
                                                <td style={{ padding: 20, background: "#def6ff" }}>
                                                    <table
                                                        width="100%"
                                                        cellPadding={0}
                                                        cellSpacing={0}
                                                        border={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <textarea
                                                                        type="text"
                                                                        readOnly=""
                                                                        onChange={(e)=>handleonChange(e, "comments")}
                                                                        value={value.comments}
                                                                        name="comment"
                                                                        style={{
                                                                            width: "100%",
                                                                            padding: 5,
                                                                            height: 80,
                                                                            resize: "none",
                                                                            border: "1px solid #d5d5d5",
                                                                            background: "#fff",
                                                                            fontSize: 13
                                                                        }}
                                                                        defaultValue={"Comm"}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        className="form-group text-center btn-action"
                        style={{ padding: 30 }}
                    >
                        <button onClick={()=>UpdateReport()} class={'btn btn-success'}>Update</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Report1