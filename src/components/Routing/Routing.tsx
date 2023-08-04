import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "../SignInPage/SignInPage";
import HomePage from "../HomePage/HomePage";
import AuthRoute from "./AuthRoute";
import { Box } from "@mui/material";
import theme from "../../theme";

const Routing = () => {
  return (
    <BrowserRouter>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginX={"auto"}
        p={4}
        maxWidth={theme.breakpoints.values.xl}
      >
        <Routes>
          <Route
            path='/'
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Routing;
