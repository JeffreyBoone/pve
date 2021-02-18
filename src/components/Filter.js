import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 2
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
  subheader: {
    backgroundColor: theme.palette.background.paper,
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
  },
  list: {
    backgroundColor: grey[300],
  }
}));


export default function Filter({ selectedIndex, handleMenuItemClick, options }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const test = (index) => {
    handleMenuItemClick(index)
    setAnchorEl(null);
  };

  return (
    <div>
        <List component="nav" aria-label="Device settings" className={classes.list}>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Status: "
            onClick={handleClickListItem}
          >
            <ListItemText primary="Status: " secondary={options[selectedIndex]} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={() => test(index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
    </div>
  );
}