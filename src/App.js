import React, { useCallback, useRef, useEffect } from 'react';
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
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import CardWidget from './Card';
import Filter from './Filter';
import User from './User';
import Add from './Add';

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

const messages = [
  {
    id: 1,
    owner: "Made by: Jeffrey Boone",
    header: "074204",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "1-1-1934",
    publicatie: "1",
    status: "Vastgesteld"
  },
  {
    id: 2,
    owner: "Made by: Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "On The Hunt",
    projectnummer: "6372",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "2",
    status: "In Bewerking"
  },
  {
    id: 3,
    owner: "Made by: Jeffrey Boone",
    header: "0372947",
    subheader: "TestPVE",
    projectnaam: "The Frozen Dessert",
    projectnummer: "8386",
    type: "Onderhoud",
    date: "3-3-2002",
    publicatie: "3",
    status: "In Bewerking"
  }, {
    id: 4,
    owner: "Made by: Stefan",
    header: "087420",
    subheader: "TestPVE",
    projectnaam: "From Long to Lost",
    projectnummer: "2301",
    type: "Onderhoud",
    date: "23-7-2021",
    publicatie: "4",
    status: "Vastgesteld"

  },
  {
    id: 5,
    owner: "Made by: Jeffrey Boone",
    header: "963264",
    subheader: "TestPVE",
    projectnaam: "Behind the Gatewalls",
    projectnummer: "67893",
    type: "Onderhoud",
    date: "8-3-1998",
    publicatie: "5",
    status: "In Bewerking"
  },
  {
    id: 6,
    owner: "Made by: Anand",
    header: "83729873",
    subheader: "TestPVE",
    projectnaam: "Bind The Door",
    projectnummer: "8523",
    type: "Onderhoud",
    date: "9-6-2019",
    publicatie: "6",
    status: "Vastgesteld"

  },
  {
    id: 7,
    owner: "Made by: Jeffrey Boone",
    header: "0873230",
    subheader: "TestPVE",
    projectnaam: "Tundra of Dust",
    projectnummer: "4197",
    type: "Onderhoud",
    date: "3-2-1982",
    publicatie: "7",
    status: "Vastgesteld"

  },
];

const options = [
  "In Bewerking",
  "Vastgesteld",
];

const drawerWidth = 240;

export default function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const myInput = React.createRef()
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMenuItemClick = useCallback(index => {
    setSelectedIndex(index);
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Cards = () => {
    const ref = useRef(null);
    useEffect(() => {
      setWidth(ref.current ? ref.current.offsetWidth : 0);
      setHeight(ref.current ? ref.current.offsetHeight : 0);
    }, [ref.current]);
    return <div>
      <Grid container>
        {messages.filter(message => message.status === options[selectedIndex]).map(({ id, locked, projectnaam, projectnummer, type, header, subheader, date, publicatie, owner, status }) => (
          <Grid item
            xs={12} sm={6} md={4} lg={3} xl={2}
          ><div ref={ref} >
              <CardWidget id={id} locked={locked} projectnaam={projectnaam} projectnummer={projectnummer} type={type} header={header} subheader={subheader} date={date} owner={owner} publicatie={publicatie} status={status} />
            </div></Grid>
        ))}
                  <Hidden smDown>

        <Add width={width - 10} height={height} /></Hidden>
      </Grid></div>;
  };

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

  const container = window !== undefined ? () => window().document.body : undefined;

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
            - Actueel overzicht
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <div className={classes.toolbar} />

        <Paper square className={classes.paper}>
          <Filter handleMenuItemClick={handleMenuItemClick} selectedIndex={selectedIndex} options={options} />
          <List className={classes.list}>
            <Cards />
          </List>

        </Paper>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={myInput}>
                <AddIcon />
              </Fab>
            </Hidden>
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </main>
    </div>
  );
}