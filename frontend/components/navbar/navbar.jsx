import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import { Link, withRouter } from 'react-router-dom';



const Navbar = ({ currentUser, logout, openModal, login, history }) => {

  const handleDemo = (user) => {
    return () => {
      login(user)
    };
  }

  const handleLogout = () => {
    logout().then(() => history.push('/'));
  }

  const handleUserAccount = () => {
    history.push(`/users/${currentUser.id}`)
  }

  const image = window.bandalizelogo;

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <Link to='/' className="app-title">bandalize</Link>
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
        <Link to='/' className="app-title">bandalize</Link>
        <button onClick={() => handleUserAccount()} className="nav-button">Account</button>
        <input className="search-bar" type="text" placeholder="Search for your favorite artists" value={''}/>
      </div>
      <hgroup>
        <button className="nav-button" onClick={handleLogout}>Log Out</button>
      </hgroup>
    </nav>
  );
  return (
    currentUser ?
    nav(logout) :
    sessionLinks()
  );

};

export default withRouter(Navbar);
