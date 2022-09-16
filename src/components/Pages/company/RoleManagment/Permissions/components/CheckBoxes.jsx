// import React from "react";
import _ from "lodash";

// function getObjKey(obj, value) {
//   return Object.keys(obj).find((key) => obj[key] === value);
// }
const CheckBoxes = ({ name, id, slectedArray, setSlectedArray, dis }) => {
  const handalcheckedState = (checkedId) => {
    const exists = _.includes(slectedArray, id);
    if (exists) {
      // _.unset(tempObj, "");
      // // console.log({
      //   "id status ": exists,
      //   "Clicked id  ": checkedId,
      // });
      let filteredPermissionsArry = slectedArray.filter((x) => x !== checkedId);
      setSlectedArray(filteredPermissionsArry);
    } else {
      // // console.log({
      //   "id status ": exists,
      //   "Clicked id  ": checkedId,
      // });
      setSlectedArray([...slectedArray, checkedId]);
    }
  };
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="col">
          <label htmlFor={name}>{name}</label>
        </div>
        <div className="col">
          <input
            disabled={dis}
            type="checkbox"
            onChange={() => {
              handalcheckedState(id);
            }}
            defaultChecked={_.includes(slectedArray, id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxes;
