import React from 'react';
import nextId from "react-id-generator";

const ToDoForm = ({newToDoName, setNewToDoName, todoItems, setToDoItems, filterTag, setFilterTag, filterString, setFilterString, setFilteredToDoItems}) => 
{
    // Creates new To Do item and adds to list
    const newToDoItem = (e) => 
    {
        e.preventDefault()
        
        // Adds new item to list
        setToDoItems(
            [ ...todoItems, { name: newToDoName, status: "Pending", id: nextId() } ] )

        // Resets our input box
        setNewToDoName("")
    }

    // Gets the new name for the app
    const newToDoNameHandler = (e) => {
        e.preventDefault();
        setNewToDoName(e.target.value)
    }

    // Searches to To Do itmes by Tag
    const searchToDoItemsTag = (e) => 
    {
        setFilterTag(e.target.value)
    }

    // Searches to To Do itmes by Tag
    const searchToDoItemsString = (e) => 
    {
        setFilterString(e.target.value)
    }

    // Creates our basic form if we want to add a ToDo item
    return(
    <div>
        <form>
            
            <div className="todoFilter" >
                <h3 className="h3Header">Search</h3>
                <div>
                <input type="text" className="todoTextInput" placeholder="Search Name..." onChange={searchToDoItemsString}/>

                <select name="ToDoItemSelection" className="ToDoStatusFilter" onChange={searchToDoItemsTag}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
                </div>
            </div>
        </form>

        <form>
            <div className="newToDo">
                <input value={newToDoName} type="text" className="todoTextInput" placeholder="New Name..." onChange={newToDoNameHandler}/>
                <button type="submit" className="todoButton" onClick={newToDoItem}>Create To Do Item</button>
            </div>
        </form>
    </div>
    );
};

export default ToDoForm;