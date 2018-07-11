import React from 'react';

const Navbar = ({ currentUser, logout, openModal, login}) => {

  const handleDemo = (user) => {
    return () => {
      login(user)
    };
  }

  const image = window.bandalizelogo;

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <h1 className="app-title">bandalize</h1>
        <input className="search-bar" type="text" placeholder="Search for artists" value={''}/>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => openModal('login')}>Login</button>
        <button className="nav-button" onClick={() => openModal('signup')}>Signup</button>
        <button className="nav-button" onClick={handleDemo({email:'jac.lipera@gmail.com', password:'jackie'})}>Demo</button>
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
