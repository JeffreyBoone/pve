import React, { useCallback } from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import CardWidget from './Card';
import Filter from './Filter';
import User from './User';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
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
  list: {
    marginBottom: theme.spacing(2),
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
    display: 'flex',
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

const drawerWidth = 240;


const messages = [
  {
    id: 1,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "1",
    status: "Vastgesteld"
  },
  {
    id: 2,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "2",
    status: "In Bewerking"
  },
  {
    id: 3,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "3",
    status: "In Bewerking"
  }, {
    id: 4,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "4",
    status: "Vastgesteld"

  },
  {
    id: 5,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "5",
    status: "In Bewerking"
  },
  {
    id: 6,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "6",
    status: "Vastgesteld"

  },
  {
    id: 7,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7",
    status: "Vastgesteld"

  },
];


const options = [
  "In Bewerking",
  "Vastgesteld",
];

export default function App(props) {
  const { window } = props;
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
// eslint-disable-next-line
  const handleMenuItemClick = useCallback(index => {
    setSelectedIndex(index);
  });
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
      <AppBar position="static" className={classes.topAppBar}>
        <Toolbar>
          <IconButton mdDown edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="dali-bright.png" alt="Italian Trulli" width="35" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pve
          </Typography>
          <div style={{ display: "flex" }}>
          <User/>
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
          </div></div>
        </Toolbar>
      </AppBar>

      <Paper square className={classes.paper}>
        <Filter handleMenuItemClick={handleMenuItemClick} selectedIndex={selectedIndex} options={options}/>
        <List className={classes.list}>
          <Grid container>
            {messages.filter(message => message.status === options[selectedIndex]).map(({ id, locked, projectnaam, projectnummer, type, header, subheader, date, publicatie, owner, status }) => (
                <Grid item
                xs={12} sm={6} md={4} lg={3} xl={2}
                >
                  <CardWidget id={id} locked={locked} projectnaam={projectnaam} projectnummer={projectnummer} type={type} header={header} subheader={subheader} date={date} owner={owner} publicatie={publicatie} status={status} />
                </Grid>
              ))}
          </Grid>
        </List>

      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}