import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full h-fit min-h-screen bg-light-neutral p-8 gap-6">
      <Skeleton className="h-12 w-1/2 mb-8" />
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-3xl" />
        ))}
      </div>
    </div>
  );
}

