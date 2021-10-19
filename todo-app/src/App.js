import React, {useState} from 'react';

const App = () => {
    const [todos, setTodos] = useState(["Go to bath", "Go to code", "Go to see Naruto", "Go to study"])
    const [input, setInput] = useState("")

    const addTodo = (event) => {
        setTodos([...todos, input])
    }

    return (
        <div className="App">
            <h1>TODO App</h1>

            <input value = {input} onChange={event => setInput(event.target.value)}/>
            <button onClick={addTodo}>Add TODO</button>

            <ul>
                {todos.map(todo => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App