import hero from "@/public/hero2.svg";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const containerRef = useRef(null); // ← ДОБАВЬ КОНТЕЙНЕР REF

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        // ← ИСПОЛЬЗУЙ КЛАСС
        x: -200,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          end: "top 20%", // ← ДОБАВЬ END
          scrub: true,
        },
      });

      gsap.from(".about-text", {
        // ← ИСПОЛЬЗУЙ КЛАСС
        x: 200,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "top 20%", // ← ДОБАВЬ END
          scrub: true, // ← ДОБАВЬ SCRUB
        },
      });
    }, containerRef); // ← ПЕРЕДАЙ SCOPE

    return () => ctx.revert();
  }, []);

  return (
    <section 
    ref={containerRef}
    className="paddings" id="about">
      {/* ← ДОБАВЬ REF */}
      <div className="mt-20 lg:flex lg:items-center lg:justify-center lg:gap-16">
        {/* IMAGE */}
        <div className="about-image flex justify-center items-center lg:h-108 xl:h-115">
          {/* ← ДОБАВЬ КЛАСС */}
          <Image src={hero} alt="hero2" className="bg-white w-80 xl:w-108" />
        </div>

        {/* TEXT */}
        <div className="about-text flex justify-center">
          {/* ← ДОБАВЬ КЛАСС */}
          <div className="w-xl lg:w-126 xl:w-145">
            <div className="mt-10 mb-10">
              <h1 className="font-light text-2xl">
                About <span className="font-bold">me</span>
              </h1>
            </div>

            <div className="font-extralight text-sm">
              <p className="mb-5">
                I position myself as a front-end developer. I started my journey
                in 2021 by taking an introductory course on developing
                single-page websites, where I created several small projects.
              </p>
              <p className="mb-5">
                Later, I continued my self-study, focusing on my first
                programming language, JavaScript.
              </p>
              <p className="mb-5">
                Then I joined a front-end development course, where I mastered
                modern tools such as Tailwind CSS and Next.js.
              </p>
              <p className="mb-5">
                I chose front-end development because it is an area where
                technology meets creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
