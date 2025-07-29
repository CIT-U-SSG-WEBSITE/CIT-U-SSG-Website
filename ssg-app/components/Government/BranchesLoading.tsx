import {Skeleton} from "@/components/ui/skeleton";

export default function BranchesLoading() {
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      <div className="flex h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden">
        <Skeleton className="w-full h-full rounded-3xl" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <Skeleton className="w-1/3 h-10" />
          <Skeleton className="w-1/2 h-6" />
        </div>
        <Skeleton className="w-full h-16" />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <Skeleton className="w-1/4 h-8 mb-2" />
          <Skeleton className="w-1/2 h-6 mb-4" />
          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full rounded-xl" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="w-1/4 h-8 mb-2" />
          <Skeleton className="w-1/2 h-6 mb-4" />
          <div className="flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
