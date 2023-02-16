import { useEffect, useState } from "react";

interface Props {
  Value : number;
}



export const DisplayContainer = (props:Props) =>{

  const [valueDisplay,setValueDisplay]=useState<string|number>()
  const [setclasse,setSetClasse]=useState("")

  useEffect(()=>{
    if(props.Value%3 === 0 && props.Value !==0){
      if(props.Value%5 === 0){
        setValueDisplay("FizzBuzz")
        setSetClasse("FizzBuzz")
      }
      else{
        setValueDisplay("Fizz")
        setSetClasse("Fizz")
      }
    }
    else if(props.Value%5 === 0 &&props.Value !==0){
      setValueDisplay("Buzz")
      setSetClasse("Buzz")
    }
    else{
      setValueDisplay(props.Value)
      setSetClasse("other")
    }
  },[props.Value])

  return(
    <div className="displayContainer">
      <p className={setclasse}>
        {valueDisplay}
      </p>
    </div>
  )
}