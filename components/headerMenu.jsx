import { useState } from "react";
import Link from "next/link";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center md:hidden">
        <h1 className="font-sora font-bold text-2xl">
          <span>portfolio</span>
        </h1>
        <menu className="">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1 z-50">
            <span
              className={`w-6 h-[2px] bg-black transition-all ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}></span>
            <span
              className={`w-6 h-[2px] bg-black transition-all ${
                isOpen ? "opacity-0" : ""
              }`}></span>
            <span
              className={`w-6 h-[2px] bg-black transition-all ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}></span>
          </button>
          <nav
            className={`fixed top-10 right-0 w-55 h-85 bg-zinc-50 flex justify-center rounded-xl gap-10 text-lg font-sora transition-transform duration-300 md:static md:flex md:flex-row md:gap-10 md:translate-x-0 ${
              isOpen ? "-translate-x-0" : "translate-x-full"
            }`}>
            <ul className="flex flex-col gap-8 pt-5">
              <li>
                <Link href="#about">About me</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contacts">Contact me</Link>
              </li>
            </ul>
          </nav>
        </menu>
      </header>
    </>
  );
}
