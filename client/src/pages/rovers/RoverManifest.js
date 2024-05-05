import React, { useState, useEffect } from 'react';
import { fetchRoverManifest } from '../../api/apiService'; // Adjust the path as per your project structure
import { useStyles } from '../../stylesheets/rovers/RoverManifestStyles';
import { Typography, CardContent, Card, Button, CircularProgress, Grid } from '@material-ui/core';
import CustomizedSelect from '../../components/CusttomizedSelect';

const RoverManifest = () => {
  const [manifestData, setManifestData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rover, setRover] = useState('curiosity');
  const classes = useStyles();

  const handleFetchManifest = async () => {
    setLoading(true);
    try {
      const response = await fetchRoverManifest(rover);
      const data = response.photo_manifest;
      setManifestData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleRoverChange = (newValue) => {
    setRover(newValue);
  };

  // Fetch data for the default rover
  useEffect(() => {
    handleFetchManifest();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={12}>
          <h1>ROVER MISSION MANIFEST</h1><br />
        </Grid>
        <CustomizedSelect value={rover}
          onChange={handleRoverChange}
          options={[
            { label: 'Curiosity', value: 'curiosity' },
            { label: 'Opportunity', value: 'opportunity' },
            { label: 'Spirit', value: 'spirit' },
          ]}>
        </CustomizedSelect>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFetchManifest} disabled={!rover || loading}>
            {loading ? <CircularProgress size={24} /> : 'Fetch Manifest'}
          </Button>
        </Grid>
        <br />
        {/* Manifest Details */}
        <Grid item xs={6}>
          {manifestData && (
            <Card className={classes.card}>
              <Typography variant="h4" className={classes.cardTitle} gutterBottom>Rover Manifest - {manifestData.name}</Typography>
              <CardContent>
                <Typography variant="body1">RoverName: {manifestData.name}</Typography>
                <Typography variant="body1">Landing Date: {manifestData.landing_date}</Typography>
                <Typography variant="body1">Launch Date: {manifestData.launch_date}</Typography>
                <Typography variant="body1">Status: {manifestData.status}</Typography>
                <Typography variant="body1">Max Sol: {manifestData.max_sol}</Typography>
                <Typography variant="body1">Max Date: {manifestData.max_date}</Typography>
                <Typography variant="body1">Total Photos: {manifestData.total_photos}</Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default RoverManifest;
