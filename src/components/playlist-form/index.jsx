import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const PlayListForm = ({ open, handleClose, getPlayListId }) => {

     const [state, setState] = useState("");

     const handleSubmit = () => {
        // TODO: handle url letter
        if(!state) {
            alert("Invalid Playlist!!")
        } else {
            getPlayListId(state);
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
