import React from 'react';
import AddTask from './components/Addtask';
import ListTask from './components/ListTask';
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <h1 className='head'>ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
