import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// import MeetingCard from './MeetingCard';

class MeetingIndex extends React.Component {
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
        <div className="card">
          <div className="card-content">
            <p className="title is-4">
              Workshop 1 - Introduction
            </p>
            <p>
              The meeting will be attended by the professional facilitator. During the meeting we will talk about the world of concepts in the Stratum world.
            </p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <address>
                <span className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Gav Yam, Bear Sheva
              </address>
            </p>
            <p className="card-footer-item">
              <time dateTime="2008-02-14 20:00">
                <span className="icon">
                  <i className="fas fa-clock"></i>
                </span>
                15/10/2019, 17:30
              </time>
            </p>
          </footer>
        </div>
        <br />
        {/* card 2 */}
        <div className="card">
          <div className="card-content">
            <p className="title is-4">
              Workshop 2 - Buisness Model
            </p>
            <p >
              The meeting will be attended by the professional facilitator. During the meeting we will talk about the world of concepts in the Stratum world.
            </p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <address>
                <span className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Gav Yam, Bear Sheva
              </address>
            </p>
            <p className="card-footer-item">
              <time dateTime="2008-02-14 20:00">
                <span className="icon">
                  <i className="fas fa-clock"></i>
                </span>
                21/10/2019, 17:30
              </time>
            </p>
          </footer>
        </div>


      </main>
    );
  }
}

export default MeetingIndex;
