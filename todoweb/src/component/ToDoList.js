import React from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const ToDoList = ({todoItems}) => 
{
    return(
        <div className="todoListContainer">
            <ul className="todoList" >
                {todoItems.map( (todo) => 
                (<ToDo key={todo.id} name={todo.name} completed={todo.completed} />)
                )}
            </ul>
        </div>

    );
};

export default ToDoList;