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
      <main className="section kit">

        {/* card 1 */}
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="/assets/images/businessModelCanvas.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">

                <p className="title is-4">Business Model Canvas</p>

                <p className="subtitle is-6">Please uplod the last version of Business Model Canvas</p>

                <div className="file has-name is-left">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">
                        Choose a file…
                      </span>
                    </span>
                    <span className="file-name">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="/assets/images/inequality.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">

                <p className="title is-4">Business Plan</p>

                <p className="subtitle is-6">Please uplod the last version of Business Model Canvas</p>

                <div className="file has-name is-left">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">
                        Choose a file…
                      </span>
                    </span>
                    <span className="file-name">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>




      </main>
    );
  }
}

export default KitIndex;
