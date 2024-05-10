import React, { useState } from "react"

function Todo({ task = "default todo", id = "1", remove, update }) {
    const [editTask, setEditTask] = useState(task)
    const [isEditing, setIsEditing] = useState(false)

    function toggleEdit(){setIsEditing(edit => !edit)}
    function handleChange(evt){setEditTask(evt.target.value)}
    function handleDelete(){remove(id)}
    function handleUpdate(evt){
        evt.preventDefault()
        update(id, editTask)
        setIsEditing(false)
    }
    // default todo view
    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )
    // todo view when editing
    if (isEditing) {
        jsx = (
        <div>
            <form onSubmit={handleUpdate}>
            <input type="text" value={editTask} onChange={handleChange} />
            <button>Update!</button>
            </form>
        </div>
        )
    }
    return jsx
}
export default Todo
