import React from 'react';

const TaskCard = ({title, type}) => {
  return (
    <div className="card">
      <div className="card-content">
        <p> {title} </p>
        <p> {type} </p>
      </div>
    </div>
  );
};

export default TaskCard;
