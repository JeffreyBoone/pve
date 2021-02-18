import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { blueGrey } from '@material-ui/core/colors';


const useStyles = makeStyles({
  title: {
    fontSize: 24,
  },
});;

export default function Add({ width, height, onclick}) {
  const classes = useStyles();
  return <div>
    <Button style={{ width: width - 1, height: height, backgroundColor: blueGrey[100], margin: 5 }} variant="outlined" onClick={onclick}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '75%' }}
      >
        <Grid item >
          <AddCircleIcon style={{ fontSize: 60 }} />
        </Grid>
        <Grid item >
          <Typography style={{ fontSize: 20 }} className={classes.title}>Click here to add item</Typography>
        </Grid>
      </Grid>
    </Button>
  </div>

}