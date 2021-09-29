import React, {useState, useRef} from 'react'
import TodoList from './components/TodoList';

function App() {
  const [allTodos, setAllTodos] = useState([
    // {
    //   id:1,
    //   name:'Todo 1',
    //   unDone:false
    // }
  ]);
  const todoInputDataRef = useRef();

  function handleAddTodoClick (event)  {
    event.preventDefault();
    const todoName=todoInputDataRef.current.value 
    if (todoName) {
      console.log(todoName);
      todoInputDataRef.current.value = null
    }
  }
  return (
    <div>
      <TodoList todos={allTodos}/>
      <input ref={todoInputDataRef} type="text"/>
      <button onClick={handleAddTodoClick}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </div>
  );
}

export default App;
