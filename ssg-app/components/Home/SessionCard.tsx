import Image from "next/image";
import { ArrowRight } from "lucide-react";

type SessionCardProps = {
  title: string;
  date: string;
  present: number;
  description: string;
  imageUrl: string;
  department: string | null;
  sessionType: string | null;
};

export default function SessionCard({
  title,
  date,
  present,
  description,
  imageUrl,
}: SessionCardProps) {
  return (
    <div className="bg-near-white w-full h-full rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-start md:items-center p-4 pb-10 md:p-[8px] gap-4 md:gap-6 shrink-0 !border-none">
      {/* Image */}
      <div className="relative w-full aspect-[320/184] md:max-w-[320px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[320px] rounded-xl overflow-hidden flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow pr-[10px]">
        <div>
          <h2
            className="text-[24px] font-bold font-serif"
            style={{ color: "var(--color-dark-neutral)" }}
          >
            {title}
          </h2>
          <p
            className="text-[14px] italic text-gray-500 font-sans"
            style={{ color: "var(--color-dark-neutral)" }}
          >
            {present} present • {date}
          </p>
          <p
            className="text-[16px] text-gray-800 mt-2 line-clamp-3 font-sans"
            style={{ color: "var(--color-dark-neutral)" }}
          >
            {description}
          </p>
        </div>

        {/* Learn More */}
        <a
          href="#"
          className="text-[16px] font-bold text-black mt-3 inline-flex items-center gap-1 hover:underline font-sans"
          style={{ color: "var(--color-dark-neutral)" }}
        >
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
