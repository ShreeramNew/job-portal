"use client";
import Categories from "@/Components/homePage/Categories";
import Footer from "@/Components/homePage/Footer";
import Header from "@/Components/homePage/Header";
import NavBar from "@/Components/homePage/NavBar";
import NavForMobile from "@/Components/homePage/NavForMobile";
import SuccessStories from "@/Components/homePage/SuccessStories";
import TopCompanies from "@/Components/homePage/TopCompanies";
import ReactLoading from "react-loading";

export default function Home() {
   return (
      <>
         <div>
            <Header />
            <Categories/>
            <TopCompanies/>
            <SuccessStories/>
            <Footer/>
         </div>
      </>
   );
}
