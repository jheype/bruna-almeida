'use client';

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { GiBrain, GiThreeLeaves } from "react-icons/gi";
import { FiArrowRight, FiInstagram, FiCompass, FiSearch, FiAlertCircle, FiMenu, FiX } from "react-icons/fi";
import { FaLinkedinIn, FaCloud, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// --- CONFIGURAÇÃO DE CORES & ESTILOS ---
// Background: #FDFBF7 (Creme Suave)
// Text Dark: #2A332E (Verde Quase Preto)
// Primary Green: #3A4D42 (Verde Musgo Profundo)
// Accent Terra: #A65D46 (Terracota Elegante)

// =====================================================================
// COMPONENTS
// =====================================================================

// --- 1. NAV BAR ---
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Formação", href: "#formacao" },
    { name: "Atuação", href: "#atuacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A65D46] text-white shadow-md">
            <GiThreeLeaves size={20} />
          </div>
          <span className="text-xl font-serif font-medium tracking-wide text-[#2A332E]">
            Bruna Almeida
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex gap-8 text-sm font-medium text-[#2A332E]/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#A65D46] transition-colors relative group">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A65D46] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#3A4D42] px-6 py-2.5 text-sm font-medium text-[#FDFBF7] shadow-lg hover:bg-[#2A332E] hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Agendar Sessão
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#2A332E] p-2"
          aria-label="Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#FDFBF7] shadow-lg overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 border-t border-stone-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-serif text-[#2A332E] hover:text-[#A65D46]"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-md bg-[#A65D46] py-3 text-[#FDFBF7] font-medium"
            >
              Agendar agora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

// --- 2. HERO SECTION ---
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#3A4D42] text-[#FDFBF7] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#2A332E]/30 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 z-10 py-10 lg:py-0" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FDFBF7]/20 bg-[#FDFBF7]/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="block h-2 w-2 rounded-full bg-[#A65D46]"></span>
            <span className="text-xs font-medium tracking-wide uppercase text-[#FDFBF7]/80">Psicologia Clínica & Psicanálise</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.15]">
            Jornada para quem deseja se conhecer com <span className="text-[#dcbba8] italic">profundidade</span>.
          </h1>
          
          <p className="text-base sm:text-lg text-[#FDFBF7]/80 leading-relaxed max-w-lg">
            Ofereço um espaço de escuta ética e acolhedora, onde seus conflitos e desejos podem ser elaborados para uma vida com mais sentido.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5573999835281"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#A65D46] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#94503a] hover:shadow-xl hover:-translate-y-1"
            >
              Iniciar Atendimento
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="flex items-center gap-3 rounded-full border border-[#FDFBF7]/30 px-8 py-4 text-sm font-semibold text-[#FDFBF7] hover:bg-[#FDFBF7]/10 transition-all"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative" data-aos="fade-left" data-aos-delay="200">
          <div className="relative w-full max-w-[500px]">
            {/* Abstract Shape behind image */}
            <div className="absolute top-10 right-10 w-full h-full rounded-[40px] border-2 border-[#A65D46]/30 z-0 transform translate-x-4 translate-y-4"></div>
            
            <div className="relative z-10 rounded-[30px] overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="/bruna-hero.jpeg"
                alt="Bruna Almeida"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FDFBF7]/95 backdrop-blur-md p-5 rounded-xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#A65D46]/10 p-3 rounded-full text-[#A65D46]">
                    <GiBrain size={24} />
                  </div>
                  <div>
                    <p className="text-[#2A332E] font-serif font-medium text-lg">Atendimento Online</p>
                    <p className="text-[#2A332E]/60 text-xs uppercase tracking-wider">Disponível para todo o mundo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 3. ABOUT SECTION ---
function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[#FDFBF7]">
      <div className="mx-auto max-w-4xl px-6 text-center" data-aos="fade-up">
        <span className="text-[#A65D46] font-medium tracking-widest text-xs uppercase mb-4 block">Sobre a profissional</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#2A332E] mb-8">Bruna Almeida</h2>
        
        <div className="relative inline-block">
            <p className="text-lg lg:text-xl text-[#2A332E]/70 leading-relaxed font-light">
            &quot;A psicanálise não é apenas sobre curar sintomas, mas sobre <strong className="text-[#A65D46] font-medium">reescrever histórias</strong>. Como psicóloga clínica e pesquisadora, dedico minha prática a oferecer um lugar seguro onde adultos possam compreender as raízes de seus afetos e construir novos caminhos.&quot;
            </p>
            <div className="mt-8 h-px w-24 bg-[#A65D46] mx-auto opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

// --- 4. HELP AREA (Cards) ---
function HelpAreaSection() {
  const cards = [
    {
      icon: <FaCloud size={20} />,
      title: "Ansiedade e Angústia",
      text: "Quando o excesso de futuro paralisa o presente. Aprenda a sustentar seus sentimentos sem ser dominado por eles.",
      bg: "bg-[#F3EEE9]",
      dark: false,
    },
    {
      icon: <FiAlertCircle size={20} />,
      title: "Conflitos Internos",
      text: "Dúvidas, ambivalências e impasses. Um espaço para desembaraçar os nós emocionais que impedem sua decisão.",
      bg: "bg-[#3A4D42]",
      dark: true,
    },
    {
      icon: <FiCompass size={20} />,
      title: "Autoconhecimento",
      text: "Mais do que saber quem você é, é compreender por que você faz as escolhas que faz e como mudá-las.",
      bg: "bg-[#F3EEE9]",
      dark: false,
    },
    {
      icon: <FiSearch size={20} />,
      title: "Repetição de Padrões",
      text: "Entenda os ciclos viciosos em relacionamentos e comportamentos que insistem em se repetir na sua vida.",
      bg: "bg-[#F3EEE9]",
      dark: false,
    },
  ];

  return (
    <section id="atuacao" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
           <h2 className="text-3xl lg:text-4xl font-serif text-[#2A332E]">Como posso te ajudar?</h2>
           <p className="mt-4 text-[#2A332E]/60">Áreas de foco clínico e desenvolvimento pessoal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`group relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                card.dark ? "bg-[#3A4D42] text-[#FDFBF7]" : "bg-[#F8F6F4] text-[#2A332E] border border-stone-100"
              }`}
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  card.dark ? "bg-white/10 text-[#FDFBF7]" : "bg-[#A65D46]/10 text-[#A65D46] group-hover:bg-[#A65D46] group-hover:text-white"
              }`}>
                {card.icon}
              </div>
              <h3 className="mb-3 text-xl font-serif font-medium">{card.title}</h3>
              <p className={`text-sm leading-relaxed ${card.dark ? "text-white/70" : "text-[#2A332E]/70"}`}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 5. EDUCATION SECTION ---

// Tipagem para as props do EducationTimelineItem
type EducationTimelineItemProps = {
  institution: string;
  description: string;
  active?: boolean;
};

function EducationTimelineItem({ institution, description, active }: EducationTimelineItemProps) {
  return (
    <div className="relative pl-12 pb-12 last:pb-0 group">
      {/* Line */}
      <div className="absolute left-[11px] top-3 h-full w-[2px] bg-[#A65D46]/20 group-last:hidden"></div>
      
      {/* Dot */}
      <div className={`absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-[#FDFBF7] transition-all duration-500 ${
        active ? "bg-[#A65D46] shadow-[0_0_0_4px_rgba(166,93,70,0.15)]" : "bg-stone-300"
      }`}></div>

      <div className="transition-all duration-300 group-hover:translate-x-1">
        <h3 className="text-lg font-bold text-[#2A332E]">{institution}</h3>
        <p className="mt-1 text-sm text-[#2A332E]/70 font-medium">{description}</p>
      </div>
    </div>
  );
}

function EducationSection() {
  const entries = [
    { institution: "UFSB", description: "Bacharel em Humanidades e Psicologia" },
    { institution: "Uniamerica", description: "Pós-graduação em Neurociência do Desenvolvimento" },
    { institution: "Farese", description: "Pós-graduação em Teoria Psicanalítica" },
    { institution: "UNEB", description: "Mestranda em Estudos Literários" },
  ];

  return (
    <section id="formacao" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A65D46]/30 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Photo */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start" data-aos="fade-right">
             <div className="relative">
                <div className="absolute -inset-4 rounded-full border border-[#A65D46]/20"></div>
                <div className="h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <img src="/bruna.png" alt="Bruna Almeida" className="h-full w-full object-cover" />
                </div>
                {/* Floating CRP */}
                <div className="absolute bottom-10 -right-6 bg-white py-3 px-6 rounded-lg shadow-lg border border-stone-100">
                    <p className="text-[#A65D46] font-bold text-sm">CRP 03/27970</p>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl lg:text-4xl font-serif text-[#2A332E] mb-12">
              Formação Acadêmica
            </h2>
            <div className="max-w-md">
              {entries.map((e, idx) => (
                <EducationTimelineItem
                  key={idx}
                  institution={e.institution}
                  description={e.description}
                  active={true}
                />
              ))}
            </div>
            <div className="mt-12 p-6 bg-[#3A4D42]/5 rounded-xl border border-[#3A4D42]/10">
                <div className="flex gap-4">
                    <GiBrain className="text-[#3A4D42] text-3xl shrink-0" />
                    <p className="text-sm text-[#2A332E]/80 italic">
                        &quot;O estudo contínuo é o que sustenta a ética da escuta psicanalítica.&quot;
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- 6. CTA SECTION ---
function CTASection() {
  return (
    <section className="py-24 bg-[#3A4D42] relative overflow-hidden text-center px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-8" data-aos="zoom-in">
        <h2 className="text-3xl md:text-5xl font-serif text-[#FDFBF7]">
          Pronto para iniciar seu processo?
        </h2>
        <p className="text-[#FDFBF7]/80 text-lg">
          O primeiro passo é sempre o mais importante. Agende sua sessão e comece a investir em você.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#A65D46] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#A65D46]/30 hover:bg-[#b56952] hover:scale-105 transition-all duration-300"
          >
            Agendar Sessão via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// --- 7. FOOTER ---
function Footer() {
  return (
    <footer className="bg-[#262f2b] text-[#FDFBF7] py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-medium">Bruna Almeida</h3>
          <p className="text-sm text-white/60 mt-2">Psicóloga Clínica & Psicanalista</p>
          <p className="text-sm text-[#A65D46] mt-1">CRP 03/27970</p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {[
            { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/bruna-almeida-4a5b8a186/" },
            { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/brunadealmeid/" },
            { icon: <HiOutlineMail size={20} />, href: "mailto:contato@brunaalmeida.com" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-[#A65D46] hover:text-white transition-all duration-300 text-white/70"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Credits */}
        <div className="text-center md:text-right text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <a 
            href="https://jheype.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 block hover:text-[#A65D46] transition-colors"
          >
            Desenvolvido por <span className="font-medium text-white/50">Jheype Studios</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

// --- 8. FLOATING WHATSAPP BUTTON ---
function FloatingWhatsApp() {
    return (
        <a 
            href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 hover:scale-110 hover:shadow-xl transition-all duration-300"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    )
}

// =====================================================================
// MAIN PAGE COMPONENT
// =====================================================================

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <main className="w-full bg-[#FDFBF7] text-[#2A332E] antialiased selection:bg-[#A65D46] selection:text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <HelpAreaSection />
      <EducationSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}