import React, { useState } from 'react';
import Header from './Header';
import InspireButton from './InspireButton'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import PictureCard from './PictureCard';
import BeKind from '../Photos/BeKind2.jpg';

const App = (props) => {

  const randomPicture = Math.floor(Math.random() * 12);
  const linkToRandomPicture = `https://raw.githubusercontent.com/zuz-zuz/inspiration-images/main/${randomPicture}.jpg`;

  const [picture, setPicture] = useState();
  const handleClick = () => setPicture(linkToRandomPicture);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Router>
          <Header />
          <Switch>
            <Route path="/" exact >
              <img alt='Logo' src={BeKind} style={{width: '100%'}} />
              <InspireButton handleClick={handleClick}/>
            </Route>
            <Route path="/about"  >
              <img alt='Logo' src={BeKind} style={{width: '100%'}} />
              <About />
            </Route>
            <Route path="/inspiration" >
              <PictureCard picture={picture}/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App;