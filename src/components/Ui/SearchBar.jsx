import React from 'react';
import { FaSearch } from "react-icons/fa";
import search from '../../assets/Logo/TopSidebar/search.png'

export default function SearchBar() {
  return (
    <div
      className="relative flex items-center  w-[171px] h-[32px] rounded-[30px] text-[10px] font-normal px-[14px]"
      style={{
        border: '1px solid transparent',
        backgroundImage: `
          linear-gradient(#1a1a1d, #1a1a1d),
          linear-gradient(119.69deg, #767676 -29.64%, rgba(11, 11, 11, 0.26) 51.05%, #767676 135.02%)
        `,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Input */}
      <input
        type="text"
        placeholder="Search Instruments"
        className="flex-1 bg-transparent text-[#A2A2A2] text-[10px] outline-none placeholder:text-gray-400"
      />

      {/* Glowing Search Button */}
<button
  type="button"
  className="flex items-center justify-center w-[32px] h-[32px] rounded-full ml-2 bg-[#1a1a1d] hover:bg-[#2a2a2e] transition"
>
  <img
    src={search}
    alt="Search"
    className="w-[20px] h-[18px] object-contain opacity-90"
  />
</button>

    </div>
  );
}
