import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from './initial-data';
import Column from './column';




class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }

  componentDidMount() {
    console.log(this.state);
  }

  onDragEnd = result => {
    // TODO: reorder our column
  };

  render() {
    return (
      <div>

        {/* <DragDropContext onDragEnd={this.onDragEnd}> */}
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
        {/* </DragDropContext> */}
      </div>
    );
    // return <div>{this.state.columnOrder} </div>;
  }
}
export default TaskIndex;


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//
// // fake data generator
// const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
//   id: `item-${k}`,
//   content: `item ${k}`
// }));
//
// // a little function to help us with reordering the result
// const reorder =  (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//
//   return result;
// };
//
// // using some little inline style helpers to make the app look okay
// const grid = 8;
// const getItemStyle = (draggableStyle, isDragging) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: 'none',
//   padding: grid * 2,
//   marginBottom: grid,
//
//   // change background colour if dragging
//   background: isDragging ? 'lightgreen' : 'grey',
//
//   // styles we need to apply on draggables
//   ...draggableStyle
// });
// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 250
// });
//
// class TaskIndex extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: getItems(10)
//     };
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }
//
//   onDragEnd (result) {
//     // dropped outside the list
//     if(!result.destination) {
//       return;
//     }
//
//     const items = reorder(
//       this.state.items,
//       result.source.index,
//       result.destination.index
//     );
//
//     this.setState({
//       items
//     });
//   }
//
//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <div
//               ref={provided.innerRef}
//               style={getListStyle(snapshot.isDraggingOver)}
//             >
//               {this.state.items.map(item => (
//                 <Draggable
//                   key={item.id}
//                   draggableId={item.id}
//                 >
//                   {(provided, snapshot) => (
//                     <div>
//                       <div
//                         ref={provided.innerRef}
//                         style={getItemStyle(
//                           provided.draggableStyle,
//                           snapshot.isDragging
//                         )}
//                         {...provided.dragHandleProps}
//                       >
//                         {item.content}
//                       </div>
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }
//
// // Put the thing into the DOM!
// ReactDOM.render(<TaskIndex />, document.getElementById('app'));
//
//
//
//
// // import React from 'react';
// // // import axios from 'axios';
// // // import Auth from '../../../lib/Auth';
// //
// // class TaskIndex extends React.Component {
// //
// //   constructor(props) {
// //     super(props);
// //     this.state = { tasks: null};
// //
// //
// //   }
// //
// //   // getTasks() {
// //   //   const token = Auth.getToken();
// //   //   axios.get('/api/budgets',{
// //   //     headers: { Authorization: `Bearer ${token}` },
// //   //     params: {
// //   //       teamId: 3
// //   //     }
// //   //   })
// //   //     .then(res => this.setState({ budgetLines: res.data }));
// //   // }
// //
// //   componentDidMount() {
// //     // this.getTasks();
// //   }
// //
// //   render() {
// //     return (
// //       <div className="columns is-desktop">
// //         <div className="column">
// //           <h3>Backlog</h3>
// //
// //         </div>
// //         <div className="column">
// //           <h3>To Do</h3>
// //         </div>
// //         <div className="column">
// //           <h3>Doing</h3>
// //         </div>
// //         <div className="column">
// //           <h3>Done</h3>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// //
// // export default TaskIndex;
