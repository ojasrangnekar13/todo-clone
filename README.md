# TODO App

So today we are creating a todo app, seeing a youtube video of 'clever programmer'. 

Link -> https://www.youtube.com/watch?v=VqgTr-nd7Cg&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=9

## Steps for Making -

## 1) Create React Project

Go to the terminal and type -

    npx create-react-app name-of-app

## 2) Setup Firebase
## 3) Start running your React Project

Go to terminal type - 

    npm start

If it doesnt work check whether you have done properly or you can see the above tutorial.

## 4) Remove files from src folder

Delete all files from source folder except index.js

## 5) Index.js

In index.js delete the whole code and type the following - 

     import React from 'react';
     import ReactDOM from 'react-dom';

     const reactContent = document.getElementById('root')

     ReactDOM.render('sup', reactContent)

Later reload your react page, you will be able to see 'sup' on the webpage 

## 6) Create a new file App.js in src folder

Create a new file App.js in src folder and type - 

    import React from 'react';

    const App = () => {
   
    return (
    
        <h1>sup</h1>
        
    )
    
    }

    export default App

After this go to index.js and modify your code by typing this - 


    import React from 'react';
   
    import ReactDOM from 'react-dom';
   
    import App from './App.js'

    const reactContent = document.getElementById('root')

    ReactDOM.render(<App/>, reactContent)


Reload your webpage and you will see 'sup' in h1 form 

## 7) Update your App.js Code


    import React, {useState} from 'react';

    const App = () => {
    const [todos, setTodos] = useState(["Go to bath", "Go to code", "Go to see Naruto", "Go to study"])

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


       const addTodo = (event) => {
            setTodos([...todos, input])
       }

## 9) Doesnt Work by entering 

If you press enter after typing your todo it doesnt work, you need to press the TODO button to add the todo.

To improve this we can do the following code - 
For addTodo function -

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input])
    }
    
For input and button code - 

            <form>
                <input value = {input} onChange={event => setInput(event.target.value)}/>
                <button type = "submit" onClick={addTodo}>Add TODO</button>
            </form>
            
## 10) Create a new file Todo.js 

After creating the file type the following code - 

import React from 'react'

    function Todo(props) {
       return (
        <div>
            <li>{props.text}</li>
        </div>
    )
    }

    export default Todo
    
Then delete the following code from App.js - 

            <ul>
              {todos.map(todo => (
                 <li>{todo}</li>
               ))}
            </ul>

And replce it with the following code - 

            <ul>
              {todos.map(todo => (
                 <Todo text = {todo}/>
               ))}
            </ul>

## 11) Creating new file Todo.css and App.css

After creatig the file, type the following code in <b>Todo.js</b>

       import './Todo.css'
       
Type the following code in <b>App.js</b>

       import './App.css'
       
This code will import the both css files in their respective js files
Now type the following code in Todo.css 

      ul {
         padding-left: 400px;
      }

Type the following code in App.css

    input {
       margin-left: 700px;
       padding-left: 50px;
       padding-right: 50px;
    }

    h1 {
      text-align: center;
    }
    
Now see the change in your Todo App 

## 12) Connect your code to firebase database

Make a new file firebase.js nad type the following code - 

    import firebase from 'firebase';

    const firebaseApp = firebase.initialiseApp({
         apiKey: "apikey",
         authDomain: "todo-app-664c7.firebaseapp.com",
         projectId: "todo-app-664c7",
         storageBucket: "todo-app-664c7.appspot.com",
         messagingSenderId: "861448113760",
         appId: "appid",
         measurementId: "lol"
    })

    const db = firebaseApp.firestore()

    export {db}
