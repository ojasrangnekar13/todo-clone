# TODO App

So today we are creating a todo app, seeing a youtube video of 'clever programmer'. 

Link -> https://www.youtube.com/watch?v=VqgTr-nd7Cg&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=9

## Steps for Making -

## 1) Create React Project

Go to the terminal and type -

   <b>npx create-react-app name-of-app</b>

## 2) Setup Firebase
## 3) Start running your React Project

Go to terminal type - 

<b>npm start</b>

If it doesnt work check whether you have done properly or you can see the above tutorial.

## 4) Remove files from src folder

Delete all files from source folder except index.js

## 5) Index.js

In index.js delete the whole code and type the following - 

<b>import React from 'react';
import ReactDOM from 'react-dom';

const reactContent = document.getElementById('root')

ReactDOM.render('sup', reactContent)</b>

Later reload your react page, you will be able to see 'sup' on the webpage 

## 6) Create a new file App.js in src folder

Create a new file App.js in src folder and type - 

<b>import React from 'react';

const App = () => {
   
    return (
    
        <h1>sup</h1>
        
    )
    
}

export default App</b>

After this go to index.js and modify your code by typing this - 


<b>import React from 'react';
   
import ReactDOM from 'react-dom';
   
import App from './App.js'

const reactContent = document.getElementById('root')

ReactDOM.render(<App/>, reactContent)</b>


Reload your webpage and you will see 'sup' in h1 form 

## 7) Update your App.js Code


<b>import React, {useState} from 'react';

const App = () => {
    const [todos, setTodos] = useState(["Go to bath", "Go to code", "Go to see Naruto", "Go to study"])</b>

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

<b>export default App </b>

If you dont understand the code you can see the youtube video 

## 8) addTodo Function 

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

The following code has been added 


<b>    const addTodo = (event) => {
            setTodos([...todos, input])
        }</b>
