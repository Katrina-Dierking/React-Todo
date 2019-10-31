import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    task: 'Rearrange Office',
    id: 1234,
    completed: false
  },
  {
    task: 'Clean Out Truck',
    id: 4566,
    completed: false
  },
  {
    task: 'Write New Book',
    id: 5789,
    completed: false
  },
  {
    task: 'Powerwash House',
    id: 1290,
    completed: false
  },
  {
    task: 'Take Vacation',
    id: 6791,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: data,
    };
    this.toggleAccomplished = this.toggleAccomplished.bind(this);
    
  }
  
  toggleAccomplished(taskId) {
    console.log("toggleAccomplished: ", taskId);

  this.setState ({
    todo:this.state.todo.map(task => {
      if (task.id ===taskId) {
        return {
          ...task,
          accomplished: !task.accomplished
        };
      }
      return task;
    })
  });
}

clearAccomplished = () => {
  console.log("clearAccomplished");
  this.setState({
    todo: this.state.todo.filter(task => {
      return !task.accomplished;
    })
  });
};

addTask = name => {
 

  const taskName = {
    name: name,
    id: Date.now(),
    accomplished: false
  }

  this.setState ({
    task: [...this.state.task, taskName]
  
  });

};

  render() {
    console.log("rendering ...");
    return (
      <div className="App">
        <div className="header">
          <h2>My To Do List:</h2>
          <TodoForm addTask={this.addTask} />
      </div>
      <TodoList
      todo={this.state.task}
      toggledAccomplished={this.toggleAccomplished}
      clearAccomplished={this.clearAccomplished}
      />
      </div>
    );
  }
}
export default App;
