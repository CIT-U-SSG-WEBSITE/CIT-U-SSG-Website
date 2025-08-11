import {getAllOfficers, getOfficersByCommission, getOfficersByPosition, getOfficersByLastnames} from "@/backend/repositories/officerRepo";
import {getCommissionByInitials} from "@/backend/repositories/commissionRepo";
import {OfficerModel} from "@/backend/models/officerModel";

/**
 * CONTROLLERS *control* how data is handled after it’s retrieved by the repository.
 * This layer handles logic like filtering, combining, or validating data
 * before it's sent to the UI or another process.
 */

/**
 * Retrieves all officers and sorts them into a specific order based on their commission and position.
 * This function first fetches all officers, then organizes them into an ordered array
 * according to predefined rules:
 * 1. Executive Committee (EXECOM) officers are sorted by a specific order.
 * 2. Legislative officers (Representatives) are sorted alphabetically by position and lastname.
 * 3. Remaining officers are filtered and sorted by position, including Chief Justice, Associate Justices,
 *    Commissioners, and Internal Auditors in that order.
 *
 * @returns A Promise resolving to an array of officers sorted by the specified order
 */
export async function fetchAllOfficers() {
  const allOfficers = await getAllOfficers();
  const orderedOfficers : OfficerModel[] = [];
  
  const execomOrder = [
    "President",
    "Vice President",
    "Secretary General",
    "Treasurer General",
    "Executive Auditor",
    "Cabinet Secretary",
    "Solicitor General",
  ];
  const execomOfficers = allOfficers
    .filter(officer => officer.commission.initials === "EXECOM")
    .sort((a, b) => execomOrder.indexOf(a.position) - execomOrder.indexOf(b.position));
  orderedOfficers.push(...execomOfficers);
  
  const legislativeOfficers = allOfficers
    .filter(officer => officer.position.includes("Representative"))
    .sort((a, b) => a.position.localeCompare(b.position) || (a.lastname ?? "").localeCompare(b.lastname ?? ""));
  orderedOfficers.push(...legislativeOfficers);
  
  // filter the officers not yet added to the orderedOfficers array, and sort them by lastname
  const otherOfficers = allOfficers.filter(officer =>
    officer.commission.initials !== "EXECOM" && !officer.position.includes("Representative")
  );
  
  // the ones not yet added:  Chief Justice, Associate Justices, commissioners, and internal auditors. Add in that order
  const chiefJustice = otherOfficers.find(officer => officer.position === "Chief Justice");
  if (chiefJustice) {
    orderedOfficers.push(chiefJustice);
  }
  
  const associateJustices = otherOfficers.filter(officer => officer.position === "Associate Justice");
  if (associateJustices.length > 0) {
    orderedOfficers.push(...associateJustices);
  }
  
  const commissioners = otherOfficers
    .filter(officer => officer.position === "Commissioner")
    .sort((a, b) => a.commission.initials.localeCompare(b.commission.initials) || (a.lastname ?? "").localeCompare(b.lastname ?? ""));
  if (commissioners.length > 0) {
    orderedOfficers.push(...commissioners);
  }
  
  const internalAuditors = otherOfficers.filter(officer => officer.position.includes("Internal Auditor"));
  if (internalAuditors.length > 0) {
    orderedOfficers.push(...internalAuditors);
  }
  
  return orderedOfficers;
}

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

export async function fetchLegislativeOfficers() {
  const positions = [
    "ARCH Representative", "CHE Representative", "CE Representative", "CASE Representative",
    "CCJ Representative", "CMBA Representative", "CNAHS Representative", "CPE Representative",
    "CS Representative", "EE Representative", "ECE Representative", "IE Representative",
    "IT Representative", "ME Representative", "EM Representative", "House Speaker",
    "Speaker pro Tempore", "Legislative Secretary", "Asst. Legislative Secretary"
  ];
  
  // group and sort the officer.position, then by officer.lastname
  const representatives = [];
  for (const position of positions) {
    const officers = await getOfficersByPosition(position);
    representatives.push(...officers.sort((a, b) => (a.lastname ?? "").localeCompare(b.lastname ?? "")));
  }
  
  return representatives;
}

export async function fetchOfficersByLastnames(lastnames: string[]) {
  return await getOfficersByLastnames(lastnames);
}