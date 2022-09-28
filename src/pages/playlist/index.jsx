import { useParams  } from "react-router-dom";
import { Typography, Box, Grid, Card, CardMedia } from "@mui/material";
import SingleplaylistItem from "../../components/singleplaylist-item";

import { useStoreState } from 'easy-peasy';

const PlayList = () => {
    const playlists = useStoreState((state) => state.playlists.data );
    let { playListId } = useParams();
    const playlist = playlists[playListId];

    if(!playlist) return;
  
    const {playListTitle, playListDescription, playListThumnails, playlistItems, channelTitle} = playlist;

    return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="194"
                    image={playListThumnails.url}
                    alt="Paella dish"
                    />
                </Card>
                <Typography variant="h6" sx={{ marginTop: '2rem'}}>{playListTitle}</Typography>
                <Typography variant="overline" sx={{ marginBottom: '1rem'}}>{playlistItems.length} Videos  -  {channelTitle}</Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div" mr={1}>{playListDescription}</Typography>
            </Grid>
            <Grid item xs={7} ml={5}>
                {playlistItems.length > 0 && (
                    <>
                        {playlistItems.map((item, index) => ( 
                            <SingleplaylistItem key={item.videoId} item={item} playlistId={playlist.playListId} index={index}/>
                        ))}
                    </>
                )}                       
            </Grid>
        </Grid>
    </Box>
    )
}

export default PlayList;