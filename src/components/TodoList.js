import React from 'react'
import Todo from './Todo';

export default function TodoList({todos}) {
  return (
    <div>
        {todos.map(todo =>(
            <Todo key={todo.id} eachItems={todo}/>
            )
        )}
    </div>
  )
}

