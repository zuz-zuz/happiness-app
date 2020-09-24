import React from 'react';
import Header from './Header';
import InspireButton from './InspireButton'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import PictureCard from './PictureCard';

const App = () => {
  return (
    <Router>
      <Grid container style={{maxWidth: '90vw', margin: 'auto'}}>
        <Grid container item >
          <Header />
        </Grid>
        <Switch>
          <Route path="/home" exact component={InspireButton} />
          <Route path="/about" component={About} />
          <Route path="/inspiration" component={PictureCard}/>
        </Switch>

        {/* <Grid container item spacing={1} style={{maxWidth: '90%', margin: 'auto'}}>
            <ExamplePicture key={1}/>
            <ExamplePicture key={2}/>
            <ExamplePicture key={3}/>
            <ExamplePicture key={4}/>
          </Grid> */}
      </Grid>
    </Router>
  )
}

export default App;