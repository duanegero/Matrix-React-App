//import supabase client
import { supabase } from "../../../supabaseClient";

//defining asynce helper function
const fetchAllUsers = async () => {
  try {
    //query to supabase to get all from table
    const { data: details, error: detailsError } = await supabase
      .from("Students_Details")
      .select("*");

    //if any error return empty array and log
    if (detailsError) {
      console.error("Error fetching Students_Details:", detailsError.message);
      return [];
    }

    //query to supabase to get all from table
    const { data: profiles, error: profilesError } = await supabase
      .from("Students_Profile")
      .select("*");

    //if any error return empty array and log
    if (profilesError) {
      console.error("Error fetching Students_Profile:", profilesError.message);
      return [];
    }

    //variable that handle the function to merge both tables details
    const mergedUsers = details.map((detail) => {
      const profile = profiles.find((p) => p.id === detail.id);
      return { ...detail, ...profile };
    });

    //return to use in app
    return mergedUsers;
  } catch (error) {
    //catch and log in any errors
    console.error("Error fetching users:", error.message);
    return [];
  }
};

//export functio nto use else where
export default fetchAllUsers;
