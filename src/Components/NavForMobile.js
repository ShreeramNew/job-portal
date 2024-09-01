"use client";
import { Drawer, Button, Input } from "antd";
const { Search } = Input;
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
export default function NavForMobile() {
   const [open, setOpen] = useState(false);
   const [searchOpen, setSearchOpen] = useState(false);
   const showDrawer = () => {
      setOpen(true);
   };
   const onClose = () => {
      setOpen(false);
   };
   const onSearch = () => {
    setSearchOpen(false)
   };
   return (
      <div className=" md:hidden lg:hidden w-full sticky top-0 z-50">
         <div className=" bg-gray-300 p-[20px] flex justify-start gap-[30px] min-h-[70px] items-center justify-self-end relative">
            {!searchOpen && <FiMenu size={30} onClick={showDrawer} />}
            {!searchOpen && <div className=" text-blue-500 text-[22px] font-extrabold">JobNow</div>}
            {searchOpen ? (
               <div className="flex items-center gap-3 absolute left-[10px]">
                  <FaArrowLeft
                     className="ml-2 cursor-pointer"
                     onClick={() => setSearchOpen(false)}
                  />
                  <Search
                     className="w-[300px]"
                     placeholder="Search Job"
                     enterButton
                     size="large"
                     onSearch={onSearch}
                     onBlur={() => setSearchOpen(false)}
                  />
               </div>
            ) : (
               <FaSearch
                  size={26}
                  className="absolute right-[10px]"
                  onClick={() => setSearchOpen(true)}
               />
            )}
         </div>
         <Drawer
            style={{ background: "#dddddd" }}
            placement="left"
            width={"200px"}
            title="JobNow"
            onClose={onClose}
            open={open}
         >
            <div className=" flex flex-col justify-center gap-[10px] ">
               <div className="cursor-pointer hover:underline">Home</div>
               <div className="cursor-pointer hover:underline">Jobs</div>
               <div className="cursor-pointer hover:underline">Companies</div>
               <div className="cursor-pointer bg-blue-500 p-[10px] rounded-md text-white flex items-center justify-center">
                  Get Started <GoArrowUpRight color="white" />
               </div>
               <div className="cursor-pointer bg-gray-700 p-[10px] rounded-md text-white flex items-center justify-center">
                  Employer <GoArrowUpRight color="white" />
               </div>
            </div>
         </Drawer>
      </div>
   );
}
