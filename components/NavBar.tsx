'use client';

import { GiThreeLeaves } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F7F4F1] w-full relative z-50">
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center justify-center bg-[#9C4F3A] h-12 w-12 sm:h-14 sm:w-14 rounded-lg">
            <GiThreeLeaves size={36} color="#F7F4F1" />
          </div>

          <h1 className="text-[#2B2B2B] text-lg sm:text-2xl font-medium">
            Bruna Almeida
          </h1>
        </div>

        {/* Center icon */}
        <div className="hidden lg:flex items-center justify-center bg-[#F7F4F1] h-24 w-24 rounded-full mt-12 ml-22 z-[99] shadow-[0_10px_25px_rgba(0,0,0,0.10)]">
          <GiThreeLeaves size={64} color="#9C4F3A" />
        </div>

        {/* Right desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="#sobre"
                  className="text-[#2B2B2B] hover:text-[#9C4F3A] transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#formacao"
                  className="text-[#2B2B2B] hover:text-[#9C4F3A] transition"
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  href="#atuacao"
                  className="text-[#2B2B2B] hover:text-[#9C4F3A] transition"
                >
                  Atuação
                </a>
              </li>
            </ul>
          </nav>

          <div className="bg-[#9C4F3A] text-[#F7F4F1] px-6 py-3 rounded-lg font-medium hover:bg-[#8A4432] cursor-pointer transition">
            <a href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão." target="_blank" rel="noopener noreferrer">Agendar Sessão</a>
          </div>
        </div>

        {/* hamburguer menu */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#2B2B2B] hover:bg-black/5 transition"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-[2px] w-6 bg-[#2B2B2B]" />
            <span className="block h-[2px] w-6 bg-[#2B2B2B]" />
            <span className="block h-[2px] w-6 bg-[#2B2B2B]" />
          </div>
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={["lg:hidden overflow-hidden transition-[max-height] duration-300", isOpen ? "max-h-96" : "max-h-0", ].join(" ")}>
        <div className="px-4 sm:px-6 pb-6">
          <nav className="mt-2">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#sobre"
                  className="block rounded-md px-3 py-2 text-[#2B2B2B] hover:bg-black/5 hover:text-[#9C4F3A] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#formacao"
                  className="block rounded-md px-3 py-2 text-[#2B2B2B] hover:bg-black/5 hover:text-[#9C4F3A] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  href="#atuacao"
                  className="block rounded-md px-3 py-2 text-[#2B2B2B] hover:bg-black/5 hover:text-[#9C4F3A] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Atuação
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-4 w-full bg-[#9C4F3A] text-[#F7F4F1] px-6 py-3 rounded-lg font-medium hover:bg-[#8A4432] transition">
            <a href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão." target="_blank" rel="noopener noreferrer">Agendar Sessão</a>
          </div>
        </div>
      </div>
    </header>
  );
}
