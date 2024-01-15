"use client"

import Footer from "@/components/Footer";
import Left from "@/components/Left/page";
import Navbar from "@/components/Navbar";
import Right from "@/components/Right/page";
import SectionAbout from "@/components/SectionAbout";
import SectionBuilt from "@/components/SectionBuilt";
import SectionContact from "@/components/SectionContact";
import SectionExpirence from "@/components/SectionExpirence";
import SectionIntroduction from "@/components/SectionIntroduction";
import FadeInOnScroll from "@/components/others/FadeIn";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Left />
      <Right />
      <div id="content">
        <main className="fill-height ">
          <SectionIntroduction />
          <SectionAbout />
          <SectionExpirence />
          <SectionBuilt />
          <SectionContact />
        </main>
        <FadeInOnScroll />
      </div>
      <Footer />
    </React.Fragment>
  )
}
