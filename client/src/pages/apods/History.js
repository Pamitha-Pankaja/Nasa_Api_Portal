import React, { useState, useRef,useEffect } from 'react';
import { fetchApodDataRange } from '../../api/apiService'; // Update the import path as needed
import { Button, CircularProgress, Grid, Container, Box } from '@material-ui/core';
import { useStyles } from '../../stylesheets/apod/HistoryStyles'; // Importing styles
import TextField from '../../components/CustomizedTextField';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ImgMediaCard from '../../components/ImageMediaCard';

const History = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  //get the default start date (3 days before today)
  const getDefaultStartDate = () => {
    const today = new Date();
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(today.getDate() - 4);
    return formatDate(threeDaysAgo);
  };

  //get the default end date (yesterday)
  const getDefaultEndDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return formatDate(yesterday);
  };

  // Function to format date in YYYY-MM-DD format (required by TextField type=date)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [startDate, setStartDate] = useState(getDefaultStartDate());
  const [endDate, setEndDate] = useState(getDefaultEndDate);
  const [apodData, setApodData] = useState(null);

  const handleFetchData = async () => {
    if (!startDate || !endDate) {
      alert('Please select both start date and end date.');
      return;
    }
    setLoading(true);
    try {
      const response = await fetchApodDataRange(startDate, endDate);
      setApodData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
  };

  useEffect(() => {
    handleFetchData();
  }, []); // Empty dependency array ensures it runs only once on mount


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

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={12}>
          <h1>APOD History</h1><br />
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item className={classes.textfieldGrid}>
            <TextField labelName="Start Date" type="date" value={startDate} onChange={handleStartDateChange} />
          </Grid>
          <Grid item className={classes.textfieldGrid}>
            <TextField labelName="End Date" type="date" value={endDate} onChange={handleEndDateChange} />
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" onClick={handleFetchData} disabled={loading} style={{ marginTop: "20px" }}>
              {loading ? <CircularProgress size={24} /> : 'Fetch Data'}
            </Button>
          </Grid>
        </Grid>
        <br />
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

export default History;
