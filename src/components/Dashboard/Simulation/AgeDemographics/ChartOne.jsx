"use client";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = ({ apiData }) => {
  const { age_factor, education_factor, impact_score, marital_factor } =
    apiData?.demographic_impact;

  // Convert numbers to two decimal places
  const formattedData = [
    age_factor,
    education_factor,
    impact_score,
    marital_factor,
  ].map((num) => parseFloat(num.toFixed(2)));

  const [state, setState] = useState({
    series: [
      {
        data: formattedData,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Age Factor",
          "Education Factor",
          "Impact Score",
          "Marital Factor",
        ],
      },
      yaxis: {
        title: {
          text: "Score",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " points";
          },
        },
      },
    },
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 ">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="text-3xl font-bold pb-2">Bar Graph</div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
