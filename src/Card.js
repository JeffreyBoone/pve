import React, { useCallback } from 'react'
import { withStyles, fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardActions from '@material-ui/core/CardActions';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Collapse from '@material-ui/core/Collapse';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockIcon from '@material-ui/icons/Lock';
import TableContainer from '@material-ui/core/TableContainer';
import { green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import Hidden from '@material-ui/core/Hidden';
import { grey, blueGrey } from '@material-ui/core/colors';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

function ConfirmationDialogRaw(props) {
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open1}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 2
  },
  actions: {
    backgroundColor: blueGrey[100]
  },
  table: {
    backgroundColor: grey[200]
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  card: {
    margin: 5,
  },
  tableHead: {
    fontWeight: 'bold'
  },
  paper: {
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  test: {
    width: "0",
    backgroundColor: "black"
  },
  topAppBar: {
    backgroundColor: "#177F76"
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "#177F76"
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },

  root: {
    flexGrow: 1,
  },
  formControl: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#004D44",
  },
  header: {
    backgroundColor: "#177F76"
  }
}));

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  cursor: 'move',
  width: "100%",
};


export default function CardWidget(props) {
  var namesList = [
    { name: "Projectnaam", id: props.projectnaam },
    { name: "Projectnummer", id: props.projectnummer },
    { name: "Type", id: props.type },
    { name: "Publicatie", id: props.publicatie }
  ];

  var valuesList = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" }
  ];

  const ColorButton = withStyles((theme) => ({
    root: {
      color: green[500],
      '&:hover': {
        color: green[700],
      },
    },
  }))(Button);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [list, setList] = React.useState(namesList);
  const [value, setValue] = React.useState(valuesList);

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  const handleRemove = useCallback(name => {
    setList(list.filter(item => item.name !== name));
    console.log(name)
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Box = ({ name, value }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { name, type: "item" },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          setOpen(true)
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    const opacity = isDragging ? 0.4 : 1;

    return (
      <TableRow ref={drag} style={{ ...style, opacity }} key={props.publicatie} >
        <TableCell component="th" scope="row">{name}</TableCell>
        <TableCell align="right">{value}</TableCell>
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          test={() => handleRemove(name)} />
      </TableRow>
    );
  };

  return (
    <div className={classes.root}>
      <React.Fragment key={props.id}>
        <Card className={classes.card}>
          <CardHeader className={classes.header}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {(props.status === "In Bewerking") && <div id="myDiv">
                  <LockOpenOutlinedIcon />
                </div>
                }
                {(props.status === "Vastgesteld") && <div id="myDiv">
                  <LockIcon />
                </div>
                }

              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.owner}
            subheader={props.date}
          />
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead}>{props.header}</TableCell>
                  <TableCell className={classes.tableHead} align="right">{props.subheader}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {list.map(list => {
                    return (
                      <Box name={list.name} value={list.id} deleter={handleRemove} />
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <CardActions disableSpacing className={classes.actions}>
            <Hidden smUp> {/* open in browser only visible when below sm */}
              <Button className={classes.button} variant="contained" color="primary" aria-label="open in browser">
                <OpenInBrowserIcon />
              </Button>
            </Hidden>
            <IconButton className={classes.button} aria-label="share">
              <DeleteForeverIcon />
            </IconButton>
            <Button className={classes.button} variant="outlined" color="secondary" aria-label="PersonAddDisabledIcon">
              <PersonAddDisabledIcon />
            </Button>
            <ColorButton className={classes.button} variant="outlined" color="primary" aria-label="PersonAddDisabledIcon">
              <PersonAddIcon />
            </ColorButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>

          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>

            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHead}>Hier</TableCell>
                    <TableCell className={classes.tableHead} align="right">Komt</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={props.projectnaam}>
                    <TableCell component="th" scope="row">
                      Extra
                            </TableCell>
                    <TableCell align="right">Info</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

          </Collapse>
        </Card>
      </React.Fragment>
    </div>
  );
}