"use client";

import { useStateContext } from "@/app/StateContext";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DataLoader from "../Shared/DataLoader";
import Sidebar from "./Sidebar";
import { sidebarLinksDistrictAdmin } from "@/app/data";

export default function LayoutWrapperDashboard({ children }) {
  const [loading, setLoading] = useState(false);

  let sidebarLinks = sidebarLinksDistrictAdmin;

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
        <div className="px-7 py-5">{children}</div>
      </div>
    </div>
  );
}
