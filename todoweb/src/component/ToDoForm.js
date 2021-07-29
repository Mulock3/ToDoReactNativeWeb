import React from 'react';
import nextId from "react-id-generator";

const ToDoForm = ({newToDoName, setNewToDoName, todoItems, setToDoItems}) => 
{
    // Creates new To Do item and adds to list
    const newToDoItem = (e) => 
    {
        e.preventDefault()
        
        // Adds new item to list
        setToDoItems(
            [ ...todoItems, { name: newToDoName, completed: false, id: nextId() } ] )

        // Resets our input box
        setNewToDoName("")

    }

    // Gets the new name for the app
    const newToDoNameHandler = (e) => {
        e.preventDefault();
        setNewToDoName(e.target.value)
    }

    // Searches to To Do itmes
    const searchToDoItems = (e) => 
    {
        e.preventDefault()
        
    }

    // Creates our basic form if we want to add a ToDo item
    return(
    <div>
        <form>
            
            <div className="todoFilter" >
                <input type="text" className="todoTextInput" placeholder="Search Name..."/>

                <select name="ToDoItemSelection" className="ToDoStatusFilter" >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>

                <button type="submit" className="todoButton" onClick={searchToDoItems}>Search</button>
            </div>
        </form>

        <form>
            <div className="todoFilter">
                <input value={newToDoName} type="text" className="todoTextInput" placeholder="New Name..." onChange={newToDoNameHandler}/>
                <button type="submit" className="todoButton" onClick={newToDoItem}>Create To Do Item</button>
            </div>
        </form>
    </div>
    );
};

export default ToDoForm;