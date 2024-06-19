"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartThree = ({ apiData }) => {
  const { high, low, medium } = apiData?.risk_category_distribution;

  const [state, setState] = useState({
    series: [high, medium, low],
  });

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#10B981", "#259AE6", "#FFA70B"],
    labels: ["high", "medium", "low"],
    legend: {
      show: true,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5  sm:px-7 xl:col-span-5 font-poppins">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Pie Chart
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
