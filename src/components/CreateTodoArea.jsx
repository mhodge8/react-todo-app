import React, {useState} from "react";

function CreateTodoArea(props){
    const [newTodo, setNewTodo] = useState("");

    function handleClick(event){
        props.onAdd(newTodo);
        event.preventDefault();
        setNewTodo("");
    }

    function handleChange(event){
        setNewTodo(event.target.value);
    }
    
    return(    
        <form>
            <input 
                type="text" 
                placeholder="New item" 
                name="text" 
                onChange={handleChange} 
                value={newTodo}>
            </input>
            <button onClick={handleClick}>Add</button>
        </form>  
     )
}

export default CreateTodoArea;