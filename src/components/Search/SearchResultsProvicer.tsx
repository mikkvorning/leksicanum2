import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Stratagem } from '../../models/Stratagem';

// Define a type for the context value
interface SearchResultsContextProps {
  searchResults: Stratagem[];
  setSearchResults: Dispatch<SetStateAction<Stratagem[]>>;
}

// Create a context for the search results
const SearchResultsContext = createContext<
  SearchResultsContextProps | undefined
>(undefined);

// Provider component that holds the state
export const SearchResultsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchResults, setSearchResults] = useState<Stratagem[]>([]);

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

// Hook to use the search results context
export const useSearchResultsProvider = () => {
  const context = useContext(SearchResultsContext);
  if (context === undefined) {
    throw new Error(
      'useSearchResults must be used within a SearchResultsProvider'
    );
  }
  return context;
};
