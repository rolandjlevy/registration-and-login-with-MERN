import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavBar from './components/MainNavBar';
import HomepageContent from './components/HomepageContent';
import HomepageThumbnails from './components/HomepageThumbnails';
// import ModalForm from './components/ModalForm';

function App() {

  // const [toggleState, setToggleState] = useState(false);

  // const handleModalToggle = () => {
  //   setToggleState(!toggleState);
  // }

  return (
    <div className="App">
      <AppNavBar />
      <HomepageContent />
      <HomepageThumbnails />
      {/* <ModalForm 
        onToggle={handleModalToggle} 
        toggleState={toggleState} 
        modalTitle="Register as a new user" 
        modalType="registration" 
        className=""
      /> */}
    </div>
  );
}

export default App;