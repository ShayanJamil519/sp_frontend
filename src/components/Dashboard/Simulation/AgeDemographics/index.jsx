"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Form from "./Form";

const ChartOne = dynamic(() => import("./ChartOne"), {
  ssr: false,
});

const ChartTwo = dynamic(() => import("./ChartTwo"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("./ChartThree"), {
  ssr: false,
});

export const AgeDemographics = () => {
  const [apiData, setApiData] = useState(null);

  return (
    <div className="w-full h-full">
      {apiData ? (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
          <ChartOne apiData={apiData} />

          <ChartTwo />
          <div className="col-span-12 xl:col-span-12 w-full">
            <ChartThree apiData={apiData} />
          </div>
        </div>
      ) : (
        <Form setApiData={setApiData} />
      )}
    </div>
  );
};
