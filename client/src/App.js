import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavBar from './components/MainNavBar';
import HomepageContent from './components/HomepageContent';
import HomepageThumbnails from './components/HomepageThumbnails';
import RegistrationForm from './components/RegistrationForm';

import bgImageGrinderSparks from './images/grinder-sparks-bg.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${bgImageGrinderSparks})`}}>
      <AppNavBar />
      <HomepageContent />
      <HomepageThumbnails />
      <RegistrationForm />
    </div>
  );
}

export default App;