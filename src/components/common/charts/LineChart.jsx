import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const LineChart = ({ options, series, type }) => {
  useEffect(() => {
    // // console.log(`props`, props);

    return () => {};
  }, []);

  return (
    <div className="bg-white m-3  d-flex justify-content-center align-itms-center rounded-md">
      <div className="mixed-chart">
        <Chart options={options} series={series} type={type} height={380} />
        {/* <Chart
          options={props?.options}
          series={props?.series}
          type={"bar"}
          width="560"
          height={props?.height}
        /> */}
      </div>
    </div>
  );
};

export default LineChart;
