import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/bg2.jpg';

export const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentBoxStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '2rem',
    borderRadius: '10px',
  },
  textStyle: {
    color: '#333333',
    fontWeight: 'bold'
  },
  form: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  link: {
    marginTop: theme.spacing(2),
    color: '#ffffff',
  },
}));
