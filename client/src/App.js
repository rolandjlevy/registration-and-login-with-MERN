import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavBar from './components/MainNavBar';
import HomepageContent from './components/HomepageContent';

import bgImageGrinderSparks from './images/grinder-sparks-bg.jpg';
import HomepageThumbnails from './components/HomepageThumbnails';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${bgImageGrinderSparks})`}}>
      <AppNavBar />
      <HomepageContent />
      <HomepageThumbnails />
    </div>
  );
}

export default App;