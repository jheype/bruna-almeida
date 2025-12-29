import HelpCard from "./HelpCard";
import { FaCloud } from "react-icons/fa";
import { FiAlertCircle, FiCompass, FiSearch } from "react-icons/fi";

export default function HelpAreaSection() {
  return (
    <section id="atuacao" className="relative w-full bg-[#F7F4F1] py-25 overflow-hidden">
      {/* Top & bottom thin lines */}
      <div className="absolute left-0 bottom-1 h-px w-full bg-[#9C4F3A]/70" />

      {/* Shape */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[46%]">
        <div
          className="absolute left-0 top-20 h-[520px] w-[520px] bg-[#2F3E36] [clip-path:polygon(0%_0%,_100%_6%,_92%_30%,_100%_52%,_88%_70%,_100%_100%,_0%_100%)] rounded-[48px] opacity-95"/>
        <div
          className="absolute left-[-90px] top-28 h-[640px] w-[640px] bg-[#2F3E36] rounded-[999px] [clip-path:path('M 320 40 C 460 60 560 160 540 300 C 520 430 410 560 260 560 C 120 560 30 470 40 320 C 60 150 180 20 320 40 Z')] opacity-95"/>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Title with side lines */}
        <div className="flex items-center justify-center gap-6">
          <div className="hidden sm:block h-px w-40 bg-[#9C4F3A]/70" />
          <h2 className="text-4xl font-medium text-[#2B2B2B]">
            Áreas que posso te ajudar
          </h2>
          <div className="hidden sm:block h-px w-40 bg-[#9C4F3A]/70" />
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Left column */}
          <div className="space-y-10 md:space-y-12">
            <HelpCard
              icon={<FaCloud size={18} />}
              title="Ansiedade e Angústia"
              subtext="Quando pensamentos e sentimentos se tornam difíceis de sustentar."
              bgColor="#F3EEE9"
              variant="light"
              className="md:ml-6"
            />

            <HelpCard
              icon={<FiCompass size={18} />}
              title="Autoconhecimento"
              subtext="Compreender sua história, desejos e escolhas."
              bgColor="#F3EEE9"
              variant="light"
              className="md:ml-6"
            />
          </div>

          {/* Right column */}
          <div className="space-y-10 md:space-y-12 md:pt-6">
            <HelpCard
              icon={<FiAlertCircle size={18} />}
              title="Conflitos internos"
              subtext="Dúvidas, ambivalências e impasses emocionais."
              bgColor="#2F3E36"
              variant="dark"
              className="md:mr-6"
            />

            <HelpCard
              icon={<FiSearch size={18} />}
              title="Compreender sua história,"
              subtext="desejos e escolhas."
              bgColor="#F3EEE9"
              variant="light"
              className="md:mr-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
