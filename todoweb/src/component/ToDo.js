import React from 'react';

const ToDo = ({name, completed}) => 
{
    return(
        <div className="todoItem">
            <div>
                <h3 className="h3Header">Pending</h3>
            </div>
            <div>
                <input value={name} className="todoItemTextInput"/>
                <button className="todoButton">Complete</button>
                <button className="todoButton">Delete</button>
            </div>
        </div>

    );
};

export default ToDo;