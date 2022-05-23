import React from "react";
import styles from "./tasks.module.css";

const Tasks = ({todos,delet}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
       
    <p>{todos.map((e)=>{
    return(
      <p>
    {e.value}
    <button onClick={delet(e.value)}>Delete</button>
    </p>
    
      
    )
  })
    }
    </p>
     
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        
      </div>
    </>
  );
};

export default Tasks;
