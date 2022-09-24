import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Player = () => {
  const { videoId } = useParams();
  const [title, setTitle] = useState("");
  const videoOnReady = (event) => {
    console.log(event)
    setTitle(event.target.videoTitle)
    event.target.seekTo(50);
  }

  const opts = {
          height: '450',
          width: '840',
          playerVars: {
            autoplay: 1,
          },
        };
  return (
    <>
    <Container align="center" sx={{ marginTop: '20px'}}>
      <YouTube videoId={videoId} opts={opts} onReady={videoOnReady}/> 
      <Typography variant="h6">{title}</Typography>
    </Container>
      
    </>
  )
};

export default Player;
