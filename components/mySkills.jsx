import Image from "next/image";
import javascript from "@/public/javascript.svg";
import nextjs from "@/public/nextjs.svg";
import tailwindcss from "@/public/tailwindcss.svg";
import LogoLoop from "./LogoLoop";

export default function MySkills() {
  const cardLogos = [
    {
      node: (
        <div className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white">
          <Image
            src={javascript}
            alt="javascript"
            width={56}
            height={56}
            className="mb-8"
          />
          <h1 className="font-semibold text-xl">JavaScript</h1>
        </div>
      ),
    },
    {
      node: (
        <div className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white">
          <Image
            src={nextjs}
            alt="nextjs"
            width={56}
            height={56}
            className="mb-8"
          />
          <h1 className="font-semibold text-xl">NextJS</h1>
        </div>
      ),
    },
    {
      node: (
        <div className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white">
          <Image
            src={tailwindcss}
            alt="tailwindcss"
            width={56}
            height={56}
            className="mb-14"
          />
          <h1 className="font-semibold text-xl">TailwindCSS</h1>
        </div>
      ),
    },
  ];

  return (
    <>
      <section id="skills" className="paddings mt-20 md:hidden">
        {/* Заголовок */}
        <div className="flex justify-center">
          <h1 className="text-2xl">
            My <span className="font-bold">Skills</span>
          </h1>
        </div>

        {/* Анимация карточек */}
        <div>
          <LogoLoop
            logos={cardLogos}
            speed={80}
            direction="left"
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="My animated skill cards"
          />
        </div>
      </section>
    </>
  );
}
