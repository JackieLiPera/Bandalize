import React from 'react';

const Navbar = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src="/assets/bandalizelogo.ico"/>
        <h1 className="app-title">bandalize</h1>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => openModal('login')}>Login</button>
        <button className="nav-button" onClick={() => openModal('signup')}>Signup</button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );

};

export default Navbar;
