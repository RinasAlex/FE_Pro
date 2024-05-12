import { useState } from "react"
import CustomButton from "./UI/CustomButton"

function Counter() {
    const [counter, setCounter] = useState(0);
  
    function descrease() {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  
    function increase() {
      setCounter(counter + 1);
    }
  
    return (
      <article>
        <h3 style={{ textAlign: "center", fontSize: "2em" }}>Counter</h3>
        <CustomButton text="decrease" onHandleClick={descrease} size="M" />
        <strong>{counter}</strong>
        <CustomButton text="increase" onHandleClick={increase} size="M" />
      </article>
    ); 
  }
  
  export default Counter;