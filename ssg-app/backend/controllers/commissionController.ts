import { getAllCommissions } from "@/backend/repositories/commissionRepo";

/**
 * CONTROLLERS *control* how data is handled after it’s retrieved by the repository.
 * This layer handles logic like filtering, combining, or validating data
 * before it's sent to the UI or another process.
 */

export async function fetchCommissionsFiltered(type?: string) {
  const all = await getAllCommissions(); // calls the get function from the repository
  return type ? all.filter(c => c.type === type) : all; // returns data to be used in the front end
}
