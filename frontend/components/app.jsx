import React from 'react';
import Root from './root';
import Modal from './modal';
import NavbarContainer from './navbar/navbar_container';
import { Provider } from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => (
  <div>
    <Modal />
    <NavbarContainer />
  </div>

);

export default App;
