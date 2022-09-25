import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useStoreActions } from 'easy-peasy';

const PlayListForm = ({ open, handleClose }) => {

  const [getPlayLists] = useStoreActions((action) => [action.playlists.getPlayLists]);

     const [state, setState] = useState("");

     const handleSubmit = () => {
        if(!state) {
            alert("Invalid Playlist!!")
        } else {
            getPlayLists(state);
            setState("");
            handleClose();
        }
     }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='Playlist ID or Link'
            fullWidth
            variant='standard'
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PlayListForm;
