import { useState, useEffect } from "react";
import { Button, Stack, Box, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStoreActions, useStoreState } from 'easy-peasy';

const PlayListCardItem = ({
    playlistId,
    playListTitle,
    playListThumnails,
    channelTitle,
}) => {
    const [isFavourite, setIsFavourite] = useState(false);

    const [addToFavourite, removeFromFavourite] = useStoreActions((action) => [action.favourites.addToFavourites, action.favourites.removeFromFavourites]);
    const favourites = useStoreState((state) => state.favourites.items);

    useEffect(() => {
      setIsFavourite(favourites.includes(playlistId))
    }, [isFavourite])

    const handleFavourite = () => {
        isFavourite ? removeFromFavourite(playlistId) : addToFavourite(playlistId)
        setIsFavourite(!isFavourite);
    }

    

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 1 }}>
    <CardMedia component='img' image={playListThumnails.url} alt={playListTitle} />
    <CardContent>
        <Typography variant='h6' color='text.primary'>
            {`${
                playListTitle.length > 50
                    ? playListTitle.substr(0, 50) + '...'
                    : playListTitle
            }`}
        </Typography>
        <Typography variant='body2' color='text.secondary'>{channelTitle}</Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }}></Box>
    <CardActions disableSpacing sx={{ justifyContent: 'space-between'}}>
        <Button to={`/playlist/${playlistId}`} component={Link}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <PlayCircleOutline />
                <Typography variant='body2' fontWeight={600}>Start Tutorial</Typography>
            </Stack>
        </Button>
        
        <Button onClick={handleFavourite}>
            {isFavourite ? (
                <FavoriteIcon style={{ color: 'red' }} />
            ) : (
                <FavoriteIcon color="disabled"/>
            )}
            
        </Button>
    </CardActions>
</Card>
  );
};

export default PlayListCardItem;
