import React, { useCallback, useState, useEffect } from "react";
import produce from "immer";
// local imports

import Footer from "../layout/components/Footer";
import Tree from "../Tree";
import MUITree from "../Tree/MUITree";
import DATA from "../../data/tree2.json";
import { useDispatch } from "react-redux";
import { fetchInspectionPlans } from "../../Redux/features/InspectionPlanSlice";
import CUTable from "../common/CUTable";

const Playground = () => {
  const [treeData, setTreeData] = useState(DATA);
  const [currentNode, setCurrentNode] = useState({});
  const dispatch = useDispatch();

  const handleToggle = useCallback((id) => {
    setTreeData(
      produce((draft) => {
        const form = draft.find((f) => f.id === "6");
        // // // console.log(form.D);
        form.children = [
          {
            id: "9",
            label: "cellphone",
          },
        ];
      })
    );
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-itms-center flex-nowrap">
        <Tree data={treeData} setCurrentNode={setCurrentNode} />
        {/* <MUITree/> */}
        <div className="container">
          <button onClick={handleToggle} className="btn btn-sm btn-success m-2">
            add child
          </button>
          <button
            onClick={() => {
              setTreeData([
                ...treeData,
                { id: 12 * Math.random(), label: "Food" },
              ]);
            }}
            className="btn btn-sm btn-danger m-2"
          >
            add parent
          </button>

          <button
            onClick={() => {
              dispatch(fetchInspectionPlans());
            }}
            className="btn btn-sm btn-warning m-2"
          >
            send req
          </button>
        </div>
        {/* <CUTable  data={} heading={headings}/> */}
      </div>
    </>
  );
};

export default Playground;
