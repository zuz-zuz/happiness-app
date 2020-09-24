import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BeKind from '../Photos/BeKind2.jpg';
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
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Toolbar className={classes.toolbar}>
          <Link to='/about'>
            <Button size="small" >WHAT IS THIS ALL ABOUT?</Button>
          </Link>
          <Link to='/home' 
            className={classes.toolbarTitle}
            variant="h5"
            align="center"
            noWrap
          >
            <Typography component="h2">
              A PORTION OF HAPPINESS
            </Typography>
          </Link>
          <ButtonBase>
            <Button size="small" endIcon={<InstagramIcon />} >
            <a href="https://www.instagram.com/zuzi_berlin/" 
              style={{ color: 'black', textDecoration: 'none' }}
            >
                FOLLOW
            </a>
            </Button>
          </ButtonBase>
       </Toolbar>
      </Grid>
       {/* <Grid item xs={12}>
      //   <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      //     <div>Today</div>
      //     <div>Today</div>
      //     <div>Today</div>
      //     <div>Today</div>
      //     <div>Today</div>
      //     <div>Today</div>
      //   </Toolbar>
      // </Grid> */}

      <Grid item xs={12}>
        <img alt='Logo' src={BeKind} style={{width: '100%'}} />
      </Grid>
    </>
  );
}

export default Header;