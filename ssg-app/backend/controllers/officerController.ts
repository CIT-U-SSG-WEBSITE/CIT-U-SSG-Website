import { getAllOfficers } from "@/backend/repositories/officerRepo";

/**
 * CONTROLLERS *control* how data is handled after it’s retrieved by the repository.
 * This layer handles logic like filtering, combining, or validating data
 * before it's sent to the UI or another process.
 */

export async function fetchOfficersByCommission(commission?: string) {
  const all = await getAllOfficers(); // calls the get function from the repository
  return commission ? all.filter(o => o.commission.type === commission) : all; // returns data to be used in the front end
}

export async function fetchExecomOfficers() {
  const all = await getAllOfficers(); // calls the get function from the repository
  const order = [
    "President",
    "Vice President",
    "Secretary General",
    "Treasurer General",
    "Executive Auditor"
  ];
  
  // returns data to be used in the front end
  return all
    .filter(o => o.commission.type === "EXECOM")
    .sort((a, b) => order.indexOf(a.position) - order.indexOf(b.position));
}
