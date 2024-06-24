"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = ({ apiData }) => {
  const [state, setState] = useState({
    series: [
      {
        name: "Incomes",
        data: [],
      },
    ],
    options: {
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
      },
      colors: ["#80CAEE"],
      chart: {
        fontFamily: "Satoshi, sans-serif",
        height: 335,
        type: "area",
        dropShadow: {
          enabled: true,
          color: "#623CEA14",
          top: 10,
          blur: 4,
          left: 0,
          opacity: 0.1,
        },
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 1366,
          options: {
            chart: {
              height: 350,
            },
          },
        },
      ],
      stroke: {
        width: [2, 2],
        curve: "straight",
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
          title: {
            text: "Years",
          },
          labels: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
          title: {
            text: "Incomes",
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      markers: {
        size: 4,
        colors: "#fff",
        strokeColors: ["#3056D3", "#80CAEE"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
          size: undefined,
          sizeOffset: 5,
        },
      },
      xaxis: {
        type: "category",
        categories: [],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          style: {
            fontSize: "0px",
          },
        },
        min: 0,
        max: 0,
      },
    },
  });

  useEffect(() => {
    if (apiData?.income_projection) {
      const incomes = apiData.income_projection.map((item) =>
        parseFloat(item.income.toFixed(2))
      );
      const years = apiData.income_projection.map((item) => item.year);

      const yMin = Math.min(...incomes);
      const yMax = Math.max(...incomes);

      setState((prevState) => ({
        ...prevState,
        series: [
          {
            name: "Incomes",
            data: incomes,
          },
        ],
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: years,
          },
          yaxis: {
            ...prevState.options.yaxis,
            min: yMin - 100,
            max: yMax + 100,
          },
        },
      }));
    }
  }, [apiData]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 ">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="text-3xl font-bold pb-2">Area Chart</div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
