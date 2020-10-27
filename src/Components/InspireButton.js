import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const style = {
  backgroundColor: 'white', 
  color: 'black', 
  padding: '3% 0',
  fontSize: '200%',
  fontWeight: '100',
  marginTop: '10%',
  borderRadius: '8px',
  border: 'solid 2px black',
  fontFamily: 'Raleway',
  width: '35vw',
}

const InspireButton = (props) => {
  return (
      <Link to="/inspiration" style={{textDecoration: 'none'}} > 
        <Button variant='outlined' disableElevation style={style} onClick={props.handleClick}>
          Get inspired
        </Button>
      </Link>
  )
}

export default InspireButton;