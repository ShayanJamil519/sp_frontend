"use client";

import { useState } from "react";
import DataLoader from "../Shared/DataLoader";
import Sidebar from "./Sidebar";
import { dataSimulation } from "@/app/data";

export default function LayoutWrapperDashboard({ children }) {
  const [loading, setLoading] = useState(false);

  let sidebarLinks = dataSimulation;

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-start items-stretch ">
      <Sidebar sidebarLinks={sidebarLinks} />
      <div className="bg-[#f1f5f9] w-full overflow-y-auto h-screen">
        <div className="px-4 py-5">{children}</div>
      </div>
    </div>
  );
}
