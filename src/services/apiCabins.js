import supabase from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Could not load cabins data");
  }

  return data;
}

export async function createCabins(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not create cabins data");
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Could not delete cabins data");
  }

  return data;
}
