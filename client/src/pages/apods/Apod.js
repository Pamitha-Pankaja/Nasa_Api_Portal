import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { useStyles } from '../../stylesheets/apod/ApodMainStyles'; // Importing styles

const Apod = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={8} className={classes.leftSide}>
      <Typography variant="h4" className={classes.titleText}>
          Welcome To Astronomy Picture Of The Day
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.rightSide}>
        <div className={classes.buttonContainer}>
          <Typography variant="h6" className={classes.headline}>
            Explore APOD with the Below Links
          </Typography>
          <Button variant="contained"  className={classes.button} href="/today">
            APOD
          </Button>
          <Button variant="contained" color="primary" className={classes.button} href="/history">
            HISTORY
          </Button>
          <Button variant="contained" color="primary" className={classes.button} href="/random">
            RANDOM
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Apod;

