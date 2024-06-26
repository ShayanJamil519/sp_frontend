"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

import { FaSpinner } from "react-icons/fa";
import Input from "@/components/Shared/Input";
import axios from "axios";
import apiUrl from "@/utils/baseURL";

const Form = ({ setApiData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    credit_score: 700,
    housing_market_trends: 5,
    regional_unemployment_rate: 5,
    region: "urban",
  });

  console.log({ formData });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: name === "region" ? value : Number(value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${apiUrl}/simulate_geographic_location`,
        formData
      );

      setApiData(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        boxShadow: "0px 5px 43px 0px rgba(17, 29, 25, 0.12)",
      }}
      className=" sm:p-10 px-4  mx-auto py-7  font-poppins bg-[#fff] "
    >
      <h1 className="font-bold text-2xl">Geographic Location</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Geographic location can significantly influence credit risk due to
        varying economic conditions, cost of living, and regional employment
        rates. This simulation analyzes how different locations impact credit
        scores, helping to identify regional trends and potential risks
        associated with residing in specific areas.
      </p>
      <form className="w-full  mt-10 " onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-y-3 mb-3">
          <Input
            name="credit_score"
            label="Enter initial credit score."
            type="number"
            required={true}
            min={300}
            max={850}
            pattern="^\d+$"
            placeholder="The credit score of the individual"
            onChange={handleInputChange}
          />

          <Input
            name="housing_market_trends"
            label="Enter housing market trends "
            type="number"
            required={true}
            min={1}
            max={10}
            pattern="^\d+$"
            placeholder="A score (1 to 10) indicating housing market trends"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <Input
            name="regional_unemployment_rate"
            label="Enter regional unemployment rate  "
            type="number"
            required={true}
            min={0}
            pattern="^\d+$"
            placeholder="The regional unemployment rate as a percentage"
            onChange={handleInputChange}
          />

          <div>
            <label
              htmlFor="region"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select region{" "}
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="region"
                name="region"
                required
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                {["urban", "suburban", "rural"].map((item, index) => (
                  <option value={item} key={index} className="text-[#202725]">
                    {item}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 text-[16px] flex items-center px-2 text-[#202725]">
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center ">
          {isLoading ? (
            <button
              type="submit"
              className=" mt-3 sm:mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out outline-none border-0 px-7 py-5 rounded-md sm:rounded-sm"
              disabled={isLoading}
            >
              <FaSpinner className="animate-spin mr-2 text-white" />
              <span className={"text-white"}>Loading...</span>
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 sm:mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-md sm:rounded-sm"
            >
              Calculate Geographic Location Factors
              <span className="p-0 rounded-full bg-[#fff] transition duration-500 text-[#20332c]">
                <IoIosArrowRoundForward className="text-[27px] font-bold" />
              </span>{" "}
              <style jsx>{`
                button:hover span {
                  background-color: #fff;
                  color: #257830;
                }
              `}</style>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
