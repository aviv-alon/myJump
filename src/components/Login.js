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
      <main className="section">
        <div className="container">
          <figure className="image">
            <img src="/assets/images/myjump-logo.png"></img>
          </figure>
          <form onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className={`input ${this.state.error ? 'is-danger' : ''} `} name="email" placeholder="Email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className={`input ${this.state.error ? 'is-danger' : ''} `} name="password" type="password" placeholder="Password" onChange={this.handleChange} />
              </div>
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
