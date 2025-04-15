// importing supabase
import { supabase } from "../../../supabaseClient";

// defining function
const sendResetPassword = async (
  password,
  setPassword,
  setConfirmPassword,
  setMessage
) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage("Error resetting password: " + error.message);
    } else {
      setPassword("");
      setConfirmPassword("");
      setMessage("Password updated successfully. Please log in again.");
    }
  } catch (error) {
    setMessage("Unexpected error: " + error.message);
  }
};

export default sendResetPassword;
