import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search"; // added import statement
import ClearIcon from "@mui/icons-material/Clear"; // added import statement

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box width={"100%"} textAlign={"center"} padding={1.5}>
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
              <IconButton onClick={() => searchInput && setSearchInput("")}>
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
