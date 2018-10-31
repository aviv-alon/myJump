import React from 'react';
// import axios from 'axios';
// import Auth from '../../../lib/Auth';

class TaskIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tasks: null};


  }

  // getTasks() {
  //   const token = Auth.getToken();
  //   axios.get('/api/budgets',{
  //     headers: { Authorization: `Bearer ${token}` },
  //     params: {
  //       teamId: 3
  //     }
  //   })
  //     .then(res => this.setState({ budgetLines: res.data }));
  // }

  componentDidMount() {
    // this.getTasks();
  }

  render() {
    return (
      <div className="columns is-desktop">
        <div className="column">
          <h3>Backlog</h3>

        </div>
        <div className="column">
          <h3>To Do</h3>
        </div>
        <div className="column">
          <h3>Doing</h3>
        </div>
        <div className="column">
          <h3>Done</h3>
        </div>
      </div>
    );
  }
}

export default TaskIndex;
