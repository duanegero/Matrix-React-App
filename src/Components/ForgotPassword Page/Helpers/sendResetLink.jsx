//importing supabase
import { supabase } from "../../../supabaseClient";

//defining async function with passed in variables
const sendResetLink = async (email, setEmail, setMessage) => {
  try {
    //call to supabase, sending the reset link to email provided
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/resetpassword",
    });

    //if error returned set message with error
    if (error) {
      setMessage("Error:" + error.message);
    } else {
      //else set success message and clear input
      setMessage("Reset link sent to email.");
      setEmail("");
    }
  } catch (error) {
    //catch if any other errors
    setMessage("Unexpected error:" + error.message);
  }
};

//export to use else where
export default sendResetLink;
