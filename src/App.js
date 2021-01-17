import React from 'react';
import { withStyles, fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Collapse from '@material-ui/core/Collapse';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockIcon from '@material-ui/icons/Lock';
import InputBase from '@material-ui/core/InputBase';
import TableContainer from '@material-ui/core/TableContainer';
import FormHelperText from '@material-ui/core/FormHelperText';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { green } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';


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

const messages = [
  {
    id: 1,
    locked: false,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"
  },
  {
    id: 2,
    locked: true,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"
  },
  {
    id: 3,
    locked: true,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"
  }, {
    id: 4,
    locked: true,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"

  },
  {
    id: 5,
    locked: true,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"
  },
  {
    id: 6,
    locked: true,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"

  },
  {
    id: 7,
    locked: false,
    owner: "Made by:Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    date: "21-9-1982",
    publicatie: "7"

  },
];


export default function App() {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: green[500],
      '&:hover': {
        color: green[700],
      },
    },
  }))(Button);
  const classes = useStyles();
  const [status, setStatus] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };



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
          < AccountCircleRoundedIcon/>
          <Divider orientation="vertical" flexItem />
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

      <Paper square className={classes.paper}>
        <FormControl className={classes.formControl} fullWidth={true}>
          <Select
            variant="filled"
            value={status}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={0}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>In Bewerking</MenuItem>
            <MenuItem value={2}>Vastgesteld</MenuItem>
          </Select>
          <FormHelperText>Status</FormHelperText>
        </FormControl>
        <List className={classes.list}>
          <Grid container>
            
            {messages.map(({ id, locked, projectnaam, projectnummer, type, header, subheader, date, publicatie, owner }) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <React.Fragment key={id}>
                  <Card className={classes.card}>
                    <CardHeader className={classes.header}
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {(locked === false) && <div id="myDiv">
                            <LockOpenOutlinedIcon />
                          </div>
                          }
                          {(locked === true) && <div id="myDiv">
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
                      title={owner}
                      subheader={date}
                    />
                    <TableContainer>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell className={classes.tableHead}>{header}</TableCell>
                            <TableCell className={classes.tableHead} align="right">{subheader}</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow key={projectnaam}>
                            <TableCell component="th" scope="row">
                              Projectnaam
                            </TableCell>
                            <TableCell align="right">{projectnaam}</TableCell>
                          </TableRow>
                          <TableRow key={projectnummer}>
                            <TableCell component="th" scope="row">
                              Projectnummer
                            </TableCell>
                            <TableCell align="right">{projectnummer}</TableCell>
                          </TableRow>
                          <TableRow key={type}>
                            <TableCell component="th" scope="row">
                              Type
                            </TableCell>
                            <TableCell align="right">{type}</TableCell>
                          </TableRow>
                          <TableRow key={publicatie}>
                            <TableCell component="th" scope="row">
                              Publicatie
                            </TableCell>
                            <TableCell align="right">{publicatie}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <CardActions disableSpacing>
                      <Button className={classes.button} variant="contained" color="primary" aria-label="open in browser">
                        <OpenInBrowserIcon />
                      </Button>
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
                      <CardContent>
                        <Typography paragraph>Expanded list will be loaded here:</Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </React.Fragment>
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