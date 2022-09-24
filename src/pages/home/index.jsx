import { Grid } from "@mui/material";
import PlayListCardItem from "../../components/playlist-card-item";

import { useStoreState } from 'easy-peasy';

const Home = () => {
  const [playlists, error, loading] = useStoreState((state) => [
    state.playlists.data,
    state.playlists.error,
    state.playlists.loading,
  ]);

  let playlistArray = Object.values(playlists);
  return (
    <>
      {playlistArray.length > 0 && (
        <Grid container>
          {playlistArray.map((item) => (
            <Grid item xl={12} xs={6} md={4} lg={3} mb={2}>
              <PlayListCardItem
                key={item.playListId}
                playlistId={item.playListId}
                playListTitle={item.playListTitle}
                playListThumnails={item.playListThumnails}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
