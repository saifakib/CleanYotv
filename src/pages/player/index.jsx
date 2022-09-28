import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import { useStoreState } from 'easy-peasy';
import SingleplaylistItem from "../../components/singleplaylist-item";

const Player = () => {
  const { videoId, playListId, index } = useParams();
  const playlists = useStoreState((state) => state.playlists.data );
  const [title, setTitle] = useState("");
  
  const playlistVideos = playlists[playListId].playlistItems;
  console.log(playlistVideos)

  const videoOnReady = (event) => {
    console.log(event)
    setTitle(event.target.videoTitle)
    event.target.seekTo(50);
  }

  const opts = {
          height: '450',
          width: '740',
          playerVars: {
            autoplay: 1,
          },
        };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>

        <Grid item xs={12} md={8} sx={{ marginTop: '3rem'}}>
          <YouTube videoId={videoId} opts={opts} onReady={videoOnReady}/> 
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
              <CardContent>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 500,
                  '& ul': { padding: 0 },
                }}
                subheader={<li />}
              >
                  {playlistVideos && (
                  <Box>
                      <Typography
                          variant='body2'
                      >{`${playlists[playListId].playListTitle} - ${index} / ${playlistVideos?.length}`}</Typography>
                      {playlistVideos.map((item, index) => (                       
                        <SingleplaylistItem key={item.videoId} item={item} playlistId={playListId} index={index}/>
                      ))}
                  </Box>
              )}
              </List>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  )
};

export default Player;

