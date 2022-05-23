import React,{useState} from "react";

import styles from "./taskApp.module.css";
import  {Tasks}  from "./Tasks";

const TaskApp = () => {
const [value, setValue] = useState("")
const [todos, setTodos] = useState([])
const delet=(ev)=>{
  todos.filter(e=>(
    
    ev!=e.value
  ))
 
  }


const addvalue=(xyz)=>{
  
  setTodos([...todos,
  {
    id:1,
    value:xyz
  }])

}




  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
    <h1>TodoApp</h1>
    <h2>The number of 2 products out of three</h2>
       <input type="text" onChange={(e)=>{
setValue(e.target.value)
       }} />
       <button onClick={()=>{addvalue(value)
      setValue("")}}>Add</button>
      {/* Tasks */}
      <Tasks todos={todos} delet={delet}/>
    </div>
  );
};

export default TaskApp;
