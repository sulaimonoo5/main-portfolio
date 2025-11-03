"use client";
import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contacts";
import Footer from "@/components/footerSection";
import HeaderMenu from "@/components/headerMenu";
import HeroSection from "@/components/heroSection";
import MyProjects from "@/components/myProjects";
import MySkills from "@/components/mySkills";

export default function Home() {
  return (
    <main className="font-sora">
      <HeaderMenu />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
    </main>
  );
}
