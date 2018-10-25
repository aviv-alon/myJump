import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma';
import './scss/style.scss';

import Navbar from './components/Navbar';
import SecureRoute from './components/SecureRoute';
import FlashMessages from './components/FlashMessages';
import Register from './components/Register';
import Login from './components/Login';
import UserShow from './components/users/UserShow';
import UserEdit from './components/users/UserEdit';
import Main from './components/Main';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <FlashMessages />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <SecureRoute path="/profile/:id/edit" component={UserEdit} />
            <SecureRoute path="/profile" component={UserShow} />
            <Route path="/" component={Main} />
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
