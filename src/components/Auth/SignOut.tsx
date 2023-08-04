import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export default SignOut;
