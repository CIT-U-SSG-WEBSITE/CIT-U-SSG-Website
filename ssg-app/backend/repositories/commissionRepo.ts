import { supabase } from "@/lib/supabase";
import { CommissionModel } from "@/backend/models/commissionModel";

/**
 * REPOSITORIES directly talk to the database.
 * They are responsible for querying tables, inserting, updating, or deleting data.
 * This layer should not contain business logic — just pure data access.
 */

export async function getAllCommissions(): Promise<CommissionModel[]> {
  try {
    const { data, error } = await supabase
      .from("commission")
      .select("*");
      
    if (error) throw new Error(error.message);
    return data || [];
  } catch (error) {
    console.error("Error fetching all commissions:", error);
    throw new Error("Failed to fetch commissions");
  }
}

export async function getCommissionsByType(type: string): Promise<CommissionModel[]> {
  try {
    const { data, error } = await supabase
      .from("commission")
      .select("*")
      .eq("type", type);
    
    if (error) throw new Error(error.message);
    return data || [];
  } catch (error) {
    console.error("Error fetching commissions by type:", error);
    throw new Error("Failed to fetch commissions");
  }
}

export async function getCommissionById(id: string): Promise<CommissionModel | null> {
  try {
    const { data, error } = await supabase
      .from("commission")
      .select("*")
      .eq("id", id)
      .single();
      
    if (error) {
      if (error.code === "PGRST116") return null; // No rows returned
      throw new Error(error.message);
    }
    return data || null;
  } catch (error) {
    console.error("Error fetching commission by ID:", error);
    throw new Error("Failed to fetch commission");
  }
}

export async function getCommissionByInitials(initials: string): Promise<CommissionModel | null> {
  try {
    const { data, error } = await supabase
      .from("commission")
      .select("*")
      .eq("initials", initials)
      .single();
      
    if (error) {
      if (error.code === "PGRST116") return null; // No rows returned
      throw new Error(error.message);
    }
    return data || null;
  } catch (error) {
    console.error("Error fetching commission by initials:", error);
    throw new Error("Failed to fetch commission");
  }
}