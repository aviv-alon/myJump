import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import './scss/main.scss';

import Auth from './lib/Auth';
import Navbar from './components/Navbar';
import SecureRoute from './components/SecureRoute';
import FlashMessages from './components/FlashMessages';
// import Register from './components/Register';
import Login from './components/Login';
import UserShow from './components/users/UserShow';
import UserEdit from './components/users/UserEdit';
import TeamIndex from './components/team/TeamIndex';
import About from './components/About';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <FlashMessages />
          <Switch>
            {/* <Route path="/register" component={Register} /> */}
            <Route path="/login" component={Login} />
            <SecureRoute path="/profile/:id/edit" component={UserEdit} />
            <SecureRoute path="/profile" component={UserShow} />
            {/* <SecureRoute path="/team/:id/:tab" component={TeamIndex} /> */}
            <SecureRoute path="/team/:id" component={TeamIndex} />
            <Route path="/about" component={About} />
            <Redirect from="/" to={Auth.isAuthenticated()?`/team/${Auth.getPayload().default_team_id}`:'/login'} />
          </Switch>
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>


    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
