import React, { useState } from "react";

import Node from "../Node";

const Branch = ({ item, level }) => {
  const [selected, setSelected] = useState(item.selected ?? true);

  const hasChildren = item.children && item.children.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      let newLevel = 1;
      if (item?.type === "qc") {
        newLevel = 3;
      } else if (item?.type === "step") {
        newLevel = 2;
      }

      //   // // console.log("from branch : ", newLevel);
      return item.children.map((child) => {
        return <Branch key={child.id} item={child} level={newLevel} />;
      });
    }

    return null;
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <>
      <Node
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
      />

      {selected && renderBranches()}
    </>
  );
};

export default Branch;
