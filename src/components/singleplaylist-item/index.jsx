import { Typography, Box, Card, CardMedia, CardContent, Divider } from "@mui/material";
import { Link as RouteLink} from "react-router-dom";
import { Link, Stack } from '@mui/material';

const SingleplaylistItem = ({ item, playlistId, index }) => {
    return (
        <>
        <Link to={`/player/${item.contentDetails.videoId}/${playlistId}/${index+1}`} underline="none" component={RouteLink}>
            <Stack>
                <Card sx={{ display: 'flex', backgroundColor: '#DCDCDC' }}>
                    <Typography variant="subtitle1" align="center" sx={{ marginLeft: '10px', marginTop: '2.7rem' }}> {Number(index+1)}</Typography>
                    <CardMedia
                        component="img" sx={{ width: 150, height: 100, padding: '1rem'}}
                        image={item.thumbnail?.url}
                        alt={item.title}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="subtitle2" sx={{ marginTop: '1rem'}}>{item.title}</Typography>
                        </CardContent>
                    </Box>
                </Card>
                <Divider />
            </Stack>
        </Link>
        </>
    )
}

export default SingleplaylistItem;