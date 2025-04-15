//importing supabase
import { supabase } from "../../../supabaseClient";

//defining function with passed in variables
const sendResetPassword = async (
  password,
  token,
  setPassword,
  setConfirmPassword,
  setMessage
) => {
  try {
    const { error: sessionError } = await supabase.auth.setSession({
      access_token: token,
      refresh_token: "",
    });

    if (sessionError) {
      setMessage("Invalid or expired link.");
      return;
    }

    //query to supabase confirming user is auth from reset link
    const { error } = await supabase.auth.api.resetPasswordForEmail({
      password,
    });

    if (error) {
      setMessage("Error resetting password:" + error.message);
      return;
    } else {
      //else clear inputs, set success message
      setPassword("");
      setConfirmPassword("");
      setMessage("Password updated, navigate to login.");
    }
  } catch (error) {
    setMessage("Unexpected error:" + error.message);
  }
};

//export function to use else where
export default sendResetPassword;
