"use client";
import { Drawer, Button } from "antd";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
export default function NavForMobile() {
   const [open, setOpen] = useState(false);
   const showDrawer = () => {
      setOpen(true);
   };
   const onClose = () => {
      setOpen(false);
   };
   return (
      <div className=" md:hidden lg:hidden w-full ">
         <div className=" bg-gray-300 p-[20px]" onClick={showDrawer}>
            <FiMenu size={30} />
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
