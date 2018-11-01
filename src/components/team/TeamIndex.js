import React from 'react';
import { withRouter } from 'react-router-dom';

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
      currentTab: 'meetings'
    };

    this.getTeam = this.getTeam.bind(this);
    this.setCurrentTab = this.setCurrentTab.bind(this);
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

  setCurrentTab(currentTab){
    this.setState({currentTab});
  }

  render() {
    return (
      <main className="section team">
        <div className="container">

          <header>

            {/* Team Logo */}
            <figure className="image is-64x64 team__logo">
              <img src={this.state.team.image} alt={this.state.team.name}/>
            </figure>

            <div className="team__header-content">

              {/* Team Name */}
              <span className="team__name">
                <h2 className="title is-2">{this.state.team.name}</h2>
                <a className="icon">
                  <i className="fas fa-cog"></i>
                </a>
              </span>
              <p className="team__wave">wave {this.state.team.wave_id}</p>

              {/* Team Members */}
              <div className="team__members">
                {this.state.team.members && this.state.team.members.map(member =>
                  <figure key={member.user.id} className="image is-48x48">
                    <img className="is-rounded" src={member.user.image} alt={member.user.first_name + '' + member.user.last_name} />
                  </figure>
                )}

              </div>

            </div>
          </header>

          {/* Team Tab Menu */}
          <TeamTabMenu baseUrl={this.state.url} setCurrentTab={this.setCurrentTab}
            currentTab={this.state.currentTab }/>

          {/* current Tab */}
          {this.state.currentTab === 'meetings' && <MeetingIndex teamId={this.state.teamId}/>}
          {this.state.currentTab === 'budget' && <BudgetIndex teamId={this.state.teamId}/>}
          {this.state.currentTab === 'tasks' && <TasksIndex teamId={this.state.teamId}/>}
          {this.state.currentTab === 'kit' && <KitIndex teamId={this.state.teamId}/>}

        </div>
      </main>
    );
  }

}

export default withRouter(TeamIndex);
