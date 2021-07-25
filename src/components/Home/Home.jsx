import React from 'react';
import './Home.css'
import {
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 188,
    margin: '0 auto'
  },
});

const HomePage = (props) =>{

     const classes = useStyles();
     const {image,title,name} = props;
    return (
        <div className='HomePage'>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/details/${name}`} style={{margin: '0 auto',textDecoration: 'none', color: 'currentcolor'}}>
          Details
        </Link>
      </CardActions>
    </Card>
    </div>
    )
}

export default HomePage;