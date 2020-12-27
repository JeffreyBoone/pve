import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert'
import InputLabel from '@material-ui/core/InputLabel';
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
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import TableContainer from '@material-ui/core/TableContainer';


const useStyles = makeStyles((theme) => ({
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
    fontWeight: 'bold',
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
  appBar: {
    top: 'auto',
    bottom: 0,
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
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    backgroundColor: red[500],
  },
}));

const messages = [
  {
    id: 1,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"
  },
  {
    id: 2,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"
  },
  {
    id: 3,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"
  }, {
    id: 4,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"

  },
  {
    id: 5,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"
  },
  {
    id: 6,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"

  },
  {
    id: 7,
    owner: "Jeffrey Boone",
    header: "0002123",
    subheader: "TestPVE",
    projectnaam: "Frozen yoghurt",
    projectnummer: "1233",
    type: "Onderhoud",
    datum: "21-9-1982",
    publicatie: "7"

  },
];


export default function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
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
        <FormControl xs="12" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>




        <List className={classes.list}>
          <Grid container>
            {messages.map(({ id, projectnaam, projectnummer, type, header, subheader, datum, publicatie }) => (
              <Grid item xs={12} md={3}>
                <React.Fragment key={id}>

                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          R
          </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
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
                          <TableRow key={datum}>
                            <TableCell component="th" scope="row">
                              Datum
                            </TableCell>
                            <TableCell align="right">{datum}</TableCell>
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
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
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
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                          minutes.
          </Typography>
                        <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                        <Typography paragraph>
                          Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                          without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                          medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                          again without stirring, until mussels have opened and rice is just tender, 5 to 7
                          minutes more. (Discard any mussels that don’t open.)
          </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>


                  {/* {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem> */}
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
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}