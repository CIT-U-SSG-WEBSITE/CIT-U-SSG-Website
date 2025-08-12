import { supabase } from '@/lib/supabase';
import { ExecutiveOrderModel } from '../models/executiveOrderModel';


export async function getAllExecutiveOrders(): Promise<ExecutiveOrderModel[]> {
  const { data, error } = await supabase
    .from('executive_order')
    .select('*, officer:president(*)');
  if (error) throw error;
  return data as ExecutiveOrderModel[];
}

export async function getExecutiveOrderById(id: string): Promise<ExecutiveOrderModel | null> {
  const { data, error } = await supabase
    .from('executive_order')
    .select('*, officer:president(*)')
    .eq('id', id)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null; // No rows found
    throw error;
  }
  return data as ExecutiveOrderModel;
}


