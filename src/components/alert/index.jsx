import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const AlertUI = ({ error }) => {
    return (
        <>
        <Container align='center'>
        <Stack sx={{ width: '50%' }} spacing={2} mt={5}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{error}</strong>
              </Alert>
            </Stack>
        </Container>
        </>
    )
}

export default AlertUI;