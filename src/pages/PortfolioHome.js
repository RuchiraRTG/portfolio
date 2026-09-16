import React from "react";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";

export const PortfolioHome = () => {
  return (
    <div className="portfolio-home">
      <ScrollProgress />
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};
