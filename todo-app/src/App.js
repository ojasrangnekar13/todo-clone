import React, {useState} from 'react';
import Todo from './Todo.js'
import './App.css'

const App = () => {
    const [todos, setTodos] = useState(["Go to bath", "Go to code", "Go to see Naruto", "Go to study"])
    const [input, setInput] = useState("")

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input])
        setInput('')
    }

    return (
        <div className="App">
            <h1>TODO App</h1>

            <form>
                <input value = {input} onChange={event => setInput(event.target.value)}/>
                <button disabled={!input} type = "submit" onClick={addTodo}>Add TODO</button>
            </form>
            
            <ul>
                {todos.map(todo => (
                    <Todo text = {todo}/>
                ))}
            </ul>
        </div>
    )
}

export default App