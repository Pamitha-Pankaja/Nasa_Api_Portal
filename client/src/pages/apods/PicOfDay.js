import React, { useState, useEffect } from 'react';
import { fetchApodData } from '../../api/apiService'; // Update the import path as needed
import { Typography, Card, CardMedia, CircularProgress, Grid } from '@material-ui/core';
import { Fade } from 'react-reveal'; // Importing animations library
import { useStyles } from '../../stylesheets/apod/PicOfDayStyles';

const PicOfDay = () => {
  const classes = useStyles();
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodayOrPreviousData = async () => {
      const today = new Date();
      const data = await fetchDataForDate(today);
      if (!data) {
        const previousDay = new Date(today.setDate(today.getDate() - 1));
        const previousData = await fetchDataForDate(previousDay);
        setApodData(previousData);
      } else {
        setApodData(data);
      }
      setLoading(false);
    };

    fetchTodayOrPreviousData();
  }, []);

  const fetchDataForDate = async (date) => {
    const dateString = date.toISOString().slice(0, 10); // Get date in YYYY-MM-DD format
    try {
      const data = await fetchApodData(dateString);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className={classes.leftContainer}>
          <Typography variant="h8" className={classes.boforeMain}>T O D A Y</Typography>
            <Typography variant="h3" className={classes.mainTopic}>Image Of The Day</Typography>
            {apodData && (
              <>
                <Typography variant="h6" className={classes.imageTitle}>{apodData.title}</Typography>
                <Typography variant="body1" className={classes.imageDescription}>{apodData.explanation}</Typography>
              </>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className={classes.rightContainer}>
            <Fade bottom>
              {loading ? (
                <CircularProgress />
              ) : !apodData ? (
                <Typography variant="body1">No data available for today or yesterday.</Typography>
              ) : (
                <Card className={classes.card} elevation={3}>
                  {apodData.media_type === 'video' ? (
                    <CardMedia
                      className={classes.media}
                      component="iframe"
                      src={apodData.url}
                      title={apodData.title}
                    />
                  ) : (
                    <CardMedia
                      className={classes.media}
                      component="img"
                      src={apodData.url}
                      title={apodData.title}
                    />
                  )}
                </Card>
              )}
            </Fade>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PicOfDay;


