"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
// import dynamic from "next/dynamic";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

const ChartThree = ({ apiData }) => {
  const { age_factor, education_factor, impact_score, marital_factor } =
    apiData?.demographic_impact;

  const [state, setState] = useState({
    series: [age_factor, education_factor, impact_score, marital_factor],
  });

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
    labels: [
      "age_factor",
      "education_factor",
      "impact_score",
      "marital_factor",
    ],
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
            Waste Recycling Analytics Analytics
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
