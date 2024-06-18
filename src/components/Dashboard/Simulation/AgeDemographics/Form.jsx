"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChevronDown, FaUpload } from "react-icons/fa6";

import { FaSpinner } from "react-icons/fa";
import Input from "@/components/Shared/Input";
import axios from "axios";
import apiUrl from "@/utils/baseURL";

const Form = ({ setApiData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    credit_score: 700,
    age_group: "18-25",
    education_level: "bachelor",
    marital_status: "single",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "credit_score" ? Number(value) : value; // Only convert credit_score to Number

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      console.log("formData ", formData);

      const response = await axios.post(
        `${apiUrl}/simulate_age_demographics`,
        formData
      );
      console.log("response.data ", response.data);

      setApiData(response.data);

      setIsLoading(false);
    } catch (error) {
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
      className=" sm:p-10 px-4 w-[90%] mx-auto py-7  font-poppins bg-[#fff] "
    >
      <h1 className="font-bold text-2xl">Make a request</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to request a quote, and we’ll be in
        touch. Or you can call us and our specialists will provide help!
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
            placeholder="The initial credit score"
            onChange={handleInputChange}
          />

          {/* Age Group */}
          <div>
            <label
              htmlFor="employment_type"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Age Group
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="age_group"
                name="age_group"
                required
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                {["18-25", "26-35", "36-45", "46-55", "56+"].map(
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

          {/* Education Level */}
          <div>
            <label
              htmlFor="employment_type"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Education Level
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="education_level"
                name="education_level"
                required
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                {["high school", "bachelor", "master", "phd"].map(
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

          {/* Education Level */}
          <div>
            <label
              htmlFor="employment_type"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Marital Status
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="marital_status"
                name="marital_status"
                required
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                {["single", "married", "divorced", "widowed"].map(
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
              Calculate Demographic Impact
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
