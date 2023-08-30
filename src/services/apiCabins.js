import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

export const createCabin = async (cabin) => {
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created."
    );
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
};
