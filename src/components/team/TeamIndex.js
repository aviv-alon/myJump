import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import SecureRoute from '../SecureRoute';
import axios from 'axios';
import Auth from '../../lib/Auth';
import TeamTabMenu from './TeamTabMenu';
import MeetingIndex from './meetings/MeetingIndex';
import BudgetIndex from './budget/BudgetIndex';
import TasksIndex from './tasks/TasksIndex';
import KitIndex from './kit/KitIndex';



class TeamIndex extends React.Component {
  constructor(props) {
    super();
    this.state = {
      team: {},
      teamId: props.match.params.id,
      url: props.match.url,
      activeTab: 0
    };

    this.getTeam = this.getTeam.bind(this);
  }

  componentDidMount() {
    this.getTeam();
    console.log(this.state.team);
  }

  getTeam(){
    const token = Auth.getToken();
    axios
      .get(`/api/teams/${this.state.teamId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => this.setState({ team: res.data }));
  }

  render() {
    return (
      <main className="section">
        <div className="container">

          <div className="container">
            <div className="level-left">
              <figure className="image is-128x128">
                <img src={this.state.team.image} alt={this.state.team.name}/>
              </figure>
              <h2 className="title is-1">{this.state.team.name}   </h2>
              <span className="icon">
                <img src="/assets/icons/settings_icon.svg"></img>
              </span>
            </div>
            <p>wave {this.state.team.wave_id}</p>
          </div>

          <div className="levels">
            {this.state.team.members && this.state.team.members.map(member =>
              <figure key={member.user.id} className="image is-48x48">
                <img className="is-rounded" src={member.user.image} alt={member.user.first_name + '' + member.user.last_name} />
              </figure>
            )}
          </div>

          <TeamTabMenu baseUrl={this.state.url}/>
          <Switch>
            <SecureRoute path={`${this.state.url}/meetings`} component={() => <MeetingIndex teamId={this.state.teamId}/>} />
            <SecureRoute path={`${this.state.url}/budget`} component={() => <BudgetIndex teamId={this.state.teamId}/>} />
            <SecureRoute path={`${this.state.url}/tasks`} component={TasksIndex} teamId={this.state.teamId} />
            <SecureRoute path={`${this.state.url}/kit`} component={KitIndex} teamId={this.state.teamId} />
          </Switch>
        </div>
      </main>
    );
  }

}

export default withRouter(TeamIndex);
