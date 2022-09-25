import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useStoreState } from 'easy-peasy';
import CircularProgress from '@mui/material/CircularProgress';

import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

import Navbar from "../components/navbar";
import Home from "../pages/home";
import Favourite from "../pages/favourites";
import Recent from "../pages/recents";
import Notfound from "../pages/not-found";
import Player from "../pages/player";
import PlayList from "../pages/playlist";
import AlertUI from "../components/alert";


const App = () => {

  const [ error, loading ] = useStoreState((state) => [ state.playlists.error, state.playlists.loading ])

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar/>
        { loading && ( 
          <Container align='center' sx={{ mt: 5}}>
           <CircularProgress />
          </Container>
        ) }
        {error.length !== 0 && <AlertUI error={error} />}
        <Container maxWidth={'lg'} sx={{ my: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />}/>
            <Route path="/recent" element={<Recent />}/>
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
