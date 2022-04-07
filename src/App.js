import './App.css';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") ===null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

    //For Deleting the todos lists 
  function onDelete(todo) {
    console.log("This todo is deleted",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
        console.log("Im adding this todo", title, desc);
        let srno;
        if(todos.length === 0){
          srno = 1;
        }
        else{
          srno = todos[todos.length-1].srno + 1;
        }
         
        const myTodo ={
          srno : srno,
          title : title,
          desc : desc,
        }
        setTodos([...todos,myTodo]);
        console.log(myTodo);
        
  }
  
  const [todos , setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos])
  

  return (
    <>
    <Router>
    <Header title="MedSev" searchBar={false}/>
    <Switch>
          <Route exact path="/React-Todos-List" render={()=>{
            return (
              <>
                  <AddTodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}
export default App;
