import React from "react";
import EducationTimelineItem from "./EducationTimelineItem";
import { GiBrain } from "react-icons/gi";

type EducationEntry = {
  institution: string;
  description: string;
  active?: boolean;
};

type EducationSectionProps = {
  title?: string;
  photoUrl?: string; 
  entries: EducationEntry[];
  rightIcon?: React.ReactNode;
};

export default function EducationSection({
  title = "Minha formação",
  photoUrl,
  entries,
  rightIcon = <GiBrain size={390} />,
}: EducationSectionProps) {
  return (
    <section id="formacao" className="relative bg-[#F7F4F1] py-20 overflow-hidden">
      {/* Top & bottom thin lines */}
      <div className="absolute left-0 bottom-6 h-px w-full bg-[#9C4F3A]/70" />

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Title */}
        <div className="flex justify-center">
          <h2 className="text-4xl font-medium text-[#2B2B2B]">
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* Left*/}
          <div className="flex justify-center lg:justify-start">
            <div
              data-aos="fade-right"
              className="relative h-[330px] w-[330px] rounded-md border border-black/15 shadow-[0_12px_28px_rgba(0,0,0,0.18)] overflow-hidden bg-[#CFCFCF]">
              {photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photoUrl} alt="Foto" className="h-full w-full object-cover"/>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-white text-6xl tracking-wider font-medium">
                    FOTO
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Middle: Timeline */}
          <div className="relative flex justify-center">

            {/* Vertical line */}
            <div className="absolute left-[8px] top-0 h-full w-[3px] -translate-x-1/2 bg-[#9C4F3A]/65 rounded-full" />

            <div className="w-full max-w-sm space-y-10 py-2">
              {entries.map((e, idx) => (
                <EducationTimelineItem
                  key={`${e.institution}-${idx}`}
                  institution={e.institution}
                  description={e.description}
                  active={e.active ?? true}
                />
              ))}

              {/* Tail dot at end*/}
              <div className="relative pl-10">
                <span className="absolute left-0 top-2 block h-4 w-4 rounded-full bg-[#9C4F3A]/35" />
              </div>
            </div>
          </div>

          {/* Right*/}
          <div className="flex justify-center lg:justify-end">
            <div className="text-[#2F3E36] opacity-95">
              {rightIcon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
