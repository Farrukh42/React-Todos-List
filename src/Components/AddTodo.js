import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !desc){
            alert("Title or Description can not be empty!");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        } 
    }

    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}  id="title" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" placeholder="Description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">Submit</button>
            </form>
        </div>
    )
}
