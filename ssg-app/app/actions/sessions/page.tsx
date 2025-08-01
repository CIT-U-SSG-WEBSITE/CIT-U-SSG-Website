import {SessionModel} from "@/backend/models/sessionModel";
import {fetchAllSessionsSorted} from "@/backend/controllers/sessionController";
import SessionCard from "@/components/Actions/SessionCard";


export default async function Page() {
  const sessions : SessionModel[] = await fetchAllSessionsSorted();
  
  return (
    <div className="flex w-full h-fit min-h-screen bg-light-neutral">
      <div className="flex-1 max-w-5xl mx-auto">
        <div className="flex justify-between items-center gap-4 mb-10">
        
        </div>
        <div className="flex flex-col gap-4">
          {sessions.map((session: SessionModel) => (
            <SessionCard session={session} />
          ))}
        </div>
      </div>
    </div>
  );
}
