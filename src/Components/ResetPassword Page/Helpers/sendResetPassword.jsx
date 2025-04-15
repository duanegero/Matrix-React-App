// importing supabase
import { supabase } from "../../../supabaseClient";

// defining function
const sendResetPassword = async (
  password,
  setPassword,
  setConfirmPassword,
  setMessage,
  navigate
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
      setTimeout(() => navigate("/login"), 5000);
    }
  } catch (error) {
    setMessage("Unexpected error: " + error.message);
  }
};

export default sendResetPassword;
