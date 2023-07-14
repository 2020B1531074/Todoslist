import React from 'react';
import TodoItem from '../MyComponent/TodoItem';

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"

  }
  return (
    <div className="container " style={myStyle}>
      <h3 >Todos List</h3>
      {/* Check if there are no todos to display */}
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        /* Render each todo item using the map() function */
        props.todos.map((todo) => {
          return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
            </>
          );
        })
      )}
    </div>
  );
};

export default Todos;
