import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BeKind from '../Photos/BeKind2.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: '2px solid darkgrey',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container style={{maxWidth: '80%', margin: 'auto'}} >
      <Grid item xs={12}>
        <Toolbar className={classes.toolbar}>
          <Button size="small">SHARE WITH FRIENDS</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
            >
            A PORTION OF HAPPINESS
          </Typography>
          <Button variant="outlined" size="small">
            FOLLOW ON INSTAGRAM
          </Button>
       </Toolbar>
      </Grid>
      <Grid item xs={12}>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <div>Today</div>
          <div>Today</div>
          <div>Today</div>
          <div>Today</div>
          <div>Today</div>
          <div>Today</div>
        </Toolbar>
      </Grid>
      <Grid item xs={12}>
        <img alt='Logo' src={BeKind} style={{width: '100%'}} />
      </Grid>
    </Grid >
  );
}

export default Header;