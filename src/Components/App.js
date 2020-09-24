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
          <Route path="/" exact component={InspireButton} />
          <Route path="/about" component={About} />
          <Route path="/inspiration" component={PictureCard}/>
        </Switch>
      </Grid>
    </Router>
  )
}

export default App;