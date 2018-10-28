import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {artists: [], journeys: []};
  }

  componentDidMount(){
    axios.get('/api/artists')
      .then(res => this.setState({ artists: res.data }));
    axios.get('/api/journeys')
      .then(res => this.setState({ journeys: res.data }));
  }


  render() {
    return (
      <main className="main">

        <section className="hero is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="subtitle is-1 logo">
                myJump
              </h1>
              <h2 className="subtitle">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h2>
            </div>
          </div>
        </section>

        <section className="container features">

          <div className="columns">

            <div className="column is-4">
              <div className="is-shady">
                <figure className="card-image has-text-centered">
                  <img className="image is-96x96" src="./assets/images/artist.svg" alt="artist"/>
                </figure>
                <div className="card-content">
                  <div className="content">
                    <h3>Explore <strong> Artists </strong></h3>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-4">
              <div className="is-shady">
                <figure className="card-image has-text-centered">
                  <img className="image is-96x96" src="./assets/images/sketchbook.svg" alt="artist"/>
                </figure>
                <div className="card-content">
                  <div className="content">
                    <h3>Find <strong> Painting </strong> in your area</h3>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque.
                    sed risus.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="column is-4">
              <div className="is-shady">
                <figure className="card-image has-text-centered">
                  <img className="image is-96x96" src="./assets/images/plan.svg" alt="artist"/>
                </figure>
                <div className="card-content">
                  <div className="content">
                    <h3>Go to <strong> Journey </strong></h3>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero quote  is-8">
          <div className="container">
            <blockquote>
              Bad artists copy. Good artists steal.
            </blockquote>
            <p className="blockquote-name"> ~Pablo Picaso</p>
          </div>
        </section>

      </main>
    );
  }
}

export default withRouter(Main);
