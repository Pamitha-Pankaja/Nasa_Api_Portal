import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../images/bg2.jpg'; 

export const useStyles = makeStyles((theme) => ({
    leftSide: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      color: '#000',
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(4),
      fontWeight: 'bold',
    },
    titleText: {
      fontWeight: 'bold', // Makes the text bold
      fontSize: '2.2rem', // Larger font size for prominence
      color: '#000', // Example: AliceBlue, a light, ethereal blue tone
      letterSpacing: '2px', // Increases spacing between characters
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds a subtle shadow for depth
      marginBottom: theme.spacing(2), // Adds bottom margin
    },
    rightSide: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(4),
      backgroundColor: 'rgba(30,30,30,0.8)',  // Using Material-UI primary color with high opacity
    },
    buttonContainer: {
      display: 'flex', // Use Flexbox
      flexDirection: 'column',
      justifyContent: 'center', // Center items horizontally
      alignItems: 'center', // Center items vertically
      width: '80%',
      padding: theme.spacing(4),
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  
  button: {
      margin: theme.spacing(1),
      minWidth: '150px',
      backgroundColor: '#000', // Dark brown color
      color: '#fff', // White text color
      '&:hover': {
        backgroundColor: '#48362D', // Slightly darker on hover
      },
    },
    headline: {
      color: '#000', 
      fontSize: '1.5rem', // Larger font size for better visibility
      marginBottom: theme.spacing(3),
      textAlign: 'center',
    },
  }));