import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <ul>
            <li>{props.text}</li>
        </ul>
    )
}

export default Todo
