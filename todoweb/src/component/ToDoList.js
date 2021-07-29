import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({filteredToDoItems, todoItems, setToDoItems}) => 
{
    return(
        <div className="todoListContainer">
            <ul className="todoList" >
                {filteredToDoItems.map( (todo) => 
                (<ToDo 
                    todo={todo}
                    key={todo.id} 
                    name={todo.name} 
                    desc={todo.description}
                    status={todo.status} 
                    setToDoItems={setToDoItems} 
                    todoItems={todoItems}/>)
                )}
            </ul>
        </div>

    );
};

export default ToDoList;