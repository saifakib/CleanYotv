import { useParams  } from "react-router-dom";
import { Typography, Box, Grid, Card, CardMedia } from "@mui/material";
import SingleplaylistItem from "../../components/singleplaylist-item";

import { useStoreState } from 'easy-peasy';

const PlayList = () => {
    const playlists = useStoreState((state) => state.playlists.data );
    let { playListId } = useParams();
    const current = playlists[playListId];

    if(!current) return;
  
    const {playListTitle, playListDescription, playListThumnails, playlistItems} = current;

    // console.log(playlistItems)
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
                <Typography variant="h6">{playListTitle}</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" mr={1}>{playListDescription}</Typography>
            </Grid>
            <Grid item xs={7} ml={5}>
                {playlistItems.length > 0 && (
                    <>
                        {playlistItems.map((item) => ( 
                            <SingleplaylistItem key={item.videoId} item={item} />
                        ))}
                    </>
                )}                       
            </Grid>
        </Grid>
    </Box>
    )
}

export default PlayList;