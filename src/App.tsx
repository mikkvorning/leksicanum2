import { CssBaseline, ThemeProvider } from "@mui/material";
import AuthCheck from "./components/Routing/AuthCheck";
import Routing from "./components/Routing/Routing";
import TopNav from "./components/TopNav/TopNav";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthCheck>
        <TopNav />
      </AuthCheck>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
