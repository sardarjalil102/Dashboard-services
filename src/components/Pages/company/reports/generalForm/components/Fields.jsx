import React, { useEffect } from "react";
import Five from "./types/Five";
import One from "./types/One";
import Two from "./types/Two";
import Three from "./types/Three";
import Foure from "./types/Foure";

const Fields = ({ fieldData }) => {
  useEffect(() => {
    // console.log(fieldData);

    return () => {};
  }, [fieldData]);

  return (
    <div className="">
      {fieldData?.type == 1 && (
        <One name={fieldData?.name} value={fieldData?.filledValue[0]?.value} />
      )}

      {fieldData?.type == 2 && (
        <Two
          options={fieldData?.items}
          value={fieldData?.filledValue[0]?.value}
          name={fieldData?.name}
        />
      )}
      {fieldData?.type == 3 && (
        <Three
          options={fieldData?.items}
          value={fieldData?.filledValue[0]?.value}
          name={fieldData?.name}
        />
      )}
      {fieldData?.type == 4 && (
        <Foure
          options={fieldData?.items}
          value={fieldData?.filledValue[0]?.value}
          name={fieldData?.name}
        />
      )}
      {fieldData?.type == 5 && (
        <Five
          options={fieldData?.items}
          value={fieldData?.filledValue[0]?.value}
          name={fieldData?.name}
        />
      )}
    </div>
  );
};

export default Fields;
