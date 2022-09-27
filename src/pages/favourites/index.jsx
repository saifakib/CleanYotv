import { useStoreState } from 'easy-peasy';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PlaylistCard from '../../components/playlist-card';

const Favourite = () => {
  const [playlists] = useStoreState((state) => [
    state.playlists.data
  ]);

  const favourites = useStoreState((state) => state.favourites.items);

  let playlistArray = favourites.map((item) => item = playlists[item]);

  return (
    <>
      {playlistArray.length > 0 ? (
        <PlaylistCard playlistArray={playlistArray}/>
      ) : (
        <Container align='center'>
          <Typography variant="h4" color={'black'} sx={{ fontWeight: 'bold', marginTop: '2rem' }}>NO FAVOURITE PLAYLISTS</Typography>
        </Container>
      )}
    </>
  );
};

export default Favourite;
