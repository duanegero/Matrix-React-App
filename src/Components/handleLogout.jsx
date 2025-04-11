//import supabase client
import { supabase } from "../supabaseClient";

const handleLogout = async (navigate) => {
  //sending to supabase to sign out auth user
  const { error } = await supabase.auth.signOut();

  //if else block to handle error or success
  if (error) {
    alert("Unable to logout.");
    console.error("Error logging out: ", error.messahe);
    return;
  } else {
    console.log("Logged out successfully.");
    navigate("/login");
  }
};

//export to use else where
export default handleLogout;
