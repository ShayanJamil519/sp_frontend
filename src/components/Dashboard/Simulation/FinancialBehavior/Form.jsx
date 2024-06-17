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

  const [userData, setUserData] = useState({
    district: "",
    area: "",
    description: "",

    subDivision: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
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
      className=" sm:p-10 px-4 py-7 w-full font-poppins bg-[#fff] "
    >
      <h1 className="font-bold text-2xl">Make a request</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to request a quote, and we’ll be in
        touch. Or you can call us and our specialists will provide help!
      </p>
      <form className="w-full  mt-10 " onSubmit={handleSubmit}>
        <div className="grid mt-3 sm:mt-0 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your District
            </label>

            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="district-select"
                name="district"
                required
                value={userData.district}
                onChange={handleInputChange}
                className="outline-none appearance-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
              >
                <option value="">Select District</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 text-[16px] flex items-center px-2 text-[#202725]">
                <FaChevronDown />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your Sub Division
            </label>
            <div className="relative inline-block w-full cursor-pointer">
              <select
                id="subDivision-select"
                required
                name="subDivision"
                value={userData.subDivision}
                onChange={handleInputChange}
                className="outline-none text-sm appearance-none  p-4 w-full rounded-md border-2 border-[#d9e4df]"
                disabled={!userData.district}
              >
                <option value="">Select SubDivision</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 text-[16px] flex items-center px-2 text-[#202725]">
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-3">
          <Input
            name="area"
            label="Enter Your Area"
            type="text"
            required
            value={userData.area}
            placeholder="Please enter your area"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full my-3">
          <p className="font-semibold text-sm text-[#202725] mb-1">
            Write your query
          </p>
          <textarea
            name="description"
            onChange={handleInputChange}
            value={userData.description}
            required
            className="outline-none min-h-[150px] sm:min-h-[200px] text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
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
