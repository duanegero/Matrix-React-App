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
    //query to supabase confirming user is auth from reset link
    const { error } = await supabase.auth.api.resetPasswordForEmail(
      token,
      password
    );

    if (error) {
      setMessage("Error resetting password:" + error.message);
      return;
    }

    //else clear inputs, set success message
    setPassword("");
    setConfirmPassword("");
    setMessage("Password updated, navigate to login.");
  } catch (error) {
    setMessage("Unexpected error:" + error.message);
  }
};

//export function to use else where
export default sendResetPassword;
