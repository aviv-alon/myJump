import React from 'react';
import { Link } from 'react-router-dom';


const TeamTabMenu = ({baseUrl}) => {
  return (
    <div className="tabs is-centered">
      <ul>
        <li>
          <Link to={`${baseUrl}/meetings`}>
            <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Meetings</span>
          </Link>
        </li>
        <li className="is-active">
          <Link to={`${baseUrl}/tasks`}>
            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
            <span>Tasks</span>
          </Link>
        </li>
        <li>
          <Link to={`${baseUrl}/budget`}>
            <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
            <span>Budget</span>
          </Link>
        </li>
        <li>
          <Link to={`${baseUrl}/kit`}>
            <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
            <span>Accelerator Kit</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamTabMenu;
