import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthCheck from './components/Routing/AuthCheck';
import Routing from './components/Routing/Routing';
import { SearchResultsProvider } from './components/Search/SearchResultsProvicer';
import TopNav from './components/TopNav/TopNav';
import theme from './theme';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SearchResultsProvider>
          <CssBaseline />
          <AuthCheck>
            <TopNav />
          </AuthCheck>
          <Routing />
        </SearchResultsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
