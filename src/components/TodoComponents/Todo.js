import React from "react";

const Task = props => {

    let className = "task";
    if (props.task.accomplished) {
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

export default Task; 