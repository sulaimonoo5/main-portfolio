"use client";

import Image from "next/image";
import projectFirst from "@/public/projectFirst.png";
import projectSecond from "@/public/projectSeccond.png";
import projectThird from "@/public/projectThird.png";
import Link from "next/link";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MyProjects() {
  useEffect(() => {
    gsap.utils.toArray(".project").forEach((el, i) => {
      gsap.from(el, {
        x: i % 2 === 0 ? 500 : -500,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 150%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <main className="bg-black text-white paddings" id="projects">
      <section className="flex flex-col pb-10 lg:max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="w-xl lg:w-full">
            <h1 className="text-2xl text-center pt-12 pb-20">
              My <span className="font-bold">projects</span>
            </h1>

            {/* PROJECT 01 */}
            <div className="project flex flex-col gap-3 lg:flex-row lg:gap-20 lg:items-center lg:justify-center lg:w-full">
              <div className="flex justify-center lg:pb-45 pb-5">
                <Image
                  src={projectFirst}
                  alt="Weather project"
                  className="w-80 h-45 rounded-2xl xl:w-125 xl:h-70"
                />
              </div>

              <div className="flex flex-col gap-5 lg:w-99">
                <h1 className="text-2xl font-bold">01</h1>
                <h1 className="text-xl font-bold">
                  Weather web with API + DOM
                </h1>
                <p className="font-extralight text-gray-400">
                  A responsive web layout for viewing weather conditions. It
                  adapts seamlessly to mobile, tablet, and desktop devices.
                </p>
                <Link
                  href="https://weather-api-dom-js.vercel.app/"
                  className="font-extralight text-gray-600 pb-8 lg:pb-50">
                  see project
                </Link>
              </div>
            </div>

            {/* PROJECT 02 */}
            <div className="project flex flex-col gap-3 lg:flex-row lg:gap-20 lg:items-center lg:justify-center lg:w-full">
              <div className="flex justify-center lg:hidden pb-5 lg:pb-45">
                <Image
                  src={projectSecond}
                  alt="Calendar project"
                  className="w-80 rounded-2xl"
                />
              </div>

              <div className="flex flex-col gap-5 lg:w-99">
                <h1 className="text-2xl font-bold">02</h1>
                <h1 className="text-xl font-bold">Calendar web</h1>
                <p className="font-extralight text-gray-400">
                  The Advanced TO-DO App features a sleek and responsive
                  calendar layout that helps you organize tasks and plan ahead.
                </p>
                <Link
                  href="https://to-do-project-amber.vercel.app/"
                  className="font-extralight text-gray-600 pb-8 lg:pb-50">
                  see project
                </Link>
              </div>

              <div className="hidden lg:flex justify-center pb-8 lg:pb-45">
                <Image
                  src={projectSecond}
                  alt="Calendar project"
                  className="w-80 rounded-2xl xl:w-125 xl:h-70"
                />
              </div>
            </div>

            {/* PROJECT 03 */}
            <div className="project flex flex-col gap-3 lg:flex-row lg:gap-20 lg:items-center lg:justify-center lg:w-full">
              <div className="flex justify-center pb-5">
                <Image
                  src={projectThird}
                  alt="Castaway project"
                  className="w-80 rounded-2xl xl:w-125 xl:h-70"
                />
              </div>

              <div className="flex flex-col gap-5 lg:w-99">
                <h1 className="text-2xl font-bold">03</h1>
                <h1 className="text-xl font-bold">
                  Castaway — first layout project
                </h1>
                <p className="font-extralight text-gray-400">
                  This layout marks my first step into web design and responsive
                  layouts. A simple but important milestone.
                </p>
                <Link
                  href="https://castaway-pi.vercel.app/"
                  className="font-extralight text-gray-600 pb-8">
                  see project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
