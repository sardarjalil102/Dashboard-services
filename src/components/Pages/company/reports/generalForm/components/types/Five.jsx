import React, { useEffect, useState } from "react";

const Five = ({ options, value, name }) => {
  const [mainValue, setmainValue] = useState(null);

  useEffect(() => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].id == value) {
        setmainValue(options[i].name);
      }
    }

    return () => {};
  }, [options, value]);

  return (
    <div>
      <label className="form-label">{name}</label>
      <input
        className="form-control"
        type="text"
        // name={fieldData.name}
        // id={fieldData.name}
        value={mainValue ? mainValue : "No value"}
        readOnly={true}
      />
    </div>
  );
};

export default Five;
