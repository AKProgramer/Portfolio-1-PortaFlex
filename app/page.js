"use client";

import { useContext } from "react";
import { PortfolioDataContext } from "./context/PortfolioDataContext";
import { getPersonalDataFromPortfolio } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };

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
      {/* {sectionTypes.includes("blog") && <Blog blogs={blogs} />} */}
      {sectionTypes.includes("contact") && <ContactSection />}
    </div>
  )
};