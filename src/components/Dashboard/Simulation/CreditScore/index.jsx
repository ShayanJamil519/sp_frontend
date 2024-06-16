"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChartOne = dynamic(() => import("./ChartOne"), {
  ssr: false,
});

const ChartTwo = dynamic(() => import("./ChartTwo"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("./ChartThree"), {
  ssr: false,
});

export const CreditScore = () => {
  const [creditScore, setCreditScore] = useState(850);
  const [defaultProbability, setDefaultProbability] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://stochastic-process.vercel.app/simulate",
          { credit_score: parseInt(creditScore) }
        );
        setDefaultProbability((prev) => [
          ...prev,
          {
            score: parseInt(creditScore), // Make sure the score is a number
            probability: response.data.default_probability,
          },
        ]);
      } catch (error) {
        console.error("API call error:", error.response);
      }
    };

    fetchData();
  }, [creditScore]);

  return (
    <div className="">
      <input
        type="range"
        min="300"
        max="850"
        value={creditScore}
        onChange={(e) => setCreditScore(e.target.value)}
      />

      <ChartOne data={defaultProbability} />
      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
        <ChartOne />

        <ChartTwo />
        <div className="col-span-12 xl:col-span-12 w-full">
          <ChartThree />
        </div>
      </div> */}
    </div>
  );
};
