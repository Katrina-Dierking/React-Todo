import React from "react";
import Task from "./Todo";

const TodoList = props => {
 console.log(props)
  return (
    <div className="todo-list">
      {props.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;


