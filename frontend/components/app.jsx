import React from 'react';
import Root from './root';
import Modal from './modal';
import NavbarContainer from './navbar/navbar_container';
import { Provider } from 'react-redux';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import UserShow from './user/user_show';
import ArtistShow from './artist/artist_show';
import EventShow from './event/event_show';
import VenueShow from './venue/venue_show';



const App = () => (
  <div>
    <header>
      <Modal />
      <NavbarContainer />
    </header>

    <Switch>
      <Route exact path="/users/:id" component={UserShow} />
      <Route exact path="/artists/:id" component={ArtistShow} />
      <Route exact path="/venues/:id" component={VenueShow} />
      <Route expact path="/" component={EventShow}/>
    </Switch>
  </div>

);

export default App;
