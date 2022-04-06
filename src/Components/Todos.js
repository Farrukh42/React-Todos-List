import React from 'react'
import { Todo } from "./Todo";

export const Todos = (props) => {
  let myStyle = {
    miniHeight : "75vh",
    margin : "77px auto",
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos Lists</h3>
      {
        props.todos.length === 0 ? <> Nothing to display <hr/></>   :
        props.todos.map((todo)=>{
          return <Todo todo={todo} key={todo.srno} onDelete={props.onDelete}/>
       })
      }
    </div>
  )
}
