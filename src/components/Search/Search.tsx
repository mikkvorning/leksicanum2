import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useSearch } from './useSearch';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearchInput, setDebouncedSearchInput] = useState('');

  useEffect(() => {
    // Create a debounced function that updates debouncedSearchInput
    const debouncedSetSearchInput = _.debounce((value) => {
      setDebouncedSearchInput(value);
    }, 750);

    // Call the debounced function
    debouncedSetSearchInput(searchInput);

    // Cancel the debounce on useEffect cleanup to prevent state update on unmounted component
    return () => {
      debouncedSetSearchInput.cancel();
    };
  }, [searchInput]);

  useSearch(debouncedSearchInput);

  return (
    <Box width={'100%'} textAlign={'center'} padding={1.5}>
      <TextField
        sx={{ width: 380 }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        name='search'
        placeholder='Search'
        color='primary'
        InputProps={{
          style: {
            borderRadius: 50,
          },
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchInput && (
            <InputAdornment position='end'>
              <IconButton onClick={() => searchInput && setSearchInput('')}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default Search;
