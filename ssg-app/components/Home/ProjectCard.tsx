import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  lead: string;
  leadUrl: string;
  coordinator: number;
  department: string;
  sessionType: string;
};

export default function ProjectCard({
  title,
  description,
  lead,
  imageUrl,
  leadUrl,
}: ProjectCardProps) {
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
            className="text-[20px] font-bold font-serif"
            style={{ color: "var(--color-dark-neutral)" }}
          >
            {title}
          </h2>
          <p
            className="text-[14px] text-gray-800 mt-2 line-clamp-3 font-sans"
            style={{ color: "var(--color-dark-neutral)" }}
          >
            {description}
          </p>
        </div>

        <div className ="pt-2">
          <div className="h-10 w-10 relative rounded-full inline-flex">
            <Image src={leadUrl} alt={title} fill className="lead-icon" />
          </div>

          <h3 className="font-semibold text-black inline-flex ml-5 absolute mt-2">Hon. {lead}</h3>  
        </div>

        {/* <a
          href="#"
          className="text-[16px] font-bold text-black mt-3 inline-flex items-center gap-1 hover:underline font-sans"
          style={{ color: "var(--color-dark-neutral)" }}
        >
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </div>
  );
}
