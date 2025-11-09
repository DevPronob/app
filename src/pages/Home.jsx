import React from "react";
import LeftSidebars from "../components/Sidebars/LeftSidebars";
import TopSidebar from "../components/Sidebars/TopSidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0B0B] text-white">
      {/* Left Sidebar */}
      <div className="h-full">
        <LeftSidebars />
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-1 h-full">
        {/* Top Sidebar */}
        <div className="h-[64px] flex-shrink-0">
          <TopSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-[#0B0B0B]">
          {/* your main content */}
        </div>
      </div>
    </div>
  );
}
