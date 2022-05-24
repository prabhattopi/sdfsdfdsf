import React,{useState} from "react";
import styles from "./task.module.css";
import "./Task.css"

import Counter from "../Counter/Counter";
const Task = ({todos,deleteValue,count}) => {
  const [count, setcounti] = useState(0)
  // const sto={
    
  //   width:"20px",
  //   height:"20px",
  //   border:"1px solid black",
  //   borderRadius:"50%",
  // }

  // NOTE: do not delete `data-cy` key value pair
  let cou=0
  let dako=document.getElementById("order")
  if(dako.checked==true){
    cou++
    setcounti(todos.length-cou)
  }

  return (
    <>
    {todos.map((e)=>{
      return (
        <>
         <li data-cy="task" className={styles.task}>
      <input type="checkbox"  data-cy="task-checkbox" className="Input" id="order" />
      <div key={e.id} data-cy="task-text" className={styles.lora5}>
      {e.value}
      </div>
      {/* Counter here */}<Counter dota={count}/>
      <button data-cy="task-remove-button" className={styles.lora6} onClick={()=>{deleteValue(e.value)}}><i className="fa-solid fa-xmark"></i></button>
    </li>
        
        </>
      )
    })}
   
    </>
  );
};

export default Task;
