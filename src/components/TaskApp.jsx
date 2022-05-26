
import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import styles from "./taskApp.module.css";
import  Tasks  from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import Task from "./Task/Task";
import Counter from "./Counter/Counter";
import AddTask from "./AddTask/AddTask";

const TaskApp = () => {
 
  

  const [todos, setTodos] = useState([])
  const [cont, setcont] = useState(todos.length)

 
  const addvalue=(value)=>{
       let x=[...todos,{
      id:uuidv4(),
      value:value,
      done:true


    }]
    setTodos(x)
    setcont(x.length)
  }
  const Handlegre=(id)=>{
  let newarray=todos.filter((e,i) =>
    
    
    
    e.id !== id
    
   
    ); 
   setcont(todos.length-newarray.length)
  console.log(id)
   
  }
  const Handlestatus = (id) => {
    let newarray = todos.map((e) =>
      e.id === id ? { ...e, done: !e.done } : e
    );
    setTodos(newarray);
   
  };
  
  const deleteValue=(xyz)=>{
   setTodos(todos.filter((e)=>e.value!=xyz)
   )
  }


  
  // const sto={
    
  //   width:"20px",
  //   height:"20px",
  //   border:"1px solid black",
  //   borderRadius:"50%",
  // }

  // NOTE: do not delete `data-cy` key value pair
  // const tra=document.querySelectorAll("input")

  // if(tra.checked==true){
  //   callbak(todos.done)
  // }
  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
     <TaskHeader todoss={todos.length} co={cont} />
     <AddTask todos={todos} addvalue={addvalue}/>
     <Tasks  todos={todos} deleteValue={deleteValue} todoss={todos.length} Handlestatus={Handlestatus} green={Handlegre} />

    </div>
  );
};

export default TaskApp;
