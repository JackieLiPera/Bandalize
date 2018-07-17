import React from 'react';
import Root from './root';
import Modal from './modal';
import NavbarContainer from './navbar/navbar_container';
import { Provider } from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import UserShowContainer from './user/user_show_container';
import ArtistShowContainer from './artist/artist_show_container.js';
import EventIndexContainer from './event/event_index_container.js';
import VenueShow from './venue/venue_show';
import EventShowContainer from './event/event_show_container.js';



const App = () => (
  <div>
    <header>
      <Modal />
      <NavbarContainer />
    </header>

    <Switch>
      <Route exact path="/api/users/:id" component={UserShowContainer} />
      <Route exact path="/api/artists/:id" component={ArtistShowContainer} />
      <Route exact path="/api/venues/:id" component={VenueShow} />
      <Route exact path="/api/events/:id" component={EventShowContainer} />
      <Route expact path="/" component={EventIndexContainer}/>
    </Switch>
  </div>

);

export default App;
