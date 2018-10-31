import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import SecureRoute from '../SecureRoute';

import TeamTabMenu from './TeamTabMenu';
import BudgetIndex from './budget/BudgetIndex';
import TasksIndex from './tasks/TasksIndex';



class TeamIndex extends React.Component {
  constructor(props) {
    super();
    this.state = { teamId: props.match.params.id,
      url: props.match.url,
      activeTab: 0};
  }
  render() {
    return (
      <main className="section">
        <div className="container">
          <h2>startup name</h2>
          <TeamTabMenu baseUrl={this.state.url}/>
          <Switch>

            {/* <SecureRoute path="/" component={BudgetIndexTeam} /> */}
            <SecureRoute path={`${this.state.url}/budget`} component={() => <BudgetIndex teamId={this.state.teamId}/>} />
            {/* {BudgetIndex} teamId={this.state.teamId}  */}
            <SecureRoute path={`${this.state.url}/tasks`} component={TasksIndex} teamId={this.state.teamId} />
          </Switch>
        </div>
      </main>
    );
  }

}

export default withRouter(TeamIndex);
