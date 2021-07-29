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

  const filterHandler = () => 
  {
      if (filterTag === "Completed" || filterTag === "Pending")
      {
        setFilteredToDoItems(todoItems.filter(( (el) => (el.status.toLowerCase() === filterTag.toLowerCase()) && (el.name.toLowerCase().includes(filterString.toLowerCase())))))
      }
      else if (filterTag === "All" && filterString !== "")
      {
        setFilteredToDoItems(todoItems.filter(( (el) => (el.name.toLowerCase().includes(filterString.toLowerCase())))))
      }
      else if (filterTag === "All" && filterString === "")
      {
        setFilteredToDoItems(todoItems)
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
