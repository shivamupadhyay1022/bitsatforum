import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import GetStartedSection from "../components/GetStartedSection";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Features/>
      <GetStartedSection/>
      <Stats/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default Home;
