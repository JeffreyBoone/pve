import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar(props) {
    const { onClose, value: valueProp, test, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
    const [state, setState] = React.useState({
      open1: false,
      vertical: 'top',
      horizontal: 'center',
    });
  
    const { vertical, horizontal, open1 } = state;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" 
            // onClick={handleClose}
            >
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit"
            //  onClick={handleClose}
             >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}