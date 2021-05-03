import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavBar from './components/MainNavBar';
import HomepageContent from './components/HomepageContent';
import HomepageThumbnails from './components/HomepageThumbnails';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <HomepageContent />
      <HomepageThumbnails />
    </div>
  );
}

export default App;