import { supabase } from "../../../supabaseClient";

//async helper function with passed in variables
const fetchUserDetails = async (
  studentId,
  setBio,
  setCompletionYear,
  setGithubUrl,
  setLinkedinUrl
) => {
  //if no student ID skip
  if (!studentId) return;

  //variables to handle suapa base query
  const { data, error } = await supabase
    .from("Students_Details")
    .select("*")
    .eq("id", studentId)
    .single();

  //if error log for user, else set states with whats returned
  if (error) {
    console.error("Error fetching user details", error.message);
  } else if (data) {
    setBio(data.bio || "");
    setCompletionYear(data.completion_year || "");
    setLinkedinUrl(data.linkedin_url || "");
    setGithubUrl(data.github_url || "");
  }
};

//export to use else where
export default fetchUserDetails;
