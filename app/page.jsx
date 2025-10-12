"use client";
import HeaderMenu from "@/components/headerMenu";
import HeroSection from "@/components/heroSection";
import SocialMedia from "@/components/socialMedia";

export default function Home() {
  return (
    <main className="font-sora">
      <HeaderMenu />
      <HeroSection />
      <SocialMedia />
    </main>
  );
}
