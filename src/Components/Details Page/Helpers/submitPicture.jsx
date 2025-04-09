import { supabase } from "../../../supabaseClient";

const submitPicture = async (file, studentId) => {
  try {
    //get the file extension and make a unique filename
    const fileExt = file.name.split(".").pop();
    const fileName = `${studentId}.${fileExt}`;
    const filePath = fileName;

    //variables to handle upload image to supabase storage
    const { data, error: uploadError } = await supabase.storage
      .from("profile-pictures")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    //if error return message
    if (uploadError) {
      return { success: false, error: uploadError.message };
    }

    //variable to handle getting image url from storage
    const {
      data: { publicUrl },
      error: urlError,
    } = supabase.storage.from("profile-pictures").getPublicUrl(filePath);

    //if unable to get url return error
    if (urlError) {
      return { success: false, error: urlError.message };
    }

    //variables to handle adding url to user's row in supabase
    const { error: updateError } = await supabase
      .from("Students_Details")
      .update({ profile_pic_url: publicUrl })
      .eq("id", studentId);

    //if unable to add url return error
    if (updateError) {
      return { success: false, error: updateError.message };
    }
    //if succsees truen true and url of image
    return { success: true, url: publicUrl };
  } catch (err) {
    //catch if any other errors with message
    return { success: false, error: err.message };
  }
};

//export to use else where
export default submitPicture;
