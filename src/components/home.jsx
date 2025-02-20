import React, { useState } from 'react';
import './home.css';

const Home = () => {

  const [todo,setTodo]=useState(['abey','leo']);
  const [newTodo, setNewTodo] = useState('');
  const [disable,setDisable] = useState(false);
  const addTodo = () => {
    if(newTodo.trim()==="")
    {
        alert('Please enter a todo item');
        return;
    }
    
  }
  const removeTodo = (index) =>{
    const updatedTodos = [...todo];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
  }
  const checkDone = (index) =>
  {
    const updatedTodos = [...todo];
    const containsDone = updatedTodos[index].endsWith(" - Done");
    if (updatedTodos[index] && typeof updatedTodos[index] === "string") {
        return updatedTodos[index].endsWith(" - Done");
    }
    
    return false;
  }
  const undoneTodo = (index) => {
    const updatedTodos = [...todo];
    console.log(updatedTodos[index]);
    updatedTodos[index] = updatedTodos[index].replace("- Done", " ");
    console.log(updatedTodos[index]);
    setTodo(updatedTodos);
  }
  const doneTodo = (index) =>
  {
    const updatedTodos = [...todo];
    updatedTodos[index] = updatedTodos[index] + " - Done";
    setTodo(updatedTodos);
  }
  return (
    <div className='App'>
        <div className='head'>
            <h2>TODO APP</h2>
        </div>
        <div className='input'>
            <input type="text" 
                value={newTodo} 
                onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={addTodo}>ADD</button>
        </div>
        <div className='List'>
        {
            todo.map((item, index) => {
                return (
                    <div className='items'>
                        <div key={index}>{item}</div>
                        <div>
                            <button onClick={() => removeTodo(index)}>Remove</button>
                            {checkDone(index) ?
                                <button onClick={()=>undoneTodo(index)} id='mdone'>Mark Incomplete</button> :
                                <button onClick={()=>doneTodo(index)} id='done'> Mark Done</button>
                            }
                        </div>
                    </div>
                )
                })
        }
        </div>
    </div>
  )
}

export default Home