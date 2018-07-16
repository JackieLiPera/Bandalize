import React from 'react';
import Root from './root';
import Modal from './modal';
import NavbarContainer from './navbar/navbar_container';
import { Provider } from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import UserShowContainer from './user/user_show_container';
import ArtistShowContainer from './artist/artist_show_container.js';
import EventIndex from './event/event_index';
import VenueShow from './venue/venue_show';
import EventShowContainer from './event/event_show_container.js';



const App = () => (
  <div>
    <header>
      <Modal />
      <NavbarContainer />
    </header>

    <Switch>
      <Route exact path="/users/:id" component={UserShowContainer} />
      <Route exact path="/artists/:id" component={ArtistShowContainer} />
      <Route exact path="/venues/:id" component={VenueShow} />
      <Route exact path="/events/:id" component={EventShowContainer} />
      <Route expact path="/" component={EventIndex}/>
    </Switch>
  </div>

);

export default App;
