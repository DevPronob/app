import React from "react";
import logo from "../../assets/Logo/logo.png";
import menu from "../../assets/Logo/Dashboard.png";
import widget from "../../assets/Logo/Widget.png";
import trade from "../../assets/Logo/Trade.png";
import analytics from "../../assets/Logo/Analytics.png";
import wallet from "../../assets/Logo/Wallet.png";
import help from "../../assets/Logo/Help.png";
import setting from "../../assets/Logo/Setting.png";

export default function LeftSidebar() {
  return (
    <div className="w-16 min-h-screen bg-[#0B0B0B] border-r border-[#1C1B20] flex flex-col items-center justify-between py-4">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-5">
        <img src={logo} alt="logo" className="w-9 h-9" />
        <div className="flex flex-col items-center gap-4 mt-2">
          <img src={widget} alt="widget" className="w-9 h-9" />
          <img src={menu} alt="menu" className="w-9 h-9" />
          <img src={trade} alt="trade" className="w-9 h-9" />
          <img src={analytics} alt="analytics" className="w-9 h-9" />
          <img src={wallet} alt="wallet" className="w-9 h-9" />
        </div>
      </div>

      {/* Bottom Section (moved up more) */}
      <div className="flex flex-col items-center gap-3 p-2 rounded-2xl bg-[#1a1a1d] border border-[#2C2C2E] mb-[280px]">
        <img src={setting} alt="setting" className="w-5 h-5" />
        <img src={help} alt="help" className="w-5 h-5" />
      </div>
    </div>
  );
}
