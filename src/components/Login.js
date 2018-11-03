import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { credentials: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const credentials = { ...this.state.credentials, [e.target.name]: e.target.value };
    this.setState({ credentials, error: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post('/api/login', this.state.credentials)
      .then( res => {
        Auth.setToken(res.data.token);
        console.log(Auth.getPayload().default_team_id);
        this.props.history.push(`/team/${Auth.getPayload().default_team_id}`);
      })
      .catch(() => this.setState({error: 'Invalid credentials'}));
  }

  render() {
    return (
      <main className="section login">
        <div className="container">

          <figure className="image login__logo">
            <img src="/assets/images/myjump-logo.png"></img>
          </figure>
          <form onSubmit={this.handleSubmit}>


            <div className="field">
              <p className="control has-icons-left">
                <input className={`input ${this.state.error ? 'is-danger' : ''} `} name="email" placeholder="Email" onChange={this.handleChange} autoComplete="username"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input className={`input ${this.state.error ? 'is-danger' : ''} `} name="password" type="password" placeholder="Password" onChange={this.handleChange} autoComplete="current-password"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            {this.state.error && <small className="help is-danger">{this.state.error}</small>}

            <div className="level control">
              <div className="level-item">
                <button className="button is-rounded is-medium">Submit</button>
              </div>
            </div>

          </form>
        </div>
      </main>
    );
  }
}

export default Login;
