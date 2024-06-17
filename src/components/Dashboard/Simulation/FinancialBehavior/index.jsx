"use client";
import dynamic from "next/dynamic";
import Form from "./Form";
import { useState } from "react";

const ChartOne = dynamic(() => import("./ChartOne"), {
  ssr: false,
});

const ChartTwo = dynamic(() => import("./ChartTwo"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("./ChartThree"), {
  ssr: false,
});

export const FinancialBehavior = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="w-full h-full">
      {formSubmitted ? (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
          <ChartOne />

          <ChartTwo />
          <div className="col-span-12 xl:col-span-12 w-full">
            <ChartThree />
          </div>
        </div>
      ) : (
        <Form setFormSubmitted={setFormSubmitted} />
      )}
    </div>
  );
};
