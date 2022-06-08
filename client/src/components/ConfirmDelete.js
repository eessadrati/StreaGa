import React from "react";
import { Dialog,DialogTitle,DialogContent, DialogContentText,DialogActions, Button, IconButton, Grid } from "@mui/material";
import  CloseIcon from '@mui/icons-material/Close';

const ConfirmDelete = (props) => {
    const { open, onClose, onConfirm } = props;

  return (
    <>
      <Dialog
        fullWidth
        open={open}
      >
        <DialogTitle >
        <Grid container sx={{fontSize:'1.8vw'}}>
                    {"Delete confirmation"}
                    </Grid>
                    <IconButton
                          aria-label="close"
                          onClick={()=>onClose()}
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                          }}
                        >
                        <CloseIcon />
                    </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText >
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDelete;
