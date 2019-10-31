import React from "react";
import Todo from "./Todo";

const TodoList = props => {
 
  return (
    <div className="todo-list">
      {props.task.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleAccomplished={props.toggleAccomplished}
        />
      ))}
      <button className="clear-btn" onClick={props.notAccomplished}>
        Clear Accomplished
      </button>
    </div>
  );
};

export default TodoList;


