import Grid from "@mui/material/Grid";
import PlayListCardItem from "../playlist-card-item";


const PlaylistCard = ({ playlistArray }) => {
    return (
        <Grid container>
          {playlistArray.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
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
    )
}

export default PlaylistCard;