import React, {useState} from 'react';

const App = () => {
    const [todos, setTodos] = useState(["Go to bath", "Go to code", "Go to see Naruto"])

    return (
        <div className="App">
            <h1>TODO App</h1>

            <input />
            <button>Add TODO</button>

            <ul>
                {todos.map(todo => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App