
import React from "react";
import '../../App.css';
import CardsForHome from "../pages/CardsForHome";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home(){
    
    return (
        <>
            <HeroSection/>
            <CardsForHome />
            <Footer/>
        </>
    );
}

export default Home;