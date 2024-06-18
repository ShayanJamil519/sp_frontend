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
    health_conditions: 3,
    health_insurance_type: "private",
    insurance_coverage_level: 80,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "health_insurance_type" ? value : Number(value);

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
        `${apiUrl}/simulate_health_insurance`,
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

          <Input
            name="health_conditions"
            label="Enter the Health Condition."
            type="number"
            required={true}
            min={1}
            max={10}
            pattern="^\d+$"
            placeholder="The health credit score (1-10)"
            onChange={handleInputChange}
          />

          {/* Age Group */}
          <div>
            <label
              htmlFor="employment_type"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Health Insurance Type
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="health_insurance_type"
                name="health_insurance_type"
                required
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                {["private", "public", "none"].map((item, index) => (
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

          <Input
            name="insurance_coverage_level"
            label="Enter Insurace Coverage Level."
            type="number"
            required={true}
            min={0}
            pattern="^\d+$"
            placeholder="Insurance coverage rate as a percentage"
            onChange={handleInputChange}
          />
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
