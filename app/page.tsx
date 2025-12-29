import HelpAreaSection from "@/components/HelpAreaSection";
import EducationSection from "@/components/EducationSection";
import CTASection from "@/components/CTASection";
import NavBar from "@/components/NavBar";
import { FiArrowRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <main className="bg-[#F7F4F1]">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative flex w-full bg-[#2F3E36] text-[#F7F4F1] px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20 overflow-hidden">
        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left */}
          <div data-aos="fade-right" className="flex flex-col items-start gap-6 w-full lg:w-[60%] lg:mt-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium w-full lg:w-[65%] leading-tight">
              Psicanálise para quem deseja se conhecer com profundidade
            </h1>

            <p className="text-sm sm:text-base opacity-90 w-full lg:w-[35%] leading-relaxed">
              Atendimento clínico com escuta ética, responsável e acolhedora
            </p>

            <div className="mt-3 cursor-pointer bg-[#9C4F3A] px-8 py-4 rounded-lg text-sm font-medium hover:bg-[#8A4432] transition">
              <a href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão." target="_blank" rel="noopener noreferrer">Agendar Sessão</a>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-left" className="w-full lg:w-[40%] flex items-center justify-center lg:justify-end">
            <img
              src="/bruna-hero.jpeg"
              alt="Bruna Almeida"
              className="w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[520px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Middle */}
      <section data-aos="fade-up" id="sobre" className="bg-[#F7F4F1] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center px-6">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-medium">
            Bruna Almeida
          </h2>
          <div className="mt-4 h-px w-56 sm:w-72 bg-zinc-900/40" />

          <p className="mt-6 max-w-xl text-zinc-800/80 leading-relaxed text-sm sm:text-base">
            Psicóloga clínica com formação em psicanálise. Atendo adultos que
            buscam compreender seus conflitos, relações e emoções de forma
            profunda e responsável.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-sm border border-[#9C4F3A]/50 bg-transparent px-7 py-4 text-[#9C4F3A] font-medium shadow-[0_6px_18px_rgba(156,79,58,0.10)] hover:border-[#9C4F3A] hover:bg-[#9C4F3A]/10 transition cursor-pointer">
            <a href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão." target="_blank" rel="noopener noreferrer">Agendar Sessão</a>
            <FiArrowRight className="text-lg" />
          </div>
        </div>
      </section>

      <HelpAreaSection />

      <EducationSection
        entries={[
          {
            institution: "UFSB",
            description: "Bacharel em Humanidades e Psicologia",
            active: true,
          },
          {
            institution: "Uniamerica",
            description: "Pós-graduação em Neurociência do Desenvolvimento",
            active: true,
          },
          {
            institution: "Farese",
            description: "Pós-graduação em Teoria Psicanalítica",
            active: true,
          },
          {
            institution: "UNEB",
            description: "Mestranda em Estudos Literários",
            active: true,
          },
        ]}
        photoUrl="/bruna.png"
      />

      <CTASection />

      <Footer
        name="Bruna Almeida"
        crp="CRP 03/27970"
        devName="Jheype Studios"
        devUrl="https://my-portfolio-mocha-eight-40.vercel.app/"
      />
    </main>
  );
}
