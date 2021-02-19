import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import SimpleSnackbar from './SimpleSnackbar';

export default function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, test, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
    const [state, setState] = React.useState({
      open1: false,
      vertical: 'top',
      horizontal: 'center',
    });
  
    const { vertical, horizontal, open1 } = state;
  
    React.useEffect(() => {
      if (!open) {
        setValue(valueProp);
      }
    }, [valueProp, open]);
  
    const handleEntering = () => {
      if (radioGroupRef.current != null) {
        radioGroupRef.current.focus();
      }
    };
  
    const handleCancel = () => {
      onClose();
    };
  
    const handleOk = () => {
      onClose(value);
      test()
      handleClick({ vertical: 'top', horizontal: 'center' });
    };
  
    const handleClick = (newState) => () => {
      setState({ open1: true, ...newState });
    };
  
    const handleClose = () => {
      setState({ ...state, open1: false });
    };
  
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={handleEntering}
        aria-labelledby="confirmation-dialog-title"
        open={open}
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Are you sure you want to delete this item?</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Cancel
            </Button>
          <Button onClick={handleOk} color="primary">
            Ok
            </Button>
            <SimpleSnackbar
         
          id="ringtone-menu"
          keepMounted
          onClose={handleClose}
          open={open}/>
        </DialogActions>
      </Dialog>
    );
  }
  
  ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  };