import React,{useState} from "react";
import styles from "./task.module.css";
import "./Task.css"

import Counter from "../Counter/Counter";
const Task = ({todos,deleteValue,todoss,Handlestatus,halo,green}) => {
  const [con, setcon] = useState("")

 


  // const adddin=()=>{
  //   hallo.classList.toggle("active")

  // }
 
  const sot={
    outline:"none",
    border:"1px solid black",
    zIndex:"1",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
   
    color: "rgb(10, 244, 10)",
   
  

  }
  const lora5={
   
    width: "70%",
 
    height: "30px",
    padding: "10px",
    lineHeight: "50%",
    fontSize: "18px",
    textAlign: "left",
    marginLeft: "-15px"
  }
 
  
  return (
    <>
    {todos.map((e)=>{
      return (
        <>
         <li data-cy="task" className={styles.task}>
     <button onClick={()=>{{Handlestatus(e.id)}
      
      {green(e.id)}
   
     }} style={sot}><input type="checkbox" data-cy="task-checkbox" className="Input" /><i  className={con?"fa-solid fa-circle-check active":"fa-solid fa-circle-check"}></i></button>
      <div key={e.id} data-cy="task-text" className={e.done?"":styles.lorr} style={lora5} >
     
      {e.value}
      </div>
      {/* Counter here */}<Counter dota={todoss}/>
      <button data-cy="task-remove-button" className={styles.lora6} onClick={()=>{deleteValue(e.value)}}><i className="fa-solid fa-xmark"></i></button>
    </li>
        
        </>
      )
    })}
   
    </>
  );
};

export default Task;
