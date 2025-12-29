type EducationTimelineItemProps = {
  institution: string;
  description: string;
  active?: boolean; 
};

export default function EducationTimelineItem({
  institution,
  description,
  active = true,
}: EducationTimelineItemProps) {
  return (
    <div className="relative pl-10">
      {/* Dot */}
      <span
        className={["absolute left-0 top-2 block h-4 w-4 rounded-full", active ? "bg-[#9C4F3A]" : "bg-[#9C4F3A]/35",
        ].join(" ")}
      />

      <h3 className="text-lg font-medium text-[#2B2B2B] leading-none">
        {institution}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#2B2B2B]/75 max-w-[220px]">
        {description}
      </p>
    </div>
  );
}
