import React from "react";

const Todo = props => {
    let className = "task";
    if (props.toDo.accomplished) {
        className = className + " accomplished";
    }

    const handleClick = () => {
        props.toggleAccomplished(props.task.id);
    };

    return (
        <div onClick ={handleClick} className = {className}>
            <p>{props.task.name}</p>
        </div>
    );
};

export default Todo; 