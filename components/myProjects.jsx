import Image from "next/image";
import projectFirst from "@/public/projectFirst.png";
import projectSecond from "@/public/projectSeccond.png";
import projectThird from "@/public/projectThird.png";
import Link from "next/link";

export default function MyProjects() {
  return (
    <>
      <main className="bg-black text-white paddings md:hidden">
        <section className="flex flex-col gap-20 pb-10">
          <div>
            <h1 className="text-2xl text-center pt-12">
              My <span className="font-bold">projects</span>
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Image src={projectFirst} alt="projectFirst" className="w-80" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">01</h1>
              <h1 className="text-xl font-bold">Weather web with API + DOM</h1>
              <p className="font-extralight text-gray-400">
                A responsive web layout for viewing weather conditions. It
                adapts seamlessly to mobile, tablet, and desktop devices. The
                project includes a country search feature to display weather
                data for selected locations. Future updates will include hourly
                forecasts and additional functionality.
              </p>
              <Link
                href="https://weather-api-dom-js.vercel.app/"
                className="font-extralight text-gray-600">
                see project
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Image src={projectSecond} alt="projectFirst" className="w-80" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">02</h1>
              <h1 className="text-xl font-bold">Calendar web</h1>
              <p className="font-extralight text-gray-400">
                The Advanced TO-DO App features a sleek and responsive calendar
                layout that helps you organize your daily schedule, manage
                tasks, and plan ahead with ease. Built to be fully adaptive, it
                works seamlessly on mobile, tablet, and desktop devices.
              </p>
              <Link
                href="https://to-do-project-amber.vercel.app/"
                className="font-extralight text-gray-600">
                see project
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Image src={projectThird} alt="projectFirst" className="w-80" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">03</h1>
              <h1 className="text-xl font-bold">
                Castaway just one of the first projects
              </h1>
              <p className="font-extralight text-gray-400">
                This layout marks my first step into web design. It was a humble
                beginning, where I explored single-page layouts and crafted my
                first fully adaptive design. Though it is a simple,
                non-functional mockup, it represents an important milestone in
                my journey, a space where I learned and experimented with
                responsive design.
              </p>
              <Link
                href="https://castaway-pi.vercel.app/"
                className="font-extralight text-gray-600">
                see project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
