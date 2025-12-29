export default function CTASection() {
  return (
    <section className="bg-[#F7F4F1] py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center px-6">
        <h2 className="text-3xl font-medium text-[#2B2B2B]">
          Pronto para iniciar seu processo terapêutico?
        </h2>

        <div
          className="mt-8 cursor-pointer rounded-sm bg-[#9C4F3A] px-10 py-4 text-[#F7F4F1] font-medium shadow-[0_10px_22px_rgba(0,0,0,0.18)] hover:bg-[#8A4432] transition">
          <a href="https://wa.me/5573999835281?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão." target="_blank" rel="noopener noreferrer">Agendar Sessão</a>
        </div>
      </div>
    </section>
  );
}
