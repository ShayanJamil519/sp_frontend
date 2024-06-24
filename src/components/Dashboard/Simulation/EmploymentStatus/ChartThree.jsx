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
        categories: [],
        title: {
          text: "Years",
        },
      },
      yaxis: {
        title: {
          text: "Incomes",
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
    if (apiData?.income_projection) {
      const incomes = apiData.income_projection.map((item) =>
        parseFloat(item.income.toFixed(2))
      );
      const years = apiData.income_projection.map((item) => item.year);

      setState((prevState) => ({
        ...prevState,
        series: [
          {
            data: incomes,
          },
        ],
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: years,
          },
        },
      }));
    }
  }, [apiData]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 ">
      <div>
        <div className="text-3xl font-bold pb-2">Bar Graph</div>
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
