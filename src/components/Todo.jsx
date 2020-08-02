import React from 'react';

function Todo(props){
    function handleClick(){
        props.onDelete(props.id);
    }

    return(<li onClick={handleClick}>{props.text}</li>);
}

export default Todo;