import React from "react";

import Branch from "./Branch";

const Tree = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      {data.map((item) => (
        <Branch key={item.id} item={item} level={0} />
      ))}
    </div>
  );
};

export default Tree;
