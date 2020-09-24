import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const style = {height: '0', 
  backgroundColor: 'white', 
  color: 'black', 
  padding: '10% 0',
  fontSize: '200%',
  fontWeight: '100',
  marginTop: '10%',
  borderRadius: '8px',
  border: 'solid 2px black',
  fontFamily: 'Raleway',
}

const InspireButton = () => {
  return (
    <Grid  item xs={12} style={{maxWidth: '35%', margin: 'auto' }}>
      <Link to="/inspiration" style={{textDecoration: 'none'}} > 
        <Button fullWidth variant='outlined' disableElevation style={style}>
          Get inspired
        </Button>
      </Link>
    </Grid>
  )
}

export default InspireButton;