import {getAllCommissions, getCommissionsByType} from "@/backend/repositories/commissionRepo";

/**
 * CONTROLLERS *control* how data is handled after it’s retrieved by the repository.
 * This layer handles logic like filtering, combining, or validating data
 * before it's sent to the UI or another process.
 */

export async function fetchCommissionsFiltered(type: string) {
  return await getCommissionsByType(type);
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
