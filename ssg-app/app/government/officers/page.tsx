  import {fetchAllOfficers} from "@/backend/controllers/officerController"
  import {fetchAllCommissions} from "@/backend/controllers/commissionController"
  import OfficersSearch from "@/components/Officers/OfficersSearch"
  import OfficersTable from "@/components/Officers/OfficersTable"
  import type { OfficerModel } from "@/backend/models/officerModel"
  import type { CommissionModel } from "@/backend/models/commissionModel"
  import {OfficersFilter} from "@/components/Officers/OfficersFilter";
  
  
  export default async function Page() {
    const officers : OfficerModel[] = await fetchAllOfficers();
    const commissions : CommissionModel[] = await fetchAllCommissions();
  
    return (
      <div className="flex flex-col w-full h-fit min-h-screen bg-light-neutral">
        <div className="flex justify-between items-center gap-4 mb-10">
          <OfficersSearch />
          <OfficersFilter commissions={commissions}/>
        </div>
        <OfficersTable officers={officers}/>
      </div>
    )
  }
