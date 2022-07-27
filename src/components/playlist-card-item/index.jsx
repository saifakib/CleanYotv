import * as React from "react";
import { Button, Stack, Box, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";

const PlayListCardItem = ({
    playListTitle,
    playListThumnails,
    channelTitle,
}) => {
  return (
    <Card
    sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 1,
    }}
>
    <CardMedia
        component='img'
        image={playListThumnails.url}
        alt={playListTitle}
    />
    <CardContent>
        <Typography variant='h6' color='text.primary'>
            {`${
                playListTitle.length > 50
                    ? playListTitle.substr(0, 50) + '...'
                    : playListTitle
            }`}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
            {channelTitle}
        </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }}></Box>
    <CardActions disableSpacing>
        <Button>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <PlayCircleOutline />
                <Typography variant='body2' fontWeight={600}>
                    Start Tutorial
                </Typography>
            </Stack>
        </Button>
    </CardActions>
</Card>
  );
};

export default PlayListCardItem;
