import React, {useState, useEffect} from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ToDo = ({todo, name, desc, status, setToDoItems, todoItems}) => 
{
    const[todoName, setToDoName] = useState("")
    const[todoDesc, setToDoDesc] = useState("")

    // Gets called on create
    useEffect(() => { 
        setToDoName(name)
        setToDoDesc(desc)
        }, [])

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
            return todoItem
        }))
    }
    
    // Changes Items Name
    const nameHandler = (e) => 
    {
        setToDoName(e.target.value)
        
        setToDoItems(todoItems.map( (todoItem) => {
            if (todoItem.id === todo.id)
            {
                return {...todoItem, name: todoName}
            }
            return todoItem
        }))
    }

    // Changes Items Description
    const descHandler = (e) => 
    {
        setToDoDesc(e.target.value)

        setToDoItems(todoItems.map( (todoItem) => {
            if (todoItem.id === todo.id)
            {
                return {...todoItem, description: todoDesc}
            }
            return todoItem
        }))
    }

    return(
        <div className="todoItem">
            <div>
                <h3 className="h3Header" >{status}</h3>
            </div>
            <div>
                <input value={todoName} className="todoItemTextInput" onChange={nameHandler} maxlength="25"/>
                <button className="todoButton" onClick={statusHandler}>Change Status</button>
                <button className="todoButton" onClick={deleteHandler}>Delete</button>
            </div>
            <input value={todoDesc} className="todoItemTextInput" onChange={descHandler} maxlength="25"/>
        </div>

    );
};

export default ToDo;