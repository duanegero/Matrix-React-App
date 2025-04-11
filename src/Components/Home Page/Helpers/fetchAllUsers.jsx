import { supabase } from "../../../supabaseClient";

const fetchAllUsers = async (params) => {
  try {
    const { data: details, error: detailsError } = await supabase
      .from("Students_Details")
      .select("*");

    if (detailsError) {
      console.error("Error fetching Students_Details:", detailsError.message);
      return [];
    }

    const { data: profiles, error: profilesError } = await supabase
      .from("Students_Profile")
      .select("*");

    if (profilesError) {
      console.error("Error fetching Students_Profile:", profilesError.message);
      return [];
    }

    const mergedUsers = details.map((detail) => {
      const profile = profiles.find((p) => p.id === detail.id);
      return { ...detail, ...profile };
    });

    return mergedUsers;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return [];
  }
};

export default fetchAllUsers;
