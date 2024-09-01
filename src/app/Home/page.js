"use client";
import Categories from "@/Components/Categories";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import NavForMobile from "@/Components/NavForMobile";
import ReactLoading from "react-loading";

export default function Home() {
   return (
      <>
         <div className="">
            <NavBar />
            <NavForMobile />
            <Header />
            <Categories/>
         </div>
      </>
   );
}
