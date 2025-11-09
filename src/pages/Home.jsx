import React from "react";
import LeftSidebars from "../components/Sidebars/LeftSidebars";
import TopSidebar from "../components/Sidebars/TopSidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden  text-white">
     
      <div className="h-full bg-[#0B0B0B]">
        <LeftSidebars />
      </div>

      
      <div className="flex flex-col flex-1 h-full">
        
        <div className="h-[64px] flex-shrink-0 bg-[#0B0B0B]">
          <TopSidebar />
        </div>

       
        <div className="flex-1 overflow-auto !bg-black">
         
        </div>
      </div>
    </div>
  );
}
