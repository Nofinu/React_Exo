import { useEffect, useState } from "react"

export const CounterComponent = (props)=>{

  const [counter,setCounter]=useState(props.counter.currentValue)
  const startValue = props.counter.inputValue

  useEffect(()=>{
    let monintervale = setInterval (() => {
      console.log(startValue)
      setCounter(lastState=>lastState+1)
    },1000);

    return ()=>{
      if(monintervale){
        clearInterval(monintervale)
        monintervale=undefined
      }
      
    }
  },[startValue])


  const onclickBtn =()=>{
    props.suprCounter(props.counter.id)
  }

  return(
    <div className="counterDisplay">
      <div>{counter}</div>
      <button onClick={onclickBtn}>Delete</button>
    </div>
  )
}