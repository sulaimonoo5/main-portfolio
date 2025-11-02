import Image from "next/image";
import hero from "@/public/hero2.png";

export default function AboutMe() {
  return (
    <>
      <section className="paddings md:hidden">
        <div className=" mt-20">
          <div>
            <Image
              src={hero}
              alt="hero2"
              width={400}
              height={400}
              className="bg-white"
            />
          </div>
          <div className="mt-10 mb-10">
            <h1 className="font-light text-2xl">
              About <span className="font-bold">me</span>
            </h1>
          </div>
          <div className="font-extralight text-sm">
            <p className="mb-5">
              I position myself as a front-end developer. I started my journey
              in 2021 by taking an introductory course on developing single-page
              websites, where I created several small projects.
            </p>
            <p className="mb-5">
              Later, I continued my self-study, focusing on my first programming
              language, JavaScript. Using it, I created projects such as a
              reminder calendar with basic mobile responsiveness, a weather
              forecast app, and a currency converter.
            </p>
            <p className="mb-5">
              Then I joined a front-end development course, where I mastered
              modern tools such as Tailwind CSS and Next.js. I am currently
              expanding my skills in React and learning the basics of
              TypeScript, with plans to dive deeper into Vue.js or Angular in
              the future.
            </p>
            <p className="mb-5">
              I chose front-end development because it is an area where
              technology meets creativity — an area that allows me to express
              ideas through design and interactive user experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
