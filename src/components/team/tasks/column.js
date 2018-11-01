import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

export default class Column extends React.Component {


  render() {
    return(
      <div>
        <h3>{this.props.column.title}</h3>
        {/* <Droppable droppableId={this.props.column.id}> */}
        {
          this.props.tasks.map(task => <TaskCard key={task.id} task={task}/>)
        }
        {/* </Droppable> */}
      </div>
    );
  }
}
