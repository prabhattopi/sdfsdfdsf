import React,{useState} from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from 'uuid';



const AddTask = ({todos,addvalue}) => {
  const [value, setValue] = useState("")
  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input className={styles.lora} placeholder="AddTodo....." value={value} data-cy="add-task-input" type="text" onChange={(e)=>{
        setValue(e.target.value)
      }} />
      <button className={styles.lora1} disabled={!value} data-cy="add-task-button" onClick={()=>{
        addvalue(value)
        setValue("")
      }}><i className="fa-solid fa-plus"></i></button>
       
    </div>
   
  );
};

export default AddTask;
