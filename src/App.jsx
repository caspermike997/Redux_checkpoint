import React from 'react';
import AddTask from './components/Addtask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;









// Checkpoint Objective
// In this checkpoint, we are going to use what we have learned previously to create a ToDo Application while using Redux to manage the global state.

// Instructions
// Create  the following component:
// Addtask
// ListTask
// Task
// Every task should have the following attributes:I d, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task