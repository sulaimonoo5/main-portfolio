import Image from "next/image";
import SocialMedia from "./socialMedia";
import hero from "@/public/hero.svg";
import Shuffle from "./shuffleAnimation";

export default function HeroSection() {
  return (
    <>
      <section className="paddings mt-12 flex flex-col justify-center items-center max-w-2xl lg:max-w-7xl xl:">
        <div className="lg:flex lg:items-center lg:justify-center lg:w-full lg:pt-24">
          <div className="pt-24">
            <Image
              src={hero}
              alt="hero"
              className="rounded-xl w-lg h-lg lg:hidden"
            />
          </div>

          <div className="mt-12 flex justify-center flex-col items-center lg:w-107">
            <h1 className="text-3xl leading-10 lg:w-105 xl:text-4xl">
              <Shuffle
                text="Hello I am"
                className="font-medium inline-block"
                shuffleDirection="right"
                duration={1.5}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />{" "}
              <Shuffle
                text="Sulaimon."
                className="font-bold inline-block"
                shuffleDirection="left"
                duration={1.5}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />{" "}
              <Shuffle
                text="Frontend"
                className="font-bold inline-block"
                duration={1.5}
                shuffleDirection="left"
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />{" "}
              <Shuffle
                text="Developer"
                className="text-transparent font-extrabold outlined-text-shadow inline-block"
                duration={1.5}
                shuffleDirection="right"
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />{" "}
              <Shuffle
                text="From"
                className="font-medium inline-block"
                duration={1.5}
                shuffleDirection="right"
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />{" "}
              <Shuffle
                text="Tajikistan"
                className="font-bold inline-block"
                duration={1.5}
                shuffleDirection="left"
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />
            </h1>

            <div className="mt-10">
              <p className="text-sm font-extralight mb-14">
                I'm Sulaimon and you know <br />
                The world's first programme written by a woman was created even
                before computers were invented. In the mid-19th century, Ada
                Lovelace created an algorithm for Charles Babbage's analytical
                engine, a mechanical computer that did not even exist at the
                time. Her notes became the first description of code, and it was
                she who introduced the concepts of ‘loop’ and ‘variable’.
              </p>
            </div>
            <div className="w-full">
              <SocialMedia />
            </div>
          </div>
          <div className="">
            <Image
              src={hero}
              alt="hero"
              className="hidden lg:flex lg:w-110 xl:w-150"
            />
          </div>
        </div>
      </section>
    </>
  );
}
