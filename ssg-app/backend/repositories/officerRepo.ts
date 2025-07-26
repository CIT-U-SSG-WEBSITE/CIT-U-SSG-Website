import { supabase } from "@/lib/supabase";
import { OfficerModel } from "@/backend/models/officerModel";

/**
 * REPOSITORIES directly talk to the database.
 * They are responsible for querying tables, inserting, updating, or deleting data.
 * This layer should not contain business logic — just pure data access.
 */

/**
 * Retrieves all officers from the database, including their associated commission details.
 *
 * This function queries the `officers` table using Supabase, selecting officer fields
 * (firstname, lastname, position, commissionId) and joining related commission data
 * via the `commissionId` foreign key. The result is mapped to an array of `OfficerModel`
 * objects, each containing officer information and the corresponding commission object.
 *
 * Throws an error if the database query fails.
 *
 * @returns Promise\<OfficerModel[]\> - Array of officers with commission details
 */
export async function getAllOfficers(): Promise<OfficerModel[]> {
  const { data, error } = await supabase
    .from("officers")
    .select(`
    firstname,
    lastname,
    position,
    commission_id,
    commissions:commission_id (
      id,
      name,
      initials,
      type,
      brief_description,
      full_description
    )
  `);
  
  if (error) throw new Error(error.message);
  
  return (data || []).map((officer: any) => ({
    firstname: officer.firstname,
    lastname: officer.lastname,
    position: officer.position,
    photo: officer.photo, // optional
    commissionId: officer.commission_id, // optional
    commission: officer.commissions
  }));
}

/**
 * Retrieves all officers belonging to a specific commission from the database.
 *
 * This function queries the `officers` table using Supabase, filtering by the provided `commissionId`.
 * It selects officer fields (firstname, lastname, position, commissionId) and joins related commission data
 * via the `commissionId` foreign key. The result is mapped to an array of `OfficerModel` objects,
 * each containing officer information and the corresponding commission object.
 *
 * Throws an error if the database query fails.
 *
 * @param commissionId - The ID of the commission to filter officers by
 * @returns Promise<OfficerModel[]> - Array of officers with commission details
 */
export async function getOfficersByCommission(commissionId: string): Promise<OfficerModel[]> {
  const { data, error } = await supabase
    .from("officers")
    .select(`
    firstname,
    lastname,
    position,
    photo,
    commission_id,
    commissions:commission_id (
      id,
      name,
      initials,
      type,
      brief_description,
      full_description
    )
  `).eq('commission_id', commissionId);
  
  if (error) throw new Error(error.message);
  
  return (data || []).map((officer: any) => ({
    firstname: officer.firstname,
    lastname: officer.lastname,
    position: officer.position,
    photo: officer.photo, // optional
    commissionId: officer.commission_id, // optional
    commission: officer.commissions
  }));
}