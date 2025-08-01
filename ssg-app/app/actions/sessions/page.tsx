import {SessionModel, SessionType} from "@/backend/models/sessionModel";
import {fetchAllSessionsSorted} from "@/backend/controllers/sessionController";
import SessionTable from "@/components/Actions/Sessions/SessionTable";
import SessionSearch from "@/components/Actions/Sessions/SessionSearch";
import SessionFilter from "@/components/Actions/Sessions/SessionFilter";


export default async function Page() {
  const sessions : SessionModel[] = await fetchAllSessionsSorted();
  const sessionTypes: (SessionType | "ALL")[] = [
    "ALL",
    "JOINT",
    "EMERGENCY",
    "SPECIAL",
    "REGULAR",
    "INAUGURAL"
  ]
  
  return (
    <div className="flex w-full h-fit min-h-screen bg-light-neutral">
      <div className="flex-1 max-w-5xl mx-auto">
        <div className="flex justify-between items-center gap-4 mb-10">
          <SessionSearch />
          <SessionFilter sessionTypes={sessionTypes} />
        </div>
        <SessionTable sessions={sessions} />
      </div>
    </div>
  );
}
