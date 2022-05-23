import React from 'react';
import  Dialog  from '@mui/material/Dialog';

const AlertDialog = (props) => {
    /*
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false)

    const openDialog = () => setDialogIsOpen(true)
  
    const closeDialog = () => setDialogIsOpen(false)
    <AlertDialog open={dialogIsOpen} onClose={closeDialog} />

    */
  const { open, onClose } = props;
    return (
        <Dialog
        open={open}
        onClose={onClose}
      >
        {/* Dialog content */}
      </Dialog>
    );
};

export default AlertDialog;


      