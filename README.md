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
    
        type sup in h1 form
        
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

