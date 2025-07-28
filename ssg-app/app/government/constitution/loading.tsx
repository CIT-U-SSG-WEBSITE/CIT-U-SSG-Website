import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full h-fit gap-14">
      <div className="flex h-[240px] md:h-[360px] lg:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden bg-near-white">
        <Skeleton className="h-full w-full rounded-3xl" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <Skeleton className="w-1/3 h-10" />
        </div>
      </div>
      <article className="flex flex-col gap-3 w-full">
        <Skeleton className="w-1/4 h-8 mb-2" />
        <Skeleton className="w-full h-6" />
      </article>
      {[...Array(4)].map((_, i) => (
        <article className="flex flex-col gap-4 w-full" key={i}>
          <Skeleton className="w-1/2 h-8 mb-2" />
          {[...Array(3)].map((_, j) => (
            <Skeleton key={j} className="w-full h-6 mb-2" />
          ))}
        </article>
      ))}
    </div>
  );
}

