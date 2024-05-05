import React, { useState, useRef, useEffect } from 'react';
import { fetchRandomApodData } from '../../api/apiService'; // Update the import path as needed
import { useStyles } from '../../stylesheets/apod/RandomStyles'
import { Button, CircularProgress, Grid, Container, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ImgMediaCard from '../../components/ImageMediaCard';

const RandomImagesPage = () => {
  const classes = useStyles();
  const MIN_COUNT = 1;
  const MAX_COUNT = 10; // Adjust as needed
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomCount = () => {
    return (Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT + 1)) + MIN_COUNT);
  };
  const [randomCount, setRandomCount] = useState(getRandomCount());

  const handleFetchRandomData = async () => {
    setLoading(true);
    try {
      const response = await fetchRandomApodData(randomCount);
      console.log(randomCount)
      setApodData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  //Card set scroll
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const deviceWidth = window.innerWidth;
  const containerWidth = deviceWidth * 0.7;
  const cardWidth = 250;
  const visibleCards = Math.floor(containerWidth / cardWidth);
  const scrollLeft = () => {
    const newPosition = Math.max(scrollPosition - visibleCards, 0); // Move back by 3 cards
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const newPosition = Math.min(scrollPosition + visibleCards, apodData.length - visibleCards); // Move forward by 3 cards
    setScrollPosition(newPosition);
  };

  useEffect(() => {
    setRandomCount()
    handleFetchRandomData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={8}>
          <h1>Random APODs</h1>
        </Grid>
        <Grid item >
          <Button variant="contained" color="primary" onClick={handleFetchRandomData} disabled={loading} style={{ marginTop: "20px" }}>
            {loading ? <CircularProgress size={24} /> : 'Fetch Random Images'}
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.scrollGrid}>
          {apodData && (
            <div className={classes.cardScrollContainer}>
              <Container fluid className={classes.cardsArrows}>
                <div className={classes.scrollButtons}>
                  <button
                    onClick={scrollLeft}
                    className={classes.scrollButton}
                    disabled={scrollPosition === 0}
                  >
                    <ChevronLeftIcon />
                  </button>
                </div>
                <div className={classes.cardSet} ref={scrollContainerRef}>
                  <Box className={classes.scrollBox}>
                    {apodData.slice(scrollPosition, scrollPosition + visibleCards).map((item, index) => (
                      // <ImgMediaCard key={index} title={item.title} description={item.explanation} imageUrl={item.url} mediaType={item.media_type} date={item.date} />
                      <ImgMediaCard key={index} apodData={item} />
                    ))}
                  </Box>
                </div>
                <div className={classes.scrollButtons}>
                  <button
                    onClick={scrollRight}
                    className={classes.scrollButton}
                    disabled={
                      scrollPosition >= apodData.length - visibleCards
                    }
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </Container>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default RandomImagesPage;
