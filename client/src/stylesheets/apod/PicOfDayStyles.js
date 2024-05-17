// // HomeStyles.js
// import { makeStyles } from '@material-ui/core/styles';

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(6),
//     background: 'white',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   leftContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//     background: 'rgba(0, 0, 0, 0)',
//     borderRadius: theme.spacing(2),
//   },
//   rightContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//     borderRadius: theme.spacing(2),
//     boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
//     [theme.breakpoints.up('md')]: {
//       maxWidth: 800, // Maximum width for the right container on larger screens
//     },
//   },
//   card: {
//     width: '100%',
//     height: '100%',
//     borderRadius: theme.spacing(2),
//     overflow: 'hidden',
//     boxShadow: 'none',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   media: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   mainTopic: {
//     color: '#000',
//     fontWeight: 'bold',
//     textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//     marginBottom: theme.spacing(8),
//     textAlign: 'left',
//     fontSize: '3rem',
//   },
//   imageTitle: {
//     color: '#000',
//     fontWeight: 'bold',
//     marginBottom: theme.spacing(12),
//     textAlign: 'left',
//   },
//   imageDescription: {
//     marginTop: theme.spacing(4), // Add more space between image title and description
//     color: '#000',
//   },
// }));

import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../images/bg4.jpg'
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    overflow:'hidden',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: theme.spacing(2),
    background: 'rgba(0, 0, 0, 0)',
    borderRadius: theme.spacing(2),
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '7%',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2),
    backgroundColor:'white',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset', // Allow full width on medium screens and larger
    },
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  mainTopic: {
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    marginBottom: theme.spacing(11),
    textAlign: 'left',
    fontSize: '3rem',
  },
  imageTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: theme.spacing(-1),
    textAlign: 'left',
  },
  imageDescription: {
    marginTop: theme.spacing(4), // Add more space between image title and description
    color: '#fff',
  },
  beforeMain: {
    fontSize: theme.typography.fontSize * 0.25, // Reduce font size by 25%
    fontWeight: 'lighter',
    color: '#ccc', // Light gray color
    marginBottom: theme.spacing(2),  // Add some margin below
  },

  
}));
