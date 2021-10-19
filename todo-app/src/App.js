import React, {useState} from 'react';
import Button from '@mui/material/Button';

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
                <Button variant="outlined">Primary</Button>
            </form>
            
            <ul>
                {todos.map(todo => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App