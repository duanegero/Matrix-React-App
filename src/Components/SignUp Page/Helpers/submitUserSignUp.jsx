//importing supabase client
import { supabase } from "../../../supabaseClient";

//define an async function with passed in variables
const submitUserSignUp = async (
  email,
  password,
  firstname,
  lastname,
  dateOfBirth,
  setEmail,
  setPassword,
  setFirstname,
  setLastname,
  setDateOfBirth
) => {
  //varibles to handle supabase query
  const { data: authData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  //if error returned alert user
  if (signUpError) {
    alert("Sign-up error: " + signUpError.message);
    return;
  }

  //assign the returned is the variable
  const userId = authData?.user?.id;

  if (userId) {
    //varaible to handle supabase insert query
    const { error: insertError } = await supabase
      .from("Students_Profile")
      .insert({
        id: userId,
        firstname,
        lastname,
        date_of_birth: dateOfBirth,
      });

    //if else block to handle error and clearing the inputs
    if (insertError) {
      alert("Error creating profile: " + insertError.message);
    } else {
      alert("Sign-up successful!");
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setDateOfBirth("");
      return;
    }
  }
};

//export function to use else where
export default submitUserSignUp;
