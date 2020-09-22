import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Tiago from '../Photos/Tiago.jpg';
import Grid from '@material-ui/core/Grid';


const ExamplePicture = () => {
  return (
    <Grid item xs={4} sm={3} >
      <Card >
        <CardMedia style={{ height: '27em', position: 'relative' }} image={Tiago}>
          <CardActions disableSpacing style={{position: 'absolute', bottom: 0 }} >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{color: 'white'}} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon style={{color: 'white'}} />
            </IconButton>
          </CardActions>
        </CardMedia>
      </Card>
    </Grid>
  )
}

export default ExamplePicture;