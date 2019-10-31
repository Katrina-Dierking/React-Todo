import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    name: 'Rearrange Office',
    id: 1,
    completed: false
  },
  {
    name: 'Clean Out Truck',
    id: 2,
    completed: false
  },
  {
    name: 'Write New Book',
    id: 3,
    completed: false
  },
  {
    name: 'Powerwash House',
    id: 4,
    completed: false
  },
  {
    name: 'Take Vacation',
    id: 5,
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
      tasks: data,
    };
    this.toggleAccomplished = this.toggleAccomplished.bind(this);
    
  }
  
  toggleAccomplished(taskId) {
    console.log("toggleAccomplished: ", taskId);

  this.setState ({
    tasks:this.state.tasks.map(task => {
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

clearTask = () => {
  console.log("clear Task");
  this.setState({
    tasks: this.state.tasks.filter(task => {
      return !task.accomplished;
    })
  });
};

addTask = (taskName) => {
 console.log('addTask: ', taskName);

 this.setState({
  tasks: [
    ...this.state.tasks,
    {
      name: taskName,
      id: Date.now(),
      finished: false
    }
  ]
});
};

  render() {
    console.log("rendering ...");
    return (
      <div className="App">
        <h2>My To Do List:</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
        tasks={this.state.tasks}
        toggledAccomplished={this.toggleAccomplished}
        clearTask={this.clearTask}
      />
      </div>
    );
  }
}
export default App;
