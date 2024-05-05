import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from '../stylesheets/DrawerStyles'; // Import the styles
import astronaut from '../images/astronaut.png'

export default function RoverDrawer({ open, onClose }) {
    const [drawerOpen, setDrawerOpen] = useState(open);
    const classes = useStyles()
    const handleDrawerClose = () => {
        setDrawerOpen(false);
        onClose(); // Call the onClose function passed from the parent component
    };

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            className={classes.drawer}
            open={open}
            onClose={handleDrawerClose}
            classes={{
                paper: classes.drawerPaper, // Apply the styles to the drawer paper
            }}
        >
            <List> 
                <ListItem button component={RouterLink} to="/earthDatePhotos" onClick={handleDrawerClose}>
                    <ListItemText primary="ROVER PHOTOS BY EARTH DATE" />
                </ListItem>
                <ListItem button component={RouterLink} to="/solRoverPhotos" onClick={handleDrawerClose}>
                    <ListItemText primary="ROVER PHOTOS BY SOL" />
                </ListItem>
                <ListItem button component={RouterLink} to="/roverManifest" onClick={handleDrawerClose}>
                    <ListItemText primary="ROVER MISSION MANIFEST" />
                </ListItem>
            </List>
              {/* Add the image at the bottom of the drawer */}
              <img src={astronaut} alt="APOD" style={{marginTop:'100%'}} />
        </Drawer>
    )
}