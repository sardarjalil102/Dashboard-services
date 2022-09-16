import React from "react";
import PropTypes from "prop-types";
const FakeSelect = ({ defaultValue }) => {
  return (
    <div className="border rounded row w-100 ms-0 py-2">
      <div className="col-12 my-auto gx-3 gy-3">
        {defaultValue?.map(({ label }, i) => (
          <span
            key={i}
            style={{
              marginTop: "20px !important",
              backgroundColor: "#e6e6e6",
              fontSize: "14px",
              borderRadius: "2px",
            }}
            className=" py-1 px-2 w-25 me-1"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
FakeSelect.propTypes = {
  defaultValue: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      // value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default FakeSelect;
// <span style={{ marginTop: '20px !important', backgroundColor: '#e6e6e6', fontSize: '14px' }} className="p-1 w-25 me-1">
//     aaaaa
// </span>
