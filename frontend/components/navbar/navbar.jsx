import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import { Link, withRouter } from 'react-router-dom';
import SearchDropdown from './search_dropdown';

const Navbar = ({ currentUser, logout, openModal, login, history, fetchSearchResults }) => {

  const handleDemo = (user) => {
    login(user)
  }

  const handleLogout = () => {
    logout().then(() => history.push('/'));
  }

  const handleUserAccount = () => {
    history.push(`/users/${currentUser.id}`)
  }

  const searchResults = (query) => {
    fetchSearchResults(query);
  }

  const image = window.bandalizelogo;

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <Link to='/' className="app-title">bandalize</Link>
        <SearchDropdown className="search-dropdown" searchResults={fetchSearchResults} value={''} placeholder="Search for your favorite artists"/>

      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => openModal('login')}>Login</button>
        <button className="nav-button" onClick={() => openModal('signup')}>Signup</button>
        <button className="nav-button" onClick={handleDemo({email:'jac.lipera@gmail.com', password:'jackie', firstname: 'jackie', lastname: 'lipera'})}>Demo</button>
      </div>
    </nav>
  );
  const nav = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <Link to='/' className="app-title">bandalize</Link>
        <button onClick={handleUserAccount} className="nav-button">Account</button>
        <SearchDropdown className="search-dropdown" searchResults={fetchSearchResults} value={''} placeholder="Search for your favorite artists"/>

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
