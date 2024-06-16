"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = ({ data }) => {
  console.log("data: ", data);
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [301, 340, 435, 464, 836, 345, 454, 340, 454, 765, 811],
      },
    ],
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
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Credit Score",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
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
        type: "numeric",
        title: {
          text: "Default Probability (%)",
        },
        tickAmount: 10,
        min: 0, // Define a minimum if applicable
        max: 10, // Define a maximum based on expected probability range * 100
        labels: {
          formatter: (val) => `${parseFloat(val).toFixed(2)}%`, // Ensure labels show significant digits
        },
      },
      yaxis: {
        title: {
          style: {
            fontSize: "0px",
          },
        },
        min: 300,
        max: 850,
      },
    },
    series: [],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;

  useEffect(() => {
    if (Array.isArray(data)) {
      const formattedData = data.map((d) => ({
        x: d.probability * 100, // Convert probability to percentage
        y: d.score,
      }));
      console.log("Formatted data for chart:", formattedData);
      setState((prevState) => ({
        ...prevState,
        series: [{ name: "Credit Score", data: formattedData }],
      }));
    }
  }, [data]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 xl:col-span-8">
      <div>
        <div id="chartOne" className="-ml-5 h-[500px] w-[103%]">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
