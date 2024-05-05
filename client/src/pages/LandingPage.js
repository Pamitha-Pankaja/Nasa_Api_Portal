import React, { useRef, useEffect } from 'react';
import { Typography, Button, Container, Grid } from '@material-ui/core';
import backgroundVideo from '../videos/background1.mp4'; // Import your background video
import backgroundImg from '../images/bg3.jpg'
const LandingPage = () => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   const restartVideo = () => {
  //     if (video) {
  //       video.currentTime = 0; // Rewind video to the beginning
  //       video.play(); // Start playing again
  //     }
  //   };

  //   // Event listener to restart the video when it ends
  //   video.addEventListener('ended', restartVideo);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     if (video) {
  //       video.removeEventListener('ended', restartVideo);
  //     }
  //   };
  // }, []);

  return (
    <div style={{backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow:'hidden',
    paddingTop:'5%'}}>
      {/* Background Video */}
      {/* <video ref={videoRef} autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}

       
      {/* Content */}
      {/* <Container maxWidth="md" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}> */}
        {/* <Typography variant="h3" gutterBottom>
          Welcome to the Universe
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the mysteries of the cosmos with NASA's Astronomy Picture of the Day (APOD) and Mars Imagery.
        </Typography> */}

        {/* Caption */}
        {/* <Typography variant="body2" paragraph style={{ fontStyle: 'italic', marginBottom: '50px' }}>
          "Discover the beauty beyond our world."
        </Typography> */}

        {/* Buttons */}
        <Grid container spacing={3} style={{marginLeft:'5%', marginTop:'10%'}}>
          <Grid item>
            <Button variant="contained" color="primary" size="large" href="/today">Explore APOD</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" size="large" href="/earthDatePhotos">Explore Mars Imagery</Button>
          </Grid>
        </Grid>
      {/* </Container> */}
    </div>
  );
};

export default LandingPage;
