import { supabase } from "../../../supabaseClient";

//async helper function with passed in variables
const fetchUserDetails = async (
  studentId,
  setBio,
  setCompletionYear,
  setGithubUrl,
  setLinkedinUrl,
  setFirstname,
  setLastname,
  setProfilePic
) => {
  //if no student ID skip
  if (!studentId) return;

  //variables to handle suapa base query
  const { data: details, error: detailsError } = await supabase
    .from("Students_Details")
    .select("*")
    .eq("id", studentId)
    .maybeSingle();

  //if error log for user, else set states with whats returned
  if (detailsError) {
    console.error("Error fetching user details", detailsError.message);
  } else if (details) {
    setBio(details.bio || "");
    setCompletionYear(details.completion_year || "");
    setLinkedinUrl(details.linkedin_url || "");
    setGithubUrl(details.github_url || "");
    setProfilePic(details.profile_pic_url || "");
  }

  //variables to handle suapa base query
  const { data: profile, error: profileError } = await supabase
    .from("Students_Profile")
    .select("*")
    .eq("id", studentId)
    .maybeSingle();

  //if error log for user, else set states with whats returned
  if (profileError) {
    console.error("Error fetching user profile", profileError.message);
  } else if (profile) {
    setFirstname(profile.firstname || "");
    setLastname(profile.lastname || "");
  }
};

//export to use else where
export default fetchUserDetails;
