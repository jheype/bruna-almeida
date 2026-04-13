"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  HelpCircle,
  Mail,
  MessageCircle,
  Monitor,
  Phone,
  Quote,
  ShieldCheck,
  Globe
} from "lucide-react";
import { GiThreeLeaves } from "react-icons/gi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../lib/site";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-secondary"
      style={{ scaleX }}
    />
  );
}

function MagneticButton({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({
      x: x * 0.3,
      y: y * 0.3
    });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

function RevealText({
  text,
  className = ""
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.span>
    </div>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.h1
          className="mb-4 text-4xl font-serif text-text-light md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bruna Almeida
        </motion.h1>

        <motion.div
          className="mx-auto h-px bg-secondary"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <motion.p
          className="mt-4 text-xs uppercase tracking-[0.3em] text-text-light/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Psicologia Clínica & Psicanálise
        </motion.p>
      </div>
    </motion.div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-text-light/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-serif font-bold text-primary"
        >
          <GiThreeLeaves size={28} color="#94503A" />
          <span>BA.</span>
        </a>

        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-wider md:flex">
          <a href="#sobre" className="transition-colors hover:text-secondary">
            Sobre
          </a>
          <a href="#formacao" className="transition-colors hover:text-secondary">
            Formação
          </a>
          <a
            href="#atendimento"
            className="transition-colors hover:text-secondary"
          >
            Atendimento
          </a>
          <a href="#faq" className="transition-colors hover:text-secondary">
            FAQ
          </a>
        </div>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-text-light transition-all duration-300 hover:bg-secondary"
        >
          Agendar <ArrowRight size={16} />
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  const yBlur = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-secondary">
              Psicologia Clínica • Psicanálise • {siteConfig.crp}
            </span>
          </motion.div>

          <h1 className="mb-8 text-5xl leading-[0.9] text-primary md:text-7xl lg:text-8xl">
            <RevealText text="Cuidado que" />
            <motion.span
              className="block italic"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              acolhe
            </motion.span>
            <RevealText text="e transforma." />
          </h1>

          <motion.p
            className="mb-10 max-w-md text-lg leading-relaxed text-text-dark/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Atuação em Psicologia Clínica e Psicanálise, oferecendo um espaço
            seguro de escuta, acolhimento e elaboração para o seu processo de
            autoconhecimento e cuidado emocional.
          </motion.p>

          <div className="flex flex-col gap-6 sm:flex-row">
            <MagneticButton>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-primary px-10 py-5 text-center font-medium text-text-light shadow-xl shadow-primary/20 transition-all duration-500 hover:bg-secondary"
              >
                Agendar Consulta
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#sobre"
                className="block rounded-full border border-primary/20 px-10 py-5 text-center font-medium text-primary transition-all duration-500 hover:bg-primary hover:text-text-light"
              >
                Conhecer Trabalho
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="relative">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[60px] shadow-[0_50px_100px_-20px_rgba(58,77,66,0.3)]">
              <Image
                src="/bruna-main.jpg"
                alt="Bruna Almeida"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute -top-20 -right-20 z-0 h-64 w-64 rounded-full border border-secondary/10"
            style={{ y: y1, rotate }}
          />

          <motion.div
            className="pointer-events-none absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full bg-accent/50 blur-3xl"
            style={{ y: yBlur }}
          />

          <motion.div
            className="absolute top-1/2 -right-12 z-20 hidden rounded-2xl bg-white p-6 shadow-2xl lg:block"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <GiThreeLeaves size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tight text-primary">
                  Atendimento
                </p>
                <p className="text-sm text-text-dark/60">100% Online</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() =>
          document
            .getElementById("sobre")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40">
          Descobrir
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-primary/40" size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function About() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="relative overflow-hidden bg-accent/30 py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-10 text-4xl leading-tight text-primary md:text-6xl">
              Uma abordagem <br />
              <span className="italic">humanizada</span> e ética.
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-text-dark/80">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:text-secondary">
                Sou psicóloga clínica e atuo a partir da Psicanálise, oferecendo
                um espaço de escuta cuidadosa, singular e comprometida com a
                história de cada pessoa.
              </p>

              <p>
                Meu trabalho é fundamentado no acolhimento ético e na escuta
                atenta, buscando proporcionar um ambiente em que cada indivíduo
                possa falar de si, elaborar conflitos, ressignificar vivências e
                construir novos caminhos para lidar com o sofrimento psíquico.
              </p>

              <p>
                Acredito que o processo terapêutico é construído na relação,
                respeitando o tempo, a subjetividade e a singularidade de cada
                paciente.
              </p>
            </div>

            <motion.div
              className="mt-12 flex flex-wrap gap-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-secondary">
                  03/27970
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
                  Registro CRP
                </span>
              </div>

              <div className="hidden h-16 w-px bg-primary/10 sm:block" />

              <div className="flex flex-col">
                <span className="text-4xl font-bold text-secondary">Online</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
                  Modalidade de Atendimento
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="order-1 md:order-2" style={{ y }}>
            <div className="group relative">
              <motion.div
                className="absolute -inset-4 z-0 rounded-[40px] border border-secondary/20"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/bruna.png"
                    alt="Bruna Almeida"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -right-8 -bottom-8 z-20 hidden max-w-[200px] rounded-3xl bg-primary p-8 text-text-light shadow-2xl lg:block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Quote className="mb-4 text-secondary" size={32} />
                <p className="text-sm italic">
                  "A escuta é o primeiro passo para a elaboração."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const education = [
    {
      institution: "UFSB",
      title: "Bacharel em Humanidades e Psicologia",
      description:
        "Formação voltada à escuta clínica, compreensão da subjetividade e fundamentos das ciências humanas.",
      year: "Graduação"
    },
    {
      institution: "Uniamerica",
      title: "Pós-graduação em Neurociência do Desenvolvimento",
      description:
        "Aprofundamento no estudo do desenvolvimento humano e dos processos cognitivos ao longo da vida.",
      year: "Especialização"
    },
    {
      institution: "Farese",
      title: "Pós-graduação em Teoria Psicanalítica",
      description:
        "Especialização voltada aos fundamentos teóricos da Psicanálise e à escuta clínica.",
      year: "Especialização"
    },
    {
      institution: "UNEB",
      title: "Mestranda em Estudos Literários",
      description:
        "Pesquisa sobre linguagem, narrativa e subjetividade, ampliando o olhar sobre a experiência humana.",
      year: "Mestrado"
    }
  ];

  return (
    <section id="formacao" className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl text-primary md:text-6xl">
            Trajetória Acadêmica
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-secondary" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-text-dark/40">
            Formação e aprofundamento contínuo
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-primary/10 md:block" />

          <div className="space-y-24">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                className={`flex flex-col items-center md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-full flex-1 md:w-auto">
                  <motion.div
                    className={`group relative rounded-[40px] border border-primary/5 bg-text-light p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 ${
                      index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                    }`}
                    whileHover={{ y: -10 }}
                  >
                    <div className="absolute -top-6 left-10 rounded-full bg-secondary px-6 py-2 text-xs font-bold uppercase tracking-widest text-text-light shadow-lg">
                      {item.year}
                    </div>

                    <span className="mb-4 block text-lg font-bold text-secondary transition-all duration-500 group-hover:tracking-widest">
                      {item.institution}
                    </span>

                    <h3 className="mb-4 text-2xl leading-tight text-primary">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-text-dark/70">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-primary/40 transition-colors group-hover:text-secondary">
                      <div className="h-px w-8 bg-current" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Detalhes
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="relative flex items-center justify-center py-10 md:py-0">
                  <motion.div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-text-light shadow-[0_10px_30px_rgba(58,77,66,0.3)]"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                  >
                    <GraduationCap size={24} />

                    <motion.div
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Monitor size={32} />,
      title: "Flexibilidade Total",
      description:
        "Realize suas sessões de onde estiver, com praticidade e acolhimento, adaptando o atendimento à sua rotina."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Sigilo e Segurança",
      description:
        "As sessões acontecem em ambiente online com privacidade, ética profissional e cuidado com a confidencialidade."
    },
    {
      icon: <Globe size={32} />,
      title: "Atendimento Sem Fronteiras",
      description:
        "Atendimento online para pessoas que buscam escuta clínica em língua portuguesa, estejam no Brasil ou no exterior."
    }
  ];

  return (
    <section
      id="atendimento"
      className="relative overflow-hidden bg-primary py-24 text-text-light"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 translate-x-1/4 -skew-x-12 bg-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="mb-6 text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Atendimento Online
          </motion.h2>

          <motion.p
            className="text-xl leading-relaxed text-text-light/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Um espaço de escuta clínica construído com presença, cuidado e
            responsabilidade, agora com a praticidade do formato online.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-10 transition-all duration-500 hover:border-secondary/30 hover:bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20 text-secondary transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mb-4 text-2xl">{item.title}</h3>
              <p className="leading-relaxed text-text-light/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-3xl border border-secondary/20 bg-secondary/10 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="italic text-text-light/90">
            "A palavra encontra lugar quando há escuta."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a primeira sessão?",
      answer:
        "A primeira sessão é um momento de acolhimento e escuta inicial. Nela, conversamos sobre o que te trouxe para a terapia, suas demandas e como acontece o processo de atendimento."
    },
    {
      question: "Qual a duração das sessões?",
      answer:
        "As sessões individuais têm duração média de 50 minutos, geralmente com frequência semanal, conforme a necessidade de cada caso."
    },
    {
      question: "Você atende convênios?",
      answer:
        "Os atendimentos são particulares e não há atendimento por convênios."
    },
    {
      question: "Como é realizado o atendimento?",
      answer:
        "Os atendimentos são realizados online, por videochamada, em ambiente reservado e com o cuidado necessário para preservar sigilo, escuta e qualidade do processo terapêutico."
    }
  ];

  return (
    <section id="faq" className="bg-accent/20 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HelpCircle className="mx-auto mb-4 text-secondary" size={40} />
          <h2 className="text-4xl text-primary md:text-5xl">
            Dúvidas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-primary/5 bg-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors hover:bg-accent/10"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-primary">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="px-8 pb-6 leading-relaxed text-text-dark/70"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-text-dark py-16 text-text-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-6 flex items-center gap-2 text-3xl">
              <GiThreeLeaves size={32} color="#94503A" />
              <span>Bruna Almeida</span>
            </div>

            <p className="mb-6 max-w-sm text-text-light/50">
              Psicóloga clínica com atuação em Psicanálise, oferecendo escuta,
              acolhimento e cuidado em cada processo terapêutico.
            </p>

            <div className="flex gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-secondary"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-secondary"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-secondary"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs uppercase tracking-widest text-secondary">
              Links
            </h4>

            <ul className="space-y-4 text-sm text-text-light/70">
              <li>
                <a href="#sobre" className="transition-colors hover:text-text-light">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#formacao"
                  className="transition-colors hover:text-text-light"
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  href="#atendimento"
                  className="transition-colors hover:text-text-light"
                >
                  Atendimento
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-text-light">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs uppercase tracking-widest text-secondary">
              Contato
            </h4>

            <ul className="space-y-4 text-sm text-text-light/70">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                {siteConfig.email}
              </li>
              <li className="opacity-50">{siteConfig.crp}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs uppercase tracking-widest text-text-light/30 md:flex-row">
          <p>© 2026 Bruna Almeida. Todos os direitos reservados.</p>
          <p>Psicologia Clínica & Psicanálise</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloating() {
  return (
    <motion.a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-8 bottom-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:shadow-green-500/20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={32} fill="currentColor" />
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-text-dark opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
        Agende sua consulta
      </span>
    </motion.a>
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <ScrollProgress />

      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Timeline />
          <Services />
          <FAQ />
          <Footer />
          <WhatsAppFloating />
        </motion.div>
      )}
    </main>
  );
}