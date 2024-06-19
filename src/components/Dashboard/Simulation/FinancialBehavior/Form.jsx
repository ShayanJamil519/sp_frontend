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

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: Number(value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${apiUrl}/simulate_financial_behavior`,
        formData
      );

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
      className=" sm:p-10 px-4 w-full mx-auto py-7  font-poppins bg-[#fff] "
    >
      <h1 className="font-bold text-2xl">Simulate Financial Behavior</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        This simulation examines the impact of financial behavior on credit
        risk. Factors such as spending habits, savings patterns, and debt
        management are analyzed to predict changes in credit scores. By
        understanding these behaviors, we can gain insights into how personal
        finance decisions affect overall credit health.
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
            name="spending_habits"
            label="Enter spending habits"
            type="number"
            required={true}
            min={0}
            max={10}
            pattern="^\d+$"
            placeholder="A score representing spending habits (0-10)"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <Input
            name="payment_history"
            label="Enter payment history"
            type="number"
            required={true}
            min={0}
            max={100}
            pattern="^\d+$"
            placeholder="Payment history percentage (0-100)"
            onChange={handleInputChange}
          />

          <Input
            name="debt_to_income_ratio"
            label="Enter spend habits"
            type="number"
            required={true}
            min={0}
            max={100}
            pattern="^\d+$"
            placeholder="Debt-to-income ratio percentage"
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
              Calculate Financial Factors
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
