//DrawerStyles.js
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    marginTop:'50px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    marginTop:'5%',
    backgroundColor:'#0F1035',
    color: "white", // Use the primary text color from the theme
  },
}));

export default useStyles;
