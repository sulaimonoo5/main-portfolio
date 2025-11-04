import { useState } from "react";
import Link from "next/link";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="paddings flex justify-between items-center fixed top-0 left-0 w-full bg-white/80 z-50">
        <h1 className="font-sora font-bold text-2xl">
          <span>Sulaimon</span>
        </h1>

        <menu>
          {/* Бургер показывается только до lg */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1 z-50 relative lg:hidden">
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

          {/* Overlay — кликабельный фон за меню */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}></div>
          )}

          {/* Меню */}
          <nav
            onClick={(e) => e.stopPropagation()} // ← блокируем закрытие при клике по самому меню
            className={`fixed top-10 right-0 w-55 h-85 bg-zinc-50 flex justify-center rounded-xl gap-10 text-lg font-sora transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "translate-x-full"} 
            md:fixed md:top-10 md:right-0 md:w-55 md:h-85 md:bg-zinc-50 md:rounded-xl md:transition-transform md:duration-300 
            lg:static lg:flex lg:flex-row lg:translate-x-0 lg:gap-10 lg:bg-transparent lg:h-auto lg:w-auto z-50`}>
            <ul className="flex flex-col gap-8 pt-5 lg:flex-row lg:pt-0 lg:text-xs xl:text-lg">
              <li>
                <Link href="#about" onClick={() => setIsOpen(false)}>
                  About me
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contacts" onClick={() => setIsOpen(false)}>
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>
        </menu>
      </header>
    </>
  );
}
