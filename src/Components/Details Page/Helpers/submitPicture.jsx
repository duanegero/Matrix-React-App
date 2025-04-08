import { supabase } from "../../../supabaseClient";

const submitPicture = async (file, studentId) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${studentId}.${fileExt}`;
    const filePath = fileName;

    const { data, error: uploadError } = await supabase.storage
      .from("profile-pictures")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      return { success: false, error: uploadError.message };
    }

    const { publicUrl, error: urlError } = supabase.storage
      .from("profile-pictures")
      .getPublicUrl(filePath);

    if (urlError) {
      return { success: false, error: urlError.message };
    }

    const { error: updateError } = await supabase
      .from("Students_Profile")
      .update({ profile_pic_url: publicUrl })
      .eq("id", studentId);

    if (updateError) {
      return { success: false, error: updateError.message };
    }
    return { success: true, url: publicUrl };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export default submitPicture;
