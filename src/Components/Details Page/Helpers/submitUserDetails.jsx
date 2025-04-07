//import supabase instance
import { supabase } from "../../../supabaseClient";

//import helper funcrion
import navigateProfilePage from "../../Profile Page/Helpers/navigateProfilePage";

//defining async function, with passed in variables
const submitUserDetails = async (
  studentId,
  bio,
  completionYear,
  linkedinUrl,
  githubUrl,
  setBio,
  setCompletionYear,
  setLinkedinUrl,
  setGithubUrl,
  navigate
) => {
  //creating an object that holds user data for each field only if there's data to be held, else remain what was exsiting in the column
  const userData = {
    id: studentId,
    ...(bio && { bio }),
    ...(completionYear && { completion_year: completionYear }),
    ...(linkedinUrl && { linkedin_url: linkedinUrl }),
    ...(githubUrl && { github_url: githubUrl }),
  };

  //variables to handle supabase query
  const { data, error } = await supabase
    .from("Students_Details")
    .upsert([userData]);

  //if error log, else log success and clear fields
  if (error) {
    console.error("Error adding/updating data:", error.message);
  } else {
    console.log("Data added/updated successfully", data);
    setBio("");
    setCompletionYear("");
    setLinkedinUrl("");
    setGithubUrl("");
    alert("User details updated successfully");
    navigateProfilePage(studentId, navigate);
  }
};

//export function to use else where
export default submitUserDetails;
