import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LearnMoreModal from './LearnMoreModal';

const useStyles = makeStyles({
  root: {
    width: 250,
    marginLeft: '5px',
    marginRight:'5px',
    // borderRadius: 10,
    // padding: '3px',
    backgroundColor: 'white',
    color:'black',
    opacity:'0.85'
  },
  // cardMedia:{
  //     borderTopLeftRadius: '8px', // Adjust the value as needed
  //     borderTopRightRadius: '8px', // Adjust the value as needed  
  // },
  title: {
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default function ImgMediaCard({apodData}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component={ apodData?.media_type === 'video' ? "iframe" : "img"}
          alt={apodData?.title}
          image= {apodData?.url}
          title= {apodData?.title}
          height="150"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {apodData?.date}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {apodData?.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
      <LearnMoreModal open={open} handleClose={handleClose} apodData={apodData} />
    </Card>
  );
}
