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
    job_stability: 5,
    income_level: 0,
    employment_type: "full-time",

  });

  console.log({ formData });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: name === "employment_type" ? value : Number(value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${apiUrl}/simulate_employment_status`,
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
      className=" sm:p-10 px-4 w-full py-7  font-poppins bg-[#fff] "
    >
      <h1 className="font-bold text-2xl">Simulate Employment Status</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Employment status is a critical factor in assessing credit risk. This
        simulation evaluates how changes in employment, such as job loss or
        income fluctuations, can affect credit scores. By simulating various
        employment scenarios, we can better understand the financial stability
        and credit risk associated with different employment conditions.
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
            name="job_stability"
            label="Enter job stability "
            type="number"
            required={true}
            min={1}
            max={10}
            pattern="^\d+$"
            placeholder="A score (1 to 10) indicating job stability"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <Input
            name="income_level"
            label="Enter income level "
            type="number"
            required={true}
            min={0}
            pattern="^\d+$"
            placeholder="The annual income"
            onChange={handleInputChange}
          />

          <div>
            <label
              htmlFor="employment_type"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select employment type
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="employment_type"
                name="employment_type"
                required
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                {["full-time", "part-time", "self-employed", "unemployed"].map(
                  (item, index) => (
                    <option value={item} key={index} className="text-[#202725]">
                      {item}
                    </option>
                  )
                )}
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
              Calculate Employment Status Factors
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
