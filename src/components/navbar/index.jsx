import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {AppBar, Box, Toolbar, Typography,Button, Container, Stack, Link } from "@mui/material";

import PlayListForm from "../playlist-form";

const Navbar = ({ getPlayListId }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ py: 2 }}>
        <Container maxWidth={'lg'}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link to="/" component={RouterLink} sx={{ textDecoration: 'none', color: 'black' }}>
                <Typography variant="h4" color={'#4a148c'}>Clean Youtube</Typography>
              </Link>
            </Stack>
            <Button variant="contained" size="large" onClick={ handleClickOpen }>Add Playlist</Button>
            <PlayListForm open={open} handleClose={handleClose} getPlayListId={getPlayListId} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
