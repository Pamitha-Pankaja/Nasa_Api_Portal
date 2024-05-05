import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, CardMedia, Fade, Paper, Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        margin: '10%',
    },
    paper: {
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        height: '600px',
        borderRadius: 20
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
    mediaContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    media: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function RoverImageModal({ open, handleClose, roverImgData }) {
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
                    <Box className={classes.mediaContainer}>
                        <CardMedia
                            className={classes.media}
                            component={roverImgData?.media_type === 'video' ? "iframe" : "img"}
                            alt='Rover Image'
                            image={roverImgData?.img_src}
                        />
                    </Box>
                </Paper>
            </Fade>
        </Modal>
    );
}
