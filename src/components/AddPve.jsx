import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function AddPveDialogRaw(props) {
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

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
  
    return (
     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">PvE Toevoegen</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hier komt veel meer te staan is nu alleen als ontwerp bedoelt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu est, sollicitudin sit amet odio eu, consequat auctor nulla. Sed et fermentum nisi, vitae cursus felis.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Projectnaam"
            type="email"
            fullWidth
          />          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Projectnummer"
            type="email"
            fullWidth
          />
          <FormControl component="fieldset" style={({ marginTop: '0.8rem' })}>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
              <FormControlLabel value="beheer" control={<Radio color="primary" />} label="Beheer" />
              <FormControlLabel value="onderhoud" control={<Radio color="primary" />} label="Onderhoud" />
              <FormControlLabel value="nieuwbouw" control={<Radio color="primary" />} label="Nieuwbouw" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
    </Button>
          <Button onClick={handleClose} color="primary">
            Add
    </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  AddPveDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  };