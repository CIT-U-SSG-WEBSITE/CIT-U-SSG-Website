import { ExecutiveOrderModel } from '../models/executiveOrderModel';
import {getAllExecutiveOrders, getExecutiveOrderById} from "@/backend/repositories/executiveOrderRepo";

export async function fetchAllExecutiveOrders(): Promise<ExecutiveOrderModel[]> {
  return await getAllExecutiveOrders();
}

export async function fetchExecutiveOrderById(id: string): Promise<ExecutiveOrderModel | null> {
  return await getExecutiveOrderById(id);
}
