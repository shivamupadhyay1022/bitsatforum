import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import GetStartedSection from "../components/GetStartedSection";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ExamPatternSection from "../components/ExamPatternSection";

function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden relative" >
      <Navbar/>
      <Hero />
      <Features/>
      <ExamPatternSection/>
      <GetStartedSection/>
      <Stats/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default Home;
