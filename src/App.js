import React, { useCallback, useRef, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import CardWidget from './components/Card';
import Filter from './components/Filter';
import User from './components/User';
import { Dustbin } from './components/Dustbin';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockIcon from '@material-ui/icons/Lock';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import messages from './data.json';
import AddPveDialogRaw from './components/AddPve';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  topAppBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#177F76"

  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    top: 'auto',
    bottom: 0,
    backgroundColor: "#177F76"
  },
  add: {
    flex: 1,
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  toolbar: {
    height: 63
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
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
}));

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 90,
  left: 'auto',
  position: 'fixed',
};

export default function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const options = [
    "In Bewerking",
    "Vastgesteld",
  ];

  const handleMenuItemClick = useCallback(index => {
    setSelectedIndex(index);
  });

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = () => { (selectedIndex == 0) ? setSelectedIndex(1) : setSelectedIndex(0) };

  const handleClose = () => {
    setOpen(false);
  };

  const Cards = () => {
    return <div>
      <Grid container>
        {messages.filter(message => message.status === options[selectedIndex]).map(({ id, locked, projectnaam, projectnummer, type, header, subheader, date, publicatie, owner, status }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardWidget id={id} locked={locked} projectnaam={projectnaam} projectnummer={projectnummer} type={type} header={header} subheader={subheader} date={date} owner={owner} publicatie={publicatie} status={status} />
          </Grid>
        ))}
      </Grid>
    </div>;
  };

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <CardHeader className={classes.header}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} />
          }
          action={
            <User />
          }
          title="Jeffrey Boone"
          subheader="Stagaire"
        />
      </div>
      <Divider />
      <List>
        <ListItem style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button variant="contained" color="secondary" fullWidth="false" onClick={handleClickOpen}>
            Add PvE
        </Button>
        <AddPveDialogRaw
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          onClose={handleClose}
          open={open}/>
        </ListItem>
        <ListItem style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={2}>
              <LockIcon />
              <Grid item>
                <AntSwitch checked={(selectedIndex == 0) && true} onChange={handleChange} name="checkedC" />
              </Grid>
              <LockOpenOutlinedIcon />
            </Grid>
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Test", "Values", "Only", "for"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Demo"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.topAppBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="dali-bright.png" alt="Italian Trulli" width="30" />
          </IconButton>
          <div className={classes.add}>
            <Typography variant="h6">
              Pve
          </Typography>
            <Hidden smDown>
              <Typography variant="h6" className={classes.add}>
                &nbsp;-&nbsp;Actueel overzicht
          </Typography></Hidden></div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <DndProvider backend={HTML5Backend}>
          <div className={classes.toolbar} />
          <Paper square className={classes.paper}>
            <Hidden smUp>
              <Filter handleMenuItemClick={handleMenuItemClick} selectedIndex={selectedIndex} options={options} />
            </Hidden>
            <List className={classes.list}>
              <Cards />
            </List>
          </Paper>

          <Hidden smDown>
            <Dustbin />
          </Hidden>

          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Hidden mdUp>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={handleClickOpen}>
                  <AddIcon />
                </Fab>
              </Hidden>
              <div className={classes.grow} />
              <IconButton edge="end" color="inherit">
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </DndProvider>
      </main>
    </div>
  );
}