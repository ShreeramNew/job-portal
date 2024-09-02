"use client";

import CompaniesCard from "./CompaniesCard";

export default function TopCompanies() {
   let companies = [
      {
         imageURL: "https://pixabay.com/vectors/logo-company-logo-branding-7462411/",
         name: "TechHive",
         openings: 5,
      },
      {
         imageURL: "https://cdn.pixabay.com/photo/2023/01/11/18/26/bird-7712475_1280.jpg",
         name: "BlueWave",
         openings: 20,
      },
      {
         imageURL: "https://cdn.pixabay.com/photo/2021/02/27/11/27/utility-pole-6054303_1280.png",
         name: "NextGen",
         openings: 14,
      },
      {
         imageURL: "https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_1280.png",
         name: "Zenith",
         openings: 9,
      },
      {
         imageURL:
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         name: "Quantum",
         openings: 12,
      },
      {
         imageURL:
            "https://images.unsplash.com/photo-1504802318913-d3f9a487448c?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         name: "PixelStream",
         openings: 18,
      },
      {
         imageURL:
            "https://images.unsplash.com/photo-1642045556221-929fc9342a81?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         name: "InnoSphere",
         openings: 16,
      },
      {
         imageURL:
            "https://images.unsplash.com/photo-1443641723753-250ff9bb3c83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         name: "Skyward",
         openings: 31,
      },
      {
         imageURL:
            "https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         name: "EcoFuze",
         openings: 4,
      },
   ];
   return (
      <div className=" flex flex-col justify-center items-center mb-[100px]">
         <h2 className=" m-[20px] text-[23px]">Top Companies Hiring</h2>
         <div className=" grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] gap-[40px]">
            {companies.map((company) => {
               return <CompaniesCard
                  imageURL={company.imageURL}
                  name={company.name}
                  openings={company.openings}
               />;
            })}
         </div>
      </div>
   );
}
