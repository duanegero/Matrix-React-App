//importing supabase
import { supabase } from "../../../supabaseClient";

//defining function with passed in variables
const sendResetPassword = async (
  password,
  setPassword,
  setConfirmPassword,
  setMessage
) => {
  try {
    //query to supabase confirming user is auth from reset link
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError || !sessionData?.session) {
      setMessage("Reset link invalid or expired. Please request a new one.");
      return;
    }

    //query to supabase updating users password
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });

    //set message if any errors
    if (error) {
      setMessage("Error:" + error.message);
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
