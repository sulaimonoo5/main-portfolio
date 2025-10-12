import Image from "next/image";
import hero from "@/public/hero.svg";

export default function HeroSection() {
  return (
    <>
      <section className="mt-12 lg:w-md flex flex-col justify-center items-center md:hidden">
        <div>
          <Image
            src={hero}
            alt="hero"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="mt-12 w-80 flex justify-center flex-col items-center">
          <h1 className="text-3xl leading-12">
            <span className="font-medium">Hello I am </span>
            <span className="font-bold">
              Sulaimon. <br />{" "}
            </span>
            <span className="font-bold">Frontend </span>
            <span className="text-transparent font-extrabold outlined-text-shadow">
              Developer <br />
            </span>
            <span className="font-medium">From </span>
            <span className="font-bold">Tajikistan </span>
          </h1>
          <div className="mt-12 w-80">
            <p className="text-[14px] font-extralight">
              I'm Sulaimon and you know <br />
              The world's first programme written by a woman was created even
              before computers were invented. In the mid-19th century, Ada
              Lovelace created an algorithm for Charles Babbage's analytical
              engine, a mechanical computer that did not even exist at the time.
              Her notes became the first description of code, and it was she who
              introduced the concepts of ‘loop’ and ‘variable’.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
