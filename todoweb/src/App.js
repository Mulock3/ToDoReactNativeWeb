import React, {useState} from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';

// Creates the basic landing page for the app
function App() {

  // Variable to pass New ToDo item back
  const[newToDoName, setNewToDoName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
          To Do List
      </header>

      <ToDoForm setNewToDoName={setNewToDoName}/>

      <ToDoList />
    </div>
  );
}

export default App;
