"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarLinks }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <aside
      ref={sidebar}
      className={`font-poppins absolute left-0 top-0 z-9999 flex h-screen w-[28%] flex-col overflow-y-hidden bg-black text-[#fff] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-5.5 lg:py-6.5">
        <Link
          href="/"
          className=" flex justify-center items-center  w-full mt-5"
        >
          <h1 className="text-[#000] rounded-md text-xl bg-[#fff] w-full text-center  py-3 font-semibold">
            Credit Card Assesment
          </h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-3">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-y-4">
              {sidebarLinks.map((item, index) => (
                <Link
                  href={item.linkTo}
                  key={index}
                  className={` ${
                    pathname === item.linkTo && "bg-[#ffffff5d]"
                  }  cursor-pointer text-lg relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#f1f1f138] `}
                >
                  <span> {item.linkText}</span>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
