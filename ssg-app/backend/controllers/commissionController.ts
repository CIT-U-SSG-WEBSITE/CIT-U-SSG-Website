import {getAllCommissions, getCommissionsByType} from "@/backend/repositories/commissionRepo";
import {CommissionModel} from "@/backend/models/commissionModel";

/**
 * CONTROLLERS *control* how data is handled after it’s retrieved by the repository.
 * This layer handles logic like filtering, combining, or validating data
 * before it's sent to the UI or another process.
 */

export async function fetchCommissionsFiltered(type: string, excludeInitials?: string[]) {
  const commissions = await getCommissionsByType(type);
  if (excludeInitials && excludeInitials.length > 0) {
    return commissions.filter(c => !excludeInitials.includes(c.initials));
  }
  return commissions;
}

export async function fetchAllCommissions() {
  const commissions = await getAllCommissions();
  const typeOrder = [
    "EXECOM",
    "CABINET-LEVEL COMMISSION",
    "LEGISLATIVE COMMITTEE",
    "SUPREME COURT",
    "CONSTITUTIONAL COMMISSION",
  ];
  
  return commissions.sort((a, b) => {
    const typeA = typeOrder.indexOf(a.type);
    const typeB = typeOrder.indexOf(b.type);
    if (typeA !== typeB) {
      return typeA - typeB;
    }
    return a.initials.localeCompare(b.initials);
  });
}
