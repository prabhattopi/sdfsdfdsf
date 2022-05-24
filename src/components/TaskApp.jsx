
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
  const addvalue=(value)=>{
    setTodos([...todos,{
      id:uuidv4(),
      value:value


    }])
  }
  const deleteValue=(xyz)=>{
   setTodos(todos.filter((e)=>e.value!=xyz)
   )
  }





  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
     <TaskHeader todoss={todos.length}/>
     <AddTask todos={todos} addvalue={addvalue}/>
     <Tasks  todos={todos} deleteValue={deleteValue} todoss={todos.length}/>

    </div>
  );
};

export default TaskApp;
