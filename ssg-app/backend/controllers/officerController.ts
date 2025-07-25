import {getOfficersByCommission} from "@/backend/repositories/officerRepo";
import {getCommissionByInitials} from "@/backend/repositories/commissionRepo";

/**
 * CONTROLLERS *control* how data is handled after it’s retrieved by the repository.
 * This layer handles logic like filtering, combining, or validating data
 * before it's sent to the UI or another process.
 */

/**
 * Retrieves and sorts officers belonging to a specific commission by their position order.
 *
 * This function first fetches the commission object using its initials, then retrieves all officers
 * associated with that commission. If an order array is provided, officers are sorted according to
 * the order of their positions as specified in the array. If no order is given, the original order is preserved.
 *
 * @param commissionInitials - The initials of the commission to filter officers by (e.g., "EXECOM")
 * @param order - (Optional) An array specifying the desired order of officer positions
 * @returns A Promise resolving to an array of officers sorted by the given order
 */
export async function fetchOfficersByCommission(commissionInitials: string, order: string[] = []) {
  const commission = await getCommissionByInitials(commissionInitials);
  const all = await getOfficersByCommission(commission.id);
  return all
    .sort((a, b) => order.indexOf(a.position) - order.indexOf(b.position));
}

/**
 * Retrieves and sorts the Executive Committee (EXECOM) officers in a predefined order.
 *
 * This function calls fetchOfficersByCommission with the commission initials "EXECOM" and a fixed
 * order array for the EXECOM officer positions. It returns the sorted list of EXECOM officers.
 *
 * @returns A Promise resolving to an array of EXECOM officers sorted by their official position order
 */
export async function fetchExecomOfficers() {
  const order = [
    "President",
    "Vice President",
    "Secretary General",
    "Treasurer General",
    "Executive Auditor",
    "Cabinet Secretary",
    "Solicitor General",
  ];
  return await fetchOfficersByCommission("EXECOM", order);
}
