import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// import MeetingCard from './MeetingCard';

class KitIndex extends React.Component {
  constructor() {
    super();
    this.state = {meetings: []};

  }

  // componentDidMount(){
  //   axios.get('/api/meetings')
  //     .then(res => this.setState({ artists: res.data }));
  // }

  render() {
    return (
      <main className="section">

        {/* card 1 */}
        <div>
          <div>
            <p className="title">
              Workshop 1 - Introduction
            </p>
            <p className="subtitle">
              The meeting will be attended by the professional facilitator. During the meeting we will talk about the world of concepts in the Stratum world.
            </p>
          </div>

        </div>
        <hr />
        <br />
        {/* card 2 */}
        <div>
          <div>
            <p className="title">
              Workshop 2 - Buisness Model
            </p>
            <p className="subtitle">
              The meeting will be attended by the professional facilitator. During the meeting we will talk about the world of concepts in the Stratum world.
            </p>
          </div>
        </div>


      </main>
    );
  }
}

export default KitIndex;
