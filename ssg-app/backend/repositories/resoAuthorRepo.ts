// repositories/resoAuthorRepo.ts
import { supabase } from "@/lib/supabase";
import { ResoAuthorModel } from "@/backend/models/resoAuthorModel";

/**
 * REPOSITORIES directly talk to the database.
 * This one inserts a resolution author into the "resolution_author" table.
 */
export async function insertResoAuthor(author: ResoAuthorModel): Promise<ResoAuthorModel> {
  const { data, error } = await supabase
    .from("resolution_author")
    .insert({
      officer_id: author.officer_id,
      resolution_id: author.resolution_id,
      role: author.role
    })
    .select()
    .single();

  if (error) {
    //console.log(error);
    throw new Error(error.message);
  }

  return {
    officer_id: data.officer_id,
    resolution_id: data.resolution_id,
    role: data.role
  };
}

export async function insertResoAuthorsBulk(rows: Array<{
  officer_id: string;
  resolution_id: string;
  role: "AUTHOR" | "CO-AUTHOR";
}>): Promise<void> {
  if (!rows.length) return;
  const { error } = await supabase
    .from("resolution_author")
    .insert(rows);
  if (error) throw new Error(error.message);
}

