import { useState } from 'react';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useStoreActions } from 'easy-peasy';

const AlertUI = ({ error }) => {
  const [timeOut, setTimeOut] = useState(null);
  const setError = useStoreActions((action) => action.playlists.setError);

  setTimeout(() => {
    setTimeOut(1);
    setError("");
  }, 2000);

  return (
    <>
      {timeOut !== 1 && (
        <Container align="center">
          <Stack sx={{ width: "50%" }} spacing={2} mt={5}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong>{error}</strong>
            </Alert>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default AlertUI;
