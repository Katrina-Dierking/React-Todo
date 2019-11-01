import React from "react";

const Task = props => {
console.log(props)
    let className = "task";
    if (props.task.completed) {
        className = className + " completed";
    }

    const handleClick = () => {
        props.toggleCompleted(props.task.id);

    };

    return (
        <div onClick ={handleClick} className = {className}>
            <p>{props.task.name}</p>
        </div>
    );
};

export default Task; 