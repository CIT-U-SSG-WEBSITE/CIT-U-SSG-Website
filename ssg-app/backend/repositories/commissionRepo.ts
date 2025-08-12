import { supabase } from "@/lib/supabase";
import { CommissionModel } from "@/backend/models/commissionModel";

/**
 * REPOSITORIES directly talk to the database.
 * They are responsible for querying tables, inserting, updating, or deleting data.
 * This layer should not contain business logic — just pure data access.
 */

export async function getAllCommissions(): Promise<CommissionModel[]> {
  const { data, error } = await supabase
    .from("commission")
    .select("*");
    
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getCommissionsByType(type: string): Promise<CommissionModel[]> {
  const { data, error } = await supabase
    .from("commission")
    .select("*")
    .eq("type", type);
  
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getCommissionById(id: string): Promise<CommissionModel> {
  const { data, error } = await supabase
    .from("commission")
    .select("*")
    .eq("id", id)
    .single();
    
  if (error) throw new Error(error.message);
  return data || null;
}

export async function getCommissionByInitials(initials: string): Promise<CommissionModel | null> {
  const { data, error } = await supabase
    .from("commission")
    .select("*")
    .eq("initials", initials)
    .single();
    
  if (error) throw new Error(error.message);
  return data || null;
}