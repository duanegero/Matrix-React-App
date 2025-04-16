//importing supabase client
import { supabase } from "../../../supabaseClient";
import navigateProfilePage from "../../Profile Page/Helpers/navigateProfilePage";

//defining async function with passed in variables
const submitUserLogin = async (
  email,
  password,
  setEmail,
  setPassword,
  navigate
) => {
  //variables to handle supabase query
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  //if else to handle whats returned from supabase
  if (error) {
    if (error.message === "Invalid login credentials") {
      alert("Invalid login credentials");
      console.error("Login failed:", error.message);
    } else if (error.message === "Email not confirmed") {
      alert("Email not confirmed");
      console.error("Login failed:", error.message);
    } else {
      console.error("Login failed:", error.message);
    }
  } else {
    const userId = data.user.id;
    console.log("Logged in:", data);
    navigateProfilePage(userId, navigate);
  }

  //clear the fields when done
  setEmail("");
  setPassword("");
};

//export to use else where
export default submitUserLogin;
