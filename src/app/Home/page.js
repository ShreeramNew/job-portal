"use client";
import Categories from "@/Components/Categories";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import NavForMobile from "@/Components/NavForMobile";
import SuccessStories from "@/Components/SuccessStories";
import TopCompanies from "@/Components/TopCompanies";
import ReactLoading from "react-loading";

export default function Home() {
   return (
      <>
         <div>
            <NavBar />
            <NavForMobile />
            <Header />
            <Categories/>
            <TopCompanies/>
            <SuccessStories/>
            <Footer/>
         </div>
      </>
   );
}
