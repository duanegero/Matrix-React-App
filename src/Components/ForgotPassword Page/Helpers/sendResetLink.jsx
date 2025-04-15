//importing supabase
import { supabase } from "../../../supabaseClient";

const baseUrl =
  import.meta.env.VITE_BASE_URL || "https://matrix-react-app-flax.vercel.app";

//defining async function with passed in variables
const sendResetLink = async (email, setEmail, setMessage, navigate) => {
  try {
    //call to supabase, sending the reset link to email provided
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${baseUrl}/resetpassword`,
    });

    //if error returned set message with error
    if (error) {
      setMessage("Error:" + error.message);
    } else {
      //else set success message and clear input
      setMessage("Reset link sent to email.");
      setEmail("");
      setTimeout(() => navigate("/login"), 5000);
    }
  } catch (error) {
    //catch if any other errors
    setMessage("Unexpected error:" + error.message);
  }
};

//export to use else where
export default sendResetLink;
