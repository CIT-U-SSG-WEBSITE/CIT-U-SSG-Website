import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex w-full h-full min-h-screen bg-light-neutral">
      <div className="flex-1 max-w-5xl mx-auto">
        <div className="mb-6">
          <Skeleton className="w-full max-w-[480px] h-12 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="w-full h-26 rounded-4xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

