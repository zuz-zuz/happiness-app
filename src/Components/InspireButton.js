import React from 'react';
import Button from '@material-ui/core/Button';

const InspireButton = () => {
  return (
    <Button 
      variant='outlined' 
      disableElevation 
      fullWidth
      style={{height: '0', 
        backgroundColor: 'white', 
        color: 'black', 
        padding: '10% 0',
        fontSize: '200%',
        fontWeight: '100',
        marginTop: '10%',
        borderRadius: '8px',
        border: 'solid 2px black',
        fontFamily: 'Raleway',        
      }}
      >
      Get inspired
    </Button>
  )
}


export default InspireButton;