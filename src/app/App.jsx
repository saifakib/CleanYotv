import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import usePlaylists from '../hooks/usePlaylists';
import Navbar from '../components/navbar';

const App = () => {
  const { playlists, getPlayListById , error, loading} = usePlaylists()

  console.log("Loading", loading)
  console.log("PlayList", playlists)
  console.log("Error", error)

  const getPlayListId = (PlayListId) => {
    getPlayListById(PlayListId)
  }

  return (
    <>
      <CssBaseline />
      <Navbar getPlayListId={getPlayListId}/>
    </>
  );
}

export default App;
