import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-accent w-[800px] text-white sans p-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold">Ayberk Levendoglu</h1>
      <div className="flex gap-8">
        <div className="flex items-center gap-1">
          <IoIosMail className="text-xl" />
          ayberklevendoglu@gmail.com
        </div>
        <div className="flex items-center gap-1">
          <FaPhone />
          +90 453 569 12 95
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot />
          Ankara,TR
        </div>
      </div>
    </div>
  );
};

export default Header;
