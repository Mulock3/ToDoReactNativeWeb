import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ToDo = ({todo, key, name, status, setToDoItems, todoItems}) => 
{

    // Deletes the to do item
    const deleteHandler = () => 
    {
        confirmAlert({
            title: 'Delete Task: ' + todo.name,
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => setToDoItems(todoItems.filter(( (el) => el.id !== todo.id)))
              },
              {
                label: 'No',
              }
            ]
          });
    }

    // Completes the To Do Item
    const statusHandler = () => 
    {
        
        setToDoItems(todoItems.map( (todoItem) => {
            if (todoItem.id === todo.id)
            {
                if (todoItem.status === "Pending")
                {
                    return {...todoItem, status: "Completed"}
                }
                else 
                {
                    return {...todoItem, status: "Pending"}
                }
            }
        }))
    }
    
    // Changes Items Name
    const nameHandler = (e) => 
    {
        setToDoItems(todoItems.map( (todoItem) => {
            if (todoItem.id === todo.id)
            {
                return {...todoItem, name: name}
            }
        }))
    }

    return(
        <div className="todoItem">
            <div>
                <h3 className="h3Header" >{status}</h3>
            </div>
            <div>
                <input value={name} className="todoItemTextInput" onChange={nameHandler}/>
                <button className="todoButton" onClick={statusHandler}>Change Status</button>
                <button className="todoButton" onClick={deleteHandler}>Delete</button>
            </div>
        </div>

    );
};

export default ToDo;