"use client";
import { Input, Space } from "antd";
const { Search } = Input;
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
   const onSearch = (value, _e, info) => {
      alert(value);
   };
   const router = useRouter();
   return (
      <div className="hidden w-full md:flex justify-center items-center gap-[30px] sticky top-0 z-50 bg-gray-300 p-[20px] ">
         <div className=" absolute left-[150px] z-[60]">
            <Image src={"/logo-no-background.svg"} width={150} height={150}/>
         </div>
         <div className="cursor-pointer hover:underline" onClick={() => router.push("/home")}>
            Home
         </div>
         <div
            className="cursor-pointer hover:underline"
            onClick={() => {
               router.push("/jobs");
            }}
         >
            Jobs
         </div>
         <div className="cursor-pointer hover:underline">Companies</div>
         <Search
            className="w-[300px]"
            placeholder="Search Job"
            enterButton
            size="large"
            onSearch={onSearch}
         />
         <div className="cursor-pointer bg-blue-500 p-[10px] rounded-md text-white flex items-center justify-center hover:scale-[1.02] ">
            Get Started <GoArrowUpRight color="white" />
         </div>
         <div className="cursor-pointer bg-gray-700 p-[10px] rounded-md text-white flex items-center justify-center hover:scale-[1.02] ">
            Employer <GoArrowUpRight color="white" />
         </div>
      </div>
   );
}
