import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import { Link, withRouter } from 'react-router-dom';
import SearchDropdown from './search_dropdown';

const Navbar = ({ currentUser, logout, openModal, login, history, fetchSearchResults, searchResults }) => {

  const handleDemo = (user) => {
    login(user)
  }

  const handleLogout = () => {
    logout().then(() => history.push('/'));
  }

  const handleUserAccount = () => {
    history.push(`/users/${currentUser.id}`)
  }

  const getSearchResults = (query) => {
    fetchSearchResults(query);
  }

  const image = window.bandalizelogo;

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <Link to='/' className="app-title">bandalize</Link>
        <SearchDropdown
          results={searchResults}
          getSearchResults={getSearchResults}
          value={''}
          />

      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => openModal('login')}>Login</button>
        <button className="nav-button" onClick={() => openModal('signup')}>Signup</button>
        <button className="nav-button" onClick={() => handleDemo({email:'jac.lipera@gmail.com', password:'jackie', firstname: 'jackie', lastname: 'lipera'})}>Demo</button>
      </div>
    </nav>
  );
  const nav = () => (
    <nav className="login-signup">
      <div className="nav-logo" >
        <img src={image} />
        <Link to='/' className="app-title">bandalize</Link>
        <button onClick={handleUserAccount} className="nav-button">Account</button>
          <SearchDropdown
            results={searchResults}
            getSearchResults={getSearchResults}
            value={''}
            />

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
