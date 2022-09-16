import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function Histogram() {
  const [orientation, setOrientation] = useState(false);

  const series = [
    {
      name: "Height in feet",
      data: [2722, 2080, 2063, 1972, 1516],
    },
  ];
  const options = {
    chart: {
      id: "Histogram",
      animations: {
        speed: 1800,
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ["fire Truck", "Sky Tree", "KVLY-TV", "Dell", "Moos", "chee"],
    },
  };

  return (
    <div className="text-center">
      {/* <button
        className="btn btn-primary mt-2"
        onClick={() => setOrientation((old) => !old)}
      >
        Reverse orientation
      </button> */}
      <Chart options={options} type="histogram" series={series} width="90%" />
    </div>
  );
}
