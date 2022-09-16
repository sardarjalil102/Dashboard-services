import React from "react";

const One = ({ name, value }) => {
  return (
    <div>
      <label className="form-label">{name}</label>
      <input
        className="form-control"
        type="text"
        // name={fieldData.name}
        // id={fieldData.name}
        value={value ? value : "No value"}
        readOnly={true}
      />
    </div>
  );
};

export default One;
