import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../images/bg4.jpg'
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: 0,
    //background: `#d1d5ed`, // Darker gradient with opacity
    background:'#05040a',
    backgroundImage:`url(${backgroundImg})`,
    backgroundSize: 'cover',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    overflow:'hidden',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  formGridItem: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  inputContainer:{
    paddingLeft: '10%'
  },
  scrollGrid:{
    marginTop: '16px',
  },
  cardScrollContainer: {
    display: 'flex', // Set display to flex
    overflowX: 'hidden', /* Enable horizontal scrolling */
    overflowY: 'hidden', /* Hide the vertical scrollbar */
    whiteSpace: 'nowrap', /* Prevent content from wrapping to the next line */
    width: '100%', /* Ensure the container takes full width */
    marginLeft: '0px'
  },
  cardsArrows:{
    display: "flex",
    marginLeft: '0px' 
  },
  cardSet: {
    maxWidth: '100%', /* Ensure cards stay within the middle part's boundaries */
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  cardMedia: {
    height: 'auto',
    minHeight: '315px',
  },
  scrollButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin:  '120px 0 ',
    position: 'sticky',
    zIndex:1, /* Optional: Ensure they appear above the card content */
  },
  scrollBox:{
      display: 'flex', // Set display to flex
      flexDirection: 'row', // Set direction to row
      alignItems: 'center', // Align items horizontally
      overflowX: 'auto', // Enable horizontal scrolling
  },
  scrollButton: {
    fontSize: 24,
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '50%', // Make the button a circle by setting border-radius to 50%
    width: '40px', // Set width and height to create a circle
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(204, 204, 204, 0.7)', // Change background color on hover
    },
  },
}));
