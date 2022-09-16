import React from "react";
import { TreeNode } from "react-organizational-chart";
import Node from "./Node";

const NodeWithName = ({ name, child, id, media, isInput }) => {
  return (
    <TreeNode
      label={<Node name={name} pid={id} media={media} isInput={isInput} />}
    >
      {child?.map(({ name, child, id, media, isInput }) => (
        <NodeWithName
          key={id}
          name={name}
          child={child}
          id={id}
          isInput={isInput}
          media={media}
        />
      ))}
    </TreeNode>
  );
};

export default NodeWithName;
