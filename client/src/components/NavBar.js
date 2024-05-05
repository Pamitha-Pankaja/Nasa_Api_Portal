// import React, { useContext, } from 'react'
// import AuthContext from '../context/AuthContext'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import ToastContext from "../context/ToastContext";


// export default function Navbar({title = "NASA API PORTAL"}) {

//     // const { toast } = useContext(ToastContext);

//     const navigate = useNavigate();
//     const {user, setUser} = useContext(AuthContext);
//     return (

//         <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="/">{title}</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarColor01">
//                     <ul class="navbar-nav ms-auto">
//                     {user ? (
//               <>
//                <li
//                   className="nav-item"
//                   onClick={() => {
//                     setUser(null);
//                     localStorage.clear();
//                     // toast.success("Logged out.");
//                     navigate("/login", { replace: true });
//                   }}
//                 >
//                <button className="btn btn-danger">Logout</button>
//                </li>
//                <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/history")}>History</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/random")}>Random</button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link to="/login">
//                     <a className="nav-link">Login</a>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/register">
//                     <a className="nav-link">Register</a>
//                   </Link>
//                 </li>
//               </>
//             )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     )
// }


import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/logo.png';
import ApodDrawer from './ApodDrawer';
import RoverDrawer from './RoverDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#070F2B',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  logo: {
    height: '50px',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  navLink: {
    margin: theme.spacing(0, 1),
  },
}));

export default function Navbar({ title = "NASA API PORTAL", apodDrawer, roverDrawer }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [openApodDrawer, setOpenApodDrawer] = useState(false);
  const [openRoverDrawer, setOpenRoverDrawer] = useState(false);

  useEffect(() => {
    setOpenApodDrawer(apodDrawer);
    setOpenRoverDrawer(roverDrawer);
  }, [apodDrawer, roverDrawer]);

  const handleMenuIconClick = () => {
    setOpenApodDrawer(apodDrawer);
    setOpenRoverDrawer(roverDrawer);
  };

  const handleApodDrawerClose = () => {
    setOpenApodDrawer(false);
  };

  const handleRoverDrawerClose = () => {
    setOpenRoverDrawer(false);
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuIconClick}
            >
              <MenuIcon />
            </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton component={RouterLink} to="/" edge="start" color="inherit" aria-label="home">
            <img src={logo} alt="Logo" className={classes.logo} />
          </IconButton>
          {user ? (
            <>
              <Button color="inherit" className={classes.navLink} component={RouterLink} to="/today">
                APOD
              </Button>
              <Button color="inherit" className={classes.navLink} component={RouterLink} to="/earthDatePhotos">
                ROVER
              </Button>
              {/* <Button color="inherit" className={classes.navLink} component={RouterLink} to="/">
                Home
              </Button> */}
              <Button color="inherit" className={classes.navLink} onClick={() => {
                setUser(null);
                localStorage.clear();
                navigate("/login", { replace: true });
              }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" className={classes.navLink} component={RouterLink} to="/login">
                Login
              </Button>
              <Button color="inherit" className={classes.navLink} component={RouterLink} to="/register">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <ApodDrawer open={openApodDrawer} onClose={handleApodDrawerClose} />
      <RoverDrawer open={openRoverDrawer} onClose={handleRoverDrawerClose} />
    </>
  );
}
