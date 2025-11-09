import { FaBell, FaEllipsisV } from "react-icons/fa";
import frame from "../../assets/Logo/TopSidebar/Frame.png";
import SearchBar from "../Ui/SearchBar";
import notify from '../../assets/Logo/TopSidebar/NotifyIcon.png'
import avatar from '../../assets/Logo/TopSidebar/avatar.png'

export default function TopSidebar() {
  return (
    <div className="flex w-full h-16 items-center text-left justify-between bg-[#0B0B0B] border-b border-[#1C1B20] text-white px-6 text-sm font-medium">
     
      <div className="flex items-center space-x-10">
        <div className="flex flex-col items-start">
          <p style={{
    color: "linear-gradient(180deg, #FFFFFF 0%, #767676 100%)",
  }} className="text-gray-400 text-[12px] font-normal">Balance</p>
          <p className="text-white text-[12px] font-bold">$10,590.00</p>
        </div>

        <div className="flex flex-col items-start">
          <p style={{
    color: "linear-gradient(180deg, #FFFFFF 0%, #767676 100%)",
  }} className="text-gray-400 font-[12px] font-normal">Equity</p>
          <p className="text-white text-[12px] font-bold">$10,859.00</p>
        </div>

        
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <div className="">
             
            </div>
            <div className=" flex items-center  gap-[4px]">
               <img
              src={frame}
              alt="User Avatar"
              className="w-[29px] h-[29px] rounded-full object-cover"
            />
              <div>
                <p style={{
    color: "linear-gradient(180deg, #FFFFFF 0%, #767676 100%)",
  }} className="text-gray-400 font-[12px] font-normal">Margin Used / Free</p>
              <p className="text-orange-400 text-[12px] font-bold">$550.00 / $6.60</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p style={{
    color: "linear-gradient(180deg, #FFFFFF 0%, #767676 100%)",
  }} className="text-gray-400 text-[12px] font-normal">Margin Level</p>
          <p className="text-[12px] font-bold">205.36%</p>
        </div>

        <div className="flex flex-col items-start">
          <p style={{
    color: "linear-gradient(180deg, #FFFFFF 0%, #767676 100%)",
  }} className="text-gray-400 text-[12px] font-normal">Total Unrealized P/L</p>
          <p className="text-green-400 text-[12px] font-bold">$2,204.02</p>
        </div>

        <div className="flex flex-col items-start">
          <p style={{
    color: "linear-gradient(180deg, #FFFFFF 0%, #767676 100%)",
  }} className="text-gray-400 font-[12px] font-normal">Time Zone</p>
          <p className="text-white text-[12px] font-bold">1:53:10 (Br)</p>
        </div>
        <div className="w-[220px]">
        <SearchBar />
      </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center gap-2 bg-[#161616] border border-[#2C2C2E] px-5 py-2 rounded-full text-sm text-white transition">
          Main USD Account
          <span className="text-gray-400 text-xs">▼</span>
        </button>

        
        <img  src={notify}
              alt="User Avatar"
              className="w-[32px] h-[32px] rounded-full object-cover"/>

        
        <div className="flex items-center justify-between bg-[#161616] border border-[#2C2C2E] rounded-full px-3 py-1.5 min-w-[165px]">
          <div className="flex items-center gap-2">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-[#EAEAEA] text-[8px] font-normal">Alex Rode</p>
              <p className="text-[#767676] text-[10px]">ID: 944 869 XD</p>
            </div>
          </div>
          <FaEllipsisV className="text-gray-400 text-sm hover:text-gray-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
