import React from 'react';
import Header from './Header';
import InspireButton from './InspireButton'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import PictureCard from './PictureCard';
import BeKind from '../Photos/BeKind2.jpg';

const App = () => {
  return (
    <Router>
      <Grid container style={{maxWidth: '90vw', margin: 'auto'}}>
          <Header />
        <Switch>
          <Route path="/" exact >
            <img alt='Logo' src={BeKind} style={{width: '100%'}} />
            <InspireButton />
          </Route>
          <Route path="/about"  >
            <img alt='Logo' src={BeKind} style={{width: '100%'}} />
            <About />
          </Route>
          <Route path="/inspiration" component={PictureCard}/>
        </Switch>
      </Grid>
    </Router>
  )
}

export default App;