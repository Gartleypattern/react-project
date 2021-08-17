import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';



class App extends React.Component {
  
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  };
}


export default App;