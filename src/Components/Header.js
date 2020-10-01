import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: '2px solid darkgrey',
    borderTop: '2px solid darkgrey',
    marginTop: '20px'
  },

  toolbarTitle: {
    flex: 1,
    textDecoration: 'none',
    color: 'black'
  },

  instagramButton: {
    color: 'black', 
    textDecoration: 'none', 
  }
}));

const instagramLink = "https://www.instagram.com/zuzi_berlin/";

const Header = () => {
  const classes = useStyles();

  return (
      <Grid item xs={12}>
        <Toolbar className={classes.toolbar}>
          <Link to='/about'>
            <Button size="small" >WHAT IS THIS ALL ABOUT?</Button>
          </Link>
          <Link to='/' className={classes.toolbarTitle} align="center" >
            <Typography component="h2" variant="h5" noWrap>
              A PORTION OF HAPPINESS
            </Typography>
          </Link>
          <ButtonBase>
            <Button size="small" endIcon={<InstagramIcon />} >
            <a href={instagramLink} className={classes.instagramButton} >
              FOLLOW
            </a>
            </Button>
          </ButtonBase>
       </Toolbar>
      </Grid>
  );
}

export default Header;