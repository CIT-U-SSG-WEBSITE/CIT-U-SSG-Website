import { supabase } from "@/lib/supabase";
import { CommissionModel } from "@/backend/models/commissionModel";

/**
 * REPOSITORIES directly talk to the database.
 * They are responsible for querying tables, inserting, updating, or deleting data.
 * This layer should not contain business logic — just pure data access.
 */

export async function getAllCommissions(): Promise<CommissionModel[]> {
  const { data, error } = await supabase
    .from("commissions")
    .select("*");
    
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getCommissionsById(id: string): Promise<CommissionModel> {
  const { data, error } = await supabase
    .from("commissions")
    .select("*")
    .eq("id", id)
    .single();
    
  if (error) throw new Error(error.message);
  return data || null;
}

export async function getCommissionByInitials(initials: string): Promise<CommissionModel> {
  const { data, error } = await supabase
    .from("commissions")
    .select("*")
    .eq("initials", initials)
    .single();
    
  if (error) throw new Error(error.message);
  return data || [];
}