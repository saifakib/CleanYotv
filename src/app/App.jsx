import React, { useEffect } from 'react';

import usePlaylists from '../hooks/usePlaylists';

const App = () => {
    const { getPlayListById, playlists } = usePlaylists();
    useEffect(() => {
        getPlayListById('PL_XxuZqN0xVDHFj-ecFSU0SU-B0TuJRk9');
    }, []);

    console.log(playlists)
  return (
    <>
    
    </>
  );
}

export default App;
