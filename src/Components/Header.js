"use client"
import Image from "next/image";

export default function Header() {
   return (
      <div className="w-full bg-gray-900 h-[300px] gap-[20px] p-[50px] justify-center items-center flex md:gap-[330px] lg:gap-[330px] md:p-[50px] lg:p-[50px] md:h-[550px]">
         <h1 className="md:ml-[100px] lg:ml-[100px] text-white text-[25px] md:text-[40px] ">
            Where Ambitions Meet{" "}
            <span className=" text-blue-500">
               <br />
               Opportunities!!
            </span>
         </h1>
         <Image
            alt="illustration"
            src="/header-poster.svg"
            width={400}
            height={400}
            className=" md:h-[400px] lg:h-[400px] md:w-[400px] lg:w-[400px] h-[150px] w-[150px] "
         />
      </div>
   );
}
