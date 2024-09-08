"use client";
import Image from "next/image";
export default function SuccessStories() {
   return (
      <div className=" w-full">
         <div>Success Stories</div>
         <SuccessCard />
      </div>
   );
}

const SuccessCard = () => {
   return (
      <div className="mb-[100px] ml-[40px] w-[300px] h-[350px] rounded-xl text-wrap flex flex-col justify-center items-center p-[20px] relative border-2 border-green-800 overflow-hidden">
         <div className=" flex gap-[10px] w-full p-[10px] absolute top-0 h-[110px]">
            <div className=" h-[90px] w-[90px] border-2 border-red-800 rounded-[100%] overflow-hidden absolute left-[10px] bottom-[10px]">
               <Image
                  src={
                     "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={860}
                  height={860}
                  className=" scale-[1.5] mt-[20px]"
               />
            </div>
            <div className=" flex flex-col absolute left-[117px]">
               <h3 className=" text-[20px] font-bold ">Jhon carol</h3>
               <h2 className=" text-[17px]">SDE-2 @ BrightIdeas Inc</h2>
            </div>
         </div>
         <p className=" text-[15px] absolute top-[110px] p-[10px] ">
            "I had been searching for a new role that aligned with my passion for digital marketing,
            but I struggled to find the right opportunity. Then I found jobNow! Within a few weeks
            ,I received multiple offers and landed my dream job at BrightIdeas
            Inc. The platform was easy to use, and the job recommendations were spot on. I couldn't
            be happier!"
         </p>
      </div>
   );
};
