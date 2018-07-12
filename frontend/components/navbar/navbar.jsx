import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';

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
        <input className="search-bar" type="text" placeholder={"Search for your favorite artists"} value={''}/>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => openModal('login')}>Login</button>
        <button className="nav-button" onClick={() => openModal('signup')}>Signup</button>
        <button className="nav-button" onClick={handleDemo({email:'jac.lipera@gmail.com', password:'jackie'})}>Demo</button>
      </div>
    </nav>
  );
  const nav = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <h1 className="app-title">bandalize</h1>
        <input className="search-bar" type="text" placeholder="Search for artists" value={''}/>
      </div>
      <hgroup>
        <button className="nav-button" onClick={logout}>Log Out</button>
      </hgroup>
    </nav>
  );
  return (
    currentUser ?
    nav(logout) :
    sessionLinks()
  );

};

export default Navbar;
