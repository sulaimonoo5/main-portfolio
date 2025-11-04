import Image from "next/image";
import projectFirst from "@/public/projectFirst.png";
import projectSecond from "@/public/projectSeccond.png";
import projectThird from "@/public/projectThird.png";
import Link from "next/link";

export default function MyProjects() {
  return (
    <>
      <main className="bg-black text-white paddings" id="projects">
        <section className="flex flex-col pb-10 lg:max-w-7xl">
          <div className="flex justify-center">
            <div className="w-xl lg:w-full">
              <div>
                <h1 className="text-2xl text-center pt-12 pb-20">
                  My <span className="font-bold">projects</span>
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:gap-20 lg:items-center lg:justify-center lg:w-full">
                <div className="flex justify-center pb-5">
                  <Image
                    src={projectFirst}
                    alt="projectFirst"
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
                    The project includes a country search feature to display
                    weather data for selected locations. Future updates will
                    include hourly forecasts and additional functionality.
                  </p>
                  <Link
                    href="https://weather-api-dom-js.vercel.app/"
                    className="font-extralight text-gray-600 pb-8 lg:pb-24">
                    see project
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:gap-20 lg:items-center lg:justify-center lg:w-full">
                <div className="flex justify-center lg:hidden pb-5">
                  <Image
                    src={projectSecond}
                    alt="projectFirst"
                    className="w-80 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-5 lg:w-99">
                  <h1 className="text-2xl font-bold">02</h1>
                  <h1 className="text-xl font-bold">Calendar web</h1>
                  <p className="font-extralight text-gray-400">
                    The Advanced TO-DO App features a sleek and responsive
                    calendar layout that helps you organize your daily schedule,
                    manage tasks, and plan ahead with ease. Built to be fully
                    adaptive, it works seamlessly on mobile, tablet, and desktop
                    devices.
                  </p>
                  <Link
                    href="https://to-do-project-amber.vercel.app/"
                    className="font-extralight text-gray-600 pb-8 lg:pb-24">
                    see project
                  </Link>
                </div>
                <div className="hidden lg:flex xl:flex 2xl:flex justify-center">
                  <Image
                    src={projectSecond}
                    alt="projectFirst"
                    className="w-80 hidden lg:flex xl:flex 2xl:flex rounded-2xl xl:w-125 xl:h-70"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:gap-20 lg:items-center lg:justify-center lg:w-full">
                <div className="flex justify-center pb-5">
                  <Image
                    src={projectThird}
                    alt="projectFirst"
                    className="w-80 rounded-2xl xl:w-125 xl:h-70"
                  />
                </div>
                <div className="flex flex-col gap-5 lg:w-99">
                  <h1 className="text-2xl font-bold">03</h1>
                  <h1 className="text-xl font-bold">
                    Castaway just one of the first projects
                  </h1>
                  <p className="font-extralight text-gray-400">
                    This layout marks my first step into web design. It was a
                    humble beginning, where I explored single-page layouts and
                    crafted my first fully adaptive design. Though it is a
                    simple, non-functional mockup, it represents an important
                    milestone in my journey, a space where I learned and
                    experimented with responsive design.
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
    </>
  );
}
