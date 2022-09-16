import React from 'react'
import Select from "react-select";

const SelcetOpt = ({selectedvalues,handleChange,plants }) => {
  return (
    <Select
    id="plants"
    isMulti={true}
    defaultValue={selectedvalues}
    onChange={handleChange}
    options={plants?.map((p) => {
      return { value: p.id, label: p.plantName };
    })}
  />
  )
}

export default SelcetOpt