import { Box } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthRouteProps {
  children: ReactNode;
}

const AuthRoute: FunctionComponent<AuthRouteProps> = (
  props: AuthRouteProps
) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setLoading(false) : navigate("/signin");
    });
  }, [auth]);

  if (loading) return <Box>Loading...</Box>;

  return <>{children}</>;
};

export default AuthRoute;
