"use client";
import { Input, Space } from "antd";
const { Search } = Input;
import { GoArrowUpRight } from "react-icons/go";

export default function NavBar() {
   const onSearch = (value, _e, info) => {
      alert(value);
   };
   return (
      <div className="hidden w-full md:flex justify-center items-center gap-[30px] sticky top-0 z-50 bg-gray-300 p-[20px]">
         <div className="cursor-pointer hover:underline">Home</div>
         <div className="cursor-pointer hover:underline">Jobs</div>
         <div className="cursor-pointer hover:underline">Companies</div>
         <Search
            className="w-[300px]"
            placeholder="Search Job"
            enterButton
            size="large"
            onSearch={onSearch}
         />
         <div className="cursor-pointer bg-blue-500 p-[10px] rounded-md text-white flex items-center justify-center">
            Get Started <GoArrowUpRight color="white" />
         </div>
         <div className="cursor-pointer bg-gray-700 p-[10px] rounded-md text-white flex items-center justify-center">
            Employer <GoArrowUpRight color="white" />
         </div>
      </div>
   );
}
