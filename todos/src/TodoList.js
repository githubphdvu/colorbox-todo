import React, { useState } from "react"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

function TodoList() {
    const [todos, setTodos] = useState([])
    function create(newTodo){setTodos(todos => [...todos, newTodo])}
    // update a todo with updatedTask
    function update(id, updatedTask){
        setTodos(todos=>todos.map(todo=>todo.id===id?{...todo,task:updatedTask}:todo))
    }
    // delete a todo by id
    function remove(id){setTodos(todos => todos.filter(todo => todo.id !== id))}
    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todos.map(todo=>(<Todo remove={remove} key={todo.id} id={todo.id} task={todo.task} update={update}/>))}</ul>
        </div>
    )
}
export default TodoList
