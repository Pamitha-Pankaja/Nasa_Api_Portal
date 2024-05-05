import React, { useState,useRef } from 'react';
import { fetchRoverPhotosBySol } from '../../api/apiService';
import { Button, CircularProgress, Grid, Container, Box, Typography} from '@material-ui/core';
import { useStyles } from '../../stylesheets/rovers/BySolStyles'; // Importing styles
import TextField from '../../components/CustomizedTextField';
import CustomizedSelect from '../../components/CusttomizedSelect';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RoverImageModal from '../../components/RoverImageModal';
import dataNotFoundImg from '../../images/datanotfound.png'

function MarsRoverPhotos() {
  const classes = useStyles();
  const [rover, setRover] = useState('curiosity'); // Default to Curiosity
  const [sol, setSol] = useState('1000');
  const [camera, setCamera] = useState('FHAZ');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetchRoverPhotosBySol(rover, sol, camera || null, page); // Pass the selected number of pages
      const data = response.photos
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSolChange = (newValue) => {
    setSol(newValue);
  };

  const handlePageChange = (newValue) => {
    setPage(newValue);
  };

  const handleRoverChange = (newValue) => {
    setRover(newValue);
  };

  const handleCameraChange = (newValue) => {
    setCamera(newValue);
  };

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo data
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
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
     const newPosition = Math.min(scrollPosition + visibleCards, photos.length - visibleCards); // Move forward by 3 cards
     setScrollPosition(newPosition);
   };


  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.inputContainer}>
        <Grid item xs={12}>
          <h1>ROVER PHOTOS BY SOL</h1><br />
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <CustomizedSelect value={rover}
            onChange={handleRoverChange}
            options={[
              { label: 'Curiosity', value: 'curiosity' },
              { label: 'Opportunity', value: 'opportunity' },
              { label: 'Spirit', value: 'spirit' },
            ]}
            label="Rover">
          </CustomizedSelect>
          <Grid item className={classes.textfieldGrid}>
            <TextField labelName="Sol" type="text" value={sol} onChange={handleSolChange} />
          </Grid>
          <CustomizedSelect
            value={camera}
            onChange={handleCameraChange}
            options={[
              { label: 'Front Hazard Avoidance Camera', value: 'FHAZ' },
              { label: 'Rear Hazard Avoidance Camera', value: 'RHAZ' },
              { label: 'Mast Camera', value: 'MAST' },
              { label: 'Chemistry and Camera Complex', value: 'CHEMCAM' },
              { label: 'Mars Hand Lens Imager', value: 'MAHLI' },
              { label: 'Mars Descent Imager', value: 'MARDI' },
              { label: 'Navigation Camera', value: 'NAVCAM' },
              { label: 'Panoramic Camera', value: 'PANCAM' },
              { label: 'Miniature Thermal Emission Spectrometer', value: 'MINITES' },
            ]}
            label="Camera"/>
          <Grid item className={classes.textfieldGrid}>
            <TextField labelName="Page" type="number" min="1" value={page} onChange={handlePageChange} />
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" onClick={handleFetchPhotos} disabled={loading} style={{ marginTop: "20px" }}>
              {loading ? <CircularProgress size={24} /> : 'Fetch Photos'}
            </Button>
          </Grid>
        </Grid>
        <br />
        <Grid item xs={12} className={classes.scrollGrid}>
          {photos && photos.length>0 ? (
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
                  {photos.slice(scrollPosition, scrollPosition + visibleCards).map((item, index) => (
                      <img
                        key={item.id}
                        src={item.img_src}
                        alt="Mars Rover"
                        onClick={() => handleImageClick(item)}
                        style={{ width: '200px', height: '250px', margin: '5px', objectFit: 'cover' }}
                      />
                    ))}
                  </Box>
                </div>
                <div className={classes.scrollButtons}>
                  <button
                    onClick={scrollRight}
                    className={classes.scrollButton}
                    disabled={
                      scrollPosition >= photos.length - visibleCards
                    }
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </Container>
              <RoverImageModal open={modalOpen} handleClose={handleCloseModal} roverImgData={selectedPhoto} />
            </div>
          ) : (
            <Grid className={classes.notFoundContainer}>
              <img src={dataNotFoundImg} alt="Not Found" style={{ width: '20%', height: '20%'}} />
              <br /><Typography variant="h6">Rover photos not available</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default MarsRoverPhotos;
