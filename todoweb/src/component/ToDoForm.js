import React from 'react';

const ToDoForm = ({setToDoName}) => 
{
    const newToDoItem = (e) => 
    {

    }

    // Creates our basic form if we want to add a ToDo item
    return(
        <form>
            
            <div className="todoFilter" >
                <input type="text" className="todoTextInput" placeholder="Search Name..."/>

                <select name="ToDoItemSelection" className="ToDoStatusFilter" >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>

                <button type="submit" className="todoButton" >Search</button>
            </div>

            <div className="todoFilter">
                <input type="text" className="todoTextInput" placeholder="New Name..."/>
                <button type="submit" className="todoButton" onClick={newToDoItem}>Create To Do Item</button>
            </div>
        </form>
    );
};

export default ToDoForm;