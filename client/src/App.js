import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MainNavBar from './components/MainNavBar';
import HomepageContent from './components/HomepageContent';
import HomepageThumbnails from './components/HomepageCards';
import RegistrationModal from './components/RegistrationModal';
import LoginModal from './components/LoginModal';

function App() {

  const [toggleRegisterState, setRegisterToggleState] = useState(false);
  const [toggleLoginState, setLoginToggleState] = useState(false);

  const handleRegisterModalToggle = () => {
    setRegisterToggleState(!toggleRegisterState);
  }
  const handleLoginModalToggle = () => {
    setLoginToggleState(!toggleLoginState);
  }

  return (
    <div className="App">
      <MainNavBar 
        onToggleRegister={handleRegisterModalToggle} 
        onToggleLogin={handleLoginModalToggle}
      />
      <HomepageContent 
        onToggleRegister={handleRegisterModalToggle} 
        onToggleLogin={handleLoginModalToggle}
      />
      <HomepageThumbnails />
      <RegistrationModal 
        onToggleRegister={handleRegisterModalToggle} 
        toggleState={toggleRegisterState} 
        modalTitle="Register as a new customer" 
        className=""
      />
      <LoginModal 
        onToggleLogin={handleLoginModalToggle} 
        toggleState={toggleLoginState} 
        modalTitle="Login as an existing customer" 
        className=""
      />
    </div>
  );
}

export default App;