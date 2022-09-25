import { useStoreState } from 'easy-peasy';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PlaylistCard from '../../components/playlist-card/'

const Home = () => {
  const [playlists] = useStoreState((state) => [
    state.playlists.data
  ]);

  let playlistArray = Object.values(playlists);
  return (
    <>
      {playlistArray.length > 0 ? (
        <PlaylistCard playlistArray={playlistArray}/>
      ) : (
        <Container align='center'>
          <Typography variant="h2" color={'black'}>No Recent Playlists</Typography>
        </Container>
      )}
    </>
  );
};

export default Home;
