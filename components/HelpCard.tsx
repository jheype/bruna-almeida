import React from "react";

type HelpCardProps = {
  icon: React.ReactNode;
  title: string;
  subtext: string;
  bgColor?: string; 
  variant?: "light" | "dark";
  className?: string;
};

export default function HelpCard({
  icon,
  title,
  subtext,
  bgColor = "#F7F4F1",
  variant = "light",
  className = "",
}: HelpCardProps) {
  const isDark = variant === "dark";

  return (
    <article
    data-aos="fade-left"
      className={[
        "relative w-full rounded-xl border",
        isDark ? "border-white/10" : "border-black/10",
        "shadow-[0_10px_25px_rgba(0,0,0,0.14)]",
        "px-6 py-5",
        className,
      ].join(" ")}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-start gap-3">
        {/* Icon container */}
        <div
          className={["mt-0.5 flex h-9 w-9 items-center justify-center rounded-full", isDark ? "bg-white/10" : "bg-[#9C4F3A]/15", ].join(" ")}>
          {/* Icon */}
          <div className={isDark ? "text-[#F7F4F1]" : "text-[#9C4F3A]"}>
            {icon}
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0">
          <h3
            className={["text-xl font-medium leading-tight", isDark ? "text-[#F7F4F1]" : "text-[#2B2B2B]", ].join(" ")}>
            {title}
          </h3>

          <p
            className={["mt-2 text-sm leading-relaxed", isDark ? "text-[#F7F4F1]/80" : "text-[#2B2B2B]/70", ].join(" ")}>
            {subtext}
          </p>
        </div>
      </div>
    </article>
  );
}
