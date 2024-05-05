import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../images/rover1.jpg'; // Ensure the path to your background image is correct

const useStyles = makeStyles((theme) => ({
  leftSide: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: '#000',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    fontWeight: 'bold',
  },
  titleText: {
    fontWeight: 'bold', // Makes the text bold
    fontSize: '2.2rem', // Larger font size for prominence
    color: '#000', // Example: AliceBlue, a light, ethereal blue tone
    letterSpacing: '2px', // Increases spacing between characters
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds a subtle shadow for depth
    marginBottom: theme.spacing(2), // Adds bottom margin
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(30,30,30,0.8)',  // Using Material-UI primary color with high opacity
  },
  buttonContainer: {
    display: 'flex', // Use Flexbox
    flexDirection: 'column',
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
    width: '80%',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },

button: {
    margin: theme.spacing(1),
    minWidth: '150px',
    backgroundColor: '#000', // Dark brown color
    color: '#fff', // White text color
    '&:hover': {
      backgroundColor: '#48362D', // Slightly darker on hover
    },
  },
  headline: {
    color: '#000', 
    fontSize: '1.5rem', // Larger font size for better visibility
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
}));

const Apod = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={8} className={classes.leftSide}>
      <Typography variant="h4" className={classes.titleText}>
          Welcome To Mars Rover Photos
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.rightSide}>
        <div className={classes.buttonContainer}>
          <Typography variant="h6" className={classes.headline}>
            Explore Rover with the Below Links
          </Typography>
          <Button variant="contained"  className={classes.button} href="/roverManifest">
            Rover Mission Manifest
          </Button>
          <Button variant="contained" color="primary" className={classes.button} href="/solRoverPhotos">
            Rover Photos by Sol
          </Button>
          <Button variant="contained" color="primary" className={classes.button} href="/earthDatePhotos">
            Rover Photos by Earth Date
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Apod;