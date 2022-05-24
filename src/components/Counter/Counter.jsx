import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = ({dota}) => {
  // sample value to be replaced
const [count, setCount] = useState(1)

  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{setCount(count+1)}}><i className="fa-solid fa-plus"></i></button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"><i className="fa-solid fa-minus" onClick={()=>{
        if(count>1)setCount(count-1)}}></i></button>
    </div>
  );
};

export default Counter;
