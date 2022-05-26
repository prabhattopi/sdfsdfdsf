import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
const Tasks = ({todos,deleteValue,todoss,callbak,Handlestatus,green}) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
       
   
    
      
    <Task todos={todos} deleteValue={deleteValue} todoss={todoss} callbak={callbak} green={green} Handlestatus={Handlestatus}/>
    
    
     
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        
      </div>
    </>
  );
};

export default Tasks;
