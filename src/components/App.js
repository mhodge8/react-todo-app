import React, {useState} from 'react';
import Todo from "./Todo";
import CreateTodoArea from "./CreateTodoArea"

function App() {
  const [notes, setNotes] = useState(["Click to delete item"]);

  function addTodo(newTodo){
    setNotes(prevTodos => {
      return [...prevTodos, newTodo];
    });
  }

  function deleteTodo(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <CreateTodoArea onAdd={addTodo}/>
      <ul>
        {notes.map( (todo, index) => {
          return(
            <Todo 
              key={index}
              id={index} 
              text={todo} 
              onDelete={deleteTodo}
            />)
        })}
      </ul>
    </div>
  );
}

export default App;