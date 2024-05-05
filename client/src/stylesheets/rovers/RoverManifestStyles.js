import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../images/bg4.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: 0,
    background: '#05040a',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  inputContainer: {
    paddingLeft: '10%'
  },
  scrollGrid: {
    marginTop: '16px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
    padding: '10px',  
    fontSize: '1rem',
    color: '#666666',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontStyle: 'bold',
    color: '#333333',
    margin: '10px',
  },
  notFoundContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
    color: "white",
    marginRight: "10%"
  },
}));

export default useStyles;
