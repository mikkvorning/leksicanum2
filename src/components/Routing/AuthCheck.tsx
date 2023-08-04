import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";

interface AuthCheckProps {
  children: ReactNode;
}

const AuthCheck: FunctionComponent<AuthCheckProps> = (
  props: AuthCheckProps
) => {
  const { children } = props;
  const auth = getAuth();
  const [isAuthed, setisAuthed] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setisAuthed(true) : setisAuthed(false);
    });
  }, [auth]);

  if (isAuthed) return <>{children}</>;
  return <></>;
};

export default AuthCheck;
