import { useStoreState } from 'easy-peasy';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import PlaylistCard from '../../components/playlist-card'

const Recent = () => {
  const [playlists] = useStoreState((state) => [
    state.playlists.data
  ]);

  const recents = useStoreState((state) => state.recentPlaylists.items);

  let playlistArray = recents.map((item) => item = playlists[item]);
  
  return (
    <>
      {playlistArray.length > 0 ? (
        <PlaylistCard playlistArray={playlistArray}/>
      ) : (
        <Container align='center'>
          <Typography variant="h4" color={'black'} sx={{ fontWeight: 'bold', marginTop: '2rem' }}>NO RECENT PLAYLISTS</Typography>
        </Container>
      )}
    </>
  );
};

export default Recent;
