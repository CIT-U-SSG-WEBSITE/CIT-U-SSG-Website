import { supabase } from "@/lib/supabase";
import { OfficerModel } from "@/backend/models/officerModel";

/**
 * REPOSITORIES directly talk to the database.
 * They are responsible for querying tables, inserting, updating, or deleting data.
 * This layer should not contain business logic — just pure data access.
 */

export async function getAllOfficers(): Promise<OfficerModel[]> {
  const { data, error } = await supabase
    .from("officers")
    .select(`
    firstname,
    lastname,
    position,
    commissions (
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
    // commissionId: officer.commissionId, // optional
    commission: officer.commissions
  }));
}