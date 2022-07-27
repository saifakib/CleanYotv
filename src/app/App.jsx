import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, useParams  } from "react-router-dom";
import usePlaylists from "../hooks/usePlaylists";
import Navbar from "../components/navbar";
import PlayListCardItem from "../components/playlist-card-item";

import { Container, Grid, Typography } from "@mui/material";

const App = () => {
  const { playlists, getPlayListById, error, loading } = usePlaylists();

  const getPlayListId = (PlayListId) => {
    getPlayListById(PlayListId);
  };

  let playlistArray  = Object.values(playlists);

  const Home = ({ playlistArray }) => {
    return (
      <>
        {playlistArray.length > 0 && (
          <Grid container>
            {playlistArray .map((item) => (
              <Grid item xs={12} md={6} lg={4} mb={2}>
                <PlayListCardItem
                  key={item.playListId}
                  playerId={item.playListId}
                  playListTitle={item.playListTitle}
                  playListThumnails={item.playListThumnails}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </>
    )
  }

  const Player = ({ playlists }) => {
    let { playListId } = useParams();
    const current = playlists[playListId];

    if(!current) return;

    return (
      <Container align='center'>
        <Typography variant="h2" color={'black'}>
          {current.playListTitle}
        </Typography>
        <Typography variant="body1">
          {current.playListDescription}
        </Typography>
      </Container>
    )
  }

  const Notfound = () => {
    return (
      <>
      <Container align='center'>
        <Typography variant="h1">404 Page Not Found</Typography>
      </Container>
      </>
    )
  }

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar getPlayListId={getPlayListId} />
        <Container maxWidth={'lg'} sx={{ my: 2 }}>
          <Routes>
            <Route path="/" element={<Home playlistArray={playlistArray}/>} />
            <Route path="/player/:playListId" element={<Player playlists={playlists}/>} />
            <Route path="*" element={<Notfound />}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
