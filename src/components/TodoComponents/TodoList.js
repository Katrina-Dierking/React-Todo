import React from "react";
import Task from "./Todo";

const TodoList = props => {
 
  return (
    <div className="todo-list">
      {props.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleAccomplished={props.toggleAccomplished}
        />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Accomplished
      </button>
    </div>
  );
};

export default TodoList;


