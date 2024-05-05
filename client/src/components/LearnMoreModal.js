import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Modal,Backdrop, CardMedia,Fade, Paper,Link,IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin:'10%',
  },
  paper: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
     padding: theme.spacing(1, 4, 1,1),
    //paddingRight: 30,
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    height: '600px',
    borderRadius: 20
  },
  media: {
    width: '50%',
    height: '100%',
    marginRight: theme.spacing(2),
    borderTopLeftRadius: '20px', // Adjust the value as needed
    borderBottomLeftRadius: '20px',
  },
  dataContainer: {
    width: '50%',
    marginTop: '5%',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }, 
}));

export default function LearnMoreModal({ open, handleClose, apodData }) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <CardMedia
            className={classes.media}
            component={ apodData?.media_type === 'video' ? "iframe" : "img"}
            alt={apodData?.title}
            image={apodData?.url}
            title={apodData?.title}
          />
          <div className={classes.dataContainer}>
            <Typography variant="h4" gutterBottom>{apodData?.title}</Typography>
            <Typography variant="body1" className={classes.explanation}>{apodData?.explanation}</Typography><br/>
            <Typography variant="body2">Date: {apodData?.date}</Typography>
            <Typography variant="body2">Media Type: {apodData?.media_type}</Typography><br/>
            {apodData?.hdurl && (
              <Link href={apodData?.hdurl} target="_blank" rel="noopener noreferrer" className={classes.link}>
                View HD Image
              </Link>
            )}
          </div>
        </Paper>
      </Fade>
    </Modal>
  );
}
