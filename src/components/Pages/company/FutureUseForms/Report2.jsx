import React from 'react'

const Report2 = () => {
    return (
        <>
            <figure className="site-logo">Site logo</figure>
            <div style={{
                padding: 30, overflow: 'auto',
                whiteSpace: 'nowrap'
            }}>
                <table
                    width={1230}
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    style={{ width: 1230, marginLeft: 28 }}
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
                <div style={{ padding: 30 }}>
                    <form
                        className="form-horizontal"
                        method="POST"
                        action="https://processintel.techandover.com/approve5YForm/ODk="
                    >
                        <input type="hidden" name="form_id" id="form_id" defaultValue={14} />
                        <input
                            type="hidden"
                            name="_token"
                            defaultValue="UQdm521YcCnKZTQ4MH2m6A9ywm4FQshbuQd3XNLP"
                        />
                        <input type="hidden" name="build_id" id="build_id" defaultValue={89} />
                        <input
                            type="hidden"
                            name="session_id"
                            id="session_id"
                            defaultValue={1195}
                        />
                        <table width="100%" cellPadding={0} cellSpacing='-"0"' border={0}>
                            <tbody>
                                <tr>
                                    <td>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        width={140}
                                                        align="center"
                                                        style={{
                                                            verticalAlign: "middle",
                                                            padding: 20,
                                                            color: "#fff",
                                                            fontFamily: '"robotobold", Arial, Helvetica, sans-serif',
                                                            fontSize: 14,
                                                            background: "#355c7d"
                                                        }}
                                                    >
                                                        DEFINE THE PROBLEM
                                                    </td>
                                                    <td style={{ padding: 20, background: "#bdd2e3" }}>
                                                        <input
                                                            type="text"
                                                            name="problem"
                                                            readOnly=""
                                                            defaultValue="Not working"
                                                            style={{
                                                                width: "100%",
                                                                padding: 5,
                                                                height: 40,
                                                                border: 0
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        width={140}
                                                        align="center"
                                                        style={{
                                                            verticalAlign: "middle",
                                                            padding: 20,
                                                            color: "#fff",
                                                            fontFamily: '"robotobold", Arial, Helvetica, sans-serif',
                                                            fontSize: 14,
                                                            background: "#00bff3"
                                                        }}
                                                    >
                                                        WHY IS THIS A PROBLEM?
                                                    </td>
                                                    <td
                                                        style={{
                                                            padding: "0px 20px 20px 0",
                                                            background: "#def6ff"
                                                        }}
                                                    >
                                                        <table
                                                            width="100%"
                                                            cellPadding={0}
                                                            cellSpacing={0}
                                                            border={0}
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td width={20} />
                                                                    <td
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            padding: "3px 20px 3px 0",
                                                                            color: "#576271",
                                                                            fontFamily:
                                                                                '"robotobold", Arial, Helvetica, sans-serif',
                                                                            fontSize: 14
                                                                        }}
                                                                    >
                                                                        PRIMARY CAUSE
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width={20} />
                                                                    <td
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            padding: "5px 20px 6px 0",
                                                                            color: "#576271",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        Why is it happening?
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
                                                                        width={20}
                                                                        align="center"
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            color: "#00bff3",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        1
                                                                    </td>
                                                                    <td style={{ padding: 0, background: "#def6ff" }}>
                                                                        <input
                                                                            type="text"
                                                                            readOnly=""
                                                                            name="reason1"
                                                                            defaultValue="Code issue"
                                                                            style={{
                                                                                width: "70%",
                                                                                padding: 5,
                                                                                height: 40,
                                                                                border: 0
                                                                            }}
                                                                        />
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
                                                                    <td width="90px" />
                                                                    <td width={20} />
                                                                    <td
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            padding: "5px 20px 6px 0",
                                                                            color: "#576271",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        Why is that?
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="90px" />
                                                                    <td
                                                                        width={20}
                                                                        align="center"
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            color: "#00bff3",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        2
                                                                    </td>
                                                                    <td style={{ padding: 0, background: "#def6ff" }}>
                                                                        <input
                                                                            type="text"
                                                                            name="reason2"
                                                                            readOnly=""
                                                                            defaultValue=""
                                                                            style={{
                                                                                width: "75%",
                                                                                padding: 5,
                                                                                height: 40,
                                                                                border: 0
                                                                            }}
                                                                        />
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
                                                                    <td width="180px" />
                                                                    <td width={20} />
                                                                    <td
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            padding: "5px 20px 6px 0",
                                                                            color: "#576271",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        Why is that?
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="180px" />
                                                                    <td
                                                                        width={20}
                                                                        align="center"
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            color: "#00bff3",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        3
                                                                    </td>
                                                                    <td style={{ padding: 0, background: "#def6ff" }}>
                                                                        <input
                                                                            type="text"
                                                                            name="reason3"
                                                                            readOnly=""
                                                                            defaultValue=""
                                                                            style={{
                                                                                width: "85%",
                                                                                padding: 5,
                                                                                height: 40,
                                                                                border: 0
                                                                            }}
                                                                        />
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
                                                                    <td width="270px" />
                                                                    <td width={20} />
                                                                    <td
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            padding: "5px 20px 6px 0",
                                                                            color: "#576271",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        Why is that?
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="270px" />
                                                                    <td
                                                                        width={20}
                                                                        align="center"
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            color: "#00bff3",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        4
                                                                    </td>
                                                                    <td style={{ padding: 0, background: "#def6ff" }}>
                                                                        <input
                                                                            type="text"
                                                                            name="reason4"
                                                                            readOnly=""
                                                                            defaultValue=""
                                                                            style={{
                                                                                width: "95%",
                                                                                padding: 5,
                                                                                height: 40,
                                                                                border: 0
                                                                            }}
                                                                        />
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
                                                                    <td width="360px" />
                                                                    <td width={20} />
                                                                    <td>
                                                                        <table
                                                                            width="100%"
                                                                            cellPadding={0}
                                                                            cellSpacing={0}
                                                                            border={0}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style={{
                                                                                            verticalAlign: "middle",
                                                                                            padding: "5px 20px 6px 0",
                                                                                            color: "#576271",
                                                                                            fontFamily:
                                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                                            fontSize: 13
                                                                                        }}
                                                                                    >
                                                                                        Why is that?
                                                                                    </td>
                                                                                    <td
                                                                                        align="right"
                                                                                        style={{
                                                                                            verticalAlign: "middle",
                                                                                            padding: "5px 0 6px 0",
                                                                                            color: "#576271",
                                                                                            fontFamily:
                                                                                                '"robotobold", Arial, Helvetica, sans-serif',
                                                                                            fontSize: 14,
                                                                                            fontWeight: 'bold'
                                                                                        }}
                                                                                    >
                                                                                        ROOT CAUSE
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        width="360px"
                                                                        style={{
                                                                            padding: "3px 60px 3px 20px",
                                                                            verticalAlign: "middle",
                                                                            color: "#00bff3",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 12
                                                                        }}
                                                                    >
                                                                        NOTE: If the final "Why" has no controllable
                                                                        solution, return to the previous "Why."
                                                                    </td>
                                                                    <td
                                                                        width={20}
                                                                        align="center"
                                                                        style={{
                                                                            verticalAlign: "middle",
                                                                            color: "#00bff3",
                                                                            fontFamily:
                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                            fontSize: 13
                                                                        }}
                                                                    >
                                                                        5
                                                                    </td>
                                                                    <td style={{ padding: 0, background: "#def6ff" }}>
                                                                        <input
                                                                            type="text"
                                                                            name="root_cause"
                                                                            readOnly=""
                                                                            defaultValue=""
                                                                            style={{
                                                                                width: "100%",
                                                                                padding: 5,
                                                                                height: 40,
                                                                                border: 0
                                                                            }}
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
                                                    <td
                                                        width={140}
                                                        align="center"
                                                        style={{
                                                            verticalAlign: "middle",
                                                            padding: 20,
                                                            color: "#fff",
                                                            fontFamily: '"robotobold", Arial, Helvetica, sans-serif',
                                                            fontSize: 14,
                                                            background: "#94b6d2"
                                                        }}
                                                    >
                                                        CORRECTIVE ACTION TO TAKE
                                                    </td>
                                                    <td style={{ padding: "0 20px 20px", background: "#e9f0f5" }}>
                                                        <table
                                                            width="100%"
                                                            cellPadding={0}
                                                            cellSpacing={0}
                                                            border={0}
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td width="70%">
                                                                        <table
                                                                            width="100%"
                                                                            cellPadding={0}
                                                                            cellSpacing={0}
                                                                            border={0}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style={{
                                                                                            verticalAlign: "middle",
                                                                                            padding: "3px 0",
                                                                                            color: "#576271",
                                                                                            fontFamily:
                                                                                                '"robotobold", Arial, Helvetica, sans-serif',
                                                                                            fontSize: 14
                                                                                        }}
                                                                                    >
                                                                                        CORRECTIVE ACTION
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <textarea
                                                                                            readOnly=""
                                                                                            type="text"
                                                                                            name="action"
                                                                                            style={{
                                                                                                width: "100%",
                                                                                                padding: 5,
                                                                                                height: 200,
                                                                                                resize: "none",
                                                                                                border: "1px solid #d5d5d5",
                                                                                                background: "#fff"
                                                                                            }}
                                                                                            defaultValue={"Test"}
                                                                                        />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td width="30%" style={{ verticalAlign: "top" }}>
                                                                        <table
                                                                            width="100%"
                                                                            cellPadding={0}
                                                                            cellSpacing={0}
                                                                            border={0}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        align="center"
                                                                                        style={{
                                                                                            verticalAlign: "middle",
                                                                                            padding: "3px 0px 3px 15px",
                                                                                            color: "#00bff3",
                                                                                            fontFamily:
                                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        PARTY RESPONSIBLE
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ padding: "3px 0px 3px 15px" }}>
                                                                                        <input
                                                                                            type="text"
                                                                                            name="responsible_party"
                                                                                            defaultValue="Party harder"
                                                                                            readOnly="true"
                                                                                            style={{
                                                                                                width: "100%",
                                                                                                padding: 5,
                                                                                                height: 30,
                                                                                                border: "1px solid #d5d5d5",
                                                                                                background: "#f2f2f2"
                                                                                            }}
                                                                                        />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        width={140}
                                                                                        align="center"
                                                                                        style={{
                                                                                            verticalAlign: "middle",
                                                                                            padding: "3px 0px 3px 15px",
                                                                                            color: "#00bff3",
                                                                                            fontFamily:
                                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        DATE ACTION TO BEGIN
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ padding: "3px 0px 3px 15px" }}>
                                                                                        <input
                                                                                            type="text"
                                                                                            name="date_to_begin_action"
                                                                                            defaultValue="Go to home"
                                                                                            readOnly="true"
                                                                                            style={{
                                                                                                width: "100%",
                                                                                                padding: 5,
                                                                                                height: 30,
                                                                                                border: "1px solid #d5d5d5",
                                                                                                background: "#f2f2f2"
                                                                                            }}
                                                                                        />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        width={140}
                                                                                        align="center"
                                                                                        style={{
                                                                                            verticalAlign: "middle",
                                                                                            padding: "3px 0px 3px 15px",
                                                                                            color: "#00bff3",
                                                                                            fontFamily:
                                                                                                '"robotoregular", Arial, Helvetica, sans-serif',
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        DATE TO COMPLETE
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ padding: "3px 0px 3px 15px" }}>
                                                                                        <input
                                                                                            type="text"
                                                                                            name="date_to_complete_action"
                                                                                            defaultValue="come soon"
                                                                                            readOnly="true"
                                                                                            style={{
                                                                                                width: "100%",
                                                                                                padding: 5,
                                                                                                height: 30,
                                                                                                border: "1px solid #d5d5d5",
                                                                                                background: "#f2f2f2"
                                                                                            }}
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            className="form-group text-center btn-action"
                            style={{ padding: 30 }}
                        ></div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Report2