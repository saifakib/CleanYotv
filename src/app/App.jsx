import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useStoreActions } from 'easy-peasy';

import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Notfound from "../pages/not-found";
import Player from "../pages/player";
import { Container } from "@mui/material";

import PlayList from "../pages/playlist";


const App = () => {

  const getPlayLists = useStoreActions((action) => action.playlists.getPlayLists)
  const getPlayListId = (PlayListId) => {
    getPlayLists(PlayListId);
  }; 

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar getPlayListId={getPlayListId} />
        <Container maxWidth={'lg'} sx={{ my: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:playListId" element={<PlayList />} />
            <Route path="/player/:videoId" element={<Player />}/>
            <Route path="*" element={<Notfound />}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
