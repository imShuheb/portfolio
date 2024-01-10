"use client"

import Left from "@/components/Left/page";
import Navbar from "@/components/Navbar";
import Right from "@/components/Right/page";
import SectionAbout from "@/components/SectionAbout";
import SectionExpirence from "@/components/SectionExpirence";
import SectionIntroduction from "@/components/SectionIntroduction";
import FadeInOnScroll from "@/components/others/FadeIn";
import { Content } from "next/font/google";

export default function Home() {
  return (
    <>
      <Navbar />
      <Left />
      <Right />
      <div id="content">
        <main className="fill-height ">
          <SectionIntroduction />
          <SectionAbout />
          <SectionExpirence />  
        </main>
        <FadeInOnScroll />
      </div>
    </>
  )
}
