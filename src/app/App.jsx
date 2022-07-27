import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import usePlaylists from "../hooks/usePlaylists";
import Navbar from "../components/navbar";
import PlayListCardItem from "../components/playlist-card-item";

import { Container, Grid } from "@mui/material";

const App = () => {
  const { playlists, getPlayListById, error, loading } = usePlaylists();

  const getPlayListId = (PlayListId) => {
    getPlayListById(PlayListId);
  };

  let playlistArray  = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      
        <Navbar getPlayListId={getPlayListId} />
        <Container maxWidth={'lg'} sx={{ my: 2 }}>
        {playlistArray .length > 0 && (
          <Grid container>
            {playlistArray .map((item) => (
              <Grid item xs={12} md={6} lg={4} mb={2}>
                <PlayListCardItem
                  key={item.playListId}
                  playListTitle={item.playListTitle}
                  playListThumnails={item.playListThumnails}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default App;
