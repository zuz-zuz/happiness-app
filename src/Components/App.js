import React from 'react';
import Header from './Header';
import ExamplePicture from './ExamplePicture';
import InspireButton from './InspireButton'
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Grid container style={{maxWidth: '90%', margin: 'auto'}}>
      <Grid container item >
        <Header />
      </Grid>
      <Grid  container xs={12} style={{maxWidth: '35%', margin: 'auto' }}>
        <InspireButton />
      </Grid>
      {/* <Grid container item spacing={1} style={{maxWidth: '90%', margin: 'auto'}}>
          <ExamplePicture key={1}/>
          <ExamplePicture key={2}/>
          <ExamplePicture key={3}/>
          <ExamplePicture key={4}/>
      </Grid> */}
    </Grid>
  )
}

export default App;