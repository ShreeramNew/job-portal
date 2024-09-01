"use client";
import Image from "next/image";
export default function CategoryCard({imageLink,category}) {
   return (
      <div className=" bg-white w-[250px] h-[225px] rounded-md flex flex-col justify-center  border-red-500 border-2 overflow-hidden shadow-2xl	">
         <div className=" w-[250px] h-[200px]">
            <Image
               src={imageLink}
               width={250}
               height={20}
               objectFit="cover"
            />
         </div>
         <div className=" w-[full] h-[15px] mb-[20px] bg-white p-[10px] flex items-center justify-center">{category}</div>
      </div>
   );
}
