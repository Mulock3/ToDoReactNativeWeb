import React, {useState, useEffect} from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';

// Creates the basic landing page for the app
function App() {

  // Variable to pass New ToDo item back
  const[newToDoName, setNewToDoName] = useState("")
  const[filterTag, setFilterTag] = useState("All")
  const[filterString, setFilterString] = useState("")
  const[filteredToDoItems, setFilteredToDoItems] = useState([])
  const[todoItems, setToDoItems] = useState([])

  // Gets called on State Update
  useEffect(() => { 
    filterHandler()
    }, [todoItems, filterTag, filterString])

  // Filters by Name and Status
  const filterHandler = () => 
  {
    switch(filterTag) {
      case "Completed":
        setFilteredToDoItems(todoItems.filter(( (el) => ( (el.status.toLowerCase() === "completed") && (el.name.toLowerCase().includes(filterString.toLowerCase() )) ) )))
        break;
      case "Pending": 
        setFilteredToDoItems(todoItems.filter(( (el) => ( (el.status.toLowerCase() === "pending") && (el.name.toLowerCase().includes(filterString.toLowerCase() )) ) )))
        break;
      default: 
        setFilteredToDoItems(todoItems.filter(( (el) => (el.name.toLowerCase().includes(filterString.toLowerCase())))))
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          To Do List
      </header>

      <ToDoForm 
      newToDoName={newToDoName} 
      setNewToDoName={setNewToDoName} 
      todoItems={todoItems} 
      setToDoItems={setToDoItems}
      filterTag={filterTag}
      filterString={filterString}
      setFilterTag={setFilterTag}
      setFilterString={setFilterString}
      setFilteredToDoItems={setFilteredToDoItems}/>

      <ToDoList 
      todoItems={todoItems} 
      setToDoItems={setToDoItems} 
      filteredToDoItems={filteredToDoItems}/>
    </div>
  );
}

export default App;
