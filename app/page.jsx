"use client";
import AboutMe from "@/components/aboutMe";
import HeaderMenu from "@/components/headerMenu";
import HeroSection from "@/components/heroSection";
import MySkills from "@/components/mySkills";

export default function Home() {
  return (
    <main className="font-sora">
      <HeaderMenu />
      <HeroSection />
      <MySkills />
      <AboutMe />
    </main>
  );
}
