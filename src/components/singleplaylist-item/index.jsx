import { Typography, Box, Card, CardMedia, CardContent, Divider } from "@mui/material";
import { Link as RouteLink} from "react-router-dom";
import { Link, Stack } from '@mui/material';

const SingleplaylistItem = ({ item }) => {
    return (
        <>
        <Link to={`/player/${item.contentDetails.videoId}`} underline="none" component={RouteLink}>
            <Stack>
                <Card sx={{ display: 'flex', backgroundColor: '#DCDCDC' }}>
                    <CardMedia
                        component="img" sx={{ width: 150 }}
                        image={item.thumbnail.url}
                        alt={item.thumbnail.url}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h7">{item.title}</Typography>
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