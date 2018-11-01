import React from 'react';

const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-content">
        <p> {props.task.content} </p>
      </div>
    </div>
  );
};

export default TaskCard;
