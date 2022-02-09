import React from "react";
import { IoMicOutline } from "react-icons/io5";

function Searchbar(): JSX.Element {
  return (
    <div className="flex items-center justify-start w-full h-full px-4 py-2 ">
      <span className="text-2xl text-[#585e64] ">
        <IoMicOutline />
      </span>
      <input
        type="text"
        className="text-[#585e64] bg-transparent outline-none p-4 placeholder:text-[#585e64]"
        placeholder="Type to search"
      />
    </div>
  );
}

export default Searchbar;
