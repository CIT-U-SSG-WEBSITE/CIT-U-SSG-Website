  import {fetchAllOfficers} from "@/backend/controllers/officerController"
  import { fetchCommissionsFiltered } from "@/backend/controllers/commissionController"
  import OfficersSearch from "@/components/Officers/OfficersSearch"
  import OfficersTable from "@/components/Officers/OfficersTable"
  import type { OfficerModel } from "@/backend/models/officerModel"
  import type { CommissionModel } from "@/backend/models/commissionModel"
  
  
  export default async function Page() {
    const officers : OfficerModel[] = await fetchAllOfficers();
    const commissions : CommissionModel[] = await fetchCommissionsFiltered();
  
    return (
      <div className="flex w-full h-fit min-h-screen bg-light-neutral">
        <div className="flex-1 max-w-5xl mx-auto">
          <OfficersSearch commissions={commissions}/>
          <OfficersTable officers={officers}/>
        </div>
      </div>
    )
  }
