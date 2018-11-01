import React from 'react';

const TeamTabMenu = ({ currentTab, setCurrentTab}) => {


  return (
    <nav className="tabs is-centered team__tabMenu">
      <ul>

        <li className={currentTab==='meetings'&&'is-active'}>
          <a onClick={() => setCurrentTab('meetings')}>
            <span className="icon is-small"><i className="far fa-calendar-alt" aria-hidden="true"></i></span>
            <span>Meetings</span>
          </a>
        </li>


        <li className={currentTab==='tasks'&&'is-active'}>
          <a onClick={() => setCurrentTab('tasks')}>
            <span className="icon is-small"><i className="fas fa-tasks" aria-hidden="true"></i></span>
            <span>Tasks</span>
          </a>
        </li>


        <li className={currentTab==='budget'&&'is-active'}>
          <a onClick={() => setCurrentTab('budget')}>
            <span className="icon is-small"><i className="fas fa-file-invoice-dollar" aria-hidden="true"></i></span>
            <span>Budget</span>
          </a>
        </li>


        <li className={currentTab==='kit'&&'is-active'}>
          <a onClick={() => setCurrentTab('kit')}>
            <span className="icon is-small"><i className="fas fa-folder-open" aria-hidden="true"></i></span>
            <span>Accelerator Kit</span>
          </a>
        </li>


      </ul>
    </nav>
  );
};

export default TeamTabMenu;
