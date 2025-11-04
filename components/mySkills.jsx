import Image from "next/image";
import javascript from "@/public/javascript.svg";
import nextjs from "@/public/nextjs.svg";
import tailwindcss from "@/public/tailwindcss.svg";
import html from "@/public/html-dark.svg";
import css from "@/public/css-dark.svg";
import LogoLoop from "./LogoLoop";
import { useState } from "react";

export default function MySkills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);
  const openModal3 = () => setModalOpen3(true);
  const closeModal3 = () => setModalOpen3(false);
  const openModal4 = () => setModalOpen4(true);
  const closeModal4 = () => setModalOpen4(false);
  const openModal5 = () => setModalOpen5(true);
  const closeModal5 = () => setModalOpen5(false);

  const cardLogos = [
    {
      node: (
        <div
          onClick={openModal}
          className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white cursor-pointer">
          <Image
            src={javascript}
            alt="javascript"
            width={56}
            height={56}
            className="mb-8 transition"
          />
          <h1 className="font-semibold text-xl">JavaScript</h1>
        </div>
      ),
    },
    {
      node: (
        <div
          onClick={openModal2}
          className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white cursor-pointer">
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
        <div
          onClick={openModal3}
          className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white cursor-pointer">
          <Image
            src={tailwindcss}
            alt="tailwindcss"
            width={56}
            height={56}
            className="mb-8"
          />
          <h1 className="font-semibold text-xl">TailwindCSS</h1>
        </div>
      ),
    },
    {
      node: (
        <div
          onClick={openModal4}
          className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white cursor-pointer">
          <Image
            src={html}
            alt="html"
            width={56}
            height={56}
            className="mb-8"
          />
          <h1 className="font-semibold text-xl">HTML</h1>
        </div>
      ),
    },
    {
      node: (
        <div
          onClick={openModal5}
          className="border-2 w-40 h-40 flex justify-center items-center flex-col mt-10 rounded-xl shadow-sm bg-white cursor-pointer">
          <Image src={css} alt="css" width={56} height={56} className="mb-8" />
          <h1 className="font-semibold text-xl">CSS</h1>
        </div>
      ),
    },
  ];

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">My Skills on JS</h2>
              <p className="text-gray-700">
                "I am a self-taught JavaScript developer. I started learning JS
                as one of my first programming languages and gained practical
                experience building interactive web pages, working with APIs. I
                am confident in using core JavaScript concepts such as closures,
                asynchronous programming, and DOM manipulation."
              </p>
            </div>
          </div>
        </div>
      )}
      {isModalOpen2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal2}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
              <button
                onClick={closeModal2}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">My Skills on NEXTJS</h2>
              <p className="text-gray-700">
                "I also studied Next.js through additional classes, where I
                learned to build robust web applications from scratch. I became
                proficient in features like server-side rendering, static site
                generation, dynamic routes, API routes, and performance
                optimization. These skills allow me to create fast, scalable,
                and maintainable web apps."
              </p>
            </div>
          </div>
        </div>
      )}
      {isModalOpen3 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal3}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
              <button
                onClick={closeModal3}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">
                My Skills on TAILWINDCSS
              </h2>
              <p className="text-gray-700">
                "I learned Tailwind CSS before diving into Next.js, and I now
                use it extensively to create clean, responsive designs. In
                recent projects, I combine Tailwind CSS with JavaScript and
                Next.js to build interactive, well-styled web applications
                efficiently."
              </p>
            </div>
          </div>
        </div>
      )}
      {isModalOpen4 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal4}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
              <button
                onClick={closeModal4}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">My Skills on HTML</h2>
              <p className="text-gray-700">
                "I have a strong foundation in HTML, enabling me to structure
                web pages semantically and accessibly. I am confident in
                creating well-organized markup that forms the backbone of
                responsive and modern web applications."
              </p>
            </div>
          </div>
        </div>
      )}
      {isModalOpen5 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal5}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
              <button
                onClick={closeModal5}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">My Skills on CSS</h2>
              <p className="text-gray-700">
                "I have solid experience with CSS, allowing me to style web
                pages effectively and implement responsive designs. I am
                comfortable using modern CSS techniques such as Flexbox, Grid,
                and animations to create visually appealing and maintainable
                interfaces."
              </p>
            </div>
          </div>
        </div>
      )}
      <section id="skills" className="">
        {/* Заголовок */}
        <div className="flex justify-center">
          <h1 className="text-2xl mt-20">
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
