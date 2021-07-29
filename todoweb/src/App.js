import React, {useState, useEffect} from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';

// Creates the basic landing page for the app
function App() {

  // Variable to pass New ToDo item back
  const[newToDoName, setNewToDoName] = useState("")
  const[newToDoDesc, setNewToDoDesc] = useState("")
  const[filterTag, setFilterTag] = useState("All")
  const[filterString, setFilterString] = useState("")
  const[filteredToDoItems, setFilteredToDoItems] = useState([])
  const[todoItems, setToDoItems] = useState([])

  // Only occurs on start
  useEffect(() => { 
    returnLocalToDoItems()
    }, [])

  // Gets called on State Updates for the items below
  useEffect(() => { 
    filterHandler()
    saveLocalToDoItems()
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

  // Saving our Data Locally
  const saveLocalToDoItems = () => 
  {
    localStorage.setItem("todoItems", JSON.stringify(todoItems))
  }

  // Loads Local Data
  const returnLocalToDoItems = () => 
  {
    // If they do not exist
    if(localStorage.getItem("todoItems") !== null)
    {
      let todoStorage = JSON.parse(localStorage.getItem("todoItems"))
      setToDoItems(todoStorage)
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
      newToDoDesc={newToDoDesc}
      setNewToDoDesc={setNewToDoDesc}
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
