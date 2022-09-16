import React from "react";
import Chart from "react-apexcharts";

export default function Donut() {
  const options = { labels: ["Comedy", "Action", "Romance", "Drama", "SciFi"] };
  const series = [4, 5, 6, 1, 5];

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="90%" />
    </div>
  );
}
