import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import SignOut from "../Auth/SignOut";
import Search from "../Search/Search";

const TopNav = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Search />
        <SignOut />
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
