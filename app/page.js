"use client";

import { useContext } from "react";
import { PortfolioDataContext } from "./context/PortfolioDataContext";
import AboutSection from "./components/homepage/about";
import dynamic from "next/dynamic";
const Education = dynamic(
  () => import('./components/homepage/education'),
  { ssr: false }
);
const Experience = dynamic(
  () => import('./components/homepage/experience'),
  { ssr: false }
);
import ContactSection from "./components/homepage/contact";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";



export default function Home() {
  const portfolioData = useContext(PortfolioDataContext);
  const sectionTypes = (portfolioData.sections || []).map(s => s.type);

  return (
    <div suppressHydrationWarning >
      {sectionTypes.includes("hero") && <HeroSection />}
      {sectionTypes.includes("about") && <AboutSection />}
      {sectionTypes.includes("experience") && <Experience />}
      {sectionTypes.includes("skills") && <Skills />}
      {sectionTypes.includes("projects") && <Projects />}
      {sectionTypes.includes("education") && <Education />}
      {sectionTypes.includes("contact") && <ContactSection />}
    </div>
  )
};