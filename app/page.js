"use client"
import { useContext } from "react";
import { PortfolioDataContext } from "./context/PortfolioDataContext";
import AboutSection from "./components/homepage/about";

import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";



export default function Home() {
  const portfolioData = useContext(PortfolioDataContext);
  const sectionTypes = (portfolioData.sections || []).map(s => s.type);
console.log(sectionTypes.length)
  return (
    <>
     <div><h1>Hellow Worls</h1></div>
    </>
  )
}; 