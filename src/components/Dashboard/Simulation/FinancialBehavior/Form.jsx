"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChevronDown, FaUpload } from "react-icons/fa6";

import { FaSpinner } from "react-icons/fa";
import Input from "@/components/Shared/Input";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
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
            required
            min={0}
            placeholder="The initial credit score"
            onChange={handleInputChange}
          />

          <Input
            name="spending_habits"
            label="Enter spending habits"
            type="number"
            required
            min={0}
            max={10}
            placeholder="A score representing spending habits (0-10)"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <Input
            name="payment_history"
            label="Enter payment history"
            type="number"
            required
            min={0}
            max={100}
            placeholder="Payment history percentage (0-100)"
            onChange={handleInputChange}
          />

          <Input
            name="debt_to_income_ratio"
            label="Enter spend habits"
            type="number"
            required
            min={0}
            max={10}
            placeholder="Debt-to-income ratio percentage"
            onChange={handleInputChange}
          />
        </div>

        <div className="grid place-items-center ">
          {isLoading ? (
            <button
              type="submit"
              className=" mt-3 sm:mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out outline-none border-0 px-7 py-5 rounded-md sm:rounded-sm"
              // disabled
            >
              <FaSpinner className="animate-spin mr-2 text-white" />
              <span className={"text-white"}>Loading...</span>
            </button>
          ) : (
            <button
              type="submit"
              // onClick={resetForm}
              className="mt-3 sm:mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-md sm:rounded-sm"
            >
              Submit Complain
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
