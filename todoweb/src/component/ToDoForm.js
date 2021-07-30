import React from 'react';
import nextId from "react-id-generator";

const ToDoForm = ({newToDoName, setNewToDoName, newToDoDesc, setNewToDoDesc, todoItems, setToDoItems, filterTag, setFilterTag, filterString, setFilterString, setFilteredToDoItems}) => 
{
    // Creates new To Do item and adds to list
    const newToDoItem = (e) => 
    {
        e.preventDefault()
        
        if (newToDoName !== "")
        {
            // Adds new item to list
            setToDoItems(
            [ ...todoItems, { name: newToDoName, description: newToDoDesc, status: "Pending", id: nextId() + (Math.random() * 1001) } ] )

            // Resets our input box
            setNewToDoName("")
            setNewToDoDesc("")
        }
    }

    // Gets the new name for the app
    const newToDoNameHandler = (e) => {
        e.preventDefault();
        setNewToDoName(e.target.value)
    }

    // Gets the new description for the app
    const newToDoDescHandler = (e) => {
        e.preventDefault();
        setNewToDoDesc(e.target.value)
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
                <div>
                    <input value={newToDoName} type="text" className="todoTextInput" placeholder="New Name..." onChange={newToDoNameHandler} maxlength="25"/>
                    <input value={newToDoDesc} type="text" className="todoTextInput" placeholder="Short Description..." onChange={newToDoDescHandler} maxlength="25"/>
                </div>
                <button type="submit" className="todoButton" onClick={newToDoItem}>Create To Do Item</button>
            </div>
        </form>
    </div>
    );
};

export default ToDoForm;