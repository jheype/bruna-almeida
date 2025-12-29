import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type FooterProps = {
  name?: string;
  crp?: string;
  devName?: string;
  devUrl?: string; 
};

export default function Footer({
  name = "Bruna Almeida",
  crp = "CRP 03/27970",
  devName = "JP.dev",
  devUrl,
}: FooterProps) {
  const DevTag = devUrl ? "a" : "span";

  return (
    <footer className="relative bg-[#2F3E36] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h3 className="text-3xl font-medium text-[#F7F4F1]">{name}</h3>
        <p className="mt-2 text-sm text-[#F7F4F1]/80">{crp}</p>

        <div className="mt-4 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/bruna-almeida-4a5b8a186/"
            target="_blank"
            aria-label="LinkedIn"
            className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-[#F7F4F1]/90 hover:text-[#F7F4F1] transition"
          >
            <FaLinkedinIn size={14} />
          </a>

          <a
            href="#"
            target="_blank"
            aria-label="Email"
            className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-[#F7F4F1]/90 hover:text-[#F7F4F1] transition"
          >
            <HiOutlineMail size={16} />
          </a>

          <a
            href="https://www.instagram.com/brunadealmeid/"
            target="_blank"
            aria-label="Instagram"
            className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-[#F7F4F1]/90 hover:text-[#F7F4F1] transition"
          >
            <FiInstagram size={16} />
          </a>
        </div>
      </div>

      {/* Dev credit*/}
      <div className="pointer-events-auto absolute bottom-4 right-6">
        <DevTag {...(devUrl ? { href: devUrl, target: "_blank", rel: "noreferrer" } : {})}
          className="text-xs text-[#F7F4F1]/55 hover:text-[#F7F4F1]/80 transition">
            Desenvolvido por {devName}
        </DevTag>
      </div>
    </footer>
  );
}
