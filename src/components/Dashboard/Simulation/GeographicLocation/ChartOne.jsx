"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = ({ apiData }) => {
  const [state, setState] = useState({
    series: [
      {
        data: [],
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
        categories: ["Market", "Region", "Risk", "Unemployment"],
      },
      yaxis: {
        title: {
          text: "Percentage",
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

  useEffect(() => {
    if (apiData?.regional_risk) {
      const { market_factor, region_factor, risk_score, unemployment_factor } =
        apiData.regional_risk;

      const formattedData = [
        parseFloat(market_factor).toFixed(2),
        parseFloat(region_factor).toFixed(2),
        parseFloat(risk_score).toFixed(2),
        parseFloat(unemployment_factor).toFixed(2),
      ];

      setState((prevState) => ({
        ...prevState,
        series: [
          {
            data: formattedData,
          },
        ],
      }));
    }
  }, [apiData]);

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
